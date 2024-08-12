import { set, defaultDocument, useMutationObserver, isClient, normalizeClass } from "../../../utils/helpers.js";
import { computed, ref, onMounted, useState } from "#imports";
export function useViewStateDomAttr(prop) {
  const base = useState(prop.stateKey, () => prop.default ?? {});
  const keyItems = prop.key.split("/");
  const target = keyItems[0];
  if (!target) {
    throw new Error("DomAttr target is not specified");
  }
  const attr = keyItems[1];
  if (!attr) {
    throw new Error("DomAttr attr is not specified");
  }
  const status = ref(0);
  const reload = () => {
    if (isClient) {
      const el = getElement(target);
      if (!el) {
        throw new Error("DomAttr element was not found");
      }
      const attrValue = getAttrValue(el, attr);
      base.value = attrValue || "";
      status.value = 200;
      return el;
    } else {
      base.value = attr == "class" ? {} : "";
      return void 0;
    }
  };
  onMounted(() => {
    const el = reload();
    useMutationObserver(
      el,
      (_) => {
        reload();
      },
      {
        attributes: true
      }
    );
  });
  const model = computed({
    // getter 関数
    get() {
      return base.value;
    },
    // setter 関数
    set(newValue) {
      if (isClient) {
        const el = getElement(target);
        if (!el) {
          throw new Error("DomAttr element was not found");
        }
        setAttrValue(el, attr, newValue);
        base.value = newValue;
      }
    }
  });
  return {
    model,
    updated: ref(false),
    status
  };
}
function getElement(target) {
  switch (target) {
    case "body":
      return defaultDocument?.querySelector("body");
    case "html":
      return defaultDocument?.querySelector("html");
    default:
      return defaultDocument?.getElementById(target);
  }
}
function parseClassString(classString) {
  if (classString) {
    return classString.split(" ").reduce((acc, className) => {
      if (className) {
        set(acc, className, true);
      }
      return acc;
    }, {});
  } else {
    return {};
  }
}
function getAttrValue(el, attr) {
  switch (attr) {
    case "class":
      return parseClassString(el.className || "");
    default:
      return el.getAttribute(attr);
  }
}
function setAttrValue(el, attr, newValue) {
  switch (attr) {
    case "class":
      el.className = normalizeClass(newValue);
      return;
    default:
      el.setAttribute(attr, newValue);
      return;
  }
}
