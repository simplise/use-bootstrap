<script setup lang="ts">
definePageMeta({
  'title:en': 'Icon link',
  'description:en': `Quickly create stylized hyperlinks with Bootstrap Icons or other icons.`,
  'title:ja': 'アイコンリンク',
  'description:ja': 'Bootstrapアイコンやその他のアイコンを使って、スタイル化されたハイパーリンクをすばやく作成できます。'
})
</script>

<template>
  <h2>Example</h2>
  <Snippet>
    <Example>
      <examples-helpers-icon-link-example />
    </Example>
    <ExamplesCode
      path="/helpers/icon-link/example.vue"
      lang="vue"
    />
  </Snippet>
  <Snippet>
    <Example>
      <examples-helpers-icon-link-example-2 />
    </Example>
    <ExamplesCode
      path="/helpers/icon-link/example-2.vue"
      lang="vue"
    />
  </Snippet>
</template>
