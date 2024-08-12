import { useMouse } from "../../utils/helpers.js";
import { defineComponent, reactive } from "#imports";
export default defineComponent({
  name: "UseMouse",
  props: ["touch", "resetOnTouchEnds", "initialValue"],
  setup(props, { slots }) {
    const data = reactive(useMouse(props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});
