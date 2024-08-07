import { computed, ref, useHeadSafe, onMounted } from "#imports";
import { defaultDocument } from "@vueuse/core";
import { set, keys } from "lodash-es";
export function useCombadgeHead(prop) {
  const base = useState(prop.stateKey, () => prop.default ?? {});
  const keyItems = prop.key.split("/");
  onMounted(() => {
    switch (keyItems[0]) {
      case "body-attrs":
        {
          const body = defaultDocument?.querySelector("body");
          switch (keyItems[1]) {
            case "class":
              {
                const result = {};
                console.log(body?.classList);
                body?.classList.forEach((item) => {
                  set(result, item, true);
                });
                base.value = result;
              }
              break;
          }
        }
        break;
    }
  });
  const toClassString = () => {
    const filtered = keys(base.value).filter((currentValue) => base.value[currentValue]);
    if (filtered.length > 0) {
      return filtered.reduce((accumulator, currentValue) => `${currentValue} ${accumulator}`);
    }
    return "";
  };
  const model = computed({
    // getter 関数
    get() {
      return base.value;
    },
    // setter 関数
    set(newValue) {
      console.log(newValue);
      base.value = newValue;
      switch (keyItems[0]) {
        case "body-attrs":
          {
            switch (keyItems[1]) {
              case "class":
                {
                  console.log(JSON.stringify(base.value));
                  console.log(toClassString());
                  useHeadSafe({
                    bodyAttrs: {
                      class: base.value
                    }
                  });
                }
                break;
            }
          }
          break;
      }
    }
  });
  return {
    model,
    updated: ref(false)
  };
}
