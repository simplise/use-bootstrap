<template>
  <b-div
    padding="t-2 s-lg-2"
    class="bd-intro"
  >
    <h1
      id="content"
      class="bd-title mb-5"
    >
      {{ title }}
    </h1>
    <p class="bd-lead">
      {{ description }}
    </p>
  </b-div>
</template>
<script setup lang="ts">
import { useRoute, computed } from "#imports"
const route = useRoute()
const title = computed(() => (route.meta[`title:${route.params.lang}`] || route.meta.title) as string)
const description = computed(() => (route.meta[`description:${route.params.lang}`] || route.meta.description) as string)
</script>