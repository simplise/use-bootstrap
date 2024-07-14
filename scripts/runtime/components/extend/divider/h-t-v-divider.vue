<script setup lang="ts">
  import { computed } from "#imports";
  //
  const props = defineProps({
    virtical: {
      type: String,
      default: "sm" 
    }
  })
  //
  const classObject = computed(() => {
    return {
      [`htv-divider`]: true,
      [`htv-divider-${props.virtical}`]: props.virtical,
      "align-middle": true,
    }
  })

</script>

<template>
  <b-span :class="classObject" >
  </b-span>
</template>

<style>
.htv-divider {
  display: inline-block;
  border-top: var(--bs-border-width) solid;
  align-self: stretch;
  width: 100%;
  opacity: 0.25;
  padding: 0;
}

@media (min-width: 576px) {
  .htv-divider-sm {
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
  .htv-divider-md {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
@media (min-width: 992px) {
  .htv-divider-lg {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
@media (min-width: 1200px) {
  .htv-divider-xl {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
@media (min-width: 1400px) {
  .htv-divider-xxl {
    display: inline-block;
    align-self: stretch;
    width: var(--bs-border-width);
    min-height: 1em;
    opacity: 0.25;
    background-color: currentcolor;
  }
}
</style>