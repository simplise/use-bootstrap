<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <div class="d-md-flex flex-md-row-reverse align-items-center justify-content-between">
      <div class="mb-3 mb-md-0 d-flex text-nowrap">
        <!-- <a class="btn btn-sm btn-bd-light rounded-2" href="https://github.com/twbs/bootstrap/blob/v5.3.1/site/content/docs/5.3/getting-started/introduction.md" title="View and edit this file on GitHub" target="_blank" rel="noopener">
          View on GitHub
        </a> -->
      </div>
      <h1
        id="content"
        class="bd-title mb-5"
      >
        {{ title }}
      </h1>
    </div>
    <p class="bd-lead">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const title = computed(() => (route.meta['title:en'] || route.meta.title) as string)
const description = computed(() => (route.meta['description:en'] || route.meta.description) as string)
</script>