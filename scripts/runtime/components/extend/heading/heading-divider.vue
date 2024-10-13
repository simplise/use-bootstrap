<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
    <b-div :class="classDivider">
      <slot name="divider" />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../htmlBlock/div';
import { computed } from '#imports'

const props = defineProps({
  icon: {
    type: String,
    default: "bi:dot",
  },
  line: {
    type: Boolean,
    default: false,
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
    default: '0.5em',
  },
  lineStyle: {
    type: String,
    default: 'solid',
  }
});

const classBlock = computed(() => {
  return {
    [`line`]: props.line,
  };
})

const classDivider = computed(() => {
  return {
    [`heading-divider`]: true,
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
.line .heading-divider::after,
.line .heading-divider::before {
  content: "";
  position: absolute;
  top: calc(50% - (v-bind(lineBorderWidth) / 2));
  display: inline-block;
  width: v-bind(lineWidth);
  border-top-width: v-bind(lineBorderWidth);
  border-top-style: v-bind(lineStyle);
  border-color: v-bind(lineColor);
}

.line .heading-divider {
  position: relative;
  display: inline-block;
}

.line .heading-divider::after,
.line .heading-divider::before {
  right: calc(0px - v-bind(lineWidth) - v-bind(lineMargin));
}

.line.text-center .heading-divider::before {
  left: calc(0px - v-bind(lineWidth) - v-bind(lineMargin));
}


.line.text-end .heading-divider::before {
  left: calc(0px - v-bind(lineWidth) - v-bind(lineMargin));
}

.line.text-end .heading-divider::after {
  display: none;
}
</style>
