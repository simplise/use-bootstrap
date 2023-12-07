<template>
  <slot :name="route.params.lang || 'en'" />
</template>
<script setup lang="ts">
import { useRoute } from "#app";
const route = useRoute()
</script>
