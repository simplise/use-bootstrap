<template>
 <input
  v-bind="attrs"
  :value="value"
  :class="classObject"
  @input="updateValue"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateInput, StateInputProps } from '../../../composables/viewState/useState/useStateInput';
import { hProps } from '../../../utils/useProps';
//
const props = defineProps({
 ...BlockProps,
 ...StateInputProps,
 tag: {
  type: String,
  default: 'input',
 },
});
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, updateValue, classObject } = useStateInput(props, emits);

const current = {
 class: {
  [`form-range`]: true,
 },
 attr: {
  type: 'range',
 },
};
const attrs = hProps(current, block);
</script>
