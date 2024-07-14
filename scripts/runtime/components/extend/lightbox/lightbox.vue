<script setup lang="ts">
import { ref } from "#imports";
import FsLightbox from "fslightbox-vue/v3";

const toggler = ref<boolean>(false)

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
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      ]"
    />
  </div>
</template>
