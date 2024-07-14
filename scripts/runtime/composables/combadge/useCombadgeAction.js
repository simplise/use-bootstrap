import { useNuxtApp } from "#imports";
import { useCombadgeProp, useCombadgePropAction } from "./useCombadgeProp.js";
import { useCombadgeFetchReload } from "./useCombadgeFetch";
import { useCombadgeModel } from "./useCombadgeModel.js";
export const CombadgeActionProps = {
  stateSrc: {
    type: String,
    requird: true,
    default: ""
  },
  // 引数として利用するState
  stateAction: {
    type: String,
    requird: true,
    default: ""
  },
  // 関数として利用するState
  stateActionParams: {
    default: void 0
  },
  // 関数として利用するState
  stateFor: {
    type: String,
    default: ""
  }
  // 戻り値として利用するState
};
export function useCombadgeAction(props) {
  const action = useCombadgeActionGen({
    stateSrc: props.stateSrc,
    stateFor: props.stateFor || props.stateSrc
  });
  return {
    action
  };
}
function useCombadgeActionGen(props) {
  return async (action, actionParams) => {
    console.log("action");
    const srcProp = useCombadgeProp(props);
    const actionProp = useCombadgePropAction(props, action);
    const nuxtApp = useNuxtApp();
    const { model, updated } = await useCombadgeModel(srcProp);
    switch (actionProp.type) {
      case "fetch":
        {
          const url = `${srcProp.option.prefix}${srcProp.key}`;
          await $fetch(url, {
            method: "POST",
            body: {
              action,
              payload: model.value
            }
          });
          await useCombadgeFetchReload(srcProp);
        }
        break;
      case "helper":
        {
          const ac = `$${actionProp.key}`;
          console.log("action");
          const appHelper = nuxtApp[ac];
          if (appHelper) {
            const helperProps = {
              method: "action",
              params: actionParams,
              data: model.value
            };
            model.value = appHelper(helperProps);
          }
          updated.value = true;
        }
        break;
    }
  };
}
