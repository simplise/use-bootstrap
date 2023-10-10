<script setup lang="ts">
definePageMeta({
  'title:en': 'Shadows',
  'description:en': `Add or remove shadows to elements with box-shadow utilities.`,
  'title:ja': 'シャドウ',
  'description:ja': 'ボックスシャドウを追加または削除できます。'
})
</script>

<template>
  <h2>Examples</h2>
  <Localization>
    <template #en>
      <p>While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>shadow</code> attribute. Includes support for <code>shadow="none"</code> and three default sizes (which have associated variables to match).</p>
    </template>
    <template #ja>
      <p>shadow(components) はデフォルトで無効になっており、 <code>$enable-shadows</code>で有効にできますが、<code>shadow</code> 属性を使用して shadow を追加や削除することもできます。 <code>shadow="none"</code> と3つのデフォルトサイズ（一致する変数が関連付けられている）のサポートが含まれています。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-shadow />
    </Example>
    <ExamplesCode
      path="/utilities/shadow/shadow.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Utilities API

Shadow utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-shadow" file="scss/_utilities.scss" >}} -->
</template>