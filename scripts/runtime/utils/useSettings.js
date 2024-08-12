import { defaultDocument } from "../utils/helpers.js";
export function useSettings(options = {}) {
  const { document = defaultDocument } = options;
  const isRTL = () => document?.documentElement.dir === "rtl";
  return {
    isRTL
  };
}
