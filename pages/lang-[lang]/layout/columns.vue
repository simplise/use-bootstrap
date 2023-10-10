<script setup lang="ts">
definePageMeta({
  'title:en': 'Columns',
  'description:en': `Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column properties to manage widths of non-grid elements.`,
  'title:ja': 'カラム',
  'description:ja': 'Flexbox グリッドシステムをベースに豊富なプロパティを使って、カラム(列)を整列、並べ替え、オフセットする方法を紹介します。カラムの幅を制御するためのプロパティも紹介します。'
})
</script>

<template>
  <!-- <h5>tip</h5>
  <p>
    カラムを変更・カスタマイズする前に、まず <LocalLink to="/layout/grid">
      グリッド
    </LocalLink>に目を通してください。
    <b>Heads up!</b> Be sure to <LocalLink to="/layout/grid">
      read the Grid page
    </LocalLink> first before diving into how to modify and customize your grid columns.
  </p> -->

  <!-- ## 基本的な仕組みHow they work

- **グリッドの Flexbox アーキテクチャ上に構築されたカラムです。** Flexbox とは、個々のカラムを変更したり、[行レベルのカラムグループを変更するオプション](/layout/grid#row-columns)があることを意味します。カラムの拡大、縮小、その他の変更方法を選択します。**Columns build on the grid's flexbox architecture.** Flexbox means we have options for changing individual columns and [modifying groups of columns at the row level](/layout/grid#row-columns). You choose how columns grow, shrink, or otherwise change.

- **グリッドレイアウトを構築する場合、すべてのコンテンツはカラムになります。** Bootstrap グリッドの階層は、[コンテナ](layout/container) から、行、カラム(列)、コンテンツへと続きます。まれに、コンテンツとカラムを組み合わせることがありますが、意図しない結果になる可能性があることに注意してください。**When building grid layouts, all content goes in columns.** The hierarchy of Bootstrap's grid goes from [container](/layout/containers) to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.

- **レスポンシブなレイアウトを作成するためのプロパティを用意しています。** [6 つのブレークポイント](/layout/breakpoints) と各グリッドに 12 個のカラムがあるので、用意されたプロパティを組み合わせるだけで望むレイアウトを実現できます。プロパティは Sass で無効にすることができます。**Bootstrap includes predefined properties for creating fast, responsive layouts.** With [six breakpoints](/layout/breakpoints) and a dozen columns at each grid tier, we have dozens of properties already built for you to create your desired layouts. This can be disabled via Sass if you wish. -->

  <h3>Alignment</h3>
  <Localization>
    <template #en>
      <p>Use <code>align</code> utilities to vertically and horizontally align columns.</p>
    </template>
    <template #ja>
      <p><code>align</code> 属性を使用して、カラムを垂直方向と水平方向に整列できます。</p>
    </template>
  </Localization>

  <h4 class="mt-5">
    Vertical alignment
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

  <h4>Horizontal alignment</h4>

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

  <h4 class="mt-3">
    Column wrapping
  </h4>
  <Localization>
    <template #en>
      <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>
    </template>
    <template #ja>
      <p>1 つの行内に 12 を超えるカラムが配置されている場合、追加したカラムの各グループは、1 つの単位として新しい行に折り返されます。</p>
    </template>
  </Localization>

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


  <h4 class="mt-3 ">
    Column breaks
  </h4>
  <Localization>
    <template #en>
      <p>Breaking columns to a new line in flexbox requires a small hack: </p>
      <p>add an element with <code>width="100"</code> wherever you want to wrap your columns to a new line. </p>
      <p>Normally this is accomplished with multiple <code>&lt;Row&gt;</code><code>&lt;/Row&gt;</code>s, but not every implementation method can account for this.</p>
    </template>
    <template #ja>
      <p>Flexbox でカラムを改行するにはハックが必要です。</p>
      <p>改行したい場所に<code>width="100"</code>の要素を追加します。</p>
      <p>複数の <code>&lt;Row&gt;</code><code>&lt;/Row&gt;</code> で実現できますが、すべての実装方法がこれに対応できるわけではありません。</p>
    </template>
  </Localization>

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

  <Localization>
    <template #en>
      <p>You may also apply this break at specific breakpoints with our responsive display utilities.</p>
    </template>
    <template #ja>
      <p>また、レスポンシブ表示ユーティリティ を利用して特定のブレークポイントで改行できます。</p>
    </template>
  </Localization>

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

  <h4 class="mt-3">
    Reordering
  </h4>

  <h3>Order classes</h3>
  <Localization>
    <template #en>
      <p>Use <code>order</code> attribute for controlling the <b>visual order</b> of your content. </p>
      <p>These classes are responsive, so you can set the <code>order</code> by breakpoint (e.g., <code>order="1 md-2"</code>). </p>
      <p>Includes support for <code>1</code> through <code>5</code> across all six grid tiers.</p>
    </template>
    <template #ja>
      <p>コンテンツの<b>視覚的な順序</b>を制御するために <code>order</code> 属性を使用します。</p>
      <p>これらのクラスはレスポンシブなので、ブレークポイントで <code>order</code> を設定することができます (例えば、<code>order="1 md-2"</code>)。</p>
      <p>6 つのグリッドレベルで <code>1</code>から <code>5</code> をサポートしています。</p>
    </template>
  </Localization>

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

  <Localization>
    <template #en>
      <p>There are also responsive <code>order="first"</code> and <code>order="last"</code> classes that change the <code>order</code> of an element by applying <code>order: -1</code> and <code>order: 6</code>, respectively. </p>
      <p>These classes can also be intermixed with the numbered <code>order="*</code> classes as needed.</p>
    </template>
    <template #ja>
      <p>また、レスポンシブな <code>order="first"</code> と <code>order="last"</code> クラスもあり、これを適用することで要素の <code>order</code> を変更することができます。</p>
      <p>これはそれぞれ <code>order: -1</code> と <code>order: 6</code> を適用して要素の <code>order</code> を変更するクラスです。</p>
      <p>これらのクラスは、必要に応じて番号付きの <code>order="*</code> クラスと混在させることもできます。</p>
    </template>
  </Localization>

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


  <h4 class="mt-3">
    Offsetting columns
  </h4>
  <Localization>
    <template #en>
      <p>
        You can offset grid columns in two ways: our responsive <code>offset</code> grid attributes and our <LocalLink to="/utilities/spacing/">
          margin utilities
        </LocalLink>.
      </p>
      <p>Grid attributes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>
    </template>
    <template #ja>
      <p>
        グリッドのカラムをオフセットするには、レスポンシブな <code>offset</code> グリッド属性と <LocalLink to="/utilities/spacing/">
          margin utilities
        </LocalLink> の 2 つの方法があります。
      </p>
      <p>グリッド属性はカラムに合わせてサイズを調整しますが、マージンはオフセットの幅を可変にして素早くレイアウトする場合に便利です。</p>
    </template>
  </Localization>

  <h4>Offset classes</h4>

  <Localization>
    <template #en>
      <p>Move columns to the right using <code>offset="md-*"</code> classes. </p>
      <p>These classes increase the left margin of a column by <code>*</code> columns. For example, <code>offset="md-4"</code>moves <code>col="md-4"</code> over four columns.</p>
    </template>
    <template #ja>
      <p><code>offset="md-*"</code> クラスを使ってカラムを右に移動します。これらのクラスはカラムの左マージンを <code>*</code> カラム分増やします。</p>
      <p>例えば、<code>offset="md-4"</code> は <code>col="md-4"</code>を 4 カラムぶん右に移動させます。</p>
    </template>
  </Localization>

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


  <h4>Margin utilities</h4>
  <Localization>
    <template #en>
      <p>you can use margin utilities like <code>margin="e-auto"</code> to force sibling columns away from one another.</p>
    </template>
    <template #ja>
      <p><code>margin="e-auto"</code> のようなマージンユーティリティを使用して、同階層のカラムを強制的に離すことができるようになりました。</p>
    </template>
  </Localization>

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

  <h2 class="mt-3">
    Standalone column classes
  </h2>
  <Localization>
    <template #en>
      <p>The <code>col="*"</code> classes can also be used outside a <code>row</code> to give an element a specific width. </p>
      <p>Whenever column classes are used as non direct children of a row, the paddings are omitted.</p>
    </template>
    <template #ja>
      <p>また、<code>col="*"</code> クラスは <code>row</code> の外側で要素に特定の幅を与えるために使用することもできます。</p>
      <p>カラムクラスが行の直接の子要素ではない場合、パディングは省略されます。</p>
    </template>
  </Localization>

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
  <Localization>
    <template #en>
      <p>The attributes can be used together with utilities to create responsive floated images. </p>
      <p>
        Make sure to wrap the content in a <LocalLink to="/helpers/clearfix">
          clearfix
        </LocalLink> wrapper to clear the float if the text is shorter.
      </p>
    </template>
    <template #ja>
      <p>この属性は、ユーティリティと併用することで、レスポンシブに画像をフロートすることができます。</p>
      <p>
        必ず <LocalLink to="/helpers/clearfix/">
          clearfix
        </LocalLink>で内容をラップして、テキストが短い場合はフロートをクリアするようにしてください。
      </p>
    </template>
  </Localization>

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
</template>