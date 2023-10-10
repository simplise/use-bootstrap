<script setup lang="ts">
definePageMeta({
  'title:en': 'Z-index',
  'description:en': `Use our low-level z-index utilities to quickly change the stack level of an element or component.`,
  'title:ja': 'Z-index',
  'description:ja': '要素やコンポーネントのスタック・レベルを素早く変更するには、低レベルのz-indexユーティリティを使用してください。'
})
</script>

<template>
  <h2>Examples</h2>
  <Snippet>
    <Example
      z-index-levels
      class="position-relative"
    >
      <examples-utilities-z-index-example />
    </Example>
    <ExamplesCode
      path="/utilities/z-index/example.vue"
      lang="vue"
    />
  </Snippet>
</template>
