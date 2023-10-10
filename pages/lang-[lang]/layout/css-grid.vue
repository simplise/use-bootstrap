<script setup lang="ts">
definePageMeta({
  'title:en': 'CSS Grid',
  'description:en': `Bootstrap's default grid system represents the culmination of over a decade of CSS layout techniques, tried and tested by millions of people.But, it was also created without many of the modern CSS features and techniques we're seeing in browsers like the new CSS Grid.`,
  'title:ja': 'CSS Grid',
  'description:ja': `Bootstrapのデフォルトのグリッドシステムは、10年以上にわたるCSSレイアウトテクニックの集大成であり、何百万人もの人々に試行錯誤されてきました。`
})
</script>

<template>
  <!-- <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <p>
      <b>Heads up—our CSS Grid system is experimental and opt-in as of v5.1.0!</b> We included it in our documentation's CSS to demonstrate it for you, but it's disabled by default. Keep reading to learn how to enable it in your projects.
    </p>
  </div> -->

  <h2>How it works</h2>

  <Localization>
    <template #en>
      <p>
        With Bootstrap 5, we've added the option to enable a separate grid system that's built on CSS Grid, but with a Bootstrap twist. You still get classes you can apply on a whim to build responsive layouts, but with a different approach under the hood.
      </p>
    </template>
    <template #ja>
      <p>
        Bootstrap 5では、CSS GridをベースにBootstrapのひねりを加えた、独立したグリッドシステムを有効にするオプションが追加されました。レスポンシブなレイアウトを構築するために、思い付きで適用できるクラスはそのままですが、ボンネットの下では異なるアプローチを採用しています。
      </p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li> <b>CSS Grid is opt-in.</b> Disable the default grid system by setting <code>$enable-grid-classes: false</code> and enable the CSS Grid by setting <code>$enable-cssgrid: true</code>. Then, recompile your Sass.</li>
        <li> <b>Replace instances of <code>row</code> with <code>grid</code>.</b> The <code>grid</code> attributes sets <code>display: grid</code> and creates a <code>grid-template</code> that you build on with your HTML.</li>
        <li> <b>Replace <code>col="*"</code> classes with <code>GridCol</code> components.</b> This is because our CSS Grid columns use the <code>GridCol</code> component instead of <code>width</code>.</li>
        <li> <b>Columns and gutter sizes are set via CSS variables.</b> Set these on the parent <code>grid</code> and customize however you want, inline or in a stylesheet, with <code>--bs-columns</code> and <code>--bs-gap</code>.</li>
      </template>
      <template #ja>
        <li> <b>CSS Gridはオプトインです。</b><code>$enable-grid-classes: false</code>を設定してデフォルトのグリッドシステムを無効にし、<code>$enable-cssgrid: true</code>を設定してCSSグリッドを有効にします。その後、Sassを再コンパイルします。</li>
        <li> <b><code>row</code>のインスタンスを<code>grid</code>に置き換えます。</b> <code>grid</code>属性は<code>display: grid</code>を設定し、<code>grid-template</code>を自身のHTMLに作成します。</li>
        <li> <b><code>col="*"</code>クラスを<code>GridCol</code>コンポーネントで置き換えます。</b>これは、CSSのGridのカラムが<code>width</code>の代わりに<code>GridCol</code>コンポーネントを使用するためです。</li>
        <li> <b>カラムとガターのサイズは、CSS変数で設定します。</b>親<code>grid</code>でこれらを設定し、<code>--bs-columns</code>と<code>--bs-gap</code>を使ってインラインまたはスタイルシートで好きなようにカスタマイズします。</li>
      </template>
    </Localization>
  </ul>

  <Localization>
    <template #en>
      <p>
        In the future, Bootstrap will likely shift to a hybrid solution as the <code>gap</code> property has achieved nearly full browser support for flexbox.
      </p>
    </template>
    <template #ja>
      <p>
        将来的には、<code>gap</code>プロパティがフレックスボックスのほぼ完全なブラウザサポートを達成したため、Bootstrapはハイブリッドソリューションに移行すると思われます。
      </p>
    </template>
  </Localization>
  <!-- ## Key differences

Compared to the default grid system:

- Flex utilities don't affect the CSS Grid columns in the same way.

- Gaps replaces gutters. The `gap` property replaces the horizontal `padding` from our default grid system and functions more like `margin`.

- As such, unlike `.row`s, `.grid`s have no negative margins and margin utilities cannot be used to change the grid gutters. Grid gaps are applied horizontally and vertically by default. See the [customizing section](#customizing) for more details.

- Inline and custom styles should be viewed as replacements for modifier classes (e.g., `style="--bs-columns: 3;"` vs `class="row-cols-3"`).

- Nesting works similarly, but may require you to reset your column counts on each instance of a nested `.grid`. See the [nesting section](#nesting) for details. -->

  <h2>Examples</h2>

  <h3>Three columns</h3>

  <Localization>
    <template #en>
      <p>
        Three equal-width columns across all viewports and devices can be created by using the <code>size="4"</code> atttibutes. Add <a href="#responsive">
          responsive classes
        </a> to change the layout by viewport size.
      </p>
    </template>
    <template #ja>
      <p>
        <code>size="4"</code>属性を使用することで、すべてのビューポートとデバイスにわたって3つの等幅カラムを作成できます。<a href="#responsive">
          responsive classes
        </a>を追加して、ビューポートサイズによってレイアウトを変更します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-three-columns />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/three-columns.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Responsive
  </h3>

  <Localization>
    <template #en>
      <p>
        Use responsive classes to adjust your layout across viewports. Here we start with two columns on the narrowest viewports, and then grow to three columns on medium viewports and above.
      </p>
    </template>
    <template #ja>
      <p>
        レスポンシブクラスを使用して、ビューポート間でレイアウトを調整します。ここでは、最も狭いビューポートでは2カラムから始め、ミディアムビューポート以上では3カラムに増やします。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-responsive-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/responsive-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p class="mt-3">
        Compare that to this two column layout at all viewports.
      </p>
    </template>
    <template #ja>
      <p>
        すべてのビューポートでこの2列のレイアウトと比較してみてください。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-responsive-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/responsive-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Wrapping
  </h2>

  <Localization>
    <template #en>
      <p>
        Grid items automatically wrap to the next line when there's no more room horizontally. Note that the <code>gap</code> applies to horizontal and vertical gaps between grid items.
      </p>
    </template>
    <template #ja>
      <p>
        グリッドアイテムは、水平方向にスペースがなくなると自動的に次の行に折り返されます。この<code>gap</code>は、グリッドアイテム間の水平方向と垂直方向のギャップにも適用されることに注意してください。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-wrapping />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/wrapping.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Starts
  </h2>

  <Localization>
    <template #en>
      <p>
        Start classes aim to replace our default grid's offset classes, but they're not entirely the same. CSS Grid creates a grid template through styles that tell browsers to "start at this column" and "end at this column." Those properties are <code>column-start</code> and <code>column-end</code>. Start classes are shorthand for the former. Pair them with the column classes to size and align your columns however you need. Start classes begin at <code>1</code> as <code>0</code> is an invalid value for these properties.
      </p>
    </template>
    <template #ja>
      <p>
        開始クラスは、デフォルトのグリッドのオフセットクラスを置き換えることを目的としていますが、完全に同じというわけではありません。CSS Gridは、「この列で開始」と「この列で終了」をブラウザに指示するスタイルを通してグリッドテンプレートを作成します。これらのプロパティは<code>column-start</code>と<code>column-end</code>です。開始クラスは全社の略記法です。カラムクラスと組み合わせることで、カラムのサイズや配置を自由に設定することができます。開始クラスは<code>1</code>から始まりますが<code>0</code>はこれらの値に対して無効です。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-starts />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/starts.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Auto columns
  </h2>

  <Localization>
    <template #en>
      <p>
        When there are no classes on the grid items (the immediate children of a <code>Grid</code>), each grid item will automatically be sized to one column.
      </p>
    </template>
    <template #ja>
      <p>
        グリッドアイテム（グリッドの直接の子要素）にクラスがない場合、各グリッドアイテムのサイズは自動的に1列になります。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-auto-columns-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/auto-columns-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p class="mt-3">
        This behavior can be mixed with grid column classes.
      </p>
    </template>
    <template #ja>
      <p>
        この動作は、グリッドカラムクラスと混在させることができます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-auto-columns-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/auto-columns-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Nesting
  </h2>

  <Localization>
    <template #en>
      <p>
        Similar to our default grid system, our CSS Grid allows for easy nesting of <code>Grid</code>s. However, unlike the default, this grid inherits changes in the rows, columns, and gaps. Consider the example below:
      </p>
    </template>
    <template #ja>
      <p>
        デフォルトのグリッドシステムと同様に、CSSグリッドでは<code>Grid</code>の入れ子を簡単に行うことができます。ただし、デフォルトとは異なり、このグリッドは行、列、ギャップの変更を継承します。以下の例を見て下さい。
      </p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li> We override the default number of columns with a local CSS variable: <code>--bs-columns: 3</code>.</li>
        <li> In the first auto-column, the column count is inherited and each column is one-third of the available width.</li>
        <li> In the second auto-column, we've reset the column count on the nested <code>Grid</code> to 12 (our default).</li>
        <li> The third auto-column has no nested content.</li>
      </template>
      <template #ja>
        <li>ローカルCSS変数<code>--bs-columns: 3</code>でデフォルトのカラム数を上書きします。</li>
        <li>最初の自動カラムでは、カラム数は継承され、各カラムは利用可能な幅の3分の1になります。</li>
        <li>2番目の自動カラムでは、ネストされた<code>Grid</code>のカラム数を12(デフォルト)にリセットしています。</li>
        <li>3番目のオートカラムには、ネストされたコンテンツはありません。</li>
      </template>
    </Localization>
  </ul>

  <Localization>
    <template #en>
      <p>
        In practice this allows for more complex and custom layouts when compared to our default grid system.
      </p>
    </template>
    <template #ja>
      <p>
        実際には、デフォルトのグリッドシステムと比較して、より複雑なカスタムレイアウトが可能です。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-nesting />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/nesting.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Customizing
  </h2>

  <Localization>
    <template #en>
      <p>
        Customize the number of columns, the number of rows, and the width of the gaps with local CSS variables.
      </p>
    </template>
    <template #ja>
      <p>
        ローカルCSS変数で、列数、行数、隙間の幅をカスタマイズできます。
      </p>
    </template>
  </Localization>

  <docs-descriptions-cssgrid-customizing />

  <Localization>
    <template #en>
      <p>
        These CSS variables have no default value; instead, they apply fallback values that are used _until_ a local instance is provided. For example, we use <code>var(--bs-rows, 1)</code> for our CSS Grid rows, which ignores <code>--bs-rows</code> because that hasn't been set anywhere yet. Once it is, the <code>Grid</code> instance will use that value instead of the fallback value of <code>1</code>.
      </p>
    </template>
    <template #ja>
      <p>
        これらのCSS変数にはデフォルト値がありません。代わりに、ローカルインスタンスが提供されるまで使用されるフォールバック値が適用されます。例えば、CSSグリッドの行に、<code>var(--bs-rows, 1)</code>を使用していますが、<code>--bs-rows</code>はまだどこにも設定されていないので無視されます。いったん設定されると、<code>Grid</code>インスタンスはフォールバック値である<code>1</code>の代わりにその値を使用します。
      </p>
    </template>
  </Localization>

  <h3>No grid classes</h3>

  <Localization>
    <template #en>
      <p>
        Immediate children elements of <code>Grid</code> are grid items, so they'll be sized without explicitly adding a <code>GridCol</code> class.
      </p>
    </template>
    <template #ja>
      <p>
        <code>Grid</code>の直接の子要素は、グリッドアイテムなので、<code>GridCol</code>を明示的に追加しなくてもサイズが決まります。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-no-grid />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/no-grid.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Columns and gaps
  </h3>

  <Localization>
    <template #en>
      <p>
        Adjust the number of columns and the gap.
      </p>
    </template>
    <template #ja>
      <p>
        列数とギャップを調整する。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-columns-gaps-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/columns-gaps-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-columns-gaps-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/columns-gaps-2.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Adding rows
  </h3>

  <Localization>
    <template #en>
      <p>
        Adding more rows and changing the placement of columns:
      </p>
    </template>
    <template #ja>
      <p>
        行をふやし、列の配置を変える。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-adding-rows />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/adding-rows.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Gaps
  </h3>

  <Localization>
    <template #en>
      <p>
        Change the vertical gaps only by modifying the <code>row-gap</code>. Note that we use <code>gap</code> on <code>.grid</code>s, but <code>row-gap</code> and <code>column-gap</code> can be modified as needed.
      </p>
    </template>
    <template #ja>
      <p>
        <code>row-gap</code>を変更することで、垂直方向のギャップのみを変更できます。<code>.grid</code>では<code>gap</code>を使用していますが、<code>row-gap</code>と<code>column-gap</code>は必要に応じて変更できることに注意してください。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-gaps-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/gaps-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p class="mt-3">
        Because of that, you can have different vertical and horizontal <code>gap</code>s, which can take a single value (all sides) or a pair of values (vertical and horizontal). This can be applied with an inline style for <code>gap</code>, or with our <code>--bs-gap</code> CSS variable.
      </p>
    </template>
    <template #ja>
      <p class="mt-3">
        そのため、垂直方向と水平方向の<code>gap</code>を変えることができ、1つの値（全ての辺）または2つの値（垂直方向と水平方向）をとることができます。これは、<code>gap</code>のインラインスタイル、または<code>--bs-gap</code> CSS変数で適用できます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-gaps-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/gaps-2.vue"
      lang="vue"
    />
  </Snippet>


  <!-- ## Sass

One limitation of the CSS Grid is that our default classes are still generated by two Sass variables, `$grid-columns` and `$grid-gutter-width`. This effectively predetermines the number of classes generated in our compiled CSS. You have two options here:

- Modify those default Sass variables and recompile your CSS.
- Use inline or custom styles to augment the provided classes.

For example, you can increase the column count and change the gap size, and then size your "columns" with a mix of inline styles and predefined CSS Grid column classes (e.g., `.g-col-4`). -->

  <!-- <examples-layout-css-grid-Sass/>

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/Sass.vue)
:::
::: code-group-item bootstrap5
```html
<div class="grid" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>
```
:::
:::: -->
</template>