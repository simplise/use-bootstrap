import { ref, inject, watch, computed, onMounted } from "vue";
import { addProp, toNum } from "../../utils/useProps.mjs";
import { useIDRef } from "../attributes/useID.mjs";
import { useEvent } from "../../utils/useEvent.mjs";
export const CarouselActiveProps = {
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  interval: {
    type: [String, Number]
  }
};
export function useCarouselActive(props, elementRef, eventSuffix) {
  const current = inject(
    `current.${eventSuffix}`,
    void 0
  );
  const interval = inject(
    `interval.${eventSuffix}`,
    void 0
  );
  const eid = useIDRef(props, elementRef);
  const active = ref(current?.value == eid.value || props.active || false);
  const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
  if (current) {
    if (active.value && eid.value) {
      current.value = eid.value;
    }
    watch(current, (next) => {
      if (next == eid.value) {
        active.value = true;
        if (props.interval && interval) {
          interval.value = toNum(props.interval);
        }
      } else {
        active.value = false;
      }
    });
  }
  const show = () => {
    if (props.disabled) {
      return;
    }
    if (current && eid.value) {
      current.value = eid.value;
    } else {
      active.value = true;
    }
  };
  const hide = () => {
    if (current) {
      current.value = "";
    } else {
      active.value = false;
    }
  };
  const toggle = () => {
    active.value ? hide() : show();
  };
  onMounted(() => {
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
