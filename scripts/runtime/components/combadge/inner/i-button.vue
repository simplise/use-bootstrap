<template>
  <button @click="action(props.stateAction, $event)">
    Submit
  </button>
</template>
<script setup lang="ts">
//
import { CombadgeActionProps, useCombadgeAction } from "../../../composables/combadge/useCombadgeAction"
//
const props = defineProps({
  ...CombadgeActionProps
})
//
const { action } = useCombadgeAction(props)

</script>
