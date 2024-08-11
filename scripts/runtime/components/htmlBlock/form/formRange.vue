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


<!-- import { useInline, InlineProps } from '../../../composables/base/useInline';
import { hProps } from '../../../utils/useProps';
import { useValid, ValidProps } from '../../../composables/bootstrap/useValid';
import {
 InputModelProps,
 InputModelEmits,
 useInputModel,
} from '../../../composables/base/useInputModel';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsFormRange',
 props: {
  ...InlineProps,
  ...ValidProps,
  ...InputModelProps,
  tag: {
   type: String,
   default: 'input',
  },
 },
 emits: [
  ...InputModelEmits,
 ],
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const inline = useInline(props);
  const valid = useValid(props);
  const inputModel = useInputModel(props, context.emit, elementRef);
  //
  const current = {
   ref: elementRef,
   class: {
    [`form-range`]: true,
   },
   attr: {
    type: 'range',
   },
  };
  //
  return () => h(props.tag, hProps(current, valid, inline, inputModel), context.slots);
 },
}); -->
