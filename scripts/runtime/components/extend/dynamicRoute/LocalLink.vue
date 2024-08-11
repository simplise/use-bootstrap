<template>
 <BsLink
  :id="`${props.idPrefix}${target}`"
  :to="target"
  :hreflang="lang"
 >
  <slot />
 </BsLink>
</template>

<script setup lang="ts">
//
import { useDynamicRoute } from '../../../composables/extend/dynamicRoute/useDynamicRoute';
import { useDynamicRouteParam } from '../../../composables/extend/dynamicRoute/useDynamicRouteParam';
import BsLink from '../../nuxt/bslink';
//
const props = defineProps({
 to:
  {
   type: String,
   default: '/',
  },
 idPrefix: {
  type: String,
  default: 'local-link',
 },
});
//
const target = useDynamicRoute(props.to);
const lang = useDynamicRouteParam('lang');
</script>
