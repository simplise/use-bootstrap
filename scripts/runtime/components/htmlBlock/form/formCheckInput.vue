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

<!-- import { useInline, InlineProps } from '../../../composables/base/useInline';
import { useFormItem } from '../../../composables/bootstrap/useFormLabel';
import { IDProps } from '../../../composables/attributes/useID';
import { addProp, hProps } from '../../../utils/useProps';
import { useValid, ValidProps } from '../../../composables/bootstrap/useValid';
import {
 InputModelProps,
 InputModelEmits,
 useInputModel,
} from '../../../composables/base/useInputModel';
import { defineComponent, h, inject, ref, onMounted } from '#imports';
//
export default defineComponent({
 name: 'BsFormCheckInput',
 props: {
  ...InlineProps,
  ...IDProps,
  ...ValidProps,
  ...InputModelProps,
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
 },
 emits: [
  ...InputModelEmits,
 ],
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const inline = useInline(props);
  const formItem = useFormItem(props);
  const valid = useValid(props);
  const inputModel = useInputModel(props, context.emit, elementRef);
  //
  const isSwitch = inject<boolean>('switch', false);
  //
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
  //
  return () =>
   h(props.tag, hProps(current, formItem, valid, inline, inputModel), context.slots);
 },
}); -->
