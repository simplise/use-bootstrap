<script setup lang="ts">
definePageMeta({
  title: `スペーシング Spacing`,
  description: `要素の外観を変更するための margin, padding, gap utility が含まれています。 Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element's appearance.`
})
</script>

<template>
  <!---
title: スペーシング Spacing
description: 要素の外観を変更するための margin, padding, gap utility が含まれています。 Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element's appearance.
--->

  <!-- ## Margin and padding

レスポンシブな margin や padding の値を要素などに適用します。単一のプロパティ、すべてのプロパティ、水平方向と垂直方向のプロパティをサポートしています。クラスは、.25rem から 3rem までの範囲のデフォルトの Sass マップから構築しています。

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `3rem`.

CSS Grid layout moduleを使用している場合は the gap utility の使用を検討してください。

Using the CSS Grid layout module? Consider using [the gap utility](#gap). -->

  <h2>Notation</h2>

  <p>
    <code>xs</code> から <code>xxl</code> までのすべてのブレークポイントに適用されるスペーシングユーティリティには、ブレークポイントの略語が含まれていません。 これらのクラスは <code>min-width: 0</code> 以降に適用されるため、メディアクエリに縛られないからです。しかし、残りのブレークポイントにはブレークポイントの略語が含まれています。
  </p>

  <p>
    Spacing utilities that apply to all breakpoints, from <code>xs</code> to <code>xxl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
  </p>

  <p>
    クラスは，<code>xs</code> の場合は <code>{property}={sides}-{size}</code> という形式で <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> の場合は <code>{property}={sides}-{breakpoint}-{size}</code> という形式になります。
  </p>

  <p>
    The classes are named using the format <code>{property}={sides}-{size}</code> for <code>xs</code> and <code>{property}={sides}-{breakpoint}-{size}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
  </p>

  <p>
    property は以下のいずれかです。
  </p>

  <!--フォントが変わっている-->
  <p>
    Where *property* is one of:
  </p>

  <p>
    m - margin を設定するクラスの場合
  </p>
  <ul>
    <li>
      <code>margin</code> - for classes that set <code>margin</code>
      p - padding を設定するクラス用
    </li>
    <li> <code>padding</code> - for classes that set <code>padding</code></li>
  </ul>

  <p>
    sides は以下のいずれかです。
  </p>

  <!--フォントが変わっている-->
  <p>
    Where *sides* is one of:
  </p>
  <ul>
    <li> <code>t</code> - for classes that set <code>margin-top</code> or <code>padding-top</code></li>
    <li> <code>b</code> - for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></li>
    <li> <code>s</code> - (start) for classes that set <code>margin-left</code> or <code>padding-left</code> in LTR, <code>margin-right</code> or <code>padding-right</code> in RTL</li>
    <li> <code>e</code> - (end) for classes that set <code>margin-right</code> or <code>padding-right</code>in LTR, <code>margin-left</code> or <code>padding-left</code> in RTL</li>
    <li> <code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>
    <li> <code>y</code> - for classes that set both <code>*-top</code> and <code>*-bottom</code></li>
    <li> blank - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element</li>
  </ul>

  <p>
    size は以下のいずれかです。
  </p>

  <!--フォントが変わっている-->
  <p>
    Where *size* is one of:
  </p>
  <ul>
    <li> <code>0</code> - for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to <code>0</code></li>
    <li> <code>1</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .25</code></li>
    <li> <code>2</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .5</code></li>
    <li> <code>3</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer</code></li>
    <li> <code>4</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 1.5</code></li>
    <li> <code>5</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 3</code></li>
    <li> <code>auto</code> - for classes that set the `margin` to auto</li>
  </ul>

  <p>
    ($spacers Sass マップ変数を追加すればサイズを増やすことができます)
  </p>

  <p>
    (You can add more sizes by adding entries to the `$spacers` Sass map variable.)
  </p>

  <!-- ### Examples

レスポンシブなサンプルになります：

Here are some representative examples of these classes:

```scss
.mt-0 {
margin-top: 0 !important;
}

.ms-1 {
margin-left: ($spacer * .25) !important;
}

.px-2 {
padding-left: ($spacer * .5) !important;
padding-right: ($spacer * .5) !important;
}

.p-3 {
padding: $spacer !important;
}
``` -->

  <h2>Horizontal centering</h2>

  <p>
    Bootstrapには、ブロックレベルのコンテンツ、つまり <code>display: block</code> と <code>width</code> が設定されているコンテンツを、水平方向の余白を <code>auto</code> に設定することで水平方向にセンタリングするための <code>margin="x-auto"</code> 属性を用意しています。
  </p>

  <p>
    Additionally, Bootstrap also includes an <code>margin="x-auto"</code> attribute for horizontally centering fixed-width block level content—that is, content that has <code>display: block</code> and a <code>width</code> set—by setting the horizontal margins to <code>auto</code>.
  </p>

  
  <Snippet>
    <Example flex>
      <examples-utilities-spacing-horizontal-centering />    
    </Example>
    <ExamplesCode
      path="/utilities/spacing/horizontal-centering.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/spacing/horizontal-centering.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/spacing/horizontal-centering.html)
:::
:::: -->

  <!-- ## Negative margin

CSS では、ネガティブ margin を使うことができます( padding は利用できません）。これらのネガティブマージンはデフォルトでは無効になっていますが、Sassでは $enable-negative-margins: true を設定することで有効にすることができます。

In CSS, `margin` properties can utilize negative values (`padding` cannot). These negative margins are **disabled by default**, but can be enabled in Sass by setting `$enable-negative-margins: true`.

構文はデフォルトのポジティブマージンユーティリティとほぼ同じですが、要求されたサイズの前に n を追加します。以下に .mt-1 の逆のクラスの例を示します。

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here's an example class that's the opposite of `.mt-1`:

```scss
.mt-n1 {
margin-top: -0.25rem !important;
}
``` -->

  <h2>Gap</h2>

  <p>
    <code>display：grid</code>を使用する場合、親 Grid コンテナで <code>gap</code> utilities を利用できます。 これにより、個々のグリッドアイテム（ display：grid コンテナの子）に margin utilities を追加する手間を省くことができます。 gap utilities はデフォルトでレスポンシブであり, <code>$spacers</code> Sassマップに基づいて utilities API を介して生成されます。
  </p>

  <p>
    When using <code>display: grid</code>, you can make use of <code>gap</code> utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a <code>display: grid</code> container). Gap utilities are responsive by default, and are generated via our utilities API, based on the <code>$spacers</code> Sass map.
  </p>

  
  <Snippet>
    <Example cssgrid>
      <examples-utilities-spacing-gap />    
    </Example>
    <ExamplesCode
      path="/utilities/spacing/gap.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/spacing/gap.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/spacing/gap.html)
:::
::::-->

  <p>
    サポートには、Bootstrapのすべての Grid ブレークポイント に対するレスポンシブオプションと, <code>$spacers</code> マップからの6つのサイズ(<code>0</code>–<code>5</code>）が含まれます。 <code>gap=auto</code> utility クラスは実質的に <code>gap=0</code>と同じであるため、存在しません。
  </p>

  <p>
    Support includes responsive options for all of Bootstrap's grid breakpoints, as well as six sizes from the <code>$spacers</code> map (<code>0</code>–<code>5</code>). There is no <code>gap=auto</code> utility class as it's effectively the same as <code>gap=0</code>.
  </p>

  <!-- ## Sass

### Maps

Spacing utilities は Sass map で宣言され、utilities API で生成されます。

Spacing utilities are declared via Sass map and then generated with our utilities API. -->

  <!-- {{< scss-docs name="spacer-variables-maps" file="scss/_variables.scss" >}} -->

  <!-- ### Utilities API

Spacing utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-spacing" file="scss/_utilities.scss" >}} -->
</template>