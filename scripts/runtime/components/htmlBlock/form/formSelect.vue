<template>
 <select
  v-bind="attrs"
  v-model="model"
  :multiple="multiple"
  :class="classObject"
 >
  <slot />
 </select>
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateComponent, StateComponentProps } from '../../../composables/viewState/useState/useStateComponent';
import { addProp, hProps } from '../../../composables/utils/useProps';
import { computed } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateComponentProps,
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
 multiple: {
  type: Boolean,
  default: undefined,
 },
});

const model = defineModel<string | Array<string>>();
//
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);
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
