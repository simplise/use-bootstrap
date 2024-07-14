<template>
  <ClientOnly v-if="props.unauthorizedTo">
    <Inner v-bind="props" :key="key" v-slot="{ data }">
      <slot v-bind="{ data }" />
    </Inner>
  </ClientOnly>
  <Inner v-else v-bind="props" :key="key" v-slot="{ data }">
    <slot v-bind="{ data }" />
  </Inner>
</template>
<script setup lang="ts">
//
import { CombadgeProps } from "../../composables/combadge/useCombadge"
import { usePropsKey } from "../../composables/combadge/usePropsKey";
import Inner from './inner/i-label.vue'
//
const props = defineProps({
  ...CombadgeProps
})
//
const key = usePropsKey(props)
</script>
