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

</style>
