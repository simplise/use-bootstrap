import { useNuxtApp } from "#app";
import { computed, ref } from "#imports";
export function useCombadgeHelper(prop) {
  const nuxtApp = useNuxtApp();
  const helper = `$${prop.key}`;
  const appHelper = nuxtApp[helper];
  if (!appHelper) {
    return {
      model: computed(() => {
      }),
      updated: ref(false)
    };
  }
  const model = computed({
    // getter 関数
    get() {
      const helperProps = {
        method: "get"
      };
      return appHelper(helperProps);
    },
    // setter 関数
    set(newValue) {
      const helperProps = {
        method: "set",
        data: newValue
      };
      appHelper(helperProps);
    }
  });
  return {
    model,
    updated: ref(false)
  };
}
