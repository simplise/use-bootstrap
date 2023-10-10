<script setup lang="ts">
definePageMeta({
  'title:en': 'Grid system',
  'description:en': `Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.`,
  'title:ja': 'グリッドシステム',
  'description:ja': 'グリッドシステムは、12 カラムのシステムと 5 段階のレスポンシブ、Sass と mixin、いくつかの定義されたクラスですべての図形とサイズのレイアウトを作成可能です。'
})
</script>

<template>
  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. </p>
      <p>
        It's built with <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          flexbox
        </NuxtLink> and is fully responsive.
      </p>
      <p>Below is an example and an in-depth explanation for how the grid system comes together.</p>
    </template>
    <template #ja>
      <p>グリッドシステムは、一連のコンテナ、行、列を使用してコンテンツをレイアウトし、整列させます。 </p>
      <p>
        <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          flexbox
        </NuxtLink> で構築されており、完全にレスポンシブです。
      </p>
      <p>以下に、グリッドシステムがどのように組み合わされているかの例と詳細な説明を示します。</p>
    </template>
  </Localization>

  <h5>tip</h5>

  <Localization>
    <template #en>
      <p>
        <b>New to or unfamiliar with flexbox? </b>
        <NuxtLink to="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">
          Read this CSS Tricks flexbox guide
        </NuxtLink> for background, terminology, guidelines, and code snippets.
      </p>
    </template>
    <template #ja>
      <p>
        flexbox を初めてご利用になる方は <NuxtLink to="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background" />Read this CSS Tricks flexbox guide
        をご参照ください。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-row />
    </Example>
    <ExamplesCode
      path="/layout/grid/row.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. </p>
      <p>Those columns are centered in the page with the parent <code>Container</code>.</p>
    </template>
    <template #ja>
      <p>上の例では、定義済みのグリッドクラスを使用して、すべてのデバイスとビューポートに等幅のカラムを3つ作成しています。</p>
      <p>これらのカラムは親の <code>Container</code> を中心にしてページの中央に配置されます。</p>
    </template>
  </Localization>


  <!-- ## How it works

Breaking it down, here's how the grid system comes together:

- **[six responsive breakpoints](/documents/layout/breakpoints.md). をサポートしています。** ブレークポイントは `min-width` のメディアクエリに基づいており、そのブレークポイントとその上のすべてのブレークポイントに影響を与えます (e.g., `sm="4"` applies to `sm`, `md`, `lg`, `xl`, and `xxl`). つまり、ブレークポイントごとにコンテナやカラムのサイズや振る舞いを制御することができます。
**Our grid supports [six responsive breakpoints](/documents/layout/breakpoints.md).**  Breakpoints are based on `min-width` media queries, meaning they affect that breakpoint and all those above it (e.g., `sm="4"` applies to `sm`, `md`, `lg`, `xl`, and `xxl`). This means you can control container and column sizing and behavior by each breakpoint.

- **コンテナでコンテンツを中央に配置し、水平方向にパディングします。** レスポンシブピクセル幅には `Container` コンポーネントを使用し、すべてのビューポートやデバイスで `type="fluid"` 属性を使用して `width: 100%` を指定します。 (e.g., `<Container type="md"`)
**Containers center and horizontally pad your content.** Use `Container` for a responsive pixel width, `type="fluid"` for `width: 100%` across all viewports and devices, or a responsive container (e.g., `<Container type="md"`) for a combination of fluid and pixel widths.

- **行は列のラッパーです。** 各列には、列間のスペースを制御するための水平方向の `padding`（ガターと呼ばれます）があります。この `padding`は、負のマージンを持つ行で打ち消されて、列のコンテンツが視覚的に左側に揃うようにします。 行は、コンテンツの間隔を変更するために [uniformly apply column sizing](#row-columns) や [gutter classes](/documents/layout/gutters.md") を使用してコンテンツの間隔を変更する修飾子クラスもサポートします。
**Rows are wrappers for columns.** Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to [uniformly apply column sizing](#row-columns) and [gutter classes](/documents/layout/gutters.md") to change the spacing of your content.

- **列は非常に柔軟です。** 行ごとに12のテンプレート列を使用できるため、任意の数の列にまたがる要素のさまざまな組み合わせを作成できます。 列属性は、スパンするテンプレート列の数を示します (e.g., `size="4"` spans four). `width`はパーセンテージで設定されるため、常に同じ相対的なサイズになります。
**Columns are incredibly flexible.** There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., `size="4"` spans four). `width`s are set in percentages so you always have the same relative sizing.

- **ガッターもレスポンシブでカスタマイズ可能です。** すべてのブレークポイントでガーター属性が利用できます。[Gutter classes are available](/documents/layout/gutters.md)。 [margin and padding spacing](/documents/utilities/spacing/)と同じ大きさのガーターが利用できます。`gutter="x- "`属性で水平方向を、 `gutter="y- "`属性で縦方向のを、または `gutter=" "`でガーターを変更できます。 `gutter=" "`属性はガーターを削除することもできます。
**Gutters are also responsive and customizable.** [Gutter classes are available](/documents/layout/gutters.md) across all breakpoints, with all the same sizes as our [margin and padding spacing](/documents/utilities/spacing/). Change horizontal gutters with `gutter="x- "` properties, vertical gutters with `gutter="y- "`, or all gutters with `.g-*` properties. `gutter=" "` is also available to remove gutters.

- **Sassの変数、マップ、およびミックスインがグリッドのパワーを発揮します。** 定義済みのグリッドクラスを使用したくない場合は、[grid’s source Sass](#sass)を使用して、さらに多くのクラスを作成できます。また、これらのSass変数を消費するためのCSSカスタムプロパティをいくつか含んでいるので、より大きな柔軟性があります。**Sass variables, maps, and mixins power the grid.** If you don't want to use the predefined grid classes in Bootstrap, you can use our [grid's source Sass](#sass) to create your own with more semantic markup. We also include some CSS custom properties to consume these Sass variables for even greater flexibility for you.

仕様やBugに注意が必要です。Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9). -->

  <h2>Grid options</h2>
  <Localization>
    <template #en>
      <p>Bootstrap's grid system can adapt across all six default breakpoints, and any breakpoints you customize. </p>
      <p>The six default grid tiers are as follow:</p>
    </template>
    <template #ja>
      <p>グリッドシステムは、6つのデフォルトのブレークポイントと、カスタマイズしたブレークポイントのすべてに適応できます。</p>
      <p>6つのデフォルトのグリッド階層は以下の通りです。</p>
    </template>
  </Localization>

  <ul>
    <li> Extra small (xs)</li>
    <li> Small (sm)</li>
    <li> Medium (md)</li>
    <li> Large (lg)</li>
    <li> Extra large (xl)</li>
    <li> Extra extra large (xxl)</li>
  </ul>

  <Localization>
    <template #en>
      <p>As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. </p>
      <p>Here's how the grid changes across these breakpoints:</p>
    </template>
    <template #ja>
      <p>上で述べたように、これらのブレークポイントはそれぞれ独自のコンテナ、固有のクラスプレフィックス、および修飾子を持っています。</p>
      <p>以下に、ブレークポイント間でグリッドがどのように変化するかを示します。</p>
    </template>
  </Localization>

  <docs-descriptions-grid-options />

  <h2>Auto-layout columns</h2>

  <Localization>
    <template #en>
      <p>Utilize breakpoint-specific column properties for easy column sizing without an explicit numbered properties like <code>sm="6"</code>.</p>
    </template>
    <template #ja>
      <p><code>sm="6"</code> のような明示的な番号付き属性を使用せずに、ブレークポイント固有のカラム属性を利用して簡単にカラムのサイズを決定します。</p>
    </template>
  </Localization>

  <h2>Equal-width</h2>
  <Localization>
    <template #en>
      <p>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xxl</code>. </p>
      <p>Add any number of unit-less properties for each breakpoint you need and every column will be the same width.</p>
    </template>
    <template #ja>
      <p>例えば、<code>xs</code> から <code>xxl</code> までのすべてのデバイスとビューポートに適用される 2 つのグリッドレイアウトを以下に示します。</p>
      <p>必要なブレークポイントごとに任意の数のユニットレスプロパティを追加すると、すべての列が同じ幅になります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-equal-width />
    </Example>
    <ExamplesCode
      path="/layout/grid/equal-width.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Setting one column width </h2>
  <Localization>
    <template #en>
      <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. </p>
      <p>You may use predefined grid properties (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
    </template>
    <template #ja>
      <p>flexbox グリッド カラムの自動レイアウトは、1 つのカラムの幅を設定して、その周りにある兄弟カラムのサイズを自動的に変更することもできます。</p>
      <p>定義済みのグリッド属性 (以下に示すように)、グリッド ミックスイン、インライン幅を使用できます。中央のカラムの幅に関係なく、他のカラムのサイズが変更されることに注意してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-column-width />
    </Example>
    <ExamplesCode
      path="/layout/grid/column-width.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Variable width content</h2>

  <Localization>
    <template #en>
      <p>
        Use <code>size="auto"</code> property or <code>{breakpoint}="auto"</code> properties to size columns based on the natural width of their content.
      </p>
    </template>
    <template #ja>
      <p>
        <code>size="auto"</code> 属性もしくは<code>{breakpoint}="auto"</code>属性を使って、内容の自然な幅に基づいてカラムのサイズを調整します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-variable-width />
    </Example>
    <ExamplesCode
      path="/layout/grid/variable-width.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ::: tip
プロパティに`<col :md="3">`とコロンが付けられるときと`<Col md="auto">`とコロンが付けられないときがあります。これはvueの機能で[v-vindの省略記法](https://v3.ja.vuejs.org/guide/template-syntax.html#%E7%9C%81%E7%95%A5%E8%A8%98%E6%B3%95)に当たります。プロパティに指定する値が数値の場合は必ずコロンを付けるようにしてください。There are times when a property can have a colon with `<col :md="3">` and times when it cannot have a colon with `<Col md="auto">`.This is a feature of vue, and corresponds to the [v-vind shorthand notation](https://vuejs.org/guide/essentials/template-syntax.html#directives) .If the value specified for a property is a number, be sure to add a colon.
::: -->

  <h2>Responsive classes</h2>
  <Localization>
    <template #en>
      <p>Bootstrap's grid includes six tiers of predefined classes for building complex responsive layouts. </p>
      <p>Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>
    </template>
    <template #ja>
      <p>Bootstrapのグリッドには、複雑なレスポンシブレイアウトを構築するための事前定義された属性の6つの層が含まれています。</p>
      <p>extra small, small, medium, large, or extra large(特大、小、中、大、または特大) のデバイスで、適切と思われる方法で列のサイズをカスタマイズします。</p>
    </template>
  </Localization>
  <h2>All breakpoints</h2>
  <Localization>
    <template #en>
      <p>For grids that are the same from the smallest of devices to the largest, use the <code>col</code> tag. </p>
      <p>Specify a numbered properties when you need a particularly sized column; otherwise, feel free to stick to <code>col</code>.</p>
    </template>
    <template #ja>
      <p>最小のデバイスから最大のデバイスまで同じグリッドの場合、<code>Col</code> コンポーネントや、 <code>size=""</code> 属性を使います。</p>
      <p>特定のサイズの列が必要な場合は、番号付きの属性を指定します; それ以外の場合は <code>col</code> を使用してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-breakpoints-all />
    </Example>
    <ExamplesCode
      path="/layout/grid/breakpoints-all.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Stacked to horizontal</h2>

  <Localization>
    <template #en>
      <p>Using a single set of <code>&lt;Col sm=""&gt;</code> tags, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code>sm</code>).</p>
    </template>
    <template #ja>
      <p><code>&lt;Col sm=""&gt;</code>コンポーネントの単一のセットを使用して、積み重ねられて始まり、小さなブレークポイント（<code>sm</code>）で水平になる基本的なグリッドシステムを作成できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-breakpoints-all />
    </Example>
    <ExamplesCode
      path="/layout/grid/breakpoints-all.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Mix and match</h2>
  <Localization>
    <template #en>
      <p>Don't want your columns to simply stack in some grid tiers? </p>
      <p>Use a combination of different properties for each tier as needed. See the example below for a better idea of how it all works.</p>
    </template>
    <template #ja>
      <p>必要に応じて、層ごとに異なる属性の組み合わせを使用します。 </p>
      <p>どのように機能するかについては、以下の例をご覧ください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-mix-match />
    </Example>
    <ExamplesCode
      path="/layout/grid/mix-match.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Row columns</h2>
  <Localization>
    <template #en>
      <p>Use the responsive <code>&lt;Row columns=""&gt;</code> classes to quickly set the number of columns that best render your content and layout. </p>
      <p>Whereas normal <code>Col</code> classes apply to the individual columns (e.g.,<code>&lt;Col :md="4"&gt;</code>）, the row columns classes are set on the parent <code>Row</code> as a shortcut. </p>
      <p>With <code>&lt;bsGridRow columns="auto"&gt;</code>） you can give the columns their natural width.</p>
    </template>
    <template #ja>
      <p>レスポンシブな &lt;Col columns=""&gt;コンポーネントを使用して、コンテンツとレイアウトを最適にレンダリングする列の数をすばやく設定します。 </p>
      <p>通常の <code>Col</code>コンポーネントは個々の列（たとえば、<code>&lt;Col :md="4"&gt;</code>）に適用されますが、行列クラスはショートカットとして親の <code>Row</code>に設定されます。</p>
      <p><code>&lt;Row columns="auto"&gt;</code>で列に自然な幅を与えることができます。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>Use these row columns classes to quickly create basic grid layouts or to control your card layouts.</p>
    </template>
    <template #ja>
      <p>これらの行列クラスを使用して、基本的なグリッドレイアウトをすばやく作成したり、カードレイアウトを制御したりします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-grid-row-columns />
    </Example>
    <ExamplesCode
      path="/layout/grid/row-columns.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example row>
      <examples-layout-grid-row-columns-1 />
    </Example>
    <ExamplesCode
      path="/layout/grid/row-columns-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example row>
      <examples-layout-grid-row-columns-2 />
    </Example>
    <ExamplesCode
      path="/layout/grid/row-columns-2.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example row>
      <examples-layout-grid-row-columns-3 />
    </Example>
    <ExamplesCode
      path="/layout/grid/row-columns-3.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example row>
      <examples-layout-grid-row-columns-4 />
    </Example>
    <ExamplesCode
      path="/layout/grid/row-columns-4.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example row>
      <examples-layout-grid-row-columns-5 />
    </Example>
    <ExamplesCode
      path="/layout/grid/row-columns-5.vue"
      lang="vue"
    />
  </Snippet>


  <!-- 付随するSassミックスイン、 `row-cols()`を使用することもできます。You can also use the accompanying Sass mixin, `row-cols()`:

```scss
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
``` -->

  <h2>Nesting</h2>
  <Localization>
    <template #en>
      <p>
        To nest your content with the default grid, add a new <code>&lt;Row&gt;</code> and set of
        <code>&lt;Col sm=""&gt;</code> columns within an existing
        <code>&lt;Col sm=""&gt;</code> column.
      </p>
      <p>Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
    </template>
    <template #ja>
      <p>
        コンテンツをデフォルトのグリッドにネストするには、新しい <code>&lt;Row&gt;</code>と一連の
        <code>&lt;Col sm=""&gt;</code>列を既存の
        <code>&lt;Col sm=""&gt;</code>列内に追加します。
      </p>
      <p>ネストされた行には、最大で12以下の一連の列が含まれている必要があります（使用可能な12の列すべてを使用する必要はありません）。</p>
    </template>
  </Localization>

  <!-- ## Sass

Sassファイルを使用する場合、Sass変数とミックスインを使用して、カスタム、セマンティック、レスポンシブなページレイアウトを作成するオプションがあります。 事前定義されたグリッドクラスは、これらと同じ変数とミックスインを使用して、高速応答レイアウト用のすぐに使用できるクラスのスイート全体を提供します。When using Bootstrap's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

変数とマップは、列数、ガター幅、および浮動列を開始するメディアクエリポイントを決定します。 これらを使用して、上記の事前定義されたグリッドクラスと、以下にリストされているカスタムミックスインを生成します。Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
``` -->

  <!-- {{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}} -->

  <!-- {{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}} -->

  <!-- ### Mixins

ミックスインはグリッド変数と組み合わせて使用され、個々のグリッド列のCSSを生成します。Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
``` -->
  <!-- 
### Example usage

変数を独自のカスタム値に変更することも、デフォルト値でミックスインを使用することもできます。 以下は、デフォルト設定を使用して、間にギャップがある2列のレイアウトを作成する例です。You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // `width: 100%` generated by `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
``` -->

  <!-- {{< example >}}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
{{< /example >}} -->
  <!-- 
## Customizing the grid

組み込みグリッドのSass変数とマップを使用して、事前定義されたグリッドクラスを完全にカスタマイズできます。 層の数、メディアクエリのサイズ、コンテナの幅を変更してから、再コンパイルします。Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.

### Columns and gutters

グリッド列の数は、Sass変数を使用して変更できます。 `$grid-columns`は個々の列の幅（パーセント単位）を生成するために使用され、 `$grid-gutter-width`は列のガターの幅を設定します。The number of grid columns can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$grid-gutter-width` sets the width for the column gutters.

```scss
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
```

### Grid tiers

グリッド層の数をカスタマイズすることもできます。 グリッド層を4つだけにする場合は、 `$grid-breakpoints`と`$container-max-widths`を次のように更新します。Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you'd update the `$grid-breakpoints` and `$container-max-widths` to something like this:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```

Sass変数またはマップに変更を加える場合は、変更を保存して再コンパイルする必要があります。 これを行うと、列幅、オフセット、および順序付けのための事前定義されたグリッドクラスの新しいセットが出力されます。 レスポンシブ可視性ユーティリティも、カスタムブレークポイントを使用するように更新されます。 グリッド値は必ず pxに設定してください（ rem、 em、％ではありません）。When making any changes to the Sass variables or maps, you'll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in `px` (not `rem`, `em`, or `%`). -->
</template>