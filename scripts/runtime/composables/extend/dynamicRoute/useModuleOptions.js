import { useRuntimeConfig } from "#imports";
export function useModuleOptions() {
  const options = useRuntimeConfig().public.usebootstrap;
  return options.dynamicRoute;
}
