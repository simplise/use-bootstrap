import { camelCase, uniqueId, defaultDocument } from '../utils/helpers';
import { ref, watch, onMounted, useRoute } from '#imports';

export function useToc(contentSelector: string) {
 //
 const route = useRoute();
 //
 const tocs = ref<unknown[]>([]);
 //
 const render = () => {
  tocs.value = [];
  // 2024/7/5
  // await nextTick()
  const content = defaultDocument?.querySelector(contentSelector);
  if (!content) {
   return;
  }
  const headings = content.querySelectorAll(':scope > h2');
  headings.forEach((h2) => {
   if (!h2.id) {
    h2.id = camelCase(h2.textContent || `h2_${uniqueId()}`);
   }
   if (!h2.querySelector('.anchor-link')) {
    const h2Anchor = document.createElement('a');
    h2Anchor.className = 'anchor-link';
    h2Anchor.href = `#${h2.id}`;
    h2Anchor.ariaLabel = `Link to this section: ${h2.textContent}`;
    h2.append(h2Anchor);
   }
   const heading3s = content.querySelectorAll(`#${h2.id} ~ h3,h2`);
   const h3s: unknown[] = [];
   let start = false;
   let stop = false;
   heading3s.forEach((h3) => {
    if (h3.id == h2.id) {
     start = true;
    }
    else if (start && h3.tagName == 'H2') {
     stop = true;
    }
    else if (!stop && start) {
     if (!h3.id) {
      h3.id = camelCase(h3.textContent || `h3_${uniqueId()}`);
     }
     if (!h3.querySelector('.anchor-link')) {
      const h3Anchor = document.createElement('a');
      h3Anchor.className = 'anchor-link';
      h3Anchor.href = `#${h3.id}`;
      h3Anchor.ariaLabel = `Link to this section: ${h3.textContent}`;
      h3.append(h3Anchor);
     }
     h3s.push({
      id: h3.id,
      content: h3.textContent,
      level: 3,
     });
    }
   });
   tocs.value.push({
    id: h2.id,
    content: h2.textContent,
    items: h3s,
    level: 2,
   });
  });
  // 2024-7-5 Test
  // await nextTick()
 };
 // 2024-7-5 Test
 // onMounted(async () =>await render())
 //
 watch(
  () => route.query,
  () => render(),
  { deep: true, immediate: false },
 );
 onMounted(() => render());
 //
 return tocs;
}
