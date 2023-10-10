<template>
  <!-- <DocsShareSkippy></DocsShareSkippy>
  <DocsShareIcons></DocsShareIcons> -->
  <ShareHeader />
  <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
    <ShareSidebar />
    <main class="bd-main order-1">
      <ShareIntro />
      <ShareToc />
      <div
        id="bd-content"
        class="bd-content ps-lg-2"
      >
        <slot />
      </div>
    </main>
  </div>
  <ShareFooter />
</template>
<script setup lang="ts">
//useHead({
//   htmlAttrs: {
//     'data-bs-theme': 'light'
//   }
// })
</script>

