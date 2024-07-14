import { useRuntimeConfig } from "#app";
import { parseURL, stringifyParsedURL } from "ufo";
import { trimEnd } from "lodash-es";
import { camelCase } from "scule";
export function useCombadgeProp(props) {
  const uboptions = useRuntimeConfig().public.usebootstrap;
  const options = uboptions.combadge;
  const src = props.stateSrc;
  const parsed = parseURL(src);
  const protocol = camelCase(trimEnd(parsed.protocol, ":"));
  parsed.protocol = "";
  const key = stringifyParsedURL(parsed);
  const option = options.protocol[protocol];
  if (!option) {
    throw new Error("Combadge Protocol Not Defined.");
  }
  const transform = props.stateSrcTransform || option.transform || void 0;
  const defaultValue = option.default || void 0;
  const url = `${option.prefix}${key}`;
  const stateKey = `_combadge_base_${src}${transform ?? ""}`;
  const updateStateKey = `_combadge_updated_${src}${transform ?? ""}`;
  const fetchedStateKey = `_combadge_fetched_${src}${transform ?? ""}`;
  const srcPath = parsed.pathname.split("/");
  const lazy = option.lazy === void 0 ? false : option.lazy;
  const server = option.server === void 0 ? true : option.server;
  const immediate = option.immediate === void 0 ? true : option.immediate;
  const unauthorizedTo = props.unauthorizedTo;
  return {
    src,
    key,
    option,
    type: option.type,
    path: props.statePath,
    default: defaultValue,
    transform,
    schema: option.schema,
    url,
    stateKey,
    updateStateKey,
    fetchedStateKey,
    srcPath,
    lazy,
    server,
    immediate,
    unauthorizedTo
  };
}
export function useCombadgePropFor(props) {
  if (!props.stateFor) {
    throw new Error();
  }
  const newProps = structuredClone(props);
  newProps.stateSrc = props.stateFor;
  return useCombadgeProp(newProps);
}
export function useCombadgePropAction(props, action) {
  const newProps = structuredClone(props);
  newProps.stateSrc = action;
  return useCombadgeProp(newProps);
}
