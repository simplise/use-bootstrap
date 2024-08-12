<script setup lang="ts">
import FsLightbox from 'fslightbox-vue/v3';
import { ref } from '#imports';

const toggler = ref<boolean>(false);
</script>

<template>
 <div>
  <button @click="toggler = !toggler">
   Open the lightbox.
  </button>
  <FsLightbox
   :toggler="toggler"
   :sources="[
    '',
   ]"
  />
 </div>
</template>
