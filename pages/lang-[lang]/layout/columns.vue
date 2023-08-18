<script setup lang="ts">
definePageMeta({
  title: 'カラム Columns',
  description: 'Flexbox グリッドシステムをベースに豊富なプロパティを使って、カラム(列)を整列、並べ替え、オフセットする方法を紹介します。カラムの幅を制御するためのプロパティも紹介します。Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column properties to manage widths of non-grid elements.'
})
</script>

<template>
  <!--太字がまだできていない箇所があります-->
  <!---
title: カラム Columns
description: Flexbox グリッドシステムをベースに豊富なプロパティを使って、カラム(列)を整列、並べ替え、オフセットする方法を紹介します。カラムの幅を制御するためのプロパティも紹介します。Learn how to modify properties with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column propert to manage widths of non-grid elements.
--->

  <h2>カラム Columns</h2>
  <p>
    Flexbox グリッドシステムをベースに豊富なプロパティを使って、カラム(列)を整列、並べ替え、オフセットする方法を紹介します。カラムの幅を制御するためのプロパティも紹介します。Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column properties to manage widths of non-grid elements.
  </p>

  <h5>tip</h5>
  <p>
    カラムを変更・カスタマイズする前に、まず <LocalLink to="/layout/grid">
      グリッド
    </LocalLink>に目を通してください。
    <b>Heads up!</b> Be sure to <LocalLink to="/layout/grid">
      read the Grid page
    </LocalLink><!-- ({{< docsref "/layout/grid" >}}) --> first before diving into how to modify and customize your grid columns.
  </p>

  <!-- ## 基本的な仕組みHow they work

- **グリッドの Flexbox アーキテクチャ上に構築されたカラムです。** Flexbox とは、個々のカラムを変更したり、[行レベルのカラムグループを変更するオプション](/layout/grid#row-columns)があることを意味します。カラムの拡大、縮小、その他の変更方法を選択します。**Columns build on the grid's flexbox architecture.** Flexbox means we have options for changing individual columns and [modifying groups of columns at the row level](/layout/grid#row-columns). You choose how columns grow, shrink, or otherwise change.

- **グリッドレイアウトを構築する場合、すべてのコンテンツはカラムになります。** Bootstrap グリッドの階層は、[コンテナ](layout/container) から、行、カラム(列)、コンテンツへと続きます。まれに、コンテンツとカラムを組み合わせることがありますが、意図しない結果になる可能性があることに注意してください。**When building grid layouts, all content goes in columns.** The hierarchy of Bootstrap's grid goes from [container](/layout/containers) to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.

- **レスポンシブなレイアウトを作成するためのプロパティを用意しています。** [6 つのブレークポイント](/layout/breakpoints) と各グリッドに 12 個のカラムがあるので、用意されたプロパティを組み合わせるだけで望むレイアウトを実現できます。プロパティは Sass で無効にすることができます。**Bootstrap includes predefined properties for creating fast, responsive layouts.** With [six breakpoints](/layout/breakpoints) and a dozen columns at each grid tier, we have dozens of properties already built for you to create your desired layouts. This can be disabled via Sass if you wish. -->

  <h3>整列 Alignment</h3>
  <p>
    <code>align</code> 属性を使用して、カラムを垂直方向と水平方向に整列できます。
    Use <code>align</code> utilities to vertically and horizontally align columns.
  </p>

  <h4 class="mt-5">
    垂直方向に整列 Vertical alignment
  </h4>


  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-vertical-alignment />
    </Example>
    <ExamplesCode
      path="/layout/column/vertical-alignment.vue"
      lang="vue"
    />
  </Snippet>
  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/vertical-alignment.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/vertical-alignment.html)
:::
:::: -->


  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-align-self />
    </Example>
    <ExamplesCode
      path="/layout/column/align-self.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/align-self.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/align-self.html)
:::
:::: -->

  <h4>水平方向に整列 Horizontal alignment</h4>


  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-horizontal-alignment />
    </Example>
    <ExamplesCode
      path="/layout/column/horizontal-alignment.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/horizontal-alignment.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/horizontal-alignment.html)
:::
::::-->

  <h4 class="mt-3">
    カラムの折り返し Column wrapping
  </h4>
  <p>
    1 つの行内に 12 を超えるカラムが配置されている場合、追加したカラムの各グループは、1 つの単位として新しい行に折り返されます。
    If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
  </p>


  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-wrapping />
    </Example>
    <ExamplesCode
      path="/layout/column/wrapping.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/wrapping.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/wrapping.html)
:::
:::: -->

  <h4 class="mt-3 ">
    カラムの改行 Column breaks
  </h4>
  <p>
    Flexbox でカラムを改行するにはハックが必要です。
    改行したい場所に<code>width="100"</code>の要素を追加します。
    複数の <code>&lt;Row&gt;</code><code>&lt;/Row&gt;</code> で実現できますが、すべての実装方法がこれに対応できるわけではありません。
    Breaking columns to a new line in flexbox requires a small hack: add an element with <code>width="100"</code> wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <code>&lt;Row&gt;</code><code>&lt;/Row&gt;</code>s, but not every implementation method can account for this.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-break />
    </Example>
    <ExamplesCode
      path="/layout/column/break.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/break.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/break.html)
:::
:::: -->
  <p>
    また、レスポンシブ表示ユーティリティ を利用して特定のブレークポイントで改行できます。
    You may also apply this break at specific breakpoints with our 
    responsive display utilities.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-break-responsive />
    </Example>
    <ExamplesCode
      path="/layout/column/break-responsive.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/break-responsive.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/break-responsive.html)
:::
:::: -->

  <h4 class="mt-3">
    並び替え Reordering
  </h4>

  <h3>順序用クラス Order classes</h3>
  <p>
    コンテンツの<b>視覚的な順序</b>を制御するために <code>order</code> 属性を使用します。これらのクラスはレスポンシブなので、ブレークポイントで <code>order</code> を設定することができます (例えば、<code>order="1 md-2"</code>)。6 つのグリッドレベルで <code>1</code>から <code>5</code> をサポートしています。
    Use <code>order</code> attribute for controlling the <b>visual order</b> of your content. These classes are responsive, so you can set the <code>order</code> by breakpoint (e.g., <code>order="1 md-2"</code>). Includes support for <code>1</code> through <code>5</code> across all six grid tiers.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-order />
    </Example>
    <ExamplesCode
      path="/layout/column/order.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/order.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/order.html)
:::
:::: -->

  <p class="mt-3">
    また、レスポンシブな <code>order="first"</code> と <code>order="last"</code> クラスもあり、これを適用することで要素の <code>order</code> を変更することができます。これはそれぞれ <code>order: -1</code> と <code>order: 6</code> を適用して要素の <code>order</code> を変更するクラスです。これらのクラスは、必要に応じて番号付きの <code>order="*</code> クラスと混在させることもできます。There are also responsive <code>order="first"</code> and <code>order="last"</code> classes that change the <code>order</code> of an element by applying <code>order: -1</code> and <code>order: 6</code>, respectively. These classes can also be intermixed with the numbered <code>order="*</code> classes as needed.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-order-first-last />
    </Example>
    <ExamplesCode
      path="/layout/column/order-first-last.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/order-first-last.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/order-first-last.html)
:::
:::: -->

  <h4 class="mt-3">
    カラムのオフセット Offsetting columns
  </h4>
  <p>
    グリッドのカラムをオフセットするには、レスポンシブな <code>offset</code> グリッド属性と <LocalLink to="/utilities/spacing">
      マージンユーティリティ
    </LocalLink> の 2 つの方法があります。グリッド属性はカラムに合わせてサイズを調整しますが、マージンはオフセットの幅を可変にして素早くレイアウトする場合に便利です。You can offset grid columns in two ways: our responsive <code>offset</code> grid attributes and our <LocalLink to="/utilities/spacing">
      margin utilities
    </LocalLink>. Grid attributes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.
  </p>

  <h4>オフセットクラス Offset classes</h4>

  <code>offset="md-*"</code> クラスを使ってカラムを右に移動します。これらのクラスはカラムの左マージンを <code>*</code> カラム分増やします。例えば、<code>offset="md-4"</code> は <code>col="md-4"</code>を 4 カラムぶん右に移動させます。Move columns to the right using <code>offset="md-*"</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>offset="md-4"</code>moves <code>col="md-4"</code> over four columns.


  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-offset-classes />
    </Example>
    <ExamplesCode
      path="/layout/column/offset-classes.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/offset-classes.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/offset-classes.html)
:::
:::: -->

  <!-- <p class="mt-3">
    レスポンシブブレークポイントでのカラムクリアに加えて、オフセットをリセットする必要がある場合は <LocalLink to="/example/grid">
      グリッドのサンプル
    </LocalLink> で動作を確認してください。In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in <LocalLink to="/example/grid">
      the grid example
    </LocalLink>.
  </p> -->

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-offset-classes-reset />
    </Example>
    <ExamplesCode
      path="/layout/column/offset-classes-reset.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/offset-classes-reset.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/offset-classes-reset.html)
:::
:::: -->

  <h4>マージンユーティリティ Margin utilities</h4>
  <p>
    v4 で Flexbox に移行したことで、<code>margin="e-auto"</code> のようなマージンユーティリティを使用して、同階層のカラムを強制的に離すことができるようになりました。With the move to flexbox in v4, you can use margin utilities like <code>margin="e-auto"</code> to force sibling columns away from one another.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-margin />
    </Example>
    <ExamplesCode
      path="/layout/column/margin.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/margin.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/margin.html)
:::
:::: -->

  <h2 class="mt-3">
    独立したカラムクラス Standalone column classes
  </h2>
  <p>
    また、<code>col="*"</code> クラスは <code>row</code> の外側で要素に特定の幅を与えるために使用することもできます。カラムクラスが行の直接の子要素ではない場合、パディングは省略されます。The <code>col="*"</code> classes can also be used outside a <code>row</code> to give an element a specific width. Whenever column classes are used as non direct children of a row, the paddings are omitted.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-standalone-classes />
    </Example>
    <ExamplesCode
      path="/layout/column/standalone-classes.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/standalone-classes.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/standalone-classes.html)
:::
:::: -->
  <p class="mt-4">
    この属性は、ユーティリティと併用することで、レスポンシブに画像をフロートすることができます。必ず <LocalLink to="/helpers/clearfix">
      clearfix
    </LocalLink>で内容をラップして、テキストが短い場合はフロートをクリアするようにしてください。The attributes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a <LocalLink to="/helpers/clearfix">
      clearfix
    </LocalLink> wrapper to clear the float if the text is shorter.
  </p>

  <Snippet>
    <Example
      row
      row-flex-cols
    >
      <examples-layout-column-standalone-utilities />
    </Example>
    <ExamplesCode
      path="/layout/column/standalone-utilities.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/column/standalone-utilities.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/column/standalone-utilities.html)
:::
:::: -->
</template>