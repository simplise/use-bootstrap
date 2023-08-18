  <script setup lang="ts">
 definePageMeta({
   title: `ボーダー Borders`,
   description: `ボーダーを使って要素のボーダーと角丸を素早く適用します。画像、ボタン、その他の要素に最適です。Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.`
 })
 </script>
 
<template>
  <!---
title: ボーダー Borders
description: ボーダーを使って要素のボーダーと角丸を素早く適用します。画像、ボタン、その他の要素に最適です。Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
--->

  <h2>ボーダー Boder</h2>

  <p>
    ボーダーを使って要素のボーダーと角丸を素早く適用します。画像、ボタン、その他の要素に最適です。
    Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
  </p>

  <h3>Border</h3>

  <p>
    Borders を使って、要素の線を追加・削除します。すべての境界線を一回の指定で適用できます。
    Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.
  </p>

  <h3>Additive</h3>

  ---
  

  <Snippet>
    <Example>
      <examples-utilities-border-additive />
    </Example>
    <ExamplesCode
      path="/utilities/border/additive.vue"
      lang="vue"
    />
  </Snippet>
  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/border/additive.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/border/additive.html)
:::
:::: -->

  <h3>Subtractive</h3>

  ---
  

  <Snippet>
    <Example>
      <examples-utilities-border-subtractive />
    </Example>
    <ExamplesCode
      path="/utilities/border/subtractive.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/border/subtractive.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/border/subtractive.html)
:::
:::: -->

  <h3>Border color</h3>

  <p>
    ビルドインされたテーマカラーを Border 色に指定できます。
    Change the border color using utilities built on our theme colors.
  </p>
  ---
  

  <Snippet>
    <Example>
      <examples-utilities-border-color />
    </Example>
    <ExamplesCode
      path="/utilities/border/color.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/border/color.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/border/color.html)
:::
:::: -->

  <h3>Border-width</h3>

  ---
  

  <Snippet>
    <Example>
      <examples-utilities-border-width />
    </Example>
    <ExamplesCode
      path="/utilities/border/width.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/border/width.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/border/width.html)
:::
:::: -->

  <h3>Border-radius</h3>

  <p>
    Add classes to an element to easily round its corners.
  </p>
  ---
  

  <Snippet>
    <Example>
      <examples-utilities-border-radius />
    </Example>
    <ExamplesCode
      path="/utilities/border/radius.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/border/radius.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/border/radius.html)
:::
:::: -->

  <h3>Sizes</h3>

  ---
  

  <Snippet>
    <Example>
      <examples-utilities-border-radius-size />
    </Example>
    <ExamplesCode
      path="/utilities/border/radius-size.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/border/radius-size.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/border/radius-size.html)
:::
::::-->
</template>