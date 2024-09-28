<template>
 <VCalendar :is-dark="isDark" />
</template>

<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar';
import { useDark } from '../../../composables/utils/useDark';
import './index.css';
//
const isDark = useDark();
// 反応しない
// const key = computed(() => {
//  return isDark.value;
// });
</script>

<style>
.vc-day {
 z-index: 0;
}
</style>
