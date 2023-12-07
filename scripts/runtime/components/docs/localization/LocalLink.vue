<template>
  <NuxtLink
    :to="`/lang-${lang}${to}`"
    :hreflang="lang"
  >
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">
import { useRoute } from "#app";
import { computed } from "vue"
//
defineProps({
  to: { type: String, default: "/" }
})
//
const route = useRoute()
const lang = computed(() => route.params.lang || 'en') 
</script>
