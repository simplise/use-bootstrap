<template>
 <div
  :class="{
   ...current,
  }"
 >
  <slot />
 </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from '#imports';

const props = defineProps({
 size: {
  type: String as PropType<'ledger ' | 'legal' | 'letter' | 'A3' | 'A4' | 'A5' | 'JIS-B4' | 'B4' | 'JIS-B5' | 'B5'>,
  default: 'A4',
 },
 pageBreak: {
  type: String as PropType<'auto' | 'before' | 'after'>,
  default: 'auto',
 },
});
const current = computed(() => {
 return {
  'paper': true,
  [`paper-${props.size}`]: true,
  'paper-break-before': props.pageBreak == 'before',
  'paper-break-after': props.pageBreak == 'after',
 };
});
</script>

<style scoped>
.paper-break-before{-moz-column-break-before:page;break-before:page}.paper-break-after{-moz-column-break-after:page;break-after:page}@media print and (orientation:portrait){.paper-ledger{width:11in}.paper-legal,.paper-letter{width:8.5in}.paper-A3{width:297mm}.paper-A4{width:210mm}.paper-A5{width:148mm}.paper-JIS-B4{width:257mm}.paper-B4{width:250mm}.paper-JIS-B5{width:182mm}.paper-B5{width:176mm}}@media print and (orientation:landscape){.paper-size-ledger{width:17in}.paper-size-legal{height:8.5in;width:14in}.paper-size-letter{width:11in}.paper-A3{width:420mm}.paper-A4{width:297mm}.paper-A5{width:210mm}.paper-JIS-B4{width:364mm}.paper-B4{width:353mm}.paper-JIS-B5{width:257mm}.paper-B5{width:250mm}}@media print and (color){*{print-color-adjust:exact;-webkit-print-color-adjust:exact}}@media print and (monochrome){canvas,figure,img,picture,svg{filter:grayscale(100%);-webkit-filter:grayscale(100%)}mark{background-color:#d3d3d3!important;print-color-adjust:exact;-webkit-print-color-adjust:exact}}
</style>
