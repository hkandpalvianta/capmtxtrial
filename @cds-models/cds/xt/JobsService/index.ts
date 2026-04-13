// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_';
import * as _cds_xt from './..';

export default class {
  declare static readonly enqueue: typeof enqueue;
  declare static readonly pollJob: typeof pollJob;
  declare static readonly pollTask: typeof pollTask;
  declare static readonly config: typeof config;
}

export function _SetAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Set extends Base {
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<Set>;
    declare static readonly elements: __.ElementsOf<Set>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Set extends _SetAspect(__.Entity) {}
Object.defineProperty(Set, 'name', { value: 'cds.xt.JobsService.Set' })
Object.defineProperty(Set, 'is_singular', { value: true })

export function _JobAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Job extends Base {
    declare ID?: __.Key<string>
    declare status?: _cds_xt.Status | null
    declare service?: string | null
    declare op?: string | null
    declare error?: string | null
    declare result?: string | null
    declare createdAt?: __.CdsTimestamp | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare tasks?: __.Composition.of.many<Tasks>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Job>;
    declare static readonly elements: __.ElementsOf<Job>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Job extends _JobAspect(__.Entity) {}
Object.defineProperty(Job, 'name', { value: 'cds.xt.JobsService.Jobs' })
Object.defineProperty(Job, 'is_singular', { value: true })
export class Jobs extends Array<Job> {$count?: number}
Object.defineProperty(Jobs, 'name', { value: 'cds.xt.JobsService.Jobs' })

export function _TaskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Task extends Base {
    declare job?: __.Key<__.Association.to<Job>>
    declare job_ID?: __.Key<string>
    declare ID?: __.Key<string>
    declare tenant?: string | null
    declare service?: string | null
    declare op?: string | null
    declare error?: string | null
    declare status?: _cds_xt.Status | null
    declare createdAt?: __.CdsTimestamp | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare database?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Task>;
    declare static readonly elements: __.ElementsOf<Task>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Task extends _TaskAspect(__.Entity) {}
Object.defineProperty(Task, 'name', { value: 'cds.xt.JobsService.Tasks' })
Object.defineProperty(Task, 'is_singular', { value: true })
export class Tasks extends Array<Task> {$count?: number}
Object.defineProperty(Tasks, 'name', { value: 'cds.xt.JobsService.Tasks' })


export declare const enqueue:  {
  // positional
  (service: string | null, op: string | null, clusters: Array<Set>, args: Array< {
}>, callback:  {
} | null): globalThis.Promise<Job | null> | Job | null
  // named
  ({service, op, clusters, args, callback}: {service?: string | null, op?: string | null, clusters?: Array<Set>, args?: Array< {
}>, callback?:  {
} | null}): globalThis.Promise<Job | null> | Job | null
  // metadata (do not use)
  __parameters: {service?: string | null, op?: string | null, clusters?: Array<Set>, args?: Array< {
}>, callback?:  {
} | null}, __returns: globalThis.Promise<Job | null> | Job | null, __self: never
  kind: 'action'
}

export declare const pollJob:  {
  // positional
  (ID: string | null): globalThis.Promise< {
} | null> |  {
} | null
  // named
  ({ID}: {ID?: string | null}): globalThis.Promise< {
} | null> |  {
} | null
  // metadata (do not use)
  __parameters: {ID?: string | null}, __returns: globalThis.Promise< {
} | null> |  {
} | null, __self: never
  kind: 'function'
}

export declare const pollTask:  {
  // positional
  (ID: string | null): globalThis.Promise< {
} | null> |  {
} | null
  // named
  ({ID}: {ID?: string | null}): globalThis.Promise< {
} | null> |  {
} | null
  // metadata (do not use)
  __parameters: {ID?: string | null}, __returns: globalThis.Promise< {
} | null> |  {
} | null, __self: never
  kind: 'function'
}

export declare const config:  {
  // positional
  (): globalThis.Promise< {
} | null> |  {
} | null
  // named
  ({}: globalThis.Record<never, never>): globalThis.Promise< {
} | null> |  {
} | null
  // metadata (do not use)
  __parameters: globalThis.Record<never, never>, __returns: globalThis.Promise< {
} | null> |  {
} | null, __self: never
  kind: 'function'
}