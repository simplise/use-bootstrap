<script setup lang="ts">
defineProps({
 data: {
  type: [Object, Array, String, Number, Boolean],
  required: false,
 },
});
</script>

<template>
 <pre>{{ JSON.stringify(data, null, " ") }}
  </pre>
</template>
