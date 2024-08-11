<template>
 <input
  v-bind="attrs"
  :value="value"
  :type="type"
  :checked="checked"
  @input="updateValue"
  @change="changeValue"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { useStateInput, StateInputProps } from '../../composables/viewState/useState/useStateInput';
import { hProps } from '../../utils/useProps';
//
const props = defineProps({
 ...BlockProps,
 ...StateInputProps,
 tag: { // for useBlock
  type: String,
  default: 'input',
 },
});
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, updateValue, changeValue, checked } = useStateInput(props, emits);
const attrs = hProps(block);
</script>
