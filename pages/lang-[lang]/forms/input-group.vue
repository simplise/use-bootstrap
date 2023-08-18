<script setup lang="ts">
definePageMeta({
  title: 'インプットグループ Input group',
  description: 'テキスト入力、カスタムセレクト、カスタムファイル入力の両側に、テキスト、ボタン、ボタングループを追加して、フォームコントロールを簡単に拡張できます。Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.'
})
</script>

<template>
  <!--LocalLinkProps is not definedというerrorがでている-->
  <!---
title: インプットグループ Input group
description: テキスト入力、カスタムセレクト、カスタムファイル入力の両側に、テキスト、ボタン、ボタングループを追加して、フォームコントロールを簡単に拡張できます。Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.
--->

  <h2>Basic example</h2>

  <p>
    片側または両端にボタン(または add-on)を配置できます。 <code>FormLabel</code> は入力グループの外側に配置します。
    Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <code>FormLabel</code>s outside the input group.
  </p>

  <Snippet>
    <Example>
      <examples-forms-input-group-example />
    </Example>
    <ExamplesCode
      path="/forms/input-group/example.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/example.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/example.html)
:::
:::: -->

  <h2>Wrapping</h2>
  <p>
    カスタムフォームフィールドの検証に対応するため、入力グループはデフォルトで <code>wrap = wrap</code> で折り返します。これを無効にするには <code>wrap = "nowrap"</code> 属性を使います。
    Input groups wrap by default via <code>wrap = wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with <code>wrap="nowrap"</code>.
  </p>

  <Snippet>
    <Example>
      <examples-forms-input-group-wrapping />
    </Example>
    <ExamplesCode
      path="/forms/input-group/wrapping.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/wrapping.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/wrapping.html)
:::
:::: -->

  <h2>Sizing</h2>
  <p>
    相対フォームサイズクラスを <code>BInputGroup</code> コンポーネント自体に追加すると、その中のコンテンツが自動的にリサイズされます。フォームコントロールのサイズクラスを各要素に繰り返し適用する必要はありません。
    Add the relative form sizing classes to the <code>BInputGroup</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.
  </p>
  <p>
    <b>Sizing on the individual input group elements isn't supported.</b>
  </p>

  <Snippet>
    <Example>
      <examples-forms-input-group-sizing />
    </Example>
    <ExamplesCode
      path="/forms/input-group/sizing.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/sizing.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/sizing.html)
:::
:::: -->

  <h2>Checkboxes and radios</h2>
  <p>
    入力グループのアドオン内のチェックボックスやラジオオプションをテキストの代わりに配置します。入力の横に可視テキストがない場合は、<code>FormCheckInput</code>に<code>margin="t-0"</code>を追加することをお勧めします。
    Place any checkbox or radio option within an input group's addon instead of text. We recommend adding <code>margin="t-0"</code> to the <code>FormCheckInput</code> when there's no visible text next to the input.
  </p>

  <Snippet>
    <Example>
      <examples-forms-input-group-checkboxes-radios />
    </Example>
    <ExamplesCode
      path="/forms/input-group/checkboxes-radios.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/checkboxes-radios.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/checkboxes-radios.html)
:::
::::-->

  <h2>Multiple inputs</h2>
  <p>
    複数の <code>FormInput</code> が視覚的にサポートされています。validation styles は単一の <code>FormInput</code> を持つ入力グループに対してのみ利用可能です。
    While multiple <code>FormInput</code>s are supported visually, validation styles are only available for input groups with a single <code>FormInput</code>.
  </p>

  <Snippet>
    <Example>
      <examples-forms-input-group-multiple-inputs />
    </Example>
    <ExamplesCode
      path="/forms/input-group/multiple-inputs.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/multiple-inputs.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/multiple-inputs.html)
:::
:::: -->

  <h2>Multiple addons</h2>
  <p>
    下記のように複数のボタン(または add-on)を並べることも可能です。
    Multiple add-ons are supported and can be mixed with checkbox and radio input versions.
  </p>

  <Snippet>
    <Example>
      <examples-forms-input-group-multiple-addons />
    </Example>
    <ExamplesCode
      path="/forms/input-group/multiple-addons.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/multiple-addons.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/multiple-addons.html)
:::
:::: -->

  <h2>Button addons</h2>


  <Snippet>
    <Example>
      <examples-forms-input-group-button-addons />
    </Example>
    <ExamplesCode
      path="/forms/input-group/button-addons.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/button-addons.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/button-addons.html)
:::
:::: -->

  <h2>Buttons with dropdowns</h2>


  <Snippet>
    <Example>
      <examples-forms-input-group-buttons-dropdowns />
    </Example>
    <ExamplesCode
      path="/forms/input-group/buttons-dropdowns.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/buttons-dropdowns.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/buttons-dropdowns.html)
:::
::::-->

  <h2>Segmented buttons</h2>


  <Snippet>
    <Example>
      <examples-forms-input-group-segmented-buttons />
    </Example>
    <ExamplesCode
      path="/forms/input-group/segmented-buttons.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/segmented-buttons.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/segmented-buttons.html)
:::
:::: -->

  <h2>Custom forms</h2>

  <p>
    カスタム選択とカスタムファイル入力のサポートが含まれています。
    Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.
  </p>
  <h2>Custom select</h2>


  <Snippet>
    <Example>
      <examples-forms-input-group-custom-select />
    </Example>
    <ExamplesCode
      path="/forms/input-group/custom-select.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/custom-select.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/custom-select.html)
:::
::::-->

  <h2>Custom file input</h2>


  <Snippet>
    <Example>
      <examples-forms-input-group-custom-file-input />
    </Example>
    <ExamplesCode
      path="/forms/input-group/custom-file-input.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/input-group/custom-file-input.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/input-group/custom-file-input.html)
:::
::::-->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="input-group-variables" file="scss/_variables.scss" >}} -->
</template>