<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title">
      <slot />
    </b-div>
  </b-div>
</template>

<script setup lang="ts">
import bDiv from '../../html-block/div';
import {
  addClassNames,
  hasValue,
} from '../../../composables/utils/useProps';
import { computed } from '#imports'

const props = defineProps({
  decoration: {
    type: [String, Array],
    default: 'double',
  },
  boxWidth: {
    type: String,
    default: '5em',
  },
  boxHeight: {
    type: String,
    default: '6em',
  },
  boxBorderColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  contentMarginX: {
    type: String,
    default: '1em',
  },
  contentMarginTop: {
    type: String,
    default: '1em',
  },
  boxBorderWidth: {
    type: [Number, String],
    default: 4, // px
  },
  boxBorderStyle: {
    type: String,
    default: 'solid',
  }
});

const classBlock = computed(() => {
  return {
    ...addClassNames(hasValue(props.decoration), n => `decoration-${n}`),
  };
})

const boxBorderColor = computed(() => {
  return `var(--bs-${props.boxBorderColor})`
})
const boxBorderWidth = computed(() => {
  return `${props.boxBorderWidth}px`
})

const boxBorderStyle = computed(() => {
  return `${props.boxBorderStyle}`
})
const contentMarginX = computed(() => {
  return `${props.contentMarginX}`
})
const contentMarginTop = computed(() => {
  return `${props.contentMarginTop}`
})
const boxWidth = computed(() => {
  return `${props.boxWidth}`
})
const boxHeight = computed(() => {
  return `${props.boxHeight}`
})

</script>

<style scoped>
.heading-block{margin-bottom:v-bind(boxHeight);text-align:center}.heading-block:before{border:v-bind(boxBorderWidth) v-bind(boxBorderStyle) v-bind(boxBorderColor);content:"";display:block;height:v-bind(boxHeight);left:50%;margin-left:calc(0px - v-bind(boxWidth)/2);position:absolute;width:v-bind(boxWidth)}.heading-block:not(.text-center,.text-end){padding-left:v-bind(contentMarginX);text-align:left}.heading-block:not(.text-center,.text-end):before{left:0;margin-left:0}.heading-block.text-end{padding-right:v-bind(contentMarginX);text-align:right}.heading-block.text-end:before{left:auto;margin-left:0;right:0}.heading-block *{position:relative;z-index:1}
</style>
