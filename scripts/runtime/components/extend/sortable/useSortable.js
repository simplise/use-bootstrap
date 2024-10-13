import Sortable from "sortablejs";
import { defaultDocument, toValue, tryOnMounted, tryOnScopeDispose, unrefElement } from "../../../composables/utils/helpers.js";
import { isRef, nextTick } from "#imports";
export function useSortable(el, list, options = {}) {
  let sortable;
  const { document = defaultDocument, ...resetOptions } = options;
  const defaultOptions = {
    onUpdate: (e) => {
      moveArrayElement(list, e.oldIndex, e.newIndex);
    }
  };
  const start = () => {
    const target = typeof el === "string" ? document?.querySelector(el) : unrefElement(el);
    if (!target || sortable !== void 0)
      return;
    sortable = new Sortable(target, { ...defaultOptions, ...resetOptions });
  };
  const stop = () => {
    sortable?.destroy();
    sortable = void 0;
  };
  const option = (name, value) => {
    if (value !== void 0)
      sortable?.option(name, value);
    else
      return sortable?.option(name);
  };
  tryOnMounted(start);
  tryOnScopeDispose(stop);
  return {
    stop,
    start,
    option
  };
}
export function moveArrayElement(list, from, to) {
  const _valueIsRef = isRef(list);
  const array = _valueIsRef ? [...toValue(list)] : toValue(list);
  if (to >= 0 && to < array.length) {
    const element = array.splice(from, 1)[0];
    nextTick(() => {
      array.splice(to, 0, element);
      if (_valueIsRef)
        list.value = array;
    });
  }
}
