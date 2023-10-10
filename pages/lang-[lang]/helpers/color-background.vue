<script setup lang="ts">
definePageMeta({
  'title:en': 'Color and background',
  'description:en': `Set a background color with contrasting foreground color.`,
  'title:ja': 'カラーと背景',
  'description:ja': '背景色と対照的な前景色を設定します。'
})
</script>

<template>
  <h2>Custom content</h2>
  <Snippet>
    <Example>
      <examples-helpers-color-background-overview />
    </Example>
    <ExamplesCode
      path="/helpers/color-background/overview.vue"
      lang="vue"
    />
  </Snippet>
  <h2>With components</h2>
  <Snippet>
    <Example>
      <examples-helpers-color-background-with-badge />
    </Example>
    <ExamplesCode
      path="/helpers/color-background/with-badge.vue"
      lang="vue"
    />
  </Snippet>
  <Snippet>
    <Example>
      <examples-helpers-color-background-with-card />
    </Example>
    <ExamplesCode
      path="/helpers/color-background/with-card.vue"
      lang="vue"
    />
  </Snippet>
</template>
