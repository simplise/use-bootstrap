import * as _nuxt_schema from '@nuxt/schema';

interface IProtocolSyncOption {
    method: 'put' | 'post';
    delay: number;
    maxWait: number;
}
interface IIntegrationProtocolOption {
    type: 'local' | 'session' | 'state' | 'fetch' | 'path' | 'query' | 'hash' | 'params' | 'route' | 'seoMeta' | 'helper' | 'appConfig' | 'domAttr';
    sync?: IProtocolSyncOption;
    prefix?: string;
    validate?: IIntegraionValidationOption;
    default?: any;
    lazy?: boolean;
    server?: boolean;
    immediate?: boolean;
    interval?: number;
}
interface IIntegraionValidationOption {
    delay?: number;
    draft?: '4' | '7' | '2019-09' | '2020-12';
    shortCircuit: boolean;
}
interface ModuleOptions {
    scss?: boolean;
    bootstrap?: {
        prefix?: string;
        presets?: Record<string, Array<string>>;
    };
    html?: {
        prefix?: string;
    };
    unocss?: {
        prefix?: string;
    };
    icon?: {
        prefix?: string;
    };
    extend?: {
        prefix?: string;
    };
    image?: boolean;
    fonts?: boolean;
    sitemap?: boolean;
    robots?: boolean;
    shiki?: boolean;
    leaflet?: boolean;
    mdc?: boolean;
    tiptap?: boolean;
    vueuse?: {
        prefix?: string;
    };
    pwa?: boolean;
    aos?: boolean;
    echarts?: boolean;
    dynamicRoute?: {
        prefix?: string;
        defaults?: {
            lang?: string;
        };
    };
    integration?: {
        protocol?: Record<string, IIntegrationProtocolOption>;
        prefix?: string;
        viewState?: boolean;
        actionState?: {
            type?: Array<string>;
        };
    };
    static?: boolean;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { type IIntegraionValidationOption, type IIntegrationProtocolOption, type IProtocolSyncOption, type ModuleOptions, _default as default };
