<template>
  <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
    <small class="font-monospace text-body-secondary text-uppercase">{{ lang }}</small>
  </div>
  <div class="highlight">
    <pre v-text="code" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  path : string
  lang?: string
}>()
const examples = useExamples()
const code  = examples[`/components/examples${props.path}`]
</script>

