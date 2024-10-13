<template>
 <input
  v-bind="attrs"
  v-model="model"
  :class="classObject"
  type="range"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateComponent, StateComponentProps } from '../../../composables/view-state/useState/useStateComponent';
import { hProps } from '../../../composables/utils/useProps';
//
const props = defineProps({
 ...BlockProps,
 ...StateComponentProps,
 tag: {
  type: String,
  default: 'input',
 },
});
const model = defineModel<boolean | number | string[] | number[]>();
//
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);

const current = {
 class: {
  [`form-range`]: true,
 },
 // attr: {
 //  type: 'range',
 // },
};
const attrs = hProps(current, block);
</script>
