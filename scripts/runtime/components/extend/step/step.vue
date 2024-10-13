<template>
 <b-div class="step">
  <slot />
 </b-div>
</template>

<script setup>
defineProps({
 row: {
  type: String,
 },
});
</script>

<style scoped>
.step{align-items:center;display:flex;flex-direction:row}
</style>
