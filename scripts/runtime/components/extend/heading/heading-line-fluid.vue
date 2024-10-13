<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title" position="relative" display="inline-block" z="1" margin="b-0" >
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../html-block/div';
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
.heading-block:after,.heading-block:before{border-top-width:v-bind(lineBorderWidth);content:"";height:0;left:auto;position:absolute;right:0;width:100%}.heading-block.text-center:after,.heading-block.text-center:before,.heading-block.text-end:after,.heading-block.text-end:before{left:0}.heading-title{background-color:var(--bs-body-bg);padding-right:v-bind(lineMargin)}.text-end .heading-title{padding-left:v-bind(lineMargin);padding-right:0}.text-center .heading-title{padding-left:v-bind(lineMargin);padding-right:v-bind(lineMargin)}.line-double:before{top:48%}.line-double:after,.line-double:before{border-top-color:v-bind(lineColor);border-top-style:v-bind(lineStyle)}.line-double:after{top:58%}.line-single:before{border-top-color:v-bind(lineColor);border-top-style:v-bind(lineStyle);top:50%}
</style>
