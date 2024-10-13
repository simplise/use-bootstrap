<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../htmlBlock/div';
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

.heading-block::before,
.heading-block::after {
  content: "";
  display: inline-block;
  border-top-style: v-bind(barStyle);
  border-color: v-bind(barColor);
}

.bar-bottom::after,
.bar-top::before {
  width: v-bind(barWidth);
  border-top-width: v-bind(barBorderWidth);
}

.bar-bottom::after {
  margin-top: v-bind(barMargin);
  margin-bottom: v-bind(barMargin);
}

.bar-top::before {
  margin-top: v-bind(barMargin);
  margin-bottom: v-bind(barMargin);
}

</style>
