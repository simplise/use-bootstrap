<template>
  <component :is="layoutComponent">
    <template #header>
      <slot name="header" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
    <template #mini>
      <slot name="mini" />
    </template>
    <template #start>
      <slot name="start" />
    </template>
    <template #startHeader>
      <slot name="startHeader" />
    </template>
    <template #startFooter>
      <slot name="startFooter" />
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
import miniOneColumnsSidebar from './mini-one-columns-sidebar.vue';
import { useDarkTemp } from '../../../composables/utils/useDarkTemp';
import { computed } from '#imports';

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: undefined
  },
});
const layoutComponent = computed(() => {
  switch (camelCase(props.type)) {
    case 'startSidebar':
    case 'containerSidebar':
      return containerSidebar;
    case 'threeColumns':
    case 'twoColumnsBetween':
      return twoColumnsBetween;
    case 'oneColumns':
    case 'landing':
      return landing;
    case 'miniOneColumnsSidebar':
      return miniOneColumnsSidebar;
    default:
      return twoColumnsBetween;
  }
});
const isDark = useDarkTemp();
if (props.theme) {
  if (props.theme === 'dark') {
    isDark.value = true;
  } else if (props.theme === 'light') {
    isDark.value = false;
  }
}
</script>
