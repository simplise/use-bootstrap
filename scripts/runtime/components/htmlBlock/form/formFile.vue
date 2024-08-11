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
import { computed } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...StateInputProps,
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
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, updateValue, classObject } = useStateInput(props, emits);
//
const current = {
 class: computed(() => {
  return {
   [`form-control`]: !props.readonly,
   [`form-control-${props.size}`]: props.size,
  };
 }),
 attr: {
  type: 'file',
 },
};
const attrs = hProps(current, block);
</script>


<!-- import { useInline, InlineProps } from '../../../composables/base/useInline';
import { hProps } from '../../../utils/useProps';
import { useValid, ValidProps } from '../../../composables/bootstrap/useValid';
import { defineComponent, h, computed } from '#imports';
//
export default defineComponent({
 name: 'BsFormFile',
 props: {
  ...InlineProps,
  ...ValidProps,
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
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const valid = useValid(props);
  //
  const current = {
   class: computed(() => {
    return {
     [`form-control`]: !props.readonly,
     [`form-control-${props.size}`]: props.size,
    };
   }),
   attr: {
    type: 'file',
   },
  };
  //
  return () => h(props.tag, hProps(current, valid, inline), context.slots);
 },
}); -->
