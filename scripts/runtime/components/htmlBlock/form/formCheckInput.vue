<template>
 <input
  v-bind="attrs"
  ref="elementRef"
  :value="value"
  :checked="checked"
  :class="classObject"
  @change="changeValue"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateInput, StateInputProps } from '../../../composables/viewState/useState/useStateInput';
import { addProp, hProps } from '../../../utils/useProps';
import { useFormItem } from '../../../composables/bootstrap/useFormLabel';
import { IDProps } from '../../../composables/attributes/useID';
import { inject, onMounted, ref } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...IDProps,
 ...StateInputProps,
 tag: {
  type: String,
  default: 'input',
 },
 type: {
  type: String,
  default: 'checkbox',
 },
 indeterminate: {
  type: Boolean,
  default: false,
 },
});
const emits = defineEmits(['update:modelValue']);
//
const elementRef = ref<HTMLSelectElement>();
const block = useBlock(props);
const formItem = useFormItem(props);
const { value, classObject, changeValue, checked } = useStateInput(props, emits);

//
const isSwitch = inject<boolean>('switch', false);
const current = {
 ref: elementRef,
 class: {
  [`form-check-input`]: true,
 },
 attr: {
  type: props.type,
  ...addProp(isSwitch, 'role', 'switch'),
 },
};
if (props.indeterminate) {
 onMounted(() => {
  if (elementRef.value instanceof HTMLInputElement) {
   elementRef.value.indeterminate = true;
  }
 });
}
const attrs = hProps(current, formItem, block);
</script>
