import { defaultDocument, delay } from "../utils/helpers.js";
import { ref, watch, onMounted, useRoute } from "#imports";
import { generateId } from "../utils/useDOM.js";
export function useToc(contentSelector) {
  const route = useRoute();
  const tocs = ref([]);
  const targets = ref([]);
  const shown = ref(false);
  const render = () => {
    tocs.value = [];
    const content = defaultDocument?.querySelector(contentSelector);
    if (!content) {
      return;
    }
    const headings = content.querySelectorAll("h2:not(.toc-ignore *),h3:not(.toc-ignore *)");
    let current = void 0;
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = generateId(heading.textContent, targets.value);
      }
      targets.value.push(heading.id);
      if (!heading.querySelector(".anchor-link")) {
        const headingAnchor = document.createElement("a");
        headingAnchor.className = "anchor-link";
        headingAnchor.href = `#${heading.id}`;
        headingAnchor.ariaLabel = `Link to this section: ${heading.textContent}`;
        heading.append(headingAnchor);
      }
      if (heading.tagName == "H2") {
        current = {
          id: heading.id,
          content: heading.textContent,
          items: [],
          level: 2
        };
        tocs.value.push(current);
      } else if (current && heading.tagName == "H3") {
        current.items.push({
          id: heading.id,
          content: heading.textContent,
          items: [],
          level: 2
        });
      }
    });
  };
  watch(
    () => route.path,
    async () => {
      shown.value = false;
      await delay(300);
      render();
      await delay(500);
      shown.value = true;
    },
    { deep: true, immediate: false }
  );
  onMounted(() => render());
  return {
    shown,
    tocs
  };
}
