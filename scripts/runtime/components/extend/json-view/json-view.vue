<script setup lang="ts">
defineProps({
 data: {
  type: Object,
  required: true,
 },
});
</script>

<template>
 <pre>{{ JSON.stringify(data, null, " ") }}
  </pre>
</template>
