import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    bootstrap?: {
        prefix?: string;
    };
    html?: {
        prefix?: string;
    };
    icon?: {
        prefix?: string;
    };
    docs?: {
        prefix?: string;
    };
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type ModuleOptions, _default as default };
