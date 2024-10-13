<template>
  <b-div class="heading-block" :class="classBlock" position="relative">
    <b-div class="heading-title" position="relative" display="inline-block">
      <slot />
    </b-div>
  </b-div>
</template>
<script setup lang="ts">
import bDiv from '../../html-block/div';
import { computed } from '#imports'

const props = defineProps({
  makerPosition: {
    type: String,
    default: 'top', // top, bottom, side
  },
  makerColor: {
    type: String,
    default: 'border-color', // primary, green-500, dark etc.
  },
  makerWidth: {
    type: String,
    default: '1em', 
  },
  makerMargin: {
    type: String,
    default: '0.5em', 
  },
  maker: {
    type: String,
    default: 'square',  //square, circle
  }
});

const classBlock = computed(() => {
  return {
    [`maker-position-${props.makerPosition}`]: true,
    [`maker-style-${props.maker}`]: true,
  };
})

const makerColor = computed(() => {
  return `var(--bs-${props.makerColor})`
})

const makerWidth = computed(() => {
  return `${props.makerWidth}`
})
const makerMargin = computed(() => {
  return `${props.makerMargin}`
})

</script>

<style scoped>
.heading-title::before {
  content: "";
  position: absolute;
  display: inline-block;
  margin-top: 1px;
  margin-left: 1px;
  width: calc(1em - 2px);
  height: calc(1em - 2px);
  background: v-bind(makerColor);
}

.maker-style-circle .heading-title::before {
  border-radius: 50%;
}

.maker-position-top.maker-style-square .heading-title,
.maker-position-top.maker-style-circle .heading-title {
  padding-top: 1em;
}
.maker-position-top.maker-style-square .heading-title::before,
.maker-position-top.maker-style-circle .heading-title::before {
  top: 0;
  left: 2px;
}

.maker-position-top.maker-style-square.text-center .heading-title::before,
.maker-position-top.maker-style-circle.text-center .heading-title::before {
  left: 50%;
  margin-left: -6px;
}

.maker-position-top.maker-style-square.text-end .heading-title::before,
.maker-position-top.maker-style-circle.text-end .heading-title::before {
  left: auto;
  right: 2px;
}

.maker-position-side.maker-style-square .heading-title,
.maker-position-side.maker-style-circle .heading-title {
  padding-left: 1.5em;
}
.maker-position-side.maker-style-square .heading-title::before,
.maker-position-side.maker-style-circle .heading-title::before {
  left: 0;
  top: 25%;
}

.maker-position-side.maker-style-square.text-end .heading-title,
.maker-position-side.maker-style-circle.text-end .heading-title {
  padding-right: 1.5em;
}
.maker-position-side.maker-style-square.text-end .heading-title::before,
.maker-position-side.maker-style-circle.text-end .heading-title::before {
  left: auto;
  right: 0;
  top: 25%;
}

.maker-position-bottom.maker-style-square .heading-title,
.maker-position-bottom.maker-style-circle .heading-title {
  padding-bottom: 1em;
}
.maker-position-bottom.maker-style-square .heading-title::before,
.maker-position-bottom.maker-style-circle .heading-title::before {
  bottom: 0;
  left: 2px;
}

.maker-position-bottom.maker-style-square.text-center .heading-title::before,
.maker-position-bottom.maker-style-circle.text-center .heading-title::before {
  left: 50%;
  margin-left: -6px;
}

.maker-position-bottom.maker-style-square.text-end .heading-title::before,
.maker-position-bottom.maker-style-circle.text-end .heading-title::before {
  left: auto;
  right: 2px;
}
</style>
