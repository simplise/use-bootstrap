import { watch, unref } from "vue";
import { defaultDocument } from "@vueuse/core";
import { forOwn, pick, set, has } from "./helpers.mjs";
export function useElement(elementProps, options = {}) {
  const { element = defaultDocument?.body } = options;
  if (!element) {
    return;
  }
  return watch(
    elementProps,
    (current, prev) => {
      const unrefProps = unref(current);
      forOwn(unrefProps.class, (value, key) => {
        if (value && !element.classList.contains(key)) {
          element.classList.add(key);
        }
        if (!value && element.classList.contains(key)) {
          element.classList.remove(key);
        }
      });
      forOwn(unrefProps.style, (value, key) => {
        if (element.style && pick(element.style, key) != value) {
          set(element.style, key, value);
        }
      });
      forOwn(unrefProps.attr, (value, key) => {
        if (element.getAttribute(key) != value) {
          element.setAttribute(key, value);
        }
      });
      if (element.classList.length == 0) {
        element.removeAttribute("class");
      }
      if (element.style.length == 0) {
        element.removeAttribute("style");
      }
      if (prev) {
        forOwn(unref(prev).attr, (_value, key) => {
          const unrefAttr = unref(unrefProps.attr);
          if (unrefAttr && !has(unrefAttr, key)) {
            element.removeAttribute(key);
          }
        });
      }
    },
    {
      /* deep: true, */
      immediate: true
    }
    // https://v3.ja.vuejs.org/api/instance-methods.html#watch
  );
}
