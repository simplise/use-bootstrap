<template>
  <b-div class="heading-block" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../htmlBlock/div';
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
.heading-block {
  border-bottom-width: 1px ;
  border-bottom-style: v-bind(barStyle);
  border-bottom-color: v-bind(barColor);
}

.heading-title {
  position: relative;
  display: inline-block;
  top: calc( v-bind(barBorderWidth) / 2 );
  padding-bottom: v-bind(barMargin);
  border-bottom-width: v-bind(barBorderWidth);
  border-bottom-style: solid;
  border-bottom-color: v-bind(barColor);
}

</style>
