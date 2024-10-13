<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../html-block/div';
import { computed } from '#imports'

const props = defineProps({
  barPosition: {
    type: String,
    default: 'bottom', // bottom, top
  },
  barColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  barBorderWidth: {
    type: [Number, String],
    default: 3, // px
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
    [`bar-${props.barPosition}`]: true,
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
.heading-block:after,.heading-block:before{border-color:v-bind(barColor);border-top-style:v-bind(barStyle);content:"";display:inline-block}.bar-bottom:after,.bar-top:before{border-top-width:v-bind(barBorderWidth);width:v-bind(barWidth)}.bar-bottom:after,.bar-top:before{margin-bottom:v-bind(barMargin);margin-top:v-bind(barMargin)}
</style>
