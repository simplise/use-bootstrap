<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title" position="relative" display="inline-block">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../htmlBlock/div';
import { computed } from '#imports'

const props = defineProps({
  linePosition: {
    type: String,
    default: 'inward', // inward, outward
  },
  lineColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  lineBorderWidth: {
    type: [Number, String],
    default: 1, // px
  },
  lineWidth: {
    type: String,
    default: '3em', 
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
    [`line-position-${props.linePosition}`]: true,
  };
})

const lineColor = computed(() => {
  return `var(--bs-${props.lineColor})`
})
const lineBorderWidth = computed(() => {
  return `${props.lineBorderWidth}px`
})
const lineWidth = computed(() => {
  return `${props.lineWidth}`
})
const lineMargin = computed(() => {
  return `${props.lineMargin}`
})
const lineStyle = computed(() => {
  return `${props.lineStyle}`
})
</script>

<style scoped lang="scss">

.heading-block .heading-title::after,
.heading-block.text-center .heading-title::before,
.heading-block.text-end .heading-title::before {
  content: "";
  position: absolute;
  top: calc(50% - v-bind(lineBorderWidth) / 2);
  display: inline-block;
  width: v-bind(lineWidth);
  border-top-width: v-bind(lineBorderWidth);
  border-top-style: v-bind(lineStyle);
  border-top-color: v-bind(lineColor);
}

 
.line-position-inward.heading-block .heading-title {
  padding-right: calc(v-bind(lineWidth) + v-bind(lineMargin));
}

.line-position-inward.heading-block.text-center .heading-title,
.line-position-inward.heading-block.text-end .heading-title {
  padding-left: calc(v-bind(lineWidth) + v-bind(lineMargin));
}

.line-position-inward.heading-block.text-end .heading-title {
  padding-right: 0;
}

.line-position-inward.heading-block .heading-title::after {
  right: 0;
}

.line-position-inward.heading-block.text-center .heading-title::before {
  left: 0;
}

.line-position-inward.heading-block.text-end .heading-title::before {
  left: 0;
}

.line-position-inward.heading-block.text-end .heading-title::after {
  display: none;
}

.line-position-outward.heading-block .heading-title {
  padding-left: calc(v-bind(lineWidth) + v-bind(lineMargin));
}

.line-position-outward.heading-block.text-center .heading-title,
.line-position-outward.heading-block.text-end .heading-title {
  padding-right: calc(v-bind(lineWidth) + v-bind(lineMargin));
}

.line-position-outward.heading-block.text-end .heading-title {
  padding-left: 0;
}

.line-position-outward.heading-block .heading-title::after {
  left: 0;
}

.line-position-outward.heading-block.text-center .heading-title::before {
  right: 0;
}

.line-position-outward.heading-block.text-end .heading-title::before {
  right: 0;
}

.line-position-outward.heading-block.text-end .heading-title::after {
  display: none;
}

</style>
