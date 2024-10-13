<template>
 <b-div ref="fixedDiv" position="fixed">
   <slot />
 </b-div>
</template>

<script setup lang="ts">
import bDiv from '../../html-block/div';
import { onMounted, ref } from 'vue';
const fixedDiv = useTemplateRef('fixedDiv')
onMounted(() => {
  const updateWidth = () => {
    if (fixedDiv.value && fixedDiv.value.$el.parentElement) { 
      fixedDiv.value.$el.style.width = `${fixedDiv.value.$el.parentElement.offsetWidth}px`;
    }
  };
  window.addEventListener('resize', updateWidth);
  updateWidth();
});
</script>
