import { defaultDocument, delay } from '../utils/helpers';
import { ref, watch, onMounted, useRoute } from '#imports';
import { generateId } from '../utils/useDOM';
//
interface TocItem {
 id: string;
 content: string | null;
 items: TocItem[];
 level: number;
}

export function useToc(contentSelector: string) {
 //
 const route = useRoute();

 //
 const tocs = ref<TocItem[]>([]);
 const targets = ref<string[]>([]); //idList
 const shown = ref(false);
 //
 const render = () => {
  // await reflow(); // Local 変更に対応させるための一時的な措置
  tocs.value = [];
  // 2024/7/5
  // await nextTick()
  const content = defaultDocument?.querySelector(contentSelector);
  if (!content) {
   return;
  }
  const headings = content.querySelectorAll('h2:not(.toc-ignore *),h3:not(.toc-ignore *)');
  let current: TocItem | undefined = undefined;
  headings.forEach((heading) => {
   if (!heading.id) {
    heading.id = generateId(heading.textContent, targets.value);
   }
   targets.value.push(heading.id);
   if (!heading.querySelector('.anchor-link')) {
    const headingAnchor = document.createElement('a');
    headingAnchor.className = 'anchor-link';
    headingAnchor.href = `#${heading.id}`;
    headingAnchor.ariaLabel = `Link to this section: ${heading.textContent}`;
    heading.append(headingAnchor);
   }
   if (heading.tagName == 'H2') {
    current = {
     id: heading.id,
     content: heading.textContent,
     items: [],
     level: 2,
    };
    tocs.value.push(current);
   }
   else if (current && heading.tagName == 'H3') {
    current.items.push({
     id: heading.id,
     content: heading.textContent,
     items: [],
     level: 2,
    });
   }
  });
 };
 // 2024-7-5 Test
 // onMounted(async () =>await render())
 //
 watch(
  () => route.path,
  async () => {
   // Local 変更に対応させるための一時的な措置
   // await nextTick();
   shown.value = false;
   await delay(300);
   render()
   await delay(500);
   shown.value = true;
  },
  { deep: true, immediate: false },
 );
 onMounted(() => render());
 //
 return {
  shown,
  tocs
 };
}
