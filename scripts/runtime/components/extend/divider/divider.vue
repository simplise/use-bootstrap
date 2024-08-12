<script setup lang="ts">
import { computed } from '#imports';
//
const props = defineProps({
 alignment: {
  type: String,
  default: 'center', // start end center
 },
 title: {
  type: String,
  default: 'center', // start end center
 },
});
//
const classObject = computed(() => {
 return {
  [`divider-${props.alignment}`]: props.alignment,
 };
});
//
const styleObject = computed(() => {
 return {
  [`--divider-border-width`]: '1px',
  [`--divider-spacer`]: '1.5em',
 };
});
</script>

<template>
 <b-span
  :class="classObject"
  :style="styleObject"
 >
  {{ props.title }}
 </b-span>
</template>

<style>
.divider-start{align-items:center;color:var(--bs-secondary-color);display:flex}.divider-start:after{border-top:var(--divider-border-width) solid var(--bs-border-color);content:"";flex:1 1 0%;margin-left:var(--divider-spacer);margin-top:var(--divider-border-width)}.divider-end{align-items:center;color:var(--bs-secondary-color);display:flex}.divider-end:before{border-top:var(--divider-border-width) solid var(--bs-border-color);content:"";flex:1 1 0%;margin-right:var(--divider-spacer);margin-top:var(--divider-border-width)}.divider-center{align-items:center;color:var(--bs-secondary-color);display:flex}.divider-center:after,.divider-center:before{border-top:var(--divider-border-width) solid var(--bs-border-color);content:"";flex:1 1 0%;margin-top:var(--divider-border-width)}.divider-center:before{margin-right:var(--divider-spacer)}.divider-center:after{margin-left:var(--divider-spacer)}
</style>
