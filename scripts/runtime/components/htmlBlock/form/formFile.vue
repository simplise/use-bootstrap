<template>
 <input
  v-bind="attrs"
  type="file"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
// import { useStateComponent, StateComponentProps } from '../../../composables/viewState/useState/useStateComponent';
import { hProps } from '../../../composables/utils/useProps';
import { computed } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 // ...StateComponentProps,
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
// const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
// const { classObject } = useStateComponent(props, emits);
//
const current = {
 class: computed(() => {
  return {
   [`form-control`]: !props.readonly,
   [`form-control-${props.size}`]: props.size,
  };
 }),
 // attr: {
 //  type: 'file',
 // },
};
const attrs = hProps(current, block);
</script>
