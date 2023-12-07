import { ref, inject } from "vue";
import { EventEmitProps } from "../../utils/useEventEmitter.mjs";
import { toArray } from "../../utils/useProps.mjs";
import { useEventHandler } from "../../utils/useEventHandler.mjs";
import { useIDRef } from "../../composables/attributes/useID.mjs";
export const TabActiveProps = {
  tab: {
    type: String
  },
  ...EventEmitProps
};
export function useTabActive(props, elementRef) {
  const tabs = toArray(props.tab);
  const current = inject("current.nav", ref(""));
  const eid = useIDRef(props, elementRef);
  const toggleEmitter = () => {
    tabs.map(() => {
      const { emit } = useEventHandler(props.tab || "", "expose_");
      emit("show");
    });
    if (eid.value) {
      current.value = eid.value;
    }
  };
  const tabActive = async () => {
    await toggleEmitter();
  };
  return {
    method: {
      tabActive
    },
    event: {
      onClick: tabActive
    }
  };
}
