<script setup lang="ts">
import { delay, useWindowScroll, defaultWindow } from '../../../composables/utils/helpers';
import { ref, computed, watch } from '#imports';
//
const props = defineProps({
 offsetTop: {
  type: Number,
  default: 500,
 },
 color: {
  type: String,
  default: 'primary',
 },
});

const { y } = useWindowScroll();

const isShown = ref<boolean>();
const isShow = ref<boolean>();

const classObject = computed(() => {
 return {
  'animate__animated ': true,
  'animate__fadeOutDown': !isShown.value,
  'animate__fadeInUp': isShown.value,
  'position-fixed': true,
  'invisible': !isShow.value,
 };
});

watch(() => y.value > props.offsetTop, async (newState) => {
 isShown.value = newState;
 if (isShown.value) {
  isShow.value = true;
 }
 else {
  await delay(3000);
  isShow.value = isShown.value;
 }
});

const onClick = () => {
 defaultWindow?.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
 <IconBox
  icon="bi:chevron-up"
  :color="props.color"
  circle
  :class="classObject"
  style="bottom:2rem;right:2rem;"
  @click="onClick"
 />
</template>
