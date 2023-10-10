<script setup lang="ts">
definePageMeta({
  'title:en': 'Link',
  'description:en': `Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.`,
  'title:ja': 'リンク',
  'description:ja': 'リンクユーティリティは、アンカーの色、不透明度、下線オフセット、下線の色などを調整するために使用します。'
})
</script>

<template>
  <h2>Link opacity</h2>
  <Snippet>
    <Example>
      <examples-utilities-link-opacity />
    </Example>
    <ExamplesCode
      path="/utilities/link/opacity.vue"
      lang="vue"
    />
  </Snippet>
  <Snippet>
    <Example>
      <examples-utilities-link-opacity-hover />
    </Example>
    <ExamplesCode
      path="/utilities/link/opacity-hover.vue"
      lang="vue"
    />
  </Snippet>
  <h2>Link underlines</h2>
  <h3>Underline color</h3>
  <Snippet>
    <Example>
      <examples-utilities-link-underline />
    </Example>
    <ExamplesCode
      path="/utilities/link/underline.vue"
      lang="vue"
    />
  </Snippet>
  <h3>Underline offset</h3>
  <Snippet>
    <Example>
      <examples-utilities-link-underline-offset />
    </Example>
    <ExamplesCode
      path="/utilities/link/underline-offset.vue"
      lang="vue"
    />
  </Snippet>
  <h3>Underline opacity</h3>
  <Snippet>
    <Example>
      <examples-utilities-link-underline-opacity />
    </Example>
    <ExamplesCode
      path="/utilities/link/underline-opacity.vue"
      lang="vue"
    />
  </Snippet>
  <h3>Hover variants</h3>
  <Snippet>
    <Example>
      <examples-utilities-link-underline-hover-variants />
    </Example>
    <ExamplesCode
      path="/utilities/link/underline-hover-variants.vue"
      lang="vue"
    />
  </Snippet>
  <h3>Colored links</h3>
  <Snippet>
    <Example>
      <examples-utilities-link-color />
    </Example>
    <ExamplesCode
      path="/utilities/link/color.vue"
      lang="vue"
    />
  </Snippet>
</template>

