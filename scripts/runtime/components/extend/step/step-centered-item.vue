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
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1em;
}

.step-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-line {
  width: 2px;
  background-color: var(--bs-border-color);
  flex-grow: 1;
  margin-top: 10px;
  margin-bottom: 10px;
}

.step-content {
  margin-left: 20px;
  flex-grow: 1;
}
</style>
