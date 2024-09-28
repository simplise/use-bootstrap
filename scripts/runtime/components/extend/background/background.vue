<template>
 <b-div
  class="position-relative"
  overflow="hidden"
  relative-width="100"
  :style="style"
  v-bind="attrs"
  :class="classObject"
 >
  <video
   v-if="gr && videoSrc"
   autoplay
   muted
   loop
   class="video-background"
  >
   <source
    :src="videoSrc"
    type="video/mp4"
   />
   Your browser does not support the video tag.
  </video>
  <div
   v-else-if="imgSrc"
   class="image-background"
   :style="{ backgroundImage: `url(${imgSrc})` }"
  />

  <slot />
  <slot name="shape" />
  <!-- <div
   v-if="props.clip"
   style="height:60px;"
  /> -->
  <svg
   v-if="props.clip == 'arc-bottom'"
   class="position-absolute z-1"
   style="width: 0;height: 0;"
  >
   <defs>
    <clipPath
     id="clip-arc-bottom"
     clipPathUnits="objectBoundingBox"
    >
     <path d="M 0,0 H 1 V 0.85 Q 0.5,1 0,0.85 Z" />
    </clipPath>
   </defs>
  </svg>
 </b-div>
</template>

<script setup>
import { useBreakpoints, breakpointsBootstrapV5 } from '../../../composables/utils/helpers';
import {
 addProp,
} from '../../../composables/utils/useProps';
import { computed, useAttrs } from '#imports';

const props = defineProps({
 videoSrc: {
  type: String,
 },
 imgSrc: {
  type: String,
 },
 overlay: {
  type: Boolean,
  default: false,
 },
 overlayColor: {
  type: String,
  default: 'blue-800',
 },
 overlayAlpha: {
  type: String,
  default: '90%',
 },
 clip: {
  type: [Boolean, String],
  default: false,
 },
 patternSrc: {
  type: String,
 },
 patternOpacity: {
  type: Number,
  default: 0.1,
 },
});

const attrs = useAttrs();
const breakpoints = useBreakpoints(breakpointsBootstrapV5);
const gr = breakpoints.greater('xs');
const style = computed(() => {
 return {
  ...addProp(props.overlay, 'background-image', `linear-gradient(to right,rgb(from var(--bs-${props.overlayColor}) r g b / ${props.overlayAlpha}) 0,rgb(from var(--bs-${props.overlayColor}) r g b / ${props.overlayAlpha}) 100%)`),
  ...addProp(props.patternSrc, '--pattern-src', `url('${props.patternSrc}')`),
  '--pattern-opacity': props.patternOpacity,
 };
});

const classObject = computed(() => {
 return {
  'clip-diagonal-bottom-right': props.clip === 'diagonal-bottom-right',
  'clip-diagonal-bottom-left': props.clip === 'diagonal-bottom-left',
  'clip-arc-bottom': props.clip === 'arc-bottom',
  'pattern': props.patternSrc,
 };
});
</script>

<style scoped>
.video-background,
.image-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.image-background {
  background-size: cover;
  background-position: center;
}

.clip-diagonal-bottom-right {
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

.clip-diagonal-bottom-left {
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

.clip-arc-bottom {
  width: 100%;
  clip-path: url(#clip-arc-bottom);
}

.pattern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  /* 1以上にするとOffcanvasと重なる */
  background-image: var(--pattern-src);
  opacity: var(--pattern-opacity);
  ;
}
</style>
