<script setup lang="ts">
definePageMeta({
  title: `ディスプレイ Display property`,
  description: `Display を使用して、コンポーネントの表示を素早くレスポンシブに切り替えられます。よく使う値のサポートと、印刷用スタイルの制御が含まれています。 Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.`
})
</script>

<template>
  <!---
title: ディスプレイ Display property
description: Display を使用して、コンポーネントの表示を素早くレスポンシブに切り替えられます。よく使う値のサポートと、印刷用スタイルの制御が含まれています。 Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
--->
  <h2>ディスプレイ Display property</h2>

  <p>
    Display を使用して、コンポーネントの表示を素早くレスポンシブに切り替えられます。よく使う値のサポートと、印刷用スタイルの制御が含まれています。
  </p>

  <p>
    Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
  </p>
  <!-- ## How it works

ディスプレイクラスを使用して、コンポーネントの display property をレスポンシブに切り替えられます。 displayのすべての可能な値のサブセットのみを意図的にサポートします。 クラスは、必要に応じてさまざまな効果のために組み合わせることができます。

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need. -->

  <h3>Notation</h3>
  <!-- 
xs から xxl までのすべての breakpoints (ブレークポイント) に適用される display クラスには、ブレークポイントの略語がありません。これらのクラスは min-width: 0; 以降で適用されるため、メディアクエリに縛られないからです。 しかし、残りのブレークポイントにはブレークポイントの略語が含まれています。

Display utility classes that apply to all [breakpoints](/layout/breakpoints), from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation. -->

  <p>
    クラス名の形式は以下の通りです。
  </p>

  <p>
    As such, the classes are named using the format:
  </p>

  <ul>
    <li>xs の場合は <code>.display={value}</code> というクラス名が付けられます。 <code>.display={value}</code> for <code>xs</code> </li>
    <li>sm、md、lg、xl、xxl に対して <code>.display="{breakpoint}-{value}"</code> があります。 <code>.display="{breakpoint}-{value}"</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>. </li>
  </ul>


  <p>
    value の種類は以下の通りです。
  </p>

  <!--valueのフォントが変わっている-->
  <p>
    Where *value* is one of:
  </p>

  <ul>
    <li> <code>none</code></li>
    <li> <code>inline</code> </li>
    <li> <code>inline-block</code> </li>
    <li> <code>block</code> </li>
    <li> <code>grid</code> </li>
    <li> <code>table</code> </li>
    <li> <code>table-cell</code></li>
    <li> <code>table-row</code></li>
    <li> <code>flex</code> </li>
    <li> <code>inline-flex</code> </li>
  </ul>
  <!-- 変数 $displays を変更して SCSS をコンパイルすれば display のプロパティ値を変更することができます。

The display values can be altered by changing the `$displays` variable and recompiling the SCSS.

メディアクエリは、ブレークポイントに影響を与えます。例えば、.d-lg-none は lg, xl, xxl すべてに display: none; を設定します。

The media queries affect screen widths with the given breakpoint *or larger*. For example, `.d-lg-none` sets `display: none;` on `lg`, `xl`, and `xxl` screens. -->

  <h3>Examples</h3>

  <!--components上手く表示されていません-->
  <!-----sm、md、lg、xl、xxl に対して .display="{breakpoint}-{value}" があります。 .display="{breakpoint}-{value}" for sm, md, lg, xl, and xxl. -->
  
  <Snippet>
    <Example>
      <examples-utilities-display-block />
    </Example>
    <ExamplesCode
      path="/utilities/display/block.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/display/block.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/display/block.html)
:::
:::: -->

  ---
  
  <Snippet>
    <Example>
      <examples-utilities-display-inline />
    </Example>
    <ExamplesCode
      path="/utilities/display/inline.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/display/inline.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/display/inline.html)
:::
:::: -->

  <h3>Hiding elements</h3>

  <p>
    For faster mobile-friendly development, use responsive display attribute for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.
  </p>

  <p>
    To hide elements simply use the <code>display="none"</code> class or one of the <code>display="{sm,md,lg,xl,xxl}-none"</code> attribute for any responsive screen variation.
  </p>

  <p>
    To show an element only on a given interval of screen sizes you can combine one <code>display="*-none"</code> class with a <code>display="*-*"</code> class, for example <code>display="none display="md-block display="xl-none display="xxl-none"</code> will hide the element for all screen sizes except on medium and large devices.
  </p>

  <docs-descriptions-display-hiding-elements />

  <!-- {{< example >}}
<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
{{< /example >}} -->
  
  <Snippet>
    <Example>
      <examples-utilities-display-hiding />
    </Example>
    <ExamplesCode
      path="/utilities/display/hiding.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/display/hiding.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/display/hiding.html)
:::
:::: -->

  <h3>Display in print</h3>

  <p>
    Change the <code>display</code> value of elements when printing with our print display utility attribute. Includes support for the same <code>display</code> values as our responsive <code>display</code> utilities.
  </p>

  <ul>
    <li> <code>display="print-none"</code></li>
    <li> <code>display="print-inline"</code></li>
    <li> <code>display="print-inline-block"</code></li>
    <li> <code>display="print-block"</code></li>
    <li> <code>display="print-grid"</code></li>
    <li> <code>display="print-table"</code></li>
    <li> <code>display="print-table-row"</code></li>
    <li> <code>display="print-table-cell"</code></li>
    <li> <code>display="print-flex"</code> </li>
    <li> <code>display="print-inline-flex"</code></li>
  </ul>

  <p>
    The print and display attribute can be combined.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-display-print />
    </Example>
    <ExamplesCode
      path="/utilities/display/print.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/display/print.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/display/print.html)
:::
:::: -->

  <!-- ## Sass

### Utilities API

Display utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-display" file="scss/_utilities.scss" >}} -->
</template>