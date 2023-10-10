<template>
  <NuxtLayout>
    <NuxtPage />  
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
useSeoMeta({
  title: () =>  (route.meta['title:en'] || route.meta.title) as string,
  description: () => (route.meta['description:en'] || route.meta.description) as string,
});
</script>

