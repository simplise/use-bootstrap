<script setup lang="ts">
import { computed } from '#imports';
//
const props = defineProps({
 virtical: {
  type: String,
  default: 'sm',
 },
});
//
const classObject = computed(() => {
 return {
  [`htv-divider`]: true,
  [`htv-divider-${props.virtical}`]: props.virtical,
  'align-middle': true,
 };
});
</script>

<template>
 <b-span :class="classObject" />
</template>

<style>
.htv-divider{align-self:stretch;border-top:var(--bs-border-width) solid;display:inline-block;opacity:.25;padding:0;width:100%}@media (min-width:576px){.htv-divider-sm{align-self:stretch;border-left:var(--bs-border-width) solid;border-top:none;display:inline-block;height:1em;height:auto;margin-left:var(--bs-border-width);min-height:1em;opacity:.25;padding:0;width:var(--bs-border-width)}}@media (min-width:768px){.htv-divider-md{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:var(--bs-border-width)}}@media (min-width:992px){.htv-divider-lg{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:var(--bs-border-width)}}@media (min-width:1200px){.htv-divider-xl{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:var(--bs-border-width)}}@media (min-width:1400px){.htv-divider-xxl{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:var(--bs-border-width)}}
</style>
