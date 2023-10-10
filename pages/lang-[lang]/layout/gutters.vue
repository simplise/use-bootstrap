<script setup lang="ts">
definePageMeta({
  'title:en': 'Gutters',
  'description:en': `Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.`,
  'title:ja': 'ガター',
  'description:ja': 'ガターはカラム間のパディングで、Bootstrap グリッドシステムのコンテンツを配置・整列させるために使います。'
})
</script>
<template>
  <!-- ## How they work

- **ガターとは、水平方向の `padding` によって作られるカラムの隙間のことです。** 各カラムに `padding-right` と `padding-left` を設定し、各行の最初と最後にネガティブ `margin` でオフセットしてコンテンツを揃えます。
**Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each row to align content.

- **ガターの初期値は `1.5rem` (`24px`) です。** カスタムしてグリッドを  [padding and margin spacers](/utilities/spacing.md) のスケールに合わせることができます。**Gutters start at `1.5rem` (`24px`) wide.** This allows us to match our grid to the [padding and margin spacers](/utilities/spacing.md) scale.

- **ガターはレスポンシブに調整することができます。** ブレークポイント固有のガタークラスを使用して、水平、垂直、およびすべてのガターを設定できます。**Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters. -->

  <h2>Horizontal gutters</h2>

  <Localization>
    <template #en>
      <p><code>gutter="x-5"</code> classes can be used to control the horizontal gutter widths. </p>
      <p>The <code>&lt;GridContainer&gt;</code> or <code>&lt;GridContainer type="fluid"&gt;</code> parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. </p>
      <p>For example, in the following example we've increased the padding with <code>padding="x-4"</code>:</p>
    </template>
    <template #ja>
      <p><code>gutter="x-5"</code> 属性を使うと、水平方向のガターを設定することができます。大きめのガターが使われている場合は、パディングユーティリティを使います。</p>
      <p>不要なオーバーフローを避けるため <code>Container</code> コンポーネントや <code>type=”fluid”</code>属性を親要素に設定することもできます。</p>
      <p>たとえば、次の例では <code>padding="x-4"</code> でパディングを増やしています。</p>
    </template>
  </Localization>

  <Snippet>
    <Example cols>
      <examples-layout-gutter-horizontal />
    </Example>
    <ExamplesCode
      path="/layout/gutter/horizontal.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>An alternative solution is to add a wrapper around the <code>Row</code> with the <code>overflow="hidden</code> class:</p>
    </template>
    <template #ja>
      <p><code>Row</code> コンポーネントを <code>overflow="hidden"</code> 属性でラップする方法もあります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example cols>
      <examples-layout-gutter-horizontal-overflow-hidden />
    </Example>
    <ExamplesCode
      path="/layout/gutter/horizontal-overflow-hidden.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Vertical gutters</h2>
  <Localization>
    <template #en>
      <p><code>.gutter="y-"</code> classes can be used to control the vertical gutter widths. </p>
      <p>Like the horizontal gutters, the vertical gutters can cause some overflow below the <code>Row</code> at the end of a page. </p>
      <p>If this occurs, you add a wrapper around <code>Row,</code> with the <code>overflow="hidden"</code> class:</p>
    </template>
    <template #ja>
      <p><code>gutter="y-"</code> 属性を使うと、垂直方向のガターを設定することができます。</p>
      <p>水平方向と同様に、垂直方向のガターはページの最後にある <code>Row</code> コンポーネントの下にオーバーフローを引き起こす可能性があります。</p>
      <p>このような場合は、<code>Row</code> コンポーネントを <code>overflow="hidden"</code> 属性でラップします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example cols>
      <examples-layout-gutter-vertical />
    </Example>
    <ExamplesCode
      path="/layout/gutter/vertical.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Horizontal & vertical gutters</h2>

  <Localization>
    <template #en>
      <p><code>gutter</code> properties can be used to control the horizontal gutter widths, </p>
      <p>for the following example we use a smaller gutter width, so there won't be a need to add the <code>overflow="hidden"</code> wrapper class.</p>
    </template>
    <template #ja>
      <p><code>gutter</code> 属性でx、もしくはyの値を設定しないと、水平・垂直ガターを設定することができます。</p>
      <p>次の例では、より小さなガターを使用しているので、<code>overflow="hidden"</code> 属性でラップする必要はありません。</p>
    </template>
  </Localization>


  <Snippet>
    <Example cols>
      <examples-layout-gutter-horizontal-vertical />
    </Example>
    <ExamplesCode
      path="/layout/gutter/horizontal-vertical.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Row columns gutters</h2>
  <Localization>
    <template #en>
      <p>
        Gutter classes can also be added to <LocalLink to="/layout/grid#row-columns/">
          row columns
        </LocalLink>. In the following example, we use responsive row columns and responsive gutter classes.
      </p>
    </template>
    <template #ja>
      <p>
        ガターは、<LocalLink to="/layout/grid#row-colums/">
          row columns
        </LocalLink>にも追加することができます。以下の例では、レスポンシブなカラムとレスポンシブなガタークラスを使用しています。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example cols>
      <examples-layout-gutter-row-columns />
    </Example>
    <ExamplesCode
      path="/layout/gutter/row-columns.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    No gutters
  </h2>

  <Localization>
    <template #en>
      <p>The gutters between columns in our predefined grid classes can be removed with <code>gutter="0"</code>. </p>
      <p>This removes the negative <code>margin</code>s from <code>Row</code> and the horizontal <code>padding</code> from all immediate children columns.</p>
      <p><b>Need an edge-to-edge design?</b> Drop the parent <code>Container</code> or <code>type="fluid"</code>.</p>
      <p>In practice, here's how it looks. </p>
      <p>Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).</p>
    </template>
    <template #ja>
      <p>定義済みのガタークラスは <code>gutter="0"</code> 属性で取り除くことができます。</p>
      <p>これにより、<code>Row</code> コンポーネントのネガティブ <code>margin</code> が削除され、すべての子カラムで水平方向の パディング が削除されます。</p>
      <p><b>端から端までのレイアウトが必要ですか？</b> 親要素の <code>Container</code> コンポーネントや <code>type="fluid"`</code> 属性を削除してください。</p>
      <p>実際には以下のようになります。</p>
      <p>他のすべての定義済みグリッドクラス（カラム幅、レスポンシブレベル、順序変更などを含む）でも、この方法を継続して使用できることに注意してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example row>
      <examples-layout-gutter-no />
    </Example>
    <ExamplesCode
      path="/layout/gutter/no.vue"
      lang="vue"
    />
  </Snippet>


  <!-- ## Change the gutters

Classes are built from the `$gutters` Sass map which is inherited from the `$spacers` Sass map.

```scss
$grid-gutter-width: 1.5rem;
$gutters: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
``` -->
</template>