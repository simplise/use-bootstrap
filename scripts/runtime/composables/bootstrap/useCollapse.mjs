import { ref, inject, computed, watch, nextTick } from "vue";
import { addProp } from "../../utils/useProps.mjs";
import { useEvent } from "../../utils/useEvent.mjs";
import { waitAfterTransition } from "../../utils/useDOM.mjs";
import { unrefElement } from "../../utils/helpers.mjs";
export const CollapseProps = {
  horizontal: {
    type: Boolean
  }
};
export function useCollapse(props, context, elementRef) {
  const active = inject("active.collapse", void 0);
  if (active) {
    watch(active, (value) => {
      if (value) {
        show();
      } else {
        hide();
      }
    });
  }
  const isShown = ref(active?.value || false);
  const height = ref(0);
  const width = ref(0);
  const collapse = ref(!isShown.value);
  const collapsing = ref(false);
  const isShow = ref(isShown.value);
  const { expose } = useEvent(props, elementRef, "collapse");
  const show = async () => {
    if (!elementRef.value) {
      return;
    }
    const element = unrefElement(elementRef);
    if (!element) {
      return;
    }
    context.emit("show.collapse");
    isShown.value = true;
    collapse.value = false;
    collapsing.value = true;
    isShow.value = false;
    await nextTick();
    height.value = element.scrollHeight;
    width.value = element.scrollWidth;
    await waitAfterTransition(elementRef, true);
    collapse.value = true;
    collapsing.value = false;
    isShow.value = true;
    context.emit("shown.collapse");
  };
  const hide = async () => {
    if (!elementRef.value) {
      return;
    }
    const element = unrefElement(elementRef);
    if (!element) {
      return;
    }
    context.emit("hide.collapse");
    isShown.value = false;
    height.value = element.offsetHeight;
    width.value = element.offsetWidth;
    collapsing.value = true;
    await nextTick();
    collapse.value = false;
    isShow.value = true;
    await nextTick();
    height.value = element.scrollHeight;
    width.value = element.scrollWidth;
    await nextTick();
    height.value = 0;
    width.value = 0;
    await nextTick();
    await waitAfterTransition(elementRef, true);
    collapse.value = true;
    collapsing.value = false;
    isShow.value = false;
    context.emit("hidden.collapse");
  };
  const toggle = async () => {
    isShown.value ? await hide() : await show();
  };
  const method = expose({ show, hide, toggle, dismiss: hide });
  return {
    class: computed(() => {
      return {
        show: isShow.value,
        collapse: collapse.value,
        collapsing: collapsing.value,
        "collapse-horizontal": props.horizontal
      };
    }),
    style: computed(() => {
      return {
        ...addProp(
          !props.horizontal && collapsing.value,
          "height",
          height.value == 0 ? "0" : `${height.value}px`
        ),
        ...addProp(
          props.horizontal && collapsing.value,
          "width",
          width.value == 0 ? "0" : `${width.value}px`
        )
      };
    }),
    method
  };
}
