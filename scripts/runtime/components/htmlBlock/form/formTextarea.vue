<template>
 <textarea
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
 tag: {
  type: String,
  default: 'textarea',
 },
});
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, updateValue, classObject } = useStateInput(props, emits);
const formControl = useFormControl(props);
const formItem = useFormItem(props);
const attrs = hProps(formControl, formItem, block);

// import {
//  useFormControl,
//  FormControlProps,
// } from '../../../composables/bootstrap/useFormControl';
// import { hProps } from '../../../utils/useProps';
// import { InlineProps, useInline } from '../../../composables/base/useInline';
// import { useValid, ValidProps } from '../../../composables/bootstrap/useValid';
// import {
//  InputModelProps,
//  InputModelEmits,
//  useInputModel,
// } from '../../../composables/base/useInputModel';
// import { defineComponent, h, ref } from '#imports';
// //
// export default defineComponent({
//  name: 'BsFormTextarea',
//  props: {
//   ...InlineProps,
//   ...FormControlProps,
//   ...ValidProps,
//   ...InputModelProps,
//   tag: {
//    type: String,
//    default: 'textarea',
//   },
//  },
//  emits: [
//   ...InputModelEmits,
//  ],
//  setup(props, context) {
//   //
//   const elementRef = ref<HTMLElement>();
//   const inline = useInline(props);
//   const formControl = useFormControl(props);
//   const valid = useValid(props);
//   const inputModel = useInputModel(props, context.emit, elementRef);
//   //
//   const current = {
//    ref: elementRef,
//   };
//   return () => h(props.tag, hProps(formControl, valid, inline, inputModel, current), context.slots);
//  },
// });
</script>
