<template>
 <component :is="layoutComponent">
  <template #header>
   <slot name="header" />
  </template>
  <template #footer>
   <slot name="footer" />
  </template>
  <template #start>
   <slot name="start" />
  </template>
  <template #end>
   <slot name="end" />
  </template>
  <template #default>
   <slot name="default" />
  </template>
 </component>
</template>

<script setup>
import { camelCase } from '../../../composables/utils/helpers';
import containerSidebar from './container-sidebar.vue';
import twoColumnsBetween from './two-columns-between.vue';
import landing from './landing.vue';
import { computed } from '#imports';

const props = defineProps({
 type: String,
});
const layoutComponent = computed(() => {
 switch (camelCase(props.type)) {
  case 'containerSidebar':
   return containerSidebar;
  case 'twoColumnsBetween':
   return twoColumnsBetween;
  case 'landing':
   return landing;
  default:
   return twoColumnsBetween;
 }
});
</script>
