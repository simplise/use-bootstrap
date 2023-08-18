<script setup lang="ts">
definePageMeta({
  title: `ポジション Position`,
  description: `Use these helpers for quickly configuring the position of an element.`
})
</script>

<template>
  <!---
title: ポジション Position
description: Use these helpers for quickly configuring the position of an element.
--->

  <h2>Fixed top</h2>

  <p>
    viewportの上部に要素を配置します。(追加でCSSを必要がある場合があります)
    Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
  </p>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/position/fixed-top.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/position/fixed-top.html)
:::
:::: -->

  <h2>Fixed bottom</h2>

  <p>
    viewportの下部に要素を配置します。(追加でCSSを必要がある場合があります)
    Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
  </p>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/position/fixed-bottom.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/position/fixed-bottom.html)
:::
:::: -->

  <h2>Sticky top</h2>

  <p>
    スクロールした後, 要素をviewportの上部に配置します。 <code>sticky-top</code> はCSSの <code>position：sticky</code> を使用しますが、これはすべてのブラウザーで完全にサポートされているわけではありません。
    Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The <code>sticky-top,</code> value uses CSS's <code>position: sticky</code>, which isn't fully supported in all browsers.
  </p>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/position/sticky-top.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/position/sticky-top.html)
:::
:::: -->

  <h2>Responsive sticky top</h2>
  <p>
    レスポンシブなバリエーションは <code>sticky-top</code> の下記を参考にしてください。
    Responsive variations also exist for <code>sticky-top</code> utility.
  </p>
  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/position/responsive-sticky-top.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/position/responsive-sticky-top.html)
:::
:::: -->
</template>