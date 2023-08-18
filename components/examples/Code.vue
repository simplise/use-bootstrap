<template>
  <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
    <small class="font-monospace text-body-secondary text-uppercase">{{ lang }}</small>
    <div class="d-flex ms-auto">
      <!-- <button type="button" class="btn-edit text-nowrap" aria-label="Try it on StackBlitz" data-bs-original-title="Try it on StackBlitz">
        <svg class="bi" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill"></use>
        </svg>
      </button>
      <button type="button" class="btn-clipboard mt-0 me-0" aria-label="Copy to clipboard" data-bs-original-title="Copy to clipboard">
        <svg class="bi" aria-hidden="true">
          <use xlink:href="#clipboard"></use>
        </svg>
      </button> -->
    </div>
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

