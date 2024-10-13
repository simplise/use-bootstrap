<template>
 <slot
  v-if="state.status.value == 0"
  name="default"
  :action="state.action"
  :data="state.data"
 />
 <slot
  v-else-if="state.status.value == 102"
  name="fallback"
 >
  <Spinner
   spinner="grow"
   sm
   aria-hidden="true"
  />
 </slot>
 <slot
  v-else
  name="complete"
  :action="state.action"
  :data="state.data"
  :status="state.status"
 >
  {{ state.status }}
 </slot>
</template>

<script setup lang="ts">
//
import { ActionStateProps, useActionState } from '../../composables/action-state/useActionState';
//
const props = defineProps({
 ...ActionStateProps,
});
//
defineOptions({
 inheritAttrs: false,
});
//
const state = useActionState(props);
</script>
