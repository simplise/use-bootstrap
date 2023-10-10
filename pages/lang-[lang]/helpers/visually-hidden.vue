<script setup lang="ts">
definePageMeta({
  'title:en': 'Visually hidden',
  'description:en': `Use these helpers to visually hide elements but keep them accessible to assistive technologies.`,
  'title:ja': 'Visually hidden',
  'description:ja': 'これらのヘルパーを使用して、要素を視覚的に隠しつつ、支援技術へのアクセス性を維持します。'
})
</script>

<template>
  <Localization>
    <template #en>
      <p>Title for screen readersSkip to main contentA container with a focusable element.Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with <code>visually-hidden</code> attribute. </p>
      <p>Use <code>visually-hidden="focusable"</code> attribute to visually hide an element by default, but to display it when it's focused (e.g. by a keyboard-only user). </p>
      <p><code>visually-hidden="focusable"</code> attribute can also be applied to a container–thanks to <code>:focus-within</code>, the container will be displayed when any child element of the container receives focus.</p>
    </template>
    <template #ja>
      <p><code>visually-hidden</code> 属性を使って、補助技術 (スクリーンリーダなど) を利用できるようにしながら、要素を視覚的に隠すことができます。</p>
      <p><code>visually-hidden="focusable"</code> 属性を使うと、デフォルトでは要素を視覚的に非表示にすることができますが、 (キーボードのみのユーザなど) フォーカスされたときに表示することができます。</p>
      <p><code>:focus-within</code> のおかげで、コンテナの子要素がフォーカスを受け取ったときにコンテナが表示されます。</p>
    </template>
  </Localization>

  <!--Skip to main contentと表示されていますが 、元ページにはそのような記述は無いためバグの可能性があります-->

  <Snippet>
    <Example>
      <examples-helpers-visually-hidden-example />
    </Example>
    <ExamplesCode
      path="/helpers/visually-hidden/example.vue"
      lang="vue"
    />
  </Snippet>


  <!-- Both `visually-hidden` and `visually-hidden-focusable` can also be used as mixins.

```scss
// Usage as a mixin

.visually-hidden-title {
 @include visually-hidden;
}

.skip-navigation {
 @include visually-hidden-focusable;
}
``` -->
</template>