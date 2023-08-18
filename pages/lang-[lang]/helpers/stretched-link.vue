<script setup lang="ts">
definePageMeta({
  title: `ストレッチリンク Stretched link`,
  description: `CSSでネストされたリンクを「Stretched link (ストレッチリンク) にすることで、任意のHTML要素やBootstrapコンポーネントをクリックできるようにします。Make any HTML element or Bootstrap component clickable by stretching a nested link via CSS.`
})
</script>
 
<template>
  <!---
title: ストレッチリンク Stretched link
description: CSSでネストされたリンクを「Stretched link (ストレッチリンク) にすることで、任意のHTML要素やBootstrapコンポーネントをクリックできるようにします。Make any HTML element or Bootstrap component clickable by stretching a nested link via CSS.
--->

  <p>
    リンクに <code>stretched-link</code> 属性を追加して、<code>::after</code> 擬似要素を使ってそのリンクの containing block がクリックが可能になるようにします。 ほとんどの場合、これは、 <code>stretched-link</code> 属性のリンクを含む <code>position：relative;</code> の要素がクリック可能であることを意味します。Add <code>stretched-link</code> attribute to a link to make its containing block clickable via a <code>::after</code> pseudo element. In most cases, this means that an element with <code>position: relative;</code> that contains a link with the <code>stretched-link</code> attribute is clickable. Please note given [how CSS <code>position</code> works](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), <code>stretched-link</code> attribute cannot be mixed with most table elements.
  </p>


  <p>
    Bootstrapではデフォルトでカードに <code>position：relative;</code> があるため、この場合、他のHTMLを変更せずに、カード内のリンクに <code>stretched-link</code> 属性を安全に追加できます。Cards have <code>position: relative</code> by default in Bootstrap, so in this case you can safely add the <code>stretched-link</code> attribute to a link in the card without any other HTML changes.
  </p>

  <p>
    複数のリンクやタップターゲットは、ストレッチリンクでは推奨されません。しかし、必要に応じて <code>position</code> や <code>z-index</code> スタイルを利用することができます。
    Multiple links and tap targets are not recommended with stretched links. However, some <code>position</code> and <code>z-index</code> styles can help should this be required.
  </p>


  <Snippet>
    <Example>
      <examples-helpers-stretched-link-card />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/card.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stretched-link/card.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stretched-link/card.html)
:::
::::-->

  <p>
    ほとんどのカスタムコンポーネントはデフォルトで position: relative を持っていないので、リンクが親要素の外に伸びないようにするためにここに .position-relative を追加する必要があります。Most custom components do not have <code>position: relative</code> by default, so we need to add the <code>.position-relative,</code> here to prevent the link from stretching outside the parent element.
  </p>

  <Snippet>
    <Example>
      <examples-helpers-stretched-link-custom />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/custom.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stretched-link/custom.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stretched-link/custom.html)
:::
:::: -->

  <!--うまく表示されていません Custom component with stretched link -->

  <Snippet>
    <Example>
      <examples-helpers-stretched-link-columns />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/columns.vue"
      lang="vue"
    />
  </Snippet>

  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stretched-link/columns.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stretched-link/columns.html)
:::
::::
-->
  <h2>Identifying the containing block</h2>

  <p>
    伸びたリンクがうまくいかないようであれば、containing block が原因ではないかと思います。
    If the stretched link doesn't seem to work, the containing block will probably be the cause. 以下のCSSプロパティで要素を content blockにします。The following CSS properties will make an element the containing block:
  </p>

  <ul>
    <li> A <code>position</code> value other than <code>static</code></li>
    <li> A <code>transform</code> or <code>perspective</code> value other than <code>none</code></li>
    <li> A <code>will-change</code> value of <code>transform</code> or <code>perspective</code></li>
    <li> A <code>filter</code> value other than <code>none</code> or a <code>will-change</code> value of <code>filter</code> (only works on Firefox)</li>
  </ul>


  <Snippet>
    <Example>
      <examples-helpers-stretched-link-identifying />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/identifying.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
  ::: code-group-item useBootstrap
  @[code](@examples/helpers/stretched-link/identifying.vue)
  :::
  ::: code-group-item bootstrap5
  @[code](@examples/helpers/stretched-link/identifying.html)
  :::
  :::: -->
</template>