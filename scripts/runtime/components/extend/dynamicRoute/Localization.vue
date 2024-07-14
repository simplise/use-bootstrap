<template>
  <slot :name="name" />
</template>
<script setup lang="ts">
//
import { useDynamicRouteParam } from "../../../composables/extend/dynamicRoute/useDynamicRouteParam"
//
const name = useDynamicRouteParam("lang")
</script>
