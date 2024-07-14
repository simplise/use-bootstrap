<template>
  <Suspense>
    <slot
      v-if="data"
      v-bind="{ data }"
    />
    <template #fallback>
      <Spinner sm />
    </template>
  </Suspense>
</template>
<script setup lang="ts">
//
import { CombadgeProps , useCombadge } from "../../composables/combadge/useCombadge"
//
const props = defineProps({
  ...CombadgeProps,
})
//
defineOptions({
  inheritAttrs: false
})
const { data } = await useCombadge(props)
</script>
