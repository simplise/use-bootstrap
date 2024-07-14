import { isClient } from "@vueuse/core";
import { useCombadgeFetch } from "./useCombadgeFetch";
import { useCombadgeStorage } from "./useCombadgeStorage";
import { useCombadgeState } from "./useCombadgeState";
import { useCombadgeRouteQuery } from "./useCombadgeRouteQuery.js";
import { useCombadgeRoutePath } from "./useCombadgeRoutePath.js";
import { useCombadgeRouteHash } from "./useCombadgeRouteHash.js";
import { useCombadgeRouteParams } from "./useCombadgeRouteParams.js";
import { useCombadgeHead } from "./useCombadgeHead.js";
import { useCombadgePageMeta } from "./useCombadgePageMeta.js";
import { useCombadgeSeoMeta } from "./useCombadgeSeoMeta.js";
import { useCombadgeHelper } from "./useCombadgeHelper.js";
export async function useCombadgeModel(prop) {
  switch (prop.type) {
    case "fetch":
      return await useCombadgeFetch(prop);
    case "local":
    case "session":
      if (isClient) {
        return useCombadgeStorage(prop, prop.type);
      } else {
        return useCombadgeState(prop);
      }
    case "query":
      return useCombadgeRouteQuery(prop);
    case "path":
      return useCombadgeRoutePath(prop);
    case "hash":
      return useCombadgeRouteHash();
    case "params":
      return useCombadgeRouteParams(prop);
    case "head":
      return useCombadgeHead(prop);
    case "seoMeta":
      return useCombadgeSeoMeta(prop);
    case "pageMeta":
      return useCombadgePageMeta(prop);
    case "helper":
      return useCombadgeHelper(prop);
    default:
      return useCombadgeState(prop);
  }
}
