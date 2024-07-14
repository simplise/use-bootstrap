<template>
  <li
    v-for="error in errors"
    :key="error"
  >
    <slot v-bind="{ error }" />
  </li>
</template>
<script setup lang="ts">
//
import { CombadgeErrorsProps, useCombadgeErrors } from "../../../composables/combadge/useCombadgeErrors"
//
const props = defineProps({
  ...CombadgeErrorsProps
})
//
const { errors } = useCombadgeErrors(props)
</script>
