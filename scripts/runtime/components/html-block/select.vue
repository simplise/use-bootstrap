<template>
 <select
  v-bind="attrs"
  ref="elementRef"
  v-model="model"
  :multiple="multiple"
 >
  <slot />
 </select>
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { useStateComponent, StateComponentProps } from '../../composables/view-state/useState/useStateComponent';
import { hProps } from '../../composables/utils/useProps';
import { ref } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateComponentProps,
 tag: { // for useBlock
  type: String,
  default: 'select',
 },
});
const elementRef = ref<HTMLSelectElement>();
const model = defineModel<string>();
//
const block = useBlock(props);
useStateComponent(props, model);
const attrs = hProps(block);
</script>
