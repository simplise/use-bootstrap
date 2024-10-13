<template>
  <component :is="type">
    <slot />
    <template #divider>
      <slot name="divider" />
    </template>
  </component>
</template>
<script setup lang="ts">
import { computed } from '#imports'
import headingLineFluid from './heading-line-fluid.vue';
import headingLineShort from './heading-line-short.vue';
import headingDivider from './heading-divider.vue';
import headingBar from './heading-bar.vue';
import headingDualBar from './heading-dual-bar.vue';
import headingSideBar from './heading-side-bar.vue';
import headingMaker from './heading-maker.vue';
import headingBox from './heading-box.vue';
import headingSimple from './heading-simple.vue';

const props = defineProps({
  type: {
    type: String,
    default: undefined,
  },
});

const type = computed(() => {
  switch(props.type)
  {
    case 'line-fluid':
      return headingLineFluid;
    case 'line':
      return headingLineShort;
    case 'divider':
      return headingDivider;
    case 'bar':
      return headingBar;
    case 'dual-bar':
      return headingDualBar;
    case 'side-bar':
      return headingSideBar;
    case 'maker':
      return headingMaker;
    case 'box':
      return headingBox;
    default:
      return headingSimple;
  }
});

</script>
