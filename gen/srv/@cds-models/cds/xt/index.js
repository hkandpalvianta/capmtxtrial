// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../../_')
// Tenants
module.exports.Tenant = createEntityProxy(['cds.xt', 'Tenants'], { target: { is_singular: true } })
module.exports.Tenants = createEntityProxy(['cds.xt', 'Tenants'], { target: { is_singular: false }})
// Jobs
module.exports.Job = createEntityProxy(['cds.xt', 'Jobs'], { target: { is_singular: true } })
module.exports.Jobs = createEntityProxy(['cds.xt', 'Jobs'], { target: { is_singular: false }})
// Tasks
module.exports.Task = createEntityProxy(['cds.xt', 'Tasks'], { target: { is_singular: true } })
module.exports.Tasks = createEntityProxy(['cds.xt', 'Tasks'], { target: { is_singular: false }})
// events
// actions
// enums
module.exports.Status ??= { QUEUED: "QUEUED", RUNNING: "RUNNING", FINISHED: "FINISHED", CANCELLED: "CANCELLED", TIMEOUT: "TIMEOUT", FAILED: "FAILED" }
