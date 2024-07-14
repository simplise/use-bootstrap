<template>
  <Suspense>
    <component
      :is="props.tag"
      v-for="(item, index) in data"
      :key="usePropsKey(item)"
    >
        <slot v-bind="{ item }" />
    </component>
    <template #fallback>
      <Spinner sm />
    </template>
  </Suspense>
</template>
<script setup lang="ts">
//
import { CombadgeProps, useCombadge } from "../../../composables/combadge/useCombadge"
import { usePropsKey } from "../../../composables/combadge/usePropsKey";
import Intersect from './i-intersect-item.vue'
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
const { data } = await useCombadge(props)
</script>
