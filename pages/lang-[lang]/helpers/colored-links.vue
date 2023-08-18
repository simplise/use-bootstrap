<script setup lang="ts">
definePageMeta({
  title: `カラーリンク Colored links`,
  description: `Colored links with hover states`
})
</script>

<template>
  <!---
title: カラーリンク Colored links
description: Colored links with hover states
--->

  <p>
    リンクに色をつけるには <code>link</code> 属性を使うことができます。<code>text-color 属性</code><!--(/utilities/colors)--> とは異なり、:hover や :focus の状態を持ちます。
    You can use the <code>link</code> attribute to colorize links. Unlike the <code>text-color attribute</code> <!--(/utilities/colors)--> , these classes have a <code>:hover</code> and <code>:focus</code> state.
  </p>

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

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/colored-link/sample.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/colored-link/sample.html)
:::
:::: -->

  <!-- {{< callout info >}}
Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}} -->

  <h3>TIP</h3>
  <p>
    Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
  </p>
</template>
