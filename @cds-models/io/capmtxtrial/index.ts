// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../..';
import * as __ from './../../_';

// enum
export const TaskStatus = {
  Open: "Open",
  InProgress: "InProgress",
  Done: "Done",
  Cancelled: "Cancelled",
} as const;
export type TaskStatus = "Open" | "InProgress" | "Done" | "Cancelled"

// enum
export const TaskPriority = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
} as const;
export type TaskPriority = "Low" | "Medium" | "High"

export function _TaskAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Task extends _._cuidAspect(_._managedAspect(Base)) {
    declare title?: string | null
    declare description?: string | null
    declare status?: TaskStatus | null
    declare priority?: TaskPriority | null
    declare dueDate?: __.CdsDate | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Task> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Task>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
/**
* Tasks entity — core data model for the multi-tenant task manager.
* Each tenant gets an isolated HANA HDI container via cds-mtxs.
*/
export class Task extends _TaskAspect(__.Entity) {}
Object.defineProperty(Task, 'name', { value: 'io.capmtxtrial.Tasks' })
Object.defineProperty(Task, 'is_singular', { value: true })
/**
* Tasks entity — core data model for the multi-tenant task manager.
* Each tenant gets an isolated HANA HDI container via cds-mtxs.
*/
export class Tasks extends Array<Task> {$count?: number}
Object.defineProperty(Tasks, 'name', { value: 'io.capmtxtrial.Tasks' })
