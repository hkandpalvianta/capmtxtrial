"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cds_1 = __importDefault(require("@sap/cds"));
class TaskService extends cds_1.default.ApplicationService {
    async init() {
        const { Tasks } = this.entities;
        // Set createdBy from JWT on CREATE
        this.before('CREATE', Tasks, (req) => {
            req.data.createdBy = req.user?.id ?? 'anonymous';
        });
        // Prevent editing tasks that are already Done or Cancelled
        this.before(['UPDATE', 'DELETE'], Tasks, async (req) => {
            const id = req.data?.ID ?? req.params?.[0]?.ID;
            const task = await SELECT.one.from(Tasks, id);
            if (!task)
                return;
            if (['Done', 'Cancelled'].includes(task.status)) {
                req.reject(409, `Task "${task.title}" is ${task.status} and cannot be modified.`);
            }
        });
        await super.init();
    }
}
exports.default = TaskService;
//# sourceMappingURL=task-service.js.map