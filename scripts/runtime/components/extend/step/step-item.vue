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
.step-item {
  display: flex;
  align-items: center;
}
.step-container {
  display: flex;
  align-items: center;
  position: relative;
}
.line {
  height: 2px;
  background-color: var(--bs-border-color);
  flex-grow: 1;
  margin-left:0.5em;
  margin-right: 1em;
}
</style>
