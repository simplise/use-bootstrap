<script setup lang="ts">
definePageMeta({
 title: `シャドウ Shadows`,
 description: `ボックスシャドウを追加または削除できます。 Add or remove shadows to elements with box-shadow utilities.`
})
</script>

<template>
  <!--
title: シャドウ Shadows
description: ボックスシャドウを追加または削除できます。 Add or remove shadows to elements with box-shadow utilities.
--->

  <h2>Examples</h2>

  <p>
    shadow(components) はデフォルトで無効になっており、 <code>$enable-shadows</code>で有効にできますが、<code>shadow</code> 属性を使用して shadow を追加や削除することもできます。 <code>shadow="none"</code> と3つのデフォルトサイズ（一致する変数が関連付けられている）のサポートが含まれています。
  </p>

  <p>
    While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>shadow</code> attribute. Includes support for <code>shadow="none"</code> and three default sizes (which have associated variables to match).
  </p>


  
  <Snippet>
    <Example>
      <examples-utilities-shadow />    
    </Example>
    <ExamplesCode
      path="/utilities/shadow/shadow.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/shadow/examples.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/shadow/examples.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Utilities API

Shadow utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-shadow" file="scss/_utilities.scss" >}} -->
</template>