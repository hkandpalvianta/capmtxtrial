// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../../../_')
// service
const SaasProvisioningService = { name: 'cds.xt.SaasProvisioningService' }
module.exports = SaasProvisioningService
module.exports.SaasProvisioningService = SaasProvisioningService
// tenant
module.exports.tenant = createEntityProxy(['cds.xt.SaasProvisioningService', 'tenant'], { target: { is_singular: true } })
module.exports.tenant_ = createEntityProxy(['cds.xt.SaasProvisioningService', 'tenant'], { target: { is_singular: false }})
// UpgradeOptions
module.exports.UpgradeOptions = createEntityProxy(['cds.xt.SaasProvisioningService', 'UpgradeOptions'], { target: { is_singular: true } })
// UpgradeResults
module.exports.UpgradeResults = createEntityProxy(['cds.xt.SaasProvisioningService', 'UpgradeResults'], { target: { is_singular: true } })
// events
// actions
module.exports.dependencies = 'dependencies'
module.exports.upgrade = 'upgrade'
module.exports.getAppUrl = 'getAppUrl'
// enums
