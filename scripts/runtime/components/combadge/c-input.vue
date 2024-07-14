<template>
  <Suspense>
    <input v-model.lazy="data" v-bind="$attrs">
    <template #fallback>
      <Spinner sm />
    </template>
  </Suspense>
</template>
<script setup lang="ts">
//
import { CombadgeProps, useCombadge } from "../../composables/combadge/useCombadge"
//
const props = defineProps({
  ...CombadgeProps
})
//
const { data } = await useCombadge(props)
</script>
