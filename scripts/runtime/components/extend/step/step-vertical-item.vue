<template>
 <b-div class="step-item">
  <div class="step-container">
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
  </div>
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
.step-item{align-items:stretch;display:flex;margin-bottom:1em}.step-container{align-items:center;display:flex;flex-direction:column;flex-grow:1}.step-line{background-color:var(--bs-border-color);height:100%;margin-top:1em;width:2px}.step-content{flex-grow:1;margin-left:20px}
</style>
