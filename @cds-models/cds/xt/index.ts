// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_';

// enum
export const Status = {
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  FINISHED: "FINISHED",
  CANCELLED: "CANCELLED",
  TIMEOUT: "TIMEOUT",
  FAILED: "FAILED",
} as const;
export type Status = "QUEUED" | "RUNNING" | "FINISHED" | "CANCELLED" | "TIMEOUT" | "FAILED"

export function _TenantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Tenant extends Base {
    declare ID?: __.Key<string>
    declare metadata?: string | null
    declare createdAt?: __.CdsTimestamp | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare schema?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Tenant>;
    declare static readonly elements: __.ElementsOf<Tenant>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Tenant extends _TenantAspect(__.Entity) {}
Object.defineProperty(Tenant, 'name', { value: 'cds.xt.Tenants' })
Object.defineProperty(Tenant, 'is_singular', { value: true })
export class Tenants extends Array<Tenant> {$count?: number}
Object.defineProperty(Tenants, 'name', { value: 'cds.xt.Tenants' })

export function _JobAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Job extends Base {
    declare ID?: __.Key<string>
    declare status?: Status | null
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
Object.defineProperty(Job, 'name', { value: 'cds.xt.Jobs' })
Object.defineProperty(Job, 'is_singular', { value: true })
export class Jobs extends Array<Job> {$count?: number}
Object.defineProperty(Jobs, 'name', { value: 'cds.xt.Jobs' })

export function _TaskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Task extends Base {
    declare job?: __.Key<__.Association.to<Job>>
    declare job_ID?: __.Key<string>
    declare ID?: __.Key<string>
    declare tenant?: string | null
    declare service?: string | null
    declare op?: string | null
    declare error?: string | null
    declare status?: Status | null
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
Object.defineProperty(Task, 'name', { value: 'cds.xt.Tasks' })
Object.defineProperty(Task, 'is_singular', { value: true })
export class Tasks extends Array<Task> {$count?: number}
Object.defineProperty(Tasks, 'name', { value: 'cds.xt.Tasks' })
