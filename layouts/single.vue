<template>
  <ShareHeader />
  <b-main
    id="content"
    flex-order="1"
    padding="y-5"
    class="bd-content"
  >
    <Container
      type="xxl"
      class="bd-gutter"
    >
      <slot />
    </Container>
  </b-main>
  <ShareFooter />
</template>
<script setup lang="ts">
</script>

