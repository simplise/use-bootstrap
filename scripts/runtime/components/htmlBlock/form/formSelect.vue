<template>
 <select
  v-bind="attrs"
  ref="elementRef"

  :multiple="multiple"
  @change="changeValue"
 >
  <slot />
 </select>
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateSelect, StateSelectProps } from '../../../composables/viewState/useState/useStateSelect';
import { addProp, hProps } from '../../../utils/useProps';
import { computed, ref } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateSelectProps,
 tag: { // for useBlock
  type: String,
  default: 'select',
 },
 size: {
  type: String,
  default: undefined,
 },
 length: {
  type: [Number, String],
  default: undefined,
 },
});
const elementRef = ref<HTMLSelectElement>();
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, changeValue } = useStateSelect(props, elementRef, emits);
//
const current = {
 class: computed(() => {
  return {
   [`form-select`]: true,
   [`form-select-${props.size}`]: props.size,
  };
 }),
 attr: computed(() => {
  return {
   ...addProp(props.length, 'size', `${props.length}`),
  };
 }),
};
const attrs = hProps(current, block);
</script>
