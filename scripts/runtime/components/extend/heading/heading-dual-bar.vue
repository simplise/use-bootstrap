<template>
  <b-div class="heading-block" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../html-block/div';
import { computed } from '#imports'

const props = defineProps({
  barColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  barBorderWidth: {
    type: [Number, String],
    default: 4, // px
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

const barColor = computed(() => {
  return `var(--bs-${props.barColor})`
})
const barBorderWidth = computed(() => {
  return `${props.barBorderWidth}px`
})

const barMargin = computed(() => {
  return `${props.barMargin}`
})
const barStyle = computed(() => {
  return `${props.barStyle}`
})

</script>

<style scoped>
.heading-block{border-bottom:1px v-bind(barStyle) v-bind(barColor)}.heading-title{border-bottom:v-bind(barBorderWidth) solid v-bind(barColor);display:inline-block;padding-bottom:v-bind(barMargin);position:relative;top:calc(v-bind(barBorderWidth)/2)}
</style>
