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

<style lang="scss">
.divider-start {
    display: flex;
    align-items: center;
    color: var(--bs-secondary-color);

    &::after {
      flex: 1 1 0%;
      border-top: var(--divider-border-width) solid var(--bs-border-color);
      margin-top: var(--divider-border-width);
      margin-left: var(--divider-spacer);
      content: '';
    }
  }

  .divider-end {
    display: flex;
    align-items: center;
    color: var(--bs-secondary-color);;

    &::before {
      flex: 1 1 0%;
      border-top: var(--divider-border-width) solid var(--bs-border-color);
      margin-top: var(--divider-border-width);
      content: '';
    }

    &::before {
      margin-right: var(--divider-spacer);
    }
  }

  .divider-center {
    display: flex;
    align-items: center;
    color: var(--bs-secondary-color);

    &::before,
    &::after {
      flex: 1 1 0%;
      border-top: var(--divider-border-width) solid var(--bs-border-color);
      margin-top: var(--divider-border-width);
      content: '';
    }

    &::before {
      margin-right: var(--divider-spacer);
    }

    &::after {
      margin-left: var(--divider-spacer);
    }
  }
</style>
