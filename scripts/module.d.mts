import * as _nuxt_schema from '@nuxt/schema';

interface IApiSetOption {
    method: "put" | "post";
    delay: number;
    maxWait: number;
}
interface IServerApi {
    driver: string;
    fallback?: string;
    session?: boolean;
}
interface IProtocolOption {
    type: "local" | "session" | "state" | "fetch" | "https" | "path" | "query" | "hash" | "params" | "pageMeta" | "seoMeta" | "head" | "helper";
    set?: boolean | IApiSetOption;
    prefix?: string;
    schema?: any;
    transform?: string;
    default?: any;
    lazy?: boolean;
    server?: boolean;
    immediate?: boolean;
}
interface ModuleOptions {
    scss?: {
        disabled?: boolean;
    };
    bootstrap?: {
        prefix?: string;
    };
    html?: {
        prefix?: string;
    };
    icon?: {
        prefix?: string;
    };
    extend?: {
        prefix?: string;
    };
    unocss?: {
        prefix?: string;
        disabled: false;
    };
    dynamicRoute?: {
        prefix?: string;
        defaults?: any;
    };
    combadge: {
        prefix?: string;
        protocol: Record<string, IProtocolOption>;
    };
    serverStorage: {
        api: Record<string, IServerApi>;
        path?: string;
        password?: string;
    };
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type IApiSetOption, type IProtocolOption, type IServerApi, type ModuleOptions, _default as default };
