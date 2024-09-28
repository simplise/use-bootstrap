<template>
 <li
  v-bind="attrs"
 >
  <Icon
   v-if="icon && !iconEnd"
   :icon="icon"
   :color="iconColor"
  />
  <slot />
  <Icon
   v-if="icon && iconEnd"
   :icon="icon"
   :color="iconColor"
  />
 </li>
</template>

<script setup lang="ts">
import { hProps } from '../../composables/utils/useProps';
import { useListItem, ListItemProps } from '../../composables/html/useListItem';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import { ActiveProps, useActive } from '../../composables/bootstrap/useItemsActive';
import { IDProps, useID } from '../../composables/attributes/useID';
import { ToggleProps, useToggle } from '../../composables/bootstrap/useToggle';
import Icon from '../../components/icon/icon';
import { ref } from '#imports';
//
const props = defineProps({
 ...BlockProps,
 ...BlockProps,
 ...ListItemProps,
 ...ActiveProps,
 ...IDProps,
 ...ToggleProps,
 tag: {
  type: String,
  default: 'li',
 },
 icon: {
  type: String,
  default: undefined,
 },
 iconEnd: {
  type: Boolean,
  default: false,
 },
 iconColor: {
  type: String,
  default: undefined,
 },
});

//
const block = useBlock(props);
const listItem = useListItem(props);
const id = useID(props, 'list-item');
const elementRef = ref<HTMLElement>();
const active = useActive(props, 'list', elementRef);
const toggle = useToggle(props, elementRef);
//
const current = {
 ref: elementRef,
};
const attrs = hProps(id, listItem, block, active, toggle, current);
//
</script>
