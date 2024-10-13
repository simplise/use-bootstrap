<template>
  <b-div v-bind="$attrs">
    <b-div :key="key" v-html="html" />
  </b-div>
</template>

<script setup lang="ts">
import { isString, uniqueId } from '../../../composables/utils/helpers';
import { useDarkState } from '../../../composables/utils/useDarkState';
import { useSlots, ref, watch } from '#imports';
import bDiv from '../../html-block/div'
import { createHighlighter } from "shiki";
//
defineOptions({
  inheritAttrs: false,
});
//
const props = defineProps({
  lang: {
    type: String,
    default: 'shellscript'
  },
});
//
const nuxtApp = useNuxtApp()
const slots = useSlots();
const isDark = useDarkState();
const html = ref('');
// const highlighter = await createHighlighter({
//   themes: ['snazzy-light', 'min-dark'],
//   langs: ['vue', 'shellscript', 'scss'],
// });
const codeToHtml = nuxtApp.$shiki;
const key = ref('');
// 反応しない
watch(isDark, () => {
  key.value = uniqueId();
  if (slots.default) {
    const code = slots.default()[0].children;

    if (code && isString(code) && codeToHtml) {
      // html.value = code;  
      html.value = codeToHtml(code, { lang: props.lang, theme: isDark.value ? 'min-dark' : 'snazzy-light' });
    }
  }
}, { immediate: true });
</script>

<style scoped>
:deep(pre){margin-bottom:0;white-space:pre-wrap}
</style>
