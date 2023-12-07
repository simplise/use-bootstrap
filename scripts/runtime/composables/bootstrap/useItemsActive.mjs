import { ref, inject, watch, computed, onMounted, nextTick } from "vue";
import { addProp } from "../../utils/useProps.mjs";
import { useIDRef } from "../../composables/attributes/useID.mjs";
import { useEvent } from "../../utils/useEvent.mjs";
import { unrefElement } from "../../utils/helpers.mjs";
export const ActiveProps = {
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
export function useActive(props, eventSuffix, elementRef) {
  const current = inject(
    `current.${eventSuffix}`,
    void 0
  );
  const parent = inject(
    `parent.${eventSuffix}`,
    void 0
  );
  const eid = useIDRef(props, elementRef);
  const active = ref(eid.value && current?.value == eid.value || props.active || false);
  const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
  if (current && !props.to) {
    if (active.value && eid.value) {
      current.value = eid.value;
    }
    watch(current, async (next) => {
      if (next == eid.value) {
        active.value = true;
      } else {
        active.value = false;
      }
      const element = unrefElement(elementRef);
      if (!element) {
        return;
      }
      await nextTick();
      if (active.value) {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
          await nextTick();
        }
      } else {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
          await nextTick();
        }
      }
    });
  }
  const show = () => {
    if (props.disabled) {
      return;
    }
    if (current && parent && parent.value && eid.value) {
      current.value = eid.value;
    } else {
      active.value = true;
    }
  };
  const hide = () => {
    if (current && parent && parent.value) {
      current.value = "";
    } else {
      active.value = false;
    }
  };
  const toggle = () => {
    active.value ? hide() : show();
  };
  onMounted(() => {
    if (active.value && eid.value && current) {
      current.value = eid.value;
    }
  });
  const method = expose({ show, hide, toggle, dismiss: hide });
  exposeState({ active });
  return {
    class: computed(() => {
      return {
        active: active.value,
        disabled: props.disabled
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(active.value, "aria-current", "page"),
        ...addProp(props.disabled, "aria-disabled", "true")
      };
    }),
    method
  };
}
