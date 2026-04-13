// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../_')
// service
const TaskService = { name: 'TaskService' }
module.exports = TaskService
module.exports.TaskService = TaskService
// Tasks
module.exports.Task = createEntityProxy(['TaskService', 'Tasks'], { target: { is_singular: true } })
module.exports.Tasks = createEntityProxy(['TaskService', 'Tasks'], { target: { is_singular: false }})
// events
// actions
// enums
