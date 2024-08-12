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
import { useFormItem } from '../../../composables/bootstrap/useFormLabel';
import { IDProps } from '../../../composables/attributes/useID';
import {
 useFormControl,
 FormControlProps,
} from '../../../composables/bootstrap/useFormControl';
//
const props = defineProps({
 ...BlockProps,
 ...FormControlProps,
 ...IDProps,
 ...StateInputProps,
 tag: { // For Block Placeholder
  type: String,
  default: 'input',
 },
});
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, updateValue, classObject } = useStateInput(props, emits);
const formControl = useFormControl(props);
const formItem = useFormItem(props);
const attrs = hProps(formControl, formItem, block);
</script>
