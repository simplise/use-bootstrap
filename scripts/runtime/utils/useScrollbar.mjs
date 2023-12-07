import { defaultDocument } from "@vueuse/core";
import { camelCase } from "./helpers.mjs";
const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
export function useScrollbar(options = {}) {
  const { document = defaultDocument, element = defaultDocument?.body } = options;
  if (!element || !document) {
    return;
  }
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
  function datasetName(property) {
    return camelCase(`bs-${property}`);
  }
  function saveInitialAttribute(current, styleProperty) {
    const actualValue = current.style.getPropertyValue(styleProperty);
    if (actualValue) {
      current.dataset[datasetName(styleProperty)] = actualValue;
    }
  }
  function resetElementAttributes(current, styleProperty) {
    const value = current.dataset[datasetName(styleProperty)];
    if (value === void 0) {
      current.style.removeProperty(styleProperty);
      if (current.style.length == 0) {
        current.removeAttribute("style");
      }
      return;
    }
    delete current.dataset[styleProperty];
    current.style.setProperty(styleProperty, value);
  }
  return {
    getWidth,
    hide,
    reset,
    isOverflowing
  };
}
