import type {
 MaybeElementRef,
 ConfigurableWindow,
 ConfigurableDocument,
} from '@vueuse/core';
import {
 unrefElement,
 defaultWindow,
 defaultDocument,
 promiseTimeout,
} from '../utils/helpers';
import { nextTick, onMounted, ref } from '#imports';

const MILLISECONDS_MULTIPLIER = 1000;

interface ConfigurableElement {
 element?: HTMLElement;
}

export function findOneSelectorRef(
 selector: string | undefined,
 options: ConfigurableDocument = {},
) {
 //
 const { document = defaultDocument } = options;
 //
 const elementRef = ref<HTMLElement>();
 if (selector) {
  onMounted(() => {
   const selected = document?.querySelector<HTMLElement>(selector);
   if (selected) {
    elementRef.value = selected;
   }
  });
 }
 return elementRef;
}

export function querySelectorToID(
 selector: string,
 options: ConfigurableElement = {},
) {
 //
 const { element = defaultDocument } = options;
 if (!selector || selector == '#') {
  return [];
 }
 //
 const list = element?.querySelectorAll(selector);
 if (list) {
  return Array.from(list).map((value) => {
   return value.id;
  });
 }
 else {
  return [];
 }
}
// queryselector による選択ではTeleportされたアイテムを取得できない
export function querySelector(
 selector: string,
 options: ConfigurableElement = {},
) {
 //
 const { element = defaultDocument } = options;
 //
 const list = element?.querySelectorAll<HTMLElement>(selector);
 if (list) {
  return Array.from(list);
 }
 else {
  return [];
 }
}

function getTransitionDurationFromElement(
 maybeElement: MaybeElementRef,
 options: ConfigurableWindow = {},
) {
 //
 const { window = defaultWindow } = options;
 //
 const element = unrefElement(maybeElement);
 if (!window || !element) {
  return 0;
 }
 // Get transition-duration of the element
 let { transitionDuration, transitionDelay } = window.getComputedStyle(element);

 const floatTransitionDuration = Number.parseFloat(transitionDuration);
 const floatTransitionDelay = Number.parseFloat(transitionDelay);

 // Return 0 if element or transition duration is not found
 if (!floatTransitionDuration && !floatTransitionDelay) {
  return 0;
 }

 // If multiple durations are defined, take the first
 transitionDuration = transitionDuration.split(',')[0];
 transitionDelay = transitionDelay.split(',')[0];

 return (
  (Number.parseFloat(transitionDuration)
  + Number.parseFloat(transitionDelay))
  * MILLISECONDS_MULTIPLIER
 );
}

// https://github.com/twbs/bootstrap/blob/main/js/src/util/index.js executeAfterTransition
export const waitAfterTransition = async (
 transitionElement: MaybeElementRef,
 waitForTransition = true,
): Promise<void> => {
 await nextTick(); // reflow
 if (!waitForTransition) {
  return new Promise(resolve => resolve);
 }
 const durationPadding = 5;
 const emulatedDuration
    = getTransitionDurationFromElement(transitionElement) + durationPadding;
 await promiseTimeout(emulatedDuration);
 await nextTick(); // reflow
};

export const reflow = async (
 transitionElement: MaybeElementRef,
): Promise<void> => {
 await nextTick(); // reflow
 const element = unrefElement(transitionElement) as HTMLElement;
 // eslint-disable-next-line @typescript-eslint/no-unused-expressions
 element?.offsetHeight;
};
