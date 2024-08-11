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
    'https://i.imgur.com/fsyrScY.jpg',
    'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
   ]"
  />
 </div>
</template>
