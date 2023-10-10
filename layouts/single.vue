<template>
  <!-- <DocsShareSkippy></DocsShareSkippy>
  <DocsShareIcons></DocsShareIcons> -->
  <ShareHeader />
  <main
    id="content"
    class="bd-content order-1 py-5"
  >
    <div class="container-xxl bd-gutter">
      <slot />
    </div>
  </main>
  <ShareFooter />
</template>
<script setup lang="ts">
// useHead({
//   htmlAttrs: {
//     'data-bs-theme': 'light'
//   }
// })
</script>

