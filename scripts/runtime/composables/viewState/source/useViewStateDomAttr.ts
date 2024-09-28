import { normalizeClass } from 'vue';
import { set, defaultDocument, useMutationObserver, isClient } from '../../utils/helpers';
import type {
 IViewStateSourceResult,
} from '../useViewState';
import { ref, onMounted, useState, watch } from '#imports';
// dom-attr://body/class/
// dom-attr://html/class/
// dom-attr://{id}/class/
export function useViewStateDomAttr(
 target: string, // body, html , {id}
 attr: string, // class
 defaultValue?: unknown,
 // prop: IViewStateSourceProps,
): IViewStateSourceResult {
 const stateKey = `_viewstate_base_dom_attr_${target}_${attr}`;
 const model = useState(stateKey, () => defaultValue ?? {});
 const setModel = (newValue: string | Record<string, boolean>) => {
  if (model.value != newValue) {
   model.value = newValue;
  }
 };
 const status = ref(0);
 //
 const reload = () => {
  if (isClient) {
   const el = getElement(target);
   if (!el) {
    throw new Error('DomAttr element was not found');
   }
   const attrValue = getAttrValue(el, attr);
   const newValue = attrValue || '';
   setModel(newValue);
   status.value = 200;
   return el;
  }
  else {
   setModel(attr == 'class' ? {} : '');
   return undefined;
  }
 };
 //
 onMounted(() => {
  const el = reload();
  // 変更検知
  useMutationObserver(
   el,
   (_) => {
    reload();
   },
   {
    attributes: true,
   },
  );
 });
 //
 watch(model, () => {
  sync();
 });
 //
 const sync = () => {
  if (isClient) {
   const el = getElement(target);
   if (!el) {
    throw new Error('DomAttr element was not found');
   }
   setAttrValue(el, attr, model.value);
  }
 };
 //
 return {
  model,
  updated: ref(false),
  status,
  // sync,
 };
}
//
function getElement(target: string) {
 switch (target) {
  case 'body':
   return defaultDocument?.querySelector('body');
  case 'html':
   return defaultDocument?.querySelector('html');
  default:
   return defaultDocument?.getElementById(target);
 }
}
// By Copilot
function parseClassString(classString: string | null): Record<string, boolean> {
 if (classString) {
  return classString.split(' ').reduce((acc, className) => {
   if (className) {
    set(acc, className, true);
   }
   return acc;
  }, {});
 }
 else {
  return {};
 }
}
//
function getAttrValue(el: Element, attr: string) {
 switch (attr) {
  case 'class':
   return parseClassString(el.className || '');
  default:
   return el.getAttribute(attr);
 }
}
//
function setAttrValue(el: Element, attr: string, newValue: unknown) {
 switch (attr) {
  case 'class':
  {
   const classNames = normalizeClass(newValue);
   if (el.className != classNames) {
    el.className = classNames;
   }
   return;
  }
  default:
   {
    if (el.getAttribute(attr) != newValue) {
     el.setAttribute(attr, newValue as string);
    }
   }
   return;
 }
}
