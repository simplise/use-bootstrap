<script setup lang="ts">
const model = defineModel({ type: String, default: '' });
</script>

<template>
 <BFormInput
  v-model="model"
  size="sm"
  type="text"
 />
</template>
