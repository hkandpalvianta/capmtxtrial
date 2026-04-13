// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../../_')
// Tasks
module.exports.Task = createEntityProxy(['io.capmtxtrial', 'Tasks'], { target: { is_singular: true } })
module.exports.Tasks = createEntityProxy(['io.capmtxtrial', 'Tasks'], { target: { is_singular: false }})
// events
// actions
// enums
module.exports.TaskStatus ??= { Open: "Open", InProgress: "InProgress", Done: "Done", Cancelled: "Cancelled" }
module.exports.TaskPriority ??= { Low: "Low", Medium: "Medium", High: "High" }
