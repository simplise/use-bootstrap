import { ref, watch, onMounted, nextTick } from "vue";
import { defaultDocument } from "@vueuse/core";
import { camelCase, uniqueId } from "lodash-es";
import { useRoute } from "#app";
export function useToc(contentSelector) {
  const route = useRoute();
  const tocs = ref([]);
  const render = async () => {
    tocs.value = [];
    await nextTick();
    const content = defaultDocument?.querySelector(contentSelector);
    if (!content) {
      return;
    }
    const headings = content.querySelectorAll(":scope > h2");
    headings.forEach(async (h2) => {
      if (!h2.id) {
        h2.id = camelCase(h2.textContent || `h2_${uniqueId()}`);
      }
      const heading3s = content.querySelectorAll(`#${h2.id} ~ h3,h2`);
      const h3s = [];
      let start = false;
      let stop = false;
      heading3s.forEach((h3) => {
        if (h3.id == h2.id) {
          start = true;
        } else if (start && h3.tagName == "H2") {
          stop = true;
        } else if (!stop && start) {
          if (!h3.id) {
            h3.id = camelCase(h3.textContent || `h3_${uniqueId()}`);
          }
          h3s.push({
            id: h3.id,
            content: h3.textContent,
            level: 3
          });
        }
      });
      tocs.value.push({
        id: h2.id,
        content: h2.textContent,
        items: h3s,
        level: 2
      });
    });
    await nextTick();
  };
  onMounted(() => render());
  watch(() => route.query, () => render(), { deep: true, immediate: true });
  return tocs;
}
