import type { Ref, VNode, Slot, SetupContext } from 'vue';
import type { MaybeRef } from '@vueuse/core';
import {
 set,
 forOwn,
 isEmpty,
 pickBy,
 isArray,
 isBoolean,
 startsWithBreakPoint,
 isNumber,
 isString,
} from './helpers';
import { unref } from '#imports';

//
export interface IHPropsModel {
 class?: MaybeRef<Record<string, unknown>>;
 style?: MaybeRef<Record<string, unknown>>;
 attr?: MaybeRef<Record<string, unknown>>;
 state?: Record<string, MaybeRef<unknown>>;
 method?: Record<string, Function>;
 event?: Record<string, Function | undefined>; // SFC専用
 ref?: Ref<HTMLElement | undefined>; // SFC専用 element ref
 tag?: string;
 render?: () => VNode | VNode[] | undefined;
 provideSuffix?: string;
}

//
interface IRenderPropsModel {
 class?: Record<string, unknown>;
 style?: Record<string, unknown>;
 [key: string]: unknown;
}

//
export function hProps(...items: IHPropsModel[]) {
 //
 const result: IRenderPropsModel = {
  class: {},
  style: {},
 };
 //
 const events = new Map<string, Array<Function>>();

 //
 items.forEach((item) => {
  result.class && Object.assign(result.class, unref(item.class));
  result.style && Object.assign(result.style, unref(item.style));
  Object.assign(result, unref(item.attr));
  // Object.assign(result, item.event)
  if (item.ref) {
   set(result, 'ref', item.ref);
  }
  forOwn(item.event, (value, key) => {
   if (events.has(key)) {
    events.get(key)?.push(value);
   }
   else {
    const funcs: Function[] = [value];
    events.set(key, funcs);
    const val = (payload: Event) => {
     events.get(key)?.forEach(func => func(payload));
    };
    result[key] = val;
   }
  });
 });
 //
 if (result.class && isEmpty(pickBy(result.class))) {
  delete result.class;
 }
 //
 if (result.style && isEmpty(pickBy(result.style))) {
  delete result.style;
 }
 return result;
}

declare type hSlotsProps =
 | Slot
 | undefined
 | (() => VNode | VNode[] | undefined);
//
export function hSlots(...slots: hSlotsProps[]) {
 return slots.map((value) => {
  return value ? value() : undefined;
 });
}

type ClassNameGenerator = (a: unknown) => string;
// 空白で区切られた値、または配列から、複数のクラス名を生成します。
export function addClassNames<T>(value: T, func: ClassNameGenerator) {
 const classObject: Record<string, unknown> = {};
 const values = toArray(value);
 values.forEach((n) => {
  classObject[func(n)] = true;
 });

 return classObject;
}
// valueがundefinedでない場合、name value を返します
export function addProp<T>(test: T, name: string, value: string | undefined) {
 return ((test || isNumber(test)) && value ? true : false) && { [name]: value }; // https://qiita.com/phi/items/723aa59851b0716a87e3
}

// プロパティが設定されていない
export function isPropUndefined(value: unknown) {
 return !isString(value) && (value == undefined || value == false);
}
export function isPropDefined(value: unknown) {
 return !isPropUndefined(value);
}
//
export function isNumrable(value: string) {
 return !isNaN(Number.parseInt(value));
}
// 文字か数値か配列の値を持っている
export function hasValue(value?: unknown) {
 return (isString(value) && value) || isNumber(value) || isArray(value);
}
// Booleanか文字のプロパティがTrueである
export function isTrue(value?: unknown) {
 if (isBoolean(value)) {
  return value;
 }
 if (isString(value)) {
  if (value.toLowerCase() == 'true' || value == '') {
   return true;
  }
 }
 return false;
}
// プロパティー値を数値に変換します。数値外の場合0に設定します
export function toNum(value?: unknown): number {
 if (isNumber(value)) {
  return value;
 }
 if (isNumrable(value)) {
  return Number.parseInt(value);
 }
 return 0;
}
// プロパティー値を配列に変換します。
export function toArray(value?: unknown) {
 if (isArray(value)) {
  return value;
 }
 if (isString(value)) {
  return value.split(' ').filter(item => item);
 }
 if (value == undefined || value == false) {
  return [];
 }
 return [value];
}

// コンポーネント内のメソッドを定義します SFC専用
export function exposeMethods(
 context: SetupContext<Record<string, unknown>>,
 ...items: IHPropsModel[]
) {
 //
 const result: Record<string, Function> = {};
 const methods = new Map<string, Array<Function>>();
 //
 items.forEach((item) => {
  forOwn(item.method, (value, key) => {
   if (methods.has(key)) {
    methods.get(key)?.push(value);
   }
   else {
    const funcs: Function[] = [value];
    methods.set(key, funcs);
    const val = (...payloads: unknown[]) => {
     methods.get(key)?.forEach(func => func(payloads));
    };
    result[key] = val;
   }
   //
   // provide(`${key}.${item.provideSuffix}`, value)
  });
 });

 //
 if (!isEmpty(result)) {
  context.expose(result);
 }
 //
}

export function spacing(val: string, tag: string) {
 if (isNumrable(val)) {
  return `${tag}-${val}`;
 }
 if (startsWithBreakPoint(val)) {
  return `${tag}-${val}`;
 }
 if (val == 'auto') {
  return `${tag}-${val}`;
 }
 return `${tag}${val}`;
}
