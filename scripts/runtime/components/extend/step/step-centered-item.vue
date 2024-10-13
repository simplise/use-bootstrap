<template>
 <b-div class="step-item">
  <b-div class="step-container">
   <Avatar
    circle
    :color="color"
    :initials="initials"
    :size="size"
   />
   <b-div
    rounded="pill"
    class="step-line"
   />
  </b-div>
  <div class="step-content">
   <slot />
  </div>
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
.step-item{justify-content:center;margin-bottom:1em}.step-container,.step-item{align-items:center;display:flex;flex-direction:column;position:relative}.step-line{background-color:var(--bs-border-color);flex-grow:1;margin-bottom:10px;margin-top:10px;width:2px}.step-content{flex-grow:1;margin-left:20px}
</style>
