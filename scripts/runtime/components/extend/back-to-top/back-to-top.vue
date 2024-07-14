<script setup lang="ts">
  import { ref, computed, watch } from "#imports";
  import { useWindowScroll, defaultWindow } from '@vueuse/core'
  import { delay } from "../../../utils/helpers"
  // https://developers.google.com/youtube/player_parameters?hl=ja
  // https://github.com/NomNes/vue3-youtube
  // https://github.com/stepanowon/youtube-vue3

  const props = defineProps({
    offsetTop: {
      type: Number,
      default: 500
    },
    color: {
      type: String,
      default: "primary"
    }
  })

  const { y } = useWindowScroll()

  const isShown = ref<boolean>()
  const isShow = ref<boolean>()

  const classObject = computed(() => {
    return {
      "animate__animated ": true,
      "animate__fadeOutDown": !isShown.value,
      "animate__fadeInUp": isShown.value,
      "position-fixed": true,
      "invisible": !isShow.value
    }
  })

  watch(() => y.value > props.offsetTop, async (newState) => {
    isShown.value = newState
    if (isShown.value) {
      isShow.value = true
    }
    else {
      await delay(3000)
      isShow.value = isShown.value
    }
  })

  const onClick = () => {
    defaultWindow?.scrollTo({ top: 0, behavior: 'smooth' })
  }

</script>

<template>
  <IconBox icon="bi:chevron-up" :color="props.color" circle :class="classObject" @click="onClick" style="bottom:2rem;right:2rem;" />
</template>
