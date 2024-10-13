<template>
  <b-div class="position-relative" overflow="hidden" relative-width="100" :style="style" v-bind="attrs" :class="classObject" ref="elementRef">
    <video v-if="gr && videoSrc" autoplay muted loop class="video-background">
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-else-if="imgSrc" :class="imgClass" :style="{ backgroundImage: `url(${imgSrc})` }" />

    <slot />
    <slot name="shape" />
    <!-- <div
   v-if="props.clip"
   style="height:60px;"
  /> -->
    <svg v-if="props.clip == 'arc-bottom'" class="position-absolute z-1" style="width: 0;height: 0;">
      <defs>
        <clipPath id="clip-arc-bottom" clipPathUnits="objectBoundingBox">
          <path d="M 0,0 H 1 V 0.85 Q 0.5,1 0,0.85 Z" />
        </clipPath>
      </defs>
    </svg>
  </b-div>
</template>

<script setup>
import { useBreakpoints, breakpointsBootstrapV5, useElementBounding, useWindowSize } from '../../../composables/utils/helpers';
import {
  addProp,
} from '../../../composables/utils/useProps';
import { computed, useAttrs, ref } from '#imports';

const props = defineProps({
  videoSrc: {
    type: String,
  },
  imgSrc: {
    type: String,
  },
  imgParallax: {
    type: Number,
    default: 0,
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
  patternParallax: {
    type: Number,
    default: 0,
  },
});
const elementRef = ref()
const { top, height } = useElementBounding(elementRef, { updateTiming: 'next-frame', reset: false })
const windowSize = useWindowSize();
const attrs = useAttrs();
const breakpoints = useBreakpoints(breakpointsBootstrapV5);
const gr = breakpoints.greater('xs');
const style = computed(() => {
  return {
    ...addProp(props.overlay, 'background-image', `linear-gradient(to right,rgb(from var(--bs-${props.overlayColor}) r g b / ${props.overlayAlpha}) 0,rgb(from var(--bs-${props.overlayColor}) r g b / ${props.overlayAlpha}) 100%)`),
    ...addProp(props.patternSrc, '--pattern-src', `url('${props.patternSrc}')`),
    '--pattern-opacity': props.patternOpacity,
    '--pattern-parallax-pos': props.patternParallax ? -(top.value + height.value / 2 - (windowSize.height.value / 2)) * props.patternParallax + 'px' : 0,
    '--img-parallax-pos': props.imgParallax ? -(top.value + height.value / 2 - (windowSize.height.value / 2)) * props.imgParallax + 'px' : 0,
    '--img-parallax-height': props.imgParallax ? ((windowSize.height.value - height.value) / height.value * (1 + props.imgParallax) * 100) + '%' : 0,
    '--img-parallax-top': props.imgParallax ? -((windowSize.height.value - height.value) / height.value * (1 + props.imgParallax) * 100 - 100) / 2 + '%' : 0,
  };
});

const classObject = computed(() => {
  return {
    'clip-diagonal-bottom-right': props.clip === 'diagonal-bottom-right',
    'clip-diagonal-bottom-left': props.clip === 'diagonal-bottom-left',
    'clip-arc-bottom': props.clip === 'arc-bottom',
    'pattern': props.patternSrc,
    'pattern-parallax': props.patternParallax,
  };
});

const imgClass = computed(() => {
  return {
    'image-background': true,
    'image-parallax': props.imgParallax,
  };
});

</script>

<style scoped>
.video-background,
.image-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.image-parallax {
  top: var(--img-parallax-top);
  height: var(--img-parallax-height);
  transform: translate(0, var(--img-parallax-pos));
  transition: transform 0.5s ease-out;
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
  transform: translate3d(0, var(--pattern-parallax-pos), 0);
  transition: transform 0.5s ease-out;
}

.pattern-parallax::before {
  top: -50vh;
  bottom: -50vh;
}
</style>
