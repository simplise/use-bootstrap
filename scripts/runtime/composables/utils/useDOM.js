import {
  unrefElement,
  defaultWindow,
  defaultDocument,
  promiseTimeout,
  uniqueId,
  trim,
  snakeCase
} from "../utils/helpers.js";
import { nextTick, onMounted, ref } from "#imports";
const MILLISECONDS_MULTIPLIER = 1e3;
export function findOneSelectorRef(selector, options = {}) {
  const { document = defaultDocument } = options;
  const elementRef = ref();
  if (selector) {
    onMounted(() => {
      const selected = document?.querySelector(selector);
      if (selected) {
        elementRef.value = selected;
      }
    });
  }
  return elementRef;
}
export function querySelectorToID(selector, options = {}) {
  const { element = defaultDocument } = options;
  if (!selector || selector == "#") {
    return [];
  }
  const list = element?.querySelectorAll(selector);
  if (list) {
    return Array.from(list).map((value) => {
      return value.id;
    });
  } else {
    return [];
  }
}
export function querySelector(selector, options = {}) {
  const { element = defaultDocument } = options;
  const list = element?.querySelectorAll(selector);
  if (list) {
    return Array.from(list);
  } else {
    return [];
  }
}
function getTransitionDurationFromElement(maybeElement, options = {}) {
  const { window = defaultWindow } = options;
  const element = unrefElement(maybeElement);
  if (!window || !element) {
    return 0;
  }
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
}
export const waitAfterTransition = async (transitionElement, waitForTransition = true) => {
  await nextTick();
  if (!waitForTransition) {
    return new Promise((resolve) => resolve);
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  await promiseTimeout(emulatedDuration);
  await nextTick();
};
export const reflow = async (transitionElement) => {
  await nextTick();
  const element = unrefElement(transitionElement);
  element?.offsetHeight;
};
export function generateId(text, generated) {
  if (!text) {
    return `i${uniqueId()}`;
  }
  const trimmed = snakeCase(trim(text));
  if (!trimmed) {
    return `i${uniqueId()}`;
  }
  if (!/[a-zA-Z0-9\-_]/.test(text)) {
    return `i${uniqueId()}`;
  }
  const encoded = trimmed.replace(/[^a-zA-Z0-9\-_]/g, (char) => {
    return char.charCodeAt(0).toString(16).padStart(6, "0");
  });
  const result = /^[0-9]/.test(encoded) ? `s${encoded}` : encoded;
  if (generated && generated.includes(result)) {
    return `${result}_${uniqueId()}`;
  }
  return result;
}
