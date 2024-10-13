<template>
 <li class="breadcrumb-item">
  <Anchor v-if="!active" v-bind="attrs">
   <slot />
  </Anchor>
  <slot v-if="active" />
 </li>
</template>
<script setup>
import Anchor from '../../htmlInline/anchor'
import { useAttrs } from '#imports';
const attrs = useAttrs();
const props = defineProps({
  active: {
    type: Boolean,
    default: undefined,
  }
})
</script>