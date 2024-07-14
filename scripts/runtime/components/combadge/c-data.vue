<template>
  <Inner
    v-bind="props"
    v-slot="{ data }"
    :key="key"
  >
    <slot v-bind="{ data }" />
  </Inner>
</template>
<script setup lang="ts">
//
import { CombadgeProps } from "../../composables/combadge/useCombadge"
import { usePropsKey } from "../../composables/combadge/usePropsKey";
import Inner from './inner/i-data.vue'
//
const props = defineProps({
  ...CombadgeProps,
})
//
defineOptions({
  inheritAttrs: false
})
// const { data } = await useCombadge(props)
const key = usePropsKey(props)
</script>
