import { useActionProp } from "../actionState/useActionProp.js";
import { helperAction } from "../actionState/helperAction.js";
import { fetchAction } from "../actionState/fetchAction.js";
import { ref } from "#imports";
export const ActionStateProps = {
  src: {
    type: String,
    requird: true
  }
};
export function useActionState(props) {
  const data = ref(void 0);
  const status = ref(0);
  const executing = ref(false);
  const actionProp = useActionProp(props);
  const action = async (method, params) => {
    executing.value = true;
    status.value = 102;
    switch (actionProp.type) {
      case "fetch":
        switch (method) {
          case "get":
          case "post":
          case "put":
          case "delete":
          case "patch":
          case "head":
            await fetchAction(method, params, actionProp, status, data);
            break;
          default:
            throw new Error("Not supported FetchAction method");
        }
        break;
      case "helper":
        await helperAction(method, params, actionProp, status, data);
        break;
      default:
        throw new Error("Not supported ActionState Type");
    }
    if (status.value == 102) {
      status.value = 0;
    }
    executing.value = false;
  };
  return {
    data,
    status,
    executing,
    action
  };
}
