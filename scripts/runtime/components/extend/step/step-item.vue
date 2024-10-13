<template>
 <b-div>
  <div class="step-container">
   <Avatar
    circle
    :color="color"
    :initials="initials"
    :size="size"
   />
   <b-div
    rounded="pill"
    class="line"
   />
  </div>
  <slot />
 </b-div>
</template>

<script setup>
defineProps({
 color: {
  type: String,
  default: 'primary-subtle',
 },
 initials: {
  type: String,
 },
 size: {
  type: String,
 },
 col: {
  type: String,
 },
});
</script>

<style scoped>
.step-container,.step-item{align-items:center;display:flex}.step-container{position:relative}.line{background-color:var(--bs-border-color);flex-grow:1;height:2px;margin-left:.5em;margin-right:1em}
</style>
