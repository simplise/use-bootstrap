<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../htmlBlock/div';
import {
 addClassNames,
 hasValue,
} from '../../../composables/utils/useProps';
import { computed } from '#imports'

const props = defineProps({
  decoration: {
    type: [String, Array ],
    default: 'bottom',
  },
  barColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  barBorderWidth: {
    type: [Number, String],
    default: 4, // px
  },
  barWidth: {
    type: String,
    default: '3em', 
  },
  barMargin: {
    type: String,
    default: '0.5em', 
  },
  barStyle: {
    type: String,
    default: 'solid', 
  }
});

const classBlock = computed(() => {
  return {
    ...addClassNames(hasValue(props.decoration), n => `decoration-${n}`),
  };
})

const barColor = computed(() => {
  return `var(--bs-${props.barColor})`
})
const barBorderWidth = computed(() => {
  return `${props.barBorderWidth}px`
})
const barWidth = computed(() => {
  return `${props.barWidth}`
})
const barMargin = computed(() => {
  return `${props.barMargin}`
})
const barStyle = computed(() => {
  return `${props.barStyle}`
})

</script>

<style scoped>
.heading-block:not(.text-end) {
  border-left-style: v-bind(barStyle);
  padding-left: v-bind(barMargin);
}

.heading-block.text-end {
  border-right-style: v-bind(barStyle);
  padding-right: v-bind(barMargin);
}

.heading-block{
  border-left-width: v-bind(barBorderWidth);
  border-right-width: v-bind(barBorderWidth);
  border-left-color: v-bind(barColor);
  border-right-color: v-bind(barColor);
}

</style>
