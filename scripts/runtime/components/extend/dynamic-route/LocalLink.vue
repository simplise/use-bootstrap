<template>
 <BsLink :id="`${idPrefix}${target}`" :ref="elementRef" :to="target" :hreflang="lang" v-bind="attrs">
  <slot />
 </BsLink>
</template>

<script setup lang="ts">
//
import { useDynamicRoute } from '../../../composables/extend/dynamicRoute/useDynamicRoute';
import { useDynamicRouteParam } from '../../../composables/extend/dynamicRoute/useDynamicRouteParam';
import BsLink from '../../nuxt/bslink';
import {
 CloseButtonProps,
 useCloseButton,
} from '../../../composables/bootstrap/useCloseButton';
import { hProps } from '../../../composables/utils/useProps';
// import {
//  useAnchor,
//  AnchorProps,
// } from '../../../composables/html/useAnchor';
import { ref } from '#imports';
//
const props = defineProps({
 // ...AnchorProps,
 ...CloseButtonProps,
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
const elementRef = ref<HTMLElement>();
const target = useDynamicRoute(props.to);
const lang = useDynamicRouteParam('lang');
const close = useCloseButton(props, elementRef);
const attrs = hProps(close/*, anchor*/);
</script>
