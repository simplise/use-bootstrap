<template>
 <select
  v-bind="attrs"
  ref="elementRef"

  :multiple="multiple"
  @change="changeValue"
 >
  <slot />
 </select>
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateSelect, StateSelectProps } from '../../../composables/viewState/useState/useStateSelect';
import { addProp, hProps } from '../../../utils/useProps';
import { computed, ref } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateSelectProps,
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
});
const elementRef = ref<HTMLSelectElement>();
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, changeValue } = useStateSelect(props, elementRef, emits);
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

<!-- import { useInline, InlineProps } from '../../../composables/base/useInline';
import { addProp, hProps } from '../../../utils/useProps';
import { useValid, ValidProps } from '../../../composables/bootstrap/useValid';
import {
 SelectModelProps,
 SelectModelEmits,
 useSelectModel,
} from '../../../composables/base/useSelectModel';
import { defineComponent, h, computed, ref } from '#imports';
//
export default defineComponent({
 name: 'FormSelect',
 props: {
  ...InlineProps,
  ...ValidProps,
  ...SelectModelProps,
  tag: {
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
 },
 emits: [
  ...SelectModelEmits,
 ],
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const inline = useInline(props);
  const valid = useValid(props);
  const selectModel = useSelectModel(props, context.emit, elementRef);
  //
  const current = {
   ref: elementRef,
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
  //
  return () => h(props.tag, hProps(current, valid, inline, selectModel), context.slots);
 },
}); -->
