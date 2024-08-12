<script setup lang="ts">
import { computed } from '#imports';
//
const props = defineProps({
 horizontal: {
  type: String,
  default: 'sm',
 },
});
//
const classObject = computed(() => {
 return {
  [`vth-divider`]: true,
  [`vth-divider-${props.horizontal}`]: props.horizontal,
  'align-middle': true,
 };
});
</script>

<template>
 <b-span :class="classObject" />
</template>

<style>
.vth-divider{align-self:stretch;border-left:var(--bs-border-width) solid;display:inline-block;height:1em;height:auto;margin-left:var(--bs-border-width);min-height:1em;opacity:.25;padding:0;width:var(--bs-border-width)}@media (min-width:576px){.vth-divider-sm{align-self:stretch;border-left:none;border-top:var(--bs-border-width) solid;display:inline-block;opacity:.25;padding:0;width:100%}}@media (min-width:768px){.vth-divider-md{align-self:stretch;border-left:none;border-top:var(--bs-border-width) solid;display:inline-block;opacity:.25;padding:0;width:100%}}@media (min-width:992px){.vth-divider-lg{align-self:stretch;border-left:none;border-top:var(--bs-border-width) solid;display:inline-block;opacity:.25;padding:0;width:100%}}@media (min-width:1200px){.vth-divider-xl{align-self:stretch;border-left:none;border-top:var(--bs-border-width) solid;display:inline-block;opacity:.25;padding:0;width:100%}}@media (min-width:1400px){.vth-divider-xxl{align-self:stretch;border-left:none;border-top:var(--bs-border-width) solid;display:inline-block;opacity:.25;padding:0;width:100%}}
</style>
