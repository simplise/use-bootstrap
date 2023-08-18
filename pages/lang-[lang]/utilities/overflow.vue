<script setup lang="ts">
definePageMeta({
  title: `オーバーフロー Overflow`,
  description: `要素のオーバフローを管理しましょう。 Use these shorthand utilities for quickly configuring how content overflows an element.`
})
</script>

<template>
  <!---
title:  オーバーフロー Overflow
description:  要素のオーバフローを管理しましょう。 Use these shorthand utilities for quickly configuring how content overflows an element.
--->

  <p>
    4つのデフォルト値とクラスを使用して、 <code>overflow</code> 属性をその場で調整します。これらのクラスはデフォルトでは応答しません。
  </p>

  <p>
    Adjust the <code>overflow</code> attribute on the fly with four default values and classes. These classes are not responsive by default.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-overflow-example-1 />    
    </Example>
    <ExamplesCode
      path="/utilities/overflow/example-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/overflow/example-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/overflow/example-1.html)
:::
:::: -->

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/overflow/example-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/overflow/example-2.html)
:::
:::: -->
  <!-- 
Sass変数を使用すると、 _variables.scssの $overflows変数を変更してオーバーフローユーティリティをカスタマイズできます。

Using Sass variables, you may customize the overflow utilities by changing the `$overflows` variable in `_variables.scss`.

## Sass

### Utilities API

Overflow utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Overflow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-overflow" file="scss/_utilities.scss" >}} -->
</template>