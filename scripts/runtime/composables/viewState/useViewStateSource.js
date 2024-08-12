import { isClient } from "../../utils/helpers.js";
import { useViewStateFetch } from "./source/useViewStateFetch.js";
import { useViewStateStorage } from "./source/useViewStateStorage.js";
import { useViewStateState } from "./source/useViewStateState.js";
import { useViewStateRouteQuery } from "./source/useViewStateRouteQuery.js";
import { useViewStateRoutePath } from "./source/useViewStateRoutePath.js";
import { useViewStateRouteHash } from "./source/useViewStateRouteHash.js";
import { useViewStateRouteParams } from "./source/useViewStateRouteParams.js";
import { useViewStateRouteMeta } from "./source/useViewStateRouteMeta.js";
import { useViewStateSeoMeta } from "./source/useViewStateSeoMeta.js";
import { useViewStateHelper } from "./source/useViewStateHelper.js";
import { useViewStateAppConfig } from "./source/useViewStateAppConfig.js";
import { useViewStateDomAttr } from "./source/useViewStateDomAttr.js";
export async function useViewStateSource(prop) {
  switch (prop.type) {
    case "fetch":
      return await useViewStateFetch(prop);
    case "local":
    case "session":
      if (isClient) {
        return useViewStateStorage(prop);
      } else {
        return useViewStateState(prop);
      }
    case "query":
      return useViewStateRouteQuery(prop);
    case "path":
      return useViewStateRoutePath(prop);
    case "hash":
      return useViewStateRouteHash();
    case "params":
      return useViewStateRouteParams(prop);
    case "seoMeta":
      return useViewStateSeoMeta(prop);
    case "meta":
      return useViewStateRouteMeta(prop);
    case "helper":
      return useViewStateHelper(prop);
    case "appConfig":
      return useViewStateAppConfig(prop);
    case "state":
      return useViewStateState(prop);
    case "domAttr":
      return useViewStateDomAttr(prop);
    case "route":
      return useViewStateRouteMeta(prop);
    default:
      throw new Error("ViewState Type Not Defined.");
  }
}
