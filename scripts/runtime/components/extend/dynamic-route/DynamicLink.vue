<template>
 <NuxtLink :to="target">
  <slot />
 </NuxtLink>
</template>

<script setup lang="ts">
import { useDynamicRoute } from '../../../composables/extend/dynamicRoute/useDynamicRoute';
//
const props = defineProps({
 to: { type: String, default: '/' },
});
//
const target = useDynamicRoute(props.to);
</script>
