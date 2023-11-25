<script setup lang="ts">
definePageMeta({
  'title:en': 'Position',
  'description:en': `Use these helpers for quickly configuring the position of an element.`,
  'title:ja': 'ポジション',
  'description:ja': '要素の位置を素早く設定するには、これらのヘルパーを使用します。'
})
</script>

<template>
  <h2>Fixed top</h2>
  <Localization>
    <template #en>
      <p>Position an element at the top of the viewport, from edge to edge. </p>
      <p>Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.</p>
    </template>
    <template #ja>
      <p>viewportの上部に要素を配置します。(追加でCSSを必要となる場合があります)</p>
    </template>
  </Localization>

  <Snippet>
    <ExamplesCode
      path="/helpers/position/fixed-top.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Fixed bottom</h2>
  <Localization>
    <template #en>
      <p>Position an element at the bottom of the viewport, from edge to edge. </p>
      <p>Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.</p>
    </template>
    <template #ja>
      <p>viewportの下部に要素を配置します。(追加でCSSを必要となる場合があります)</p>
    </template>
  </Localization>

  <Snippet>
    <ExamplesCode
      path="/helpers/position/fixed-bottom.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Sticky top</h2>
  <Localization>
    <template #en>
      <p>Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. </p>
      <p>The <code>sticky-top,</code> value uses CSS's <code>position: sticky</code>, which isn't fully supported in all browsers.</p>
    </template>
    <template #ja>
      <p>スクロールした後, 要素をviewportの上部に配置します。 </p>
      <p><code>sticky-top</code> はCSSの <code>position：sticky</code> を使用しますが、これはすべてのブラウザーで完全にサポートされているわけではありません。</p>
    </template>
  </Localization>

  <Snippet>
    <ExamplesCode
      path="/helpers/position/sticky-top.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Responsive sticky top</h2>
  <Localization>
    <template #en>
      <p>Responsive variations also exist for <code>sticky-top</code> utility.</p>
    </template>
    <template #ja>
      <p>レスポンシブなバリエーションは <code>sticky-top</code> の下記を参考にしてください。</p>
    </template>
  </Localization>

  <Snippet>
    <ExamplesCode
      path="/helpers/position/responsive-sticky-top.vue"
      lang="vue"
    />
  </Snippet>
</template>