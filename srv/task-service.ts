import cds from '@sap/cds';

export default class TaskService extends cds.ApplicationService {
  async init() {
    const { Tasks } = this.entities;

    // Set createdBy from JWT on CREATE
    this.before('CREATE', Tasks, (req) => {
      req.data.createdBy = req.user?.id ?? 'anonymous';
    });

    // Prevent editing tasks that are already Done or Cancelled
    this.before(['UPDATE', 'DELETE'], Tasks, async (req) => {
      const id = req.data?.ID ?? (req.params?.[0] as Record<string, string>)?.ID;
      const task = await SELECT.one.from(Tasks, id);
      if (!task) return;
      if (['Done', 'Cancelled'].includes(task.status)) {
        req.reject(409, 'TASK_LOCKED', undefined, [task.title, task.status]);
      }
    });

    await super.init();
  }
}
