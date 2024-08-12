import { ref, nextTick } from "#imports";
export async function useHiddenElementSize(target) {
  const height = ref(0);
  const width = ref(0);
  if (target?.value) {
    if (target.value.style.display == "hidden") {
      const initialOverflow = target.value.style.overflow;
      const initialHeight = target.value.style.height;
      const initialWidth = target.value.style.widows;
      target.value.style.overflow = "scroll";
      target.value.style.height = "0";
      target.value.style.width = "0";
      await nextTick();
      width.value = target.value.scrollWidth;
      height.value = target.value.scrollHeight;
      target.value.style.overflow = initialOverflow;
      target.value.style.height = initialHeight;
      target.value.style.width = initialWidth;
      await nextTick();
    } else {
      width.value = target.value.offsetWidth;
      height.value = target.value.offsetHeight;
    }
  }
  return {
    width,
    height
  };
}
