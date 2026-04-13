const cds = require('@sap/cds')

cds.on('served', async () => {
  const { 'cds.xt.SaasProvisioningService': ps, 'cds.xt.DeploymentService': ds } = cds.services

  console.log('[mtx] SaasProvisioningService available:', !!ps)
  console.log('[mtx] DeploymentService available:', !!ds)
  console.log('[mtx] CDS_MULTITENANCY_APPUI_URL:', process.env.CDS_MULTITENANCY_APPUI_URL)
  console.log('[mtx] CDS_MULTITENANCY_APPUI_TENANTSEPARATOR:', process.env.CDS_MULTITENANCY_APPUI_TENANTSEPARATOR)

  const buildTenantUrl = (req) => {
    const appUrl = process.env.CDS_MULTITENANCY_APPUI_URL
    const separator = process.env.CDS_MULTITENANCY_APPUI_TENANTSEPARATOR || '-'
    const subdomain = req.data.subscribedSubdomain || req.data.metadata?.subscribedSubdomain

    console.log('[mtx] buildTenantUrl - appUrl:', appUrl, 'subdomain:', subdomain, 'separator:', separator)

    if (appUrl && subdomain) {
      const url = new URL(appUrl)
      const tenantUrl = `${url.protocol}//${subdomain}${separator}${url.host}`
      console.log('[mtx] Returning tenant URL:', tenantUrl)
      return tenantUrl
    }
    console.log('[mtx] No appUrl or subdomain available')
    return undefined
  }

  // SaasProvisioningService.after('subscribe') — this is the hook cds-mtxs v3
  // uses to populate subscriptionAppUrl in the SaaS Registry callback
  if (ps) {
    ps.after('subscribe', (result, req) => {
      console.log('[mtx] SaasProvisioningService subscribe event - tenant:', req.data.tenant)
      return buildTenantUrl(req) ?? result
    })
    console.log('[mtx] Custom subscribe handler registered on SaasProvisioningService')
  }

  // DeploymentService.after('subscribe') — belt-and-suspenders: also hook here
  // in case the cds-mtxs version routes the URL through DeploymentService
  if (ds) {
    ds.after('subscribe', (result, req) => {
      console.log('[mtx] DeploymentService subscribe event - tenant:', req.data.tenant)
      return buildTenantUrl(req) ?? result
    })
    console.log('[mtx] Custom subscribe handler registered on DeploymentService')
  }
})

module.exports = cds.server
