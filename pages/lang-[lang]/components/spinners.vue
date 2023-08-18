<script setup lang="ts">
definePageMeta({
  title: `スピナー Spinners`,
  description: `HTML、CSS、JavaScript を使用せずに完全に構築された Spinners (スピナー) を使用して、コンポーネントやページの読み込み状態を表示します。 Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.`
})
</script>

<template>
  <!---
title: スピナー Spinners
description: HTML、CSS、JavaScript を使用せずに完全に構築された Spinners (スピナー) を使用して、コンポーネントやページの読み込み状態を表示します。 Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
--->

  <h2>About</h2>
  <p>
    プロジェクトの読み込み状態を表示するために使用することができます。
  </p>
  <!-- それらはHTMLとCSSだけで構築されているので、JavaScriptを必要としません。 可視性を切り替える場合は、いくつかのカスタムJavaScriptが必要になります。  -->
  <p>
    外観、配置、サイズは、utility (ユーティリティ) クラスを使用して簡単にカスタマイズすることができます。
  </p>
  <!-- Bootstrap "spinners" can be used to show the loading state in your projects. 
They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility.  -->
  <p>
    Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.
  </p>
  <!-- アクセシビリティの観点から、 `role="status"` と入れ子になった `<span class="visually-hidden">Loading...</span>` を含んでいます。
For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`. -->

  <!--
{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}
-->

  <h2>Border spinne</h2>
  <p>
    Border spinner (ボーダースピナー) を使用して軽量なローディングインジケーターを実現します。
    Use the border spinners for a lightweight loading indicator.
  </p>
  <Snippet>
    <Example>
      <examples-components-spinner-border />
    </Example>
    <ExamplesCode
      path="/components/spinner/border.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/border.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/border)
:::
:::: -->

  <h3>Colors</h3>
  <p>
    <code>Spinner</code> コンポーネントに <code>text-color</code> 属性を使用します。標準のスピナーでは、<LocalLink to="/utilities/colors">
      text color utilitites
    </LocalLink>を使用することができます。
    The border spinner uses <code>text-color</code> attribute for its <code>Spinner</code> component, meaning you can customize the color with <LocalLink to="/utilities/colors">
      text color utilities
    </LocalLink>. You can use any of our text color utilities on the standard spinner.
  </p>
  <!--

{{< callout info >}}
**Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.
{{< /callout >}}
-->
  <Snippet>
    <Example>
      <examples-components-spinner-colors />
    </Example>
    <ExamplesCode
      path="/components/spinner/colors.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/colors.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/colors)
:::
:::: -->

  <h2 class="mt-3">
    Growing spinner
  </h2>
  <p>
    grow spinner (グロースピナー) も用意されています。動きは下記を参考にしてください。
    If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!
  </p>
  <Snippet>
    <Example>
      <examples-components-spinner-growing-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/growing-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/growing-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/growing-1)
:::
:::: -->
  <p class="mt-3">
    Once again, this spinner is built with `text-color`, so you can easily change its appearance with [text color utilities][color]. Here it is in blue, along with the supported variants.
  </p>
  <Snippet>
    <Example>
      <examples-components-spinner-growing-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/growing-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/growing-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/growing-2)
::: -->
  ::::

  <h2 class="mt-3">
    Alignment
  </h2>
  <p>
    <code>rem</code>, <code>text-color</code>, <code>display: inline-flex</code> で構築されています。簡単にサイズを変更したり、色を変更したり、素早く整列させることができます。
    Spinners in Bootstrap are built with <code>rem</code>s, <code>text-color</code>, and <code>display: inline-flex</code>. This means they can easily be resized, recolored, and quickly aligned.
  </p>

  <h3>Margin</h3>
  <p>
    <code>mergin="5"</code>
    <LocalLink to="/utilities/spacing">
      margin utilities
    </LocalLink> で簡単にスペースを追加できます。
    Use <LocalLink to="/utilities/spacing">
      margin utilities
    </LocalLink> like <code>mergin="5"</code> for easy spacing.
  </p>
  <Snippet>
    <Example>
      <examples-components-spinner-margin />
    </Example>
    <ExamplesCode
      path="/components/spinner/margin.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/margin.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/margin)
:::
:::: -->


  <h3 class="mt-3">
    Placement
  </h3>
  <p>
    <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink>, <LocalLink to="/utilities/float">
      float utilites
    </LocalLink>, <LocalLink to="/utilities/text/">
      text alignment
    </LocalLink> を使用して、配置することができます。
    Use <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink>, <LocalLink to="/utilities/float">
      float utilites
    </LocalLink>, or <LocalLink to="/utilities/text/">
      text alignment
    </LocalLink> utilities to place spinners exactly where you need them in any situation.
  </p>

  <h4>Flex</h4>
  <Snippet>
    <Example>
      <examples-components-spinner-flex-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/flex-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/flex-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/flex-1)
:::
:::: -->

  <Snippet>
    <Example>
      <examples-components-spinner-flex-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/flex-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/flex-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/flex-2)
:::
:::: -->

  <h4>Floats</h4>

  <Snippet>
    <Example>
      <examples-components-spinner-float />
    </Example>
    <ExamplesCode
      path="/components/spinner/float.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/float.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/float)
:::
:::: -->

  <h4>Text align</h4>

  <Snippet>
    <Example>
      <examples-components-spinner-textalign />
    </Example>
    <ExamplesCode
      path="/components/spinner/textalign.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/textalign.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/textalign)
:::
:::: -->

  <h4>Size</h4>
  <p>
    <code>sm</code> 属性を追加して、サイズの変更ができます。
    Add <code>sm</code> attribute to make a smaller spinner that can quickly be used within other components.
  </p>

  <Snippet>
    <Example>
      <examples-components-spinner-size-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/size-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/size-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/size-1)
:::
:::: -->
  <p>
    カスタムCSSやインラインスタイルを使用して、必要に応じて寸法を変更することができます。
    Or, use custom CSS or inline styles to change the dimensions as needed.
  </p>
  <Snippet>
    <Example>
      <examples-components-spinner-size-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/size-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/size-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/size-2)
:::
:::: -->

  <h2 class="mt-3">
    Buttons
  </h2>
  <p>
    ボタンの中でスピナーを使用して、アクションが現在処理中または実行中であることを示します。
    Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.
  </p>
  <Snippet>
    <Example>
      <examples-components-spinner-buttons-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/buttons-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/buttons-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/buttons-1)
:::
:::: -->

  <Snippet>
    <Example>
      <examples-components-spinner-buttons-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/buttons-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/spinner/buttons-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/spinner/buttons-2)
:::
:::: -->


  <!-- ## Sass

### Variables -->
  <!--
{{< scss-docs name="spinner-variables" file="scss/_variables.scss" >}}
-->
  <!-- ### Keyframes

Used for creating the CSS animations for our spinners. Included in `scss/_spinners.scss`. -->
  <!--
{{< scss-docs name="spinner-border-keyframes" file="scss/_spinners.scss" >}}

{{< scss-docs name="spinner-grow-keyframes" file="scss/_spinners.scss" >}}
-->

  <!-- [color]:   (/utilities/colors)
[display]: (/utilities/display)
[flex]:    (/utilities/flex)
[float]:   (/utilities/float)
[margin]:  (/utilities/spacing)
[sizing]:  (/utilities/sizing)
[text]:    (/utilities/text) -->
</template>