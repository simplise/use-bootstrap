<template>
 <input
  v-bind="attrs"
  v-model="model"
  :class="classObject"
  type="color"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateComponent, StateComponentProps } from '../../../composables/viewState/useState/useStateComponent';
import { hProps } from '../../../composables/utils/useProps';
import { computed } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateComponentProps,
 tag: {
  type: String,
  default: 'input',
 },
 size: {
  type: String, // sm, lg
  default: undefined,
 },
 readonly: {
  type: Boolean,
 },
});
const model = defineModel<string>('#000000');
//
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);
//
const current = {
 class: computed(() => {
  return {
   [`form-control-color`]: true,
   [`form-control`]: !props.readonly,
   [`form-control-${props.size}`]: props.size,
  };
 }),
 // attr: {
 //  type: 'color',
 // },
};
const attrs = hProps(current, block);
</script>
