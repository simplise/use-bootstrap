<script setup lang="ts">
definePageMeta({
  'title:en': 'Object fit',
  'description:en': `Use the object fit utilities to modify how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.`,
  'title:ja': 'オブジェクトフィット',
  'description:ja': 'オブジェクトフィットユーティリティを使って、<img>や<video>のような置換された要素の内容を、そのコンテナに合わせてどのようにリサイズするかを変更します。'
})
</script>

<template>
  <h2>Examples</h2>
  <Snippet>
    <Example class="d-flex overflow-auto">
      <examples-utilities-object-fit-example />
    </Example>
    <ExamplesCode
      path="/utilities/object-fit/example.vue"
      lang="vue"
    />
  </Snippet>
  <h2>Responsive</h2>
  <Snippet>
    <Example class="d-flex overflow-auto">
      <examples-utilities-object-fit-responsive />
    </Example>
    <ExamplesCode
      path="/utilities/object-fit/responsive.vue"
      lang="vue"
    />
  </Snippet>
</template>
