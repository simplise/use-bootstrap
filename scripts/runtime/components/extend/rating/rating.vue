<script setup lang="ts">
//
import BIcon from '../../icon/icon';

//
const props = defineProps({
 color: {
  type: String,
  default: 'yellow-500',
 },
 min: {
  type: Number,
  default: 0,
 },
 max: {
  type: Number,
  default: 100,
 },
 iconEmpty: {
  type: String,
  default: 'bi:star',
 },
 iconHalf: {
  type: String,
  default: 'bi:star-half',
 },
 iconFill: {
  type: String,
  default: 'bi:star-fill',
 },
 iconCount: {
  type: Number,
  default: 5,
 },
 value: {
  type: Number,
  default: 0,
 },
});
//
defineOptions({
 inheritAttrs: false,
});

const computedIcons = computed(() => {
 const icons: string[] = [];
 if (!props.value) {
  return icons;
 }
 const rating = (props.value - props.min) / (props.max - props.min) * props.iconCount;
 for (let i = 0; i < props.iconCount; i++) {
  if (i < Math.floor(rating)) {
   icons.push(props.iconFill);
  }
  else if (i < rating) {
   icons.push(props.iconHalf);
  }
  else {
   icons.push(props.iconEmpty);
  }
 }
 return icons;
});

//
</script>

<template>
 <b-span>
  <b-icon
   v-for="(icon, index) in computedIcons"
   :key="`${index}_${icon}`"
   :icon="icon"
   :text-color="color"
   v-bind="$attrs"
  />
 </b-span>
</template>
