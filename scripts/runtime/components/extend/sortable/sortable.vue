<template>
 <sortable-inner
  v-model="model"
  :class="{ ...classObject }"
 >
  <slot />
 </sortable-inner>
</template>

<script  setup  lang="ts">
//
import { useStateComponent, StateComponentProps } from '../../../composables/view-state/useState/useStateComponent';
import { defineModel } from '#imports';
//
const model = defineModel<unknown[]>();
const props = defineProps({
 ...StateComponentProps,

});
//
const { classObject } = useStateComponent(props, model);
//
</script>
