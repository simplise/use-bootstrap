import { unref } from "vue";
import {
  set,
  forOwn,
  isEmpty,
  pickBy,
  isArray,
  isBoolean,
  startsWithBreakPoint,
  isNumber,
  isString
} from "./helpers.mjs";
export function hProps(...items) {
  const result = {
    class: {},
    style: {}
  };
  const events = /* @__PURE__ */ new Map();
  items.forEach((item) => {
    result.class && Object.assign(result.class, unref(item.class));
    result.style && Object.assign(result.style, unref(item.style));
    Object.assign(result, unref(item.attr));
    if (item.ref) {
      set(result, "ref", item.ref);
    }
    forOwn(item.event, (value, key) => {
      if (events.has(key)) {
        events.get(key)?.push(value);
      } else {
        const funcs = [value];
        events.set(key, funcs);
        const val = (payload) => {
          events.get(key)?.forEach((func) => func(payload));
        };
        result[key] = val;
      }
    });
  });
  if (result.class && isEmpty(pickBy(result.class))) {
    delete result.class;
  }
  if (result.style && isEmpty(pickBy(result.style))) {
    delete result.style;
  }
  return result;
}
export function hSlots(...slots) {
  return slots.map((value) => {
    return value ? value() : void 0;
  });
}
export function addClassNames(value, func) {
  const classObject = {};
  const values = toArray(value);
  values.forEach((n) => {
    classObject[func(n)] = true;
  });
  return classObject;
}
export function addProp(test, name, value) {
  return ((test || isNumber(test)) && value ? true : false) && { [name]: value };
}
export function isPropUndefined(value) {
  return !isString(value) && (value == void 0 || value == false);
}
export function isPropDefined(value) {
  return !isPropUndefined(value);
}
export function isNumrable(value) {
  return !isNaN(parseInt(value));
}
export function hasValue(value) {
  return isString(value) && value || isNumber(value) || isArray(value);
}
export function isTrue(value) {
  if (isBoolean(value)) {
    return value;
  }
  if (isString(value)) {
    if (value.toLowerCase() == "true" || value == "") {
      return true;
    }
  }
  return false;
}
export function toNum(value) {
  if (isNumber(value)) {
    return value;
  }
  if (isNumrable(value)) {
    return parseInt(value);
  }
  return 0;
}
export function toArray(value) {
  if (isArray(value)) {
    return value;
  }
  if (isString(value)) {
    return value.split(" ").filter((item) => item);
  }
  if (value == void 0 || value == false) {
    return [];
  }
  return [value];
}
export function exposeMethods(context, ...items) {
  const result = {};
  const methods = /* @__PURE__ */ new Map();
  items.forEach((item) => {
    forOwn(item.method, (value, key) => {
      if (methods.has(key)) {
        methods.get(key)?.push(value);
      } else {
        const funcs = [value];
        methods.set(key, funcs);
        const val = (...payloads) => {
          methods.get(key)?.forEach((func) => func(payloads));
        };
        result[key] = val;
      }
    });
  });
  if (!isEmpty(result)) {
    context.expose(result);
  }
}
export function spacing(val, tag) {
  if (isNumrable(val)) {
    return `${tag}-${val}`;
  }
  if (startsWithBreakPoint(val)) {
    return `${tag}-${val}`;
  }
  if (val == "auto") {
    return `${tag}-${val}`;
  }
  return `${tag}${val}`;
}
