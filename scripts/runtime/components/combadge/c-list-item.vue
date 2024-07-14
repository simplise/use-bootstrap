<template>
  <Inner
    v-bind="props"
    :key="key"
    v-slot="{ item }"
  >
    <slot v-bind="{ item }" />
  </Inner>
</template>
<script setup lang="ts">
//
import { CombadgeProps  } from "../../composables/combadge/useCombadge"
import { usePropsKey } from "../../composables/combadge/usePropsKey";
import Inner from './inner/i-list-item.vue'

//
const props = defineProps({
  ...CombadgeProps,
  tag: {
    type: String,
    default: "li"
  },
})
//
defineOptions({
  inheritAttrs: false
})
//
const key = usePropsKey(props)
//
</script>
