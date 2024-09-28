<template>
 <input
  v-bind="attrs"
  v-model="model"
  :type="type"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { useStateComponent, StateComponentProps } from '../../composables/viewState/useState/useStateComponent';
import { hProps } from '../../composables/utils/useProps';
//
const props = defineProps({
 ...BlockProps,
 ...StateComponentProps,
 tag: { // for useBlock
  type: String,
  default: 'input',
 },
 type: {
  type: String,
  default: 'text',
 },
});
const model = defineModel<string | boolean | string[]>();
//
const block = useBlock(props);
useStateComponent(props, model);
const attrs = hProps(block);
</script>
