<template>
 <ClientOnly>
  <b-div
   v-bind="$attrs"
   v-html="html"
  />
 </ClientOnly>
</template>

<script setup lang="ts">
import { isString, useDark } from '../../../utils/helpers';
import { getShikiHighlighter, useSlots, ref } from '#imports';
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
const html = ref('');
const highlighter = await getShikiHighlighter();
//
useDark(
 {
  onChanged(dark: boolean) {
   if (slots.default) {
    const code = slots.default()[0].children;

    if (code && isString(code)) {
     html.value = highlighter.highlight(code, { lang: props.lang, theme: dark ? 'min-dark' : 'snazzy-light' });
    }
   }
  },
 },
);
</script>

<style>
pre{margin-bottom:0;white-space:pre-wrap}
</style>
