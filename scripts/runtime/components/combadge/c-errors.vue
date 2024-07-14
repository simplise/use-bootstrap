<template>
  <Inner
    v-bind="props"
    :key="key"
    v-slot="{ error }"
  >
    <slot v-bind="{ error }" />
  </Inner>
</template>
<script setup lang="ts">
//
import { CombadgeErrorsProps } from "../../composables/combadge/useCombadgeErrors"
import { usePropsKey } from "../../composables/combadge/usePropsKey";
import Inner from './inner/i-errors.vue'
//
const props = defineProps({
  ...CombadgeErrorsProps
})
//
const key = usePropsKey(props)
</script>
