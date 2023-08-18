
<script setup lang="ts">

definePageMeta({
 title: 'Select',
 description: `ネイティブの\`<select>\`をカスタムCSSでカスタマイズして、要素の初期表示を変更することができます。Customize the native \`<select>\`s with custom CSS that changes the element's initial appearance.`
})

</script>

<template>
  <!---
title: Select
description: ネイティブの`<select>`をカスタムCSSでカスタマイズして、要素の初期表示を変更することができます。Customize the native `<select>`s with custom CSS that changes the element's initial appearance.
--->

  <h2>Default</h2>

  <p>
    カスタムスタイルは <code>FormSelect</code> の最初の外観に限定され、ブラウザの制限により <code>Option</code> を変更することはできません。
    Custom styles are limited to the <code>FormSelect</code>'s initial appearance and cannot modify the <code>Option</code>s due to browser limitations.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-select-default />
    </Example>
    <ExamplesCode
      path="/forms/select/default.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/select/default.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/select/default.html)
:::
:::: -->

  <h2 class="mt-3">
    Sizing
  </h2>

  <p>
    また、同サイズのテキスト入力に合わせて、大小のカスタムセレクトを選択することもできます。
    You may also choose from small and large custom selects to match our similarly sized text inputs.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-select-sizing-1 />
    </Example>
    <ExamplesCode
      path="/forms/select/sizing-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/select/sizing-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/select/sizing-1.html)
:::
:::: -->

  <p class="mt-3">
    また、<code>multiple</code> 属性もサポートされています。:
    The `multiple` attribute is also supported:
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-select-sizing-2 />
    </Example>
    <ExamplesCode
      path="/forms/select/sizing-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/select/sizing-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/select/sizing-2.html)
:::
::::-->

  <p class="mt-3">
    <code>length</code> 属性もサポートされています。:
    As is the <code>length</code> attribute:
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-select-sizing-3 />
    </Example>
    <ExamplesCode
      path="/forms/select/sizing-3.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/select/sizing-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/select/sizing-3.html)
:::
:::: -->

  <h2 class="mt-3">
    Disabled
  </h2>

  <p>
    ブール属性の<code>disabled</code>をセレクトに追加すると、グレーアウトした外観になり、ポインターイベントが削除されます。
    Add the <code>disabled</code> boolean attribute on a select to give it a grayed out appearance and remove pointer events.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-select-disabled />
    </Example>
    <ExamplesCode
      path="/forms/select/disabled.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/select/disabled.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/select/disabled.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="form-select-variables" file="scss/_variables.scss" >}} -->
</template>