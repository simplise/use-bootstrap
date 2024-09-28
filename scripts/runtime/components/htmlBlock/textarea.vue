<template>
 <textarea
  v-bind="attrs"
  v-model="model"
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
  default: 'textarea',
 },
});
const model = defineModel<string>();
//
const block = useBlock(props);
useStateComponent(props, model);
const attrs = hProps(block);
</script>
