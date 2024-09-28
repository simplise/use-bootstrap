<template>
 <ClientOnly>
  <b-div
   :key="key"
   v-bind="$attrs"
   v-html="html"
  />
 </ClientOnly>
</template>

<script setup lang="ts">
import { isString, uniqueId } from '../../../composables/utils/helpers';
import { useDark } from '../../../composables/utils/useDark';
import { getShikiHighlighter, useSlots, ref, watch } from '#imports';

//
defineOptions({
 inheritAttrs: false,
});
//
export interface Props {
 lang?: string;
}
const props = withDefaults(defineProps<Props>(), {
 lang: 'shellscript',
});
//
const slots = useSlots();
//
const isDark = useDark();

const html = ref('');
const highlighter = await getShikiHighlighter();
const key = ref('');
// 反応しない
watch(isDark, () => {
 key.value = uniqueId();
 if (slots.default) {
  const code = slots.default()[0].children;

  if (code && isString(code)) {
   html.value = highlighter.highlight(code, { lang: props.lang, theme: isDark.value ? 'min-dark' : 'snazzy-light' });
  }
 }
}, { immediate: true });
</script>

<style>
  pre {
    white-space: pre-wrap;
    margin-bottom: 0;
  }
</style>
