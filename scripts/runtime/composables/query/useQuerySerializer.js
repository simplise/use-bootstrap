import { endsWith, isArray, isObject, map, isString, isNumber, isBoolean, isNaN, memoize } from "../utils/helpers.js";
const MAX_DEPTH = 128;
export function useQuerySerializer() {
  return {
    serialize: (rule) => {
      if (isArray(rule)) {
        return serializeRules(rule, 0);
      }
      return serializeRule(rule, 0);
    },
    deserialize: (fragments) => deserialize(fragments, 0),
    deserializeToObject: (fragment) => deserializeRule(fragment, 0)
  };
}
const serializeRules = (rules, depth) => {
  return map(rules, (value) => serializeRule(value, depth + 1)).join(",");
};
const serializeRule = (rule, depth) => {
  if (depth > MAX_DEPTH) {
    throw new Error("Maximum depth exceeded");
  }
  if (isObject(rule)) {
    const [op, param] = Object.entries(rule)[0];
    const paramSerialized = serializeRules(param, depth + 1);
    return `${escapeDataString(op)}(${paramSerialized})`;
  }
  if (isString(rule)) {
    return `:${escapeDataString(`${rule}`)}`;
  }
  if (isNumber(rule) || isBoolean(rule)) {
    return escapeDataString(`${rule}`);
  }
  return escapeDataString(`${rule}`);
};
const deserialize = (fragments, depth) => {
  if (depth > MAX_DEPTH) {
    throw new Error("Maximum depth exceeded");
  }
  const fragmentArray = splitIgnoringParentheses(fragments);
  if (fragmentArray) {
    return fragmentArray.map((n) => deserializeRule(n, depth + 1));
  } else {
    return [];
  }
};
const deserializeRule = (fragment, depth) => {
  if (depth > MAX_DEPTH) {
    throw new Error("Maximum depth exceeded");
  }
  try {
    if (endsWith(fragment, ")")) {
      const keyValue = splitByParentheses(fragment);
      if (keyValue.beforeParentheses) {
        const val = deserialize(keyValue.insideParentheses, depth + 1);
        const result = { [unescapeDataString(keyValue.beforeParentheses)]: val };
        return result;
      }
    }
    const unescapedFragment = unescapeDataString(fragment);
    if (unescapedFragment === "true" || unescapedFragment === "false") {
      return unescapedFragment === "true";
    }
    if (!isNaN(Number(unescapedFragment))) {
      return Number(unescapedFragment);
    }
    if (unescapedFragment.startsWith(":")) {
      return unescapedFragment.slice(1);
    }
    return unescapedFragment;
  } catch (error) {
    console.error("Error deserializing fragment:", error);
    return void 0;
  }
};
const splitIgnoringParentheses = (str) => {
  const result = [];
  let current = "";
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "," && depth === 0) {
      result.push(current);
      current = "";
    } else {
      if (char === "(") {
        depth++;
      } else if (char === ")") {
        depth--;
      }
      current += char;
    }
  }
  if (current) {
    result.push(current);
  }
  return result;
};
const splitByParentheses = (str) => {
  let depth = 0;
  let beforeParentheses = "";
  let insideParentheses = "";
  let inside = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      depth++;
      if (depth === 1) {
        inside = true;
        continue;
      }
    } else if (char === ")") {
      depth--;
      if (depth === 0) {
        inside = false;
        continue;
      }
    }
    if (inside) {
      insideParentheses += char;
    } else {
      beforeParentheses += char;
    }
  }
  return { beforeParentheses, insideParentheses };
};
const escapeDataString = memoize(function(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
});
const unescapeDataString = memoize(function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
});
