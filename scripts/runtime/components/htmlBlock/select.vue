<template>
 <select
  v-bind="attrs"
  ref="elementRef"
  :value="value"
  :multiple="multiple"
  @change="changeValue"
 >
  <slot />
 </select>
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { useStateSelect, StateSelectProps } from '../../composables/viewState/useState/useStateSelect';
import { hProps } from '../../utils/useProps';
import { ref } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateSelectProps,
 tag: { // for useBlock
  type: String,
  default: 'select',
 },
});
const elementRef = ref<HTMLSelectElement>();
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, changeValue } = useStateSelect(props, elementRef, emits);
const attrs = hProps(block);
</script>
