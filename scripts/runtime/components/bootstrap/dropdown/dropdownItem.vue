<template>
 <li>
  <Anchor class="dropdown-item" v-bind="attrs">
   <slot />
  </Anchor>
 </li>
</template>
<script setup>
import Anchor from '../../html-inline/anchor'
import { useAttrs } from '#imports';
const attrs = useAttrs();

</script>