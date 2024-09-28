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

<style lang="scss">
  .vth-divider {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: .25;
    height: 1em;
    border-left: var(--bs-border-width) solid;

    height: auto;
    padding: 0;
    margin-left: var(--bs-border-width);
  }

  @media (min-width:576px) {
    .vth-divider-sm {
      display: inline-block;
      border-top: var(--bs-border-width) solid;
      border-left: none;
      align-self: stretch;
      width: 100%;
      opacity: .25;
      padding: 0;
    }
  }

  @media (min-width:768px) {
    .vth-divider-md {
      display: inline-block;
      border-top: var(--bs-border-width) solid;
      border-left: none;
      align-self: stretch;
      width: 100%;
      opacity: .25;
      padding: 0;
    }
  }

  @media (min-width: 992px) {
    .vth-divider-lg {
      display: inline-block;
      border-top: var(--bs-border-width) solid;
      border-left: none;
      align-self: stretch;
      width: 100%;
      opacity: .25;
      padding: 0;
    }
  }

  @media (min-width: 1200px) {
    .vth-divider-xl {
      display: inline-block;
      border-top: var(--bs-border-width) solid;
      border-left: none;
      align-self: stretch;
      width: 100%;
      opacity: .25;
      padding: 0;
    }
  }

  @media (min-width: 1400px) {
    .vth-divider-xxl {
      display: inline-block;
      border-top: var(--bs-border-width) solid;
      border-left: none;
      align-self: stretch;
      width: 100%;
      opacity: .25;
      padding: 0;
    }
  }
</style>
