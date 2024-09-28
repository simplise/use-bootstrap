<template>
 <div
  :class="cssClass"
  :style="{ 'background-color': backgroundColor }"
 >
  <div>
   <slots />
  </div>
 </div>
</template>

<script setup>
defineProps({
 cssClass: {
  type: String,
  default: undefined,
 },
 backgroundColor: {
  type: String,
  default: undefined,
 },
 width: {
  type: String,
  default: '600px',
 },
});
</script>
