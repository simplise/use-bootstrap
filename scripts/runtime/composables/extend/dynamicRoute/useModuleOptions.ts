import type { ModuleOptions } from '~/src/module';
import { useRuntimeConfig } from '#imports';
//
export function useModuleOptions() {
 //
 const options = useRuntimeConfig().public.usebootstrap as ModuleOptions;
 return options.dynamicRoute;
}
