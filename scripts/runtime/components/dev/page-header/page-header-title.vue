<script setup lang="ts">
//
const props = defineProps({
  level: {
    type: Number,
    default: 2
  }
})
</script>

<template>
  <b-headings
    :level="props.level"
    class="page-header-title"
  >
    <slot />
  </b-headings>
</template>

