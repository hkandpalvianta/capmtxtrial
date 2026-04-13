// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_';

export default class {
  declare static readonly dependencies: typeof dependencies;
  declare static readonly upgrade: typeof upgrade;
  declare static readonly getAppUrl: typeof getAppUrl;
}

export function _tenantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class tenant extends Base {
    declare subscribedTenantId?: __.Key<string>
    declare subscribedSubaccountId?: string | null
    declare subscribedSubdomain?: string | null
    declare subscriptionAppName?: string | null
    declare eventType?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<tenant>;
    declare static readonly elements: __.ElementsOf<tenant>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class tenant extends _tenantAspect(__.Entity) {}
Object.defineProperty(tenant, 'name', { value: 'cds.xt.SaasProvisioningService.tenant' })
Object.defineProperty(tenant, 'is_singular', { value: true })
export class tenant_ extends Array<tenant> {$count?: number}
Object.defineProperty(tenant_, 'name', { value: 'cds.xt.SaasProvisioningService.tenant' })

export function _UpgradeOptionsAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class UpgradeOptions extends Base {
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<UpgradeOptions>;
    declare static readonly elements: __.ElementsOf<UpgradeOptions>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class UpgradeOptions extends _UpgradeOptionsAspect(__.Entity) {}
Object.defineProperty(UpgradeOptions, 'name', { value: 'cds.xt.SaasProvisioningService.UpgradeOptions' })
Object.defineProperty(UpgradeOptions, 'is_singular', { value: true })

export function _UpgradeResultsAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class UpgradeResults extends Base {
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<UpgradeResults>;
    declare static readonly elements: __.ElementsOf<UpgradeResults>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class UpgradeResults extends _UpgradeResultsAspect(__.Entity) {}
Object.defineProperty(UpgradeResults, 'name', { value: 'cds.xt.SaasProvisioningService.UpgradeResults' })
Object.defineProperty(UpgradeResults, 'is_singular', { value: true })


export declare const dependencies:  {
  // positional
  (): globalThis.Promise<Array< {
  xsappname?: string | null,
}>> | Array< {
  xsappname?: string | null,
}>
  // named
  ({}: globalThis.Record<never, never>): globalThis.Promise<Array< {
  xsappname?: string | null,
}>> | Array< {
  xsappname?: string | null,
}>
  // metadata (do not use)
  __parameters: globalThis.Record<never, never>, __returns: globalThis.Promise<Array< {
  xsappname?: string | null,
}>> | Array< {
  xsappname?: string | null,
}>, __self: never
  kind: 'function'
}

export declare const upgrade:  {
  // positional
  (tenants: Array<string>, options: UpgradeOptions | null): globalThis.Promise<UpgradeResults | null> | UpgradeResults | null
  // named
  ({tenants, options}: {tenants?: Array<string>, options?: UpgradeOptions | null}): globalThis.Promise<UpgradeResults | null> | UpgradeResults | null
  // metadata (do not use)
  __parameters: {tenants?: Array<string>, options?: UpgradeOptions | null}, __returns: globalThis.Promise<UpgradeResults | null> | UpgradeResults | null, __self: never
  kind: 'action'
}

export declare const getAppUrl:  {
  // positional
  (subscriptionPayload:  {
} | null, subscriptionHeaders:  {
} | null): globalThis.Promise<string | null> | string | null
  // named
  ({subscriptionPayload, subscriptionHeaders}: {subscriptionPayload?:  {
} | null, subscriptionHeaders?:  {
} | null}): globalThis.Promise<string | null> | string | null
  // metadata (do not use)
  __parameters: {subscriptionPayload?:  {
} | null, subscriptionHeaders?:  {
} | null}, __returns: globalThis.Promise<string | null> | string | null, __self: never
  kind: 'function'
}