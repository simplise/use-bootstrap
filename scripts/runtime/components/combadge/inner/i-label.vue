<template>
  <Suspense>
    <span>
      {{ data }}
    </span>
    <template #fallback>
      <Spinner sm />
    </template>
  </Suspense>
</template>
<script setup lang="ts">
//
import { CombadgeProps, useCombadge } from "../../../composables/combadge/useCombadge"
//
const props = defineProps({
  ...CombadgeProps
})
//
const { data } = await useCombadge(props)
</script>
