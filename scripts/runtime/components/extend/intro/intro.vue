<template>
 <b-div
  padding="t-2 s-lg-2"
  class="bd-intro"
 >
  <b-h
   level="1"
   class="bd-title"
   margin="b-2 t-2 b-lg-4"
   display-headings="3"
   font-weight="bold"
  >
   {{ title }}
  </b-h>
  <p class="bd-lead">
   {{ description }}
  </p>
 </b-div>
</template>

<script setup lang="ts">
import { useDynamicRouteParam } from '../../../composables/extend/dynamicRoute/useDynamicRouteParam';
import { useRoute, computed } from '#imports';

const lang = useDynamicRouteParam('lang');
const route = useRoute();
const title = computed(() => (route.meta[`title:${lang.value}`] || route.meta.title) as string);
const description = computed(() => (route.meta[`description:${lang.value}`] || route.meta.description) as string);
</script>
