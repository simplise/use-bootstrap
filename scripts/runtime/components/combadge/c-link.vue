<template>
  <a
    :key="key"
    @click="set(props.stateTo)"
  >
    <slot v-bind="{ data }" />
  </a>
</template>
<script setup lang="ts">
//
import { CombadgeProps, useCombadge } from "../../composables/combadge/useCombadge"
import { usePropsKey } from "../../composables/combadge/usePropsKey";
//
const props = defineProps({
  ...CombadgeProps,
  stateTo: {
    type: [String, Number, Object, Array],
    default: undefined
  },
  debounce:{
    type: Number,
    default: 0
  }
})
//
const { data } = await useCombadge(props)
//
const set = async (to: any /*, ev: Event */) => {
 data.value = to
}
const key = usePropsKey(props)

</script>
