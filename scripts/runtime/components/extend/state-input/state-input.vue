<template>
 <input
  :value="value"
  :class="{ ...block.class.value }"
  :style="{ ...block.style.value }"
  v-bind="block.attr.value"
  @input="updateValue"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import type { IViewStateResult } from '../../../composables/viewState/useViewState';
import { useStateInput } from './useStateInput';
import type { PropType } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 stateSrc: {
  type: Object as PropType<IViewStateResult>,
 },
 statePath: {
  type: String,
 },
 modelValue: {
  type: String,
 },
});
const emits = defineEmits(['update:modelValue']);
//
const block = useBlock(props);
const { value, updateValue } = useStateInput(props, emits);
</script>
