<template>
  <button :key="key" @click="action(props.stateAction, props.stateActionParams, $event)">
    <slot />
  </button>
</template>
<script setup lang="ts">
//
import { CombadgeActionProps, useCombadgeAction } from "../../composables/combadge/useCombadgeAction"
import { usePropsKey } from "../../composables/combadge/usePropsKey";
//
const props = defineProps({
  ...CombadgeActionProps,
})
//
const { action } = useCombadgeAction(props)
const key = usePropsKey(props)
</script>
