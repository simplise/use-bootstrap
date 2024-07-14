<template>
  <slot :name="name" />
</template>
<script setup lang="ts">
import { useDynamicRouteParam } from "../../../composables/extend/dynamicRoute/useDynamicRouteParam"
//
const props = defineProps({
  paramName: { type: String, default: "" }
})
//
const name = useDynamicRouteParam(props.paramName)
</script>
