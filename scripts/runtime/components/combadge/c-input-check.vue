<template>
  <Suspense>
    <input
      v-model="check"
      type="checkbox"
      v-bind="$attrs"
    >
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

const check = computed({
  get() {
    return data.value
  },
  set(newValue) {
    data.value = newValue
  }
})
</script>
