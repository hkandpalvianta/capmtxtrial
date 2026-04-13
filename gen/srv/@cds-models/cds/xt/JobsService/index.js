// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../../../_')
// service
const JobsService = { name: 'cds.xt.JobsService' }
module.exports = JobsService
module.exports.JobsService = JobsService
// Set
module.exports.Set = createEntityProxy(['cds.xt.JobsService', 'Set'], { target: { is_singular: true } })
// Jobs
module.exports.Job = createEntityProxy(['cds.xt.JobsService', 'Jobs'], { target: { is_singular: true } })
module.exports.Jobs = createEntityProxy(['cds.xt.JobsService', 'Jobs'], { target: { is_singular: false }})
// Tasks
module.exports.Task = createEntityProxy(['cds.xt.JobsService', 'Tasks'], { target: { is_singular: true } })
module.exports.Tasks = createEntityProxy(['cds.xt.JobsService', 'Tasks'], { target: { is_singular: false }})
// events
// actions
module.exports.enqueue = 'enqueue'
module.exports.pollJob = 'pollJob'
module.exports.pollTask = 'pollTask'
module.exports.config = 'config'
// enums
