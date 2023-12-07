import { defaultDocument } from "@vueuse/core";
export function useSettings(options = {}) {
  const { document = defaultDocument } = options;
  const isRTL = () => document?.documentElement.dir === "rtl";
  return {
    isRTL
  };
}
