<template>
 <input
  v-bind="attrs"
  ref="elementRef"
  v-model="model"
  :class="classObject"
 />
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useStateComponent, StateComponentProps } from '../../../composables/viewState/useState/useStateComponent';
import { hProps } from '../../../composables/utils/useProps';
import { useFormItem } from '../../../composables/bootstrap/useFormLabel';
import { IDProps } from '../../../composables/attributes/useID';
import {
 useFormControl,
 FormControlProps,
} from '../../../composables/bootstrap/useFormControl';
import { useFocused, FocusedProps } from '../../../composables/utils/useFocused';
//
const props = defineProps({
 ...BlockProps,
 ...FormControlProps,
 ...IDProps,
 ...StateComponentProps,
 ...FocusedProps,
 tag: { // For Block Placeholder
  type: String,
  default: 'input',
 },
});
const model = defineModel<string>();
const elementRef = ref();
//
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);
const formControl = useFormControl(props);
const formItem = useFormItem(props);
useFocused(props, elementRef);
const attrs = hProps(formControl, formItem, block);
//
</script>
