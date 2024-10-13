<template>
 <Anchor class="list-group-item list-group-item-action" :class="currentClass">
  <slot />
 </Anchor>
</template>
<script setup>
import Anchor from '../../html-inline/anchor'
const props = defineProps({
 color: {
  type: String,
  default: undefined,
 }
})
const currentClass = computed(() => {
 return {
  [`list-group-item-${props.color}`]: props.color,
 }
})
</script>