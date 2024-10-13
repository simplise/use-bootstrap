import { omit, defaultDocument, set } from "./helpers.js";
import { ref } from "#imports";
const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
export function useScrollbar(options = {}) {
  const { document = defaultDocument, element = defaultDocument?.body } = options;
  if (!element || !document) {
    return;
  }
  const actualValue = ref({});
  const getWidth = () => {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };
  const hide = () => {
    const width = getWidth();
    disableOverFlow();
    setElementAttributes(
      element,
      PROPERTY_PADDING,
      (calculatedValue) => calculatedValue + width
    );
    document.querySelectorAll(SELECTOR_FIXED_CONTENT).forEach((item) => {
      setElementAttributes(
        item,
        PROPERTY_PADDING,
        (calculatedValue) => calculatedValue + width
      );
    });
    document.querySelectorAll(SELECTOR_STICKY_CONTENT).forEach((item) => {
      setElementAttributes(
        item,
        PROPERTY_MARGIN,
        (calculatedValue) => calculatedValue - width
      );
    });
  };
  const reset = () => {
    resetElementAttributes(element, "overflow");
    resetElementAttributes(element, PROPERTY_PADDING);
    document.querySelectorAll(SELECTOR_FIXED_CONTENT).forEach((item) => {
      resetElementAttributes(item, PROPERTY_PADDING);
    });
    document.querySelectorAll(SELECTOR_STICKY_CONTENT).forEach((item) => {
      resetElementAttributes(item, PROPERTY_MARGIN);
    });
  };
  const isOverflowing = () => {
    return getWidth() > 0;
  };
  const disableOverFlow = () => {
    saveInitialAttribute(element, "overflow");
    element.style.overflow = "hidden";
  };
  function setElementAttributes(current, styleProperty, callback) {
    if (current !== element && window.innerWidth > current.clientWidth + getWidth()) {
      return;
    }
    saveInitialAttribute(current, styleProperty);
    const calculatedValue = window.getComputedStyle(current).getPropertyValue(styleProperty);
    current.style.setProperty(
      styleProperty,
      `${callback(Number.parseFloat(calculatedValue))}px`
    );
  }
  function saveInitialAttribute(current, styleProperty) {
    set(actualValue.value, styleProperty, current.style.getPropertyValue(styleProperty));
  }
  function resetElementAttributes(current, styleProperty) {
    const value = actualValue.value[styleProperty];
    const actual = actualValue.value;
    const newVal = omit(actual, styleProperty);
    actualValue.value = newVal;
    if (!value) {
      current.style.removeProperty(styleProperty);
      if (current.style.length == 0) {
        current.removeAttribute("style");
      }
      return;
    }
    current.style.setProperty(styleProperty, value);
  }
  return {
    getWidth,
    hide,
    reset,
    isOverflowing
  };
}
