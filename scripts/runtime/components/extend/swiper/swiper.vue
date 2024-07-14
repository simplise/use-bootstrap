<script setup lang="ts">
  import { ref } from "#imports";
  import { Swiper as VSwiper } from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y, Thumbs, Mousewheel, Autoplay } from 'swiper/modules';
  import 'swiper/scss';
  import 'swiper/scss/a11y';
  import 'swiper/scss/autoplay';
  import 'swiper/scss/controller';
  import 'swiper/scss/thumbs';
  import 'swiper/scss/effect-coverflow';
  import 'swiper/scss/effect-cube';
  import 'swiper/scss/effect-fade';
  import 'swiper/scss/effect-flip';
  import 'swiper/scss/effect-creative';
  import 'swiper/scss/effect-cards';
  import 'swiper/scss/free-mode';
  import 'swiper/scss/grid';
  import 'swiper/scss/hash-navigation';
  import 'swiper/scss/history';
  import 'swiper/scss/keyboard';
  import 'swiper/scss/manipulation';
  import 'swiper/scss/mousewheel';
  import 'swiper/scss/navigation';
  import 'swiper/scss/pagination';
  import 'swiper/scss/parallax';
  import 'swiper/scss/scrollbar';
  import 'swiper/scss/thumbs';
  import 'swiper/scss/virtual';
  import 'swiper/scss/zoom';
  
  const props = defineProps({
    navigation: {
      type: [Boolean, Object],
      default: undefined
    },
    pagination: {
      type: [Boolean, Object],
      default: undefined
    },
    thumbs: {
      type: [Boolean, Object],
      default: undefined
    },
    direction: {
      type: [Boolean, Object, String],
      default: undefined
    },
    mousewheel: {
      type: [Boolean, Object, String],
      default: undefined
    },
    autoplay: {
      type: [Boolean, Object, String],
      default: undefined
    }
  })

  const modules = ref([Scrollbar, A11y])

  if (props.navigation) {
    modules.value.push(Navigation)
  }
  if (props.pagination) {
    modules.value.push(Pagination)
  }
  if (props.thumbs) {
    modules.value.push(Thumbs)
  }
  if (props.mousewheel) {
    modules.value.push(Mousewheel)
  }
  if (props.autoplay) {
    modules.value.push(Autoplay)
  }
</script>

<template>
  <v-swiper :modules="modules" :navigation="navigation" :pagination="pagination" :thumbs="thumbs" :direction="direction" :mousewheel="mousewheel" :autoplay="autoplay">
    <slot />
  </v-swiper>
  
</template>

