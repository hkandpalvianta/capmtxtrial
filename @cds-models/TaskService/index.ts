// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as _io_capmtxtrial from './../io/capmtxtrial';
import * as __ from './../_';

/**
* TaskService — exposed at /task
* Service-level auth only; RBAC can be re-added once multitenancy is validated.
*/
export default class {
}

export function _TaskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Task extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: _.User | null
    declare title?: string | null
    declare description?: string | null
    declare status?: _io_capmtxtrial.TaskStatus | null
    declare priority?: _io_capmtxtrial.TaskPriority | null
    declare dueDate?: __.CdsDate | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Task>;
    declare static readonly elements: __.ElementsOf<Task>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
/**
* Tasks entity — core data model for the multi-tenant task manager.
* Each tenant gets an isolated HANA HDI container via cds-mtxs.
*/
export class Task extends _TaskAspect(__.Entity) {}
Object.defineProperty(Task, 'name', { value: 'TaskService.Tasks' })
Object.defineProperty(Task, 'is_singular', { value: true })
/**
* Tasks entity — core data model for the multi-tenant task manager.
* Each tenant gets an isolated HANA HDI container via cds-mtxs.
*/
export class Tasks extends Array<Task> {$count?: number}
Object.defineProperty(Tasks, 'name', { value: 'TaskService.Tasks' })
