<template>
  <slot v-if="(index < preRenderLength || targetIsVisible)" />
  <div
    v-else
    ref="target"
  />
</template>
<script setup lang="ts">
//
import { useIntersectionObserver } from '@vueuse/core'
import { ref, onUnmounted } from '#imports'
//
defineProps({
  index: {
    type: Number,
    default: 0
  },
  preRenderLength: {
    type: Number,
    default: 24 // 24からテスト変更
  }
})
//
defineOptions({
  inheritAttrs: false
})
//
const target = ref(null)
const targetIsVisible = ref(false)
//
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
    if (isIntersecting) {
      stop()
    }
  },
  {
    rootMargin: "0px 0px 10% 0px"
  }
)
onUnmounted(() => stop())

</script>
