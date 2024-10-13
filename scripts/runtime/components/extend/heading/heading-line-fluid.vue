<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title" position="relative" display="inline-block" z="1" margin="b-0" >
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../htmlBlock/div';
import { computed } from '#imports'

const props = defineProps({
  decoration: {
    type: [String, Array ],
    default: 'double',
  },
  line: {
    type: String,
    default: 'single',
  },
  lineColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  lineBorderWidth: {
    type: [Number, String],
    default: 1, // px
  },
  lineMargin: {
    type: String,
    default: '1em', 
  },
  lineStyle: {
    type: String,
    default: 'solid', 
  }
});

const classBlock = computed(() => {
  return {
    [`line-${props.line}`]: true,
  };
})

const lineColor = computed(() => {
  return `var(--bs-${props.lineColor})`
})
const lineBorderWidth = computed(() => {
  return `${props.lineBorderWidth}px`
})
const lineMargin = computed(() => {
  return `${props.lineMargin}`
})
const lineStyle = computed(() => {
  return `${props.lineStyle}`
})

</script>

<style scoped>

.heading-block::before,
.heading-block::after {
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 100%;
  height: 0;
  border-top-width: v-bind(lineBorderWidth);
}

.heading-block.text-center::before,
.heading-block.text-center::after {
  left: 0;
}

.heading-block.text-end::before,
.heading-block.text-end::after {
  left: 0;
}

.heading-title {
  padding-right: v-bind(lineMargin);
  background-color: var(--bs-body-bg);
}

.text-end .heading-title {
  padding-left: v-bind(lineMargin);
  padding-right: 0;
}

.text-center .heading-title {
  padding-left: v-bind(lineMargin);
  padding-right: v-bind(lineMargin);
}

.line-double::before {
  top: 48%;
  border-top-style: v-bind(lineStyle);
  border-top-color: v-bind(lineColor);
}

.line-double::after {
  top: 58%;
  border-top-style: v-bind(lineStyle);
  border-top-color: v-bind(lineColor);
}

.line-single::before {
  top: 50%;
  border-top-style: v-bind(lineStyle);
  border-top-color: v-bind(lineColor);
}

</style>
