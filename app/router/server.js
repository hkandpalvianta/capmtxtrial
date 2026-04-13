'use strict'

// Force html5-apps-repo-rt to use the provider token (not subscriber).
// The service binding sets saasregistryenabled=true by default, which causes
// the approuter to exchange the client_credentials token to the subscriber's
// zone. But the HTML5 apps are deployed in the provider's repo, so the
// subscriber token gets 503. Setting it to false keeps the provider token.
if (process.env.VCAP_SERVICES) {
  try {
    const vcap = JSON.parse(process.env.VCAP_SERVICES)
    let patched = false
    for (const key of Object.keys(vcap)) {
      for (const svc of vcap[key]) {
        if (
          svc.label === 'html5-apps-repo' &&
          svc.credentials &&
          svc.credentials.saasregistryenabled
        ) {
          svc.credentials.saasregistryenabled = false
          patched = true
        }
      }
    }
    if (patched) {
      process.env.VCAP_SERVICES = JSON.stringify(vcap)
      console.log(
        '[approuter] Patched html5-apps-repo: saasregistryenabled=false (use provider token)'
      )
    }
  } catch (e) {
    console.log('[approuter] Failed to patch VCAP_SERVICES:', e.message)
  }
}

const approuter = require('@sap/approuter')
const xsenv = require('@sap/xsenv')
const https = require('https')
const querystring = require('querystring')

const ar = approuter()

// Workaround: html5-apps-repo-rt's /apps/ Application Info API returns 503
// (backend behind openresty is down), but direct file serving works.
// Intercept ui5AppInfo.json requests, fetch manifest.json from the repo via
// direct path, and construct the ui5AppInfo response the FLP shell needs.
if (process.env.DISABLE_CUSTOM_UI5APPINFO !== 'true') {
  ar.first.use(function ui5AppInfoProxy(req, res, next) {
    const match = req.url && req.url.match(/\/apps\/([^/]+)\/ui5AppInfo\.json/)
    if (!match) return next()

    const appId = match[1]
    const repoName = appId.replace(/\./g, '')
    const manifestPath = '/' + repoName + '/manifest.json'

    console.log(
      '[ui5AppInfo-proxy] Intercepting ui5AppInfo.json for:',
      appId,
      '→ fetching',
      manifestPath
    )

    const html5Creds = xsenv.getServices({
      html5rt: { label: 'html5-apps-repo', plan: 'app-runtime' },
    }).html5rt
    const uaaCreds = html5Creds.uaa
    const html5Uri = html5Creds.uri

    const auth = Buffer.from(uaaCreds.clientid + ':' + uaaCreds.clientsecret).toString('base64')
    const tokenData = querystring.stringify({ grant_type: 'client_credentials' })

    const tokenReq = https.request(
      uaaCreds.url + '/oauth/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + auth,
        },
      },
      tokenRes => {
        let tokenBody = ''
        tokenRes.on('data', d => (tokenBody += d))
        tokenRes.on('end', () => {
          let token
          try {
            token = JSON.parse(tokenBody).access_token
          } catch (e) {
            console.log('[ui5AppInfo-proxy] Failed to get token:', e.message)
            return next()
          }

          https
            .get(
              html5Uri + manifestPath,
              {
                headers: { Authorization: 'Bearer ' + token },
              },
              manifestRes => {
                let manifestBody = ''
                manifestRes.on('data', d => (manifestBody += d))
                manifestRes.on('end', () => {
                  if (manifestRes.statusCode !== 200) {
                    console.log(
                      '[ui5AppInfo-proxy] manifest.json fetch failed:',
                      manifestRes.statusCode
                    )
                    return next()
                  }

                  let manifest
                  try {
                    manifest = JSON.parse(manifestBody)
                  } catch (e) {
                    console.log('[ui5AppInfo-proxy] Failed to parse manifest:', e.message)
                    return next()
                  }

                  const dataSources = manifest['sap.app'] && manifest['sap.app'].dataSources
                  if (dataSources) {
                    for (const [key, ds] of Object.entries(dataSources)) {
                      if (ds.uri && !ds.uri.startsWith('/') && !ds.uri.startsWith('http')) {
                        console.log(
                          '[ui5AppInfo-proxy] Rewriting dataSource URI:',
                          key,
                          ds.uri,
                          '→',
                          '/' + ds.uri
                        )
                        ds.uri = '/' + ds.uri
                      }
                    }
                  }

                  const componentName = (manifest['sap.app'] && manifest['sap.app'].id) || appId
                  const ui5AppInfo = {
                    name: componentName,
                    url: '/' + repoName,
                    manifest: manifest,
                    asyncHints: {
                      components: [{ name: componentName }],
                    },
                  }

                  const body = JSON.stringify(ui5AppInfo)
                  console.log('[ui5AppInfo-proxy] Serving synthetic ui5AppInfo.json for:', appId)
                  res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(body),
                    'Cache-Control': 'public, max-age=300',
                  })
                  res.end(body)
                })
              }
            )
            .on('error', e => {
              console.log('[ui5AppInfo-proxy] Fetch error:', e.message)
              next()
            })
        })
      }
    )
    tokenReq.on('error', e => {
      console.log('[ui5AppInfo-proxy] Token error:', e.message)
      next()
    })
    tokenReq.write(tokenData)
    tokenReq.end()
  })
}

ar.start()
