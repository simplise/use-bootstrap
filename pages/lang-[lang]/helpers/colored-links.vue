<script setup lang="ts">
definePageMeta({
  'title:en': 'Colored links',
  'description:en': `Colored links with hover states`,
  'title:ja': 'カラーリンク',
  'description:ja': 'ホバー状態のカラーリンク'
})
</script>

<template> 
  <Localization>
    <template #en>
      <p>You can use the <code>link</code> attribute to colorize links. Unlike the <code>text-color attribute</code> <!--(/utilities/colors)--> , </p>
      <p>these classes have a <code>:hover</code> and <code>:focus</code> state.</p>
    </template>
    <template #ja>
      <p>リンクに色をつけるには <code>link</code> 属性を使うことができます。</p>
      <p><code>text-color 属性</code><!--(/utilities/colors)--> とは異なり、:hover や :focus の状態を持ちます。</p>
    </template>
  </Localization>
  
  <!--↓このタグは完璧には反映できていません-->
  
  <Snippet>
    <Example>
      <examples-helpers-colored-link-sample />
    </Example>
    <ExamplesCode
      path="/helpers/colored-link/sample.vue"
      lang="vue"
    />
  </Snippet>

  <!-- {{< callout info >}}
Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}} -->

  <h3>TIP</h3>

  <Localization>
    <template #en>
      <p>
        Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
      </p>
    </template>
    <template #ja>
      <p>
        リンクスタイルの中には、比較的明るい前景色を使うものがあり、十分なコントラストを持たせるために、暗い背景でのみ使用するべきです。
      </p>
    </template>
  </Localization>
</template>
