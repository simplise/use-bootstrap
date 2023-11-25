<template>
  <ShareHeader />
  <Container
    type="xxl"
    margin="t-3 y-md-4"
    class="bd-gutter bd-layout"
  >
    <ShareSidebar />
    <b-main
      flex-order="1"
      class="bd-main"
    >
      <ShareIntro />
      <ShareToc />
      <b-div
        id="bd-content"
        padding="s-lg-2"
        class="bd-content"
      >
        <slot />
      </b-div>
    </b-main>
  </Container>
  <ShareFooter />
</template>
<script setup lang="ts">

</script>

