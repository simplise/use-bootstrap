<script setup lang="ts">
import { computed } from '#imports';
//
const props = defineProps({
 virtical: {
  type: String,
  default: 'sm',
 },
 horizontal: {
  type: String,
  default: 'sm',
 },
});
//
const classObject = computed(() => {
 return {
  [`hv-divider`]: true,
  [`hv-divider-${props.virtical}`]: props.virtical,
  'align-middle': true,
 };
});
</script>

<template>
 <b-span :class="classObject" />
</template>

<style>
.hv-divider {
  display: inline-block;
  border-top: var(--bs-border-width) solid;
  align-self: stretch;
  width: 100%;
  opacity: 0.25;
  padding: 0;
}

@media (min-width: 576px) {
  .hv-divider-sm {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    height: 1em;
    border-left: var(--bs-border-width) solid;
    border-top: none;
    height: auto;
    padding: 0;
    margin-left: var(--bs-border-width);
  }
}
@media (min-width: 768px) {
  .hv-divider-md {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
@media (min-width: 992px) {
  .hv-divider-lg {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
@media (min-width: 1200px) {
  .hv-divider-xl {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
@media (min-width: 1400px) {
  .hv-divider-xxl {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
</style>
