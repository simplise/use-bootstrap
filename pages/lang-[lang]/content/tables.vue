<script setup lang="ts">
definePageMeta({
  title: 'テーブル Tables',
  description: 'テーブルのクラス適用例です。Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.'
})
</script>

<template>
  <!-- title: テーブル Tables -->
  <!-- description: テーブルのクラス適用例です。Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap. -->

  <h2>Overview</h2>

  <!-- カレンダーや date pickers のようなサードパーティのウィジェットで `Table` コンポーネントが広く使われているため、Bootstrap のテーブルは **opt-in** です。  -->

  <p>
    <code>Table</code>コンポーネントでテーブルを囲み、オプションの修飾子クラスまたはカスタムスタイルで拡張します。 すべてのテーブルスタイルがBootstrapで継承されるわけではありません。ネストされたテーブルは、親から独立してスタイルを設定できます。
  </p>
  <p>
    Add the base class <code>.Table</code> to any <code>Table</code>, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent.
  </p>
  <p>
    基本的なテーブルマークアップを使用して、以下はBootstrapで <code>Table</code> コンポーネントベースのテーブルがどのように見えるかを示しています。Using the most basic table markup, here's how <code>Table</code> component-based tables look in Bootstrap.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-overview />
    </Example>
    <ExamplesCode
      path="/content/table/overview.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Variants</h2>

  <p>
    <code>theme</code> 属性を使用して、表、表の行、または個々のセルに色を付けることができます。Use <code>theme</code> attribute to color tables, table rows or individual cells.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-variants />
    </Example>
    <ExamplesCode
      path="/content/table/variants.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Accented tables</h2>

  <h3>Striped rows</h3>
  <p>
    <code>Tbody</code> コンポーネント内のテーブル行に zebra-striping を追加するには、<code>striped</code> 属性を使用します。Use <code>striped</code> attribute to add zebra-striping to any table row within the <code>Tbody</code> component.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-striped />
    </Example>
    <ExamplesCode
      path="/content/table/striped.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <p>
    テーブルに variants を追加することもできます。These classes can also be added to table variants:
  </p>


  <Snippet>
    <Example>
      <examples-content-table-striped-dark />
    </Example>
    <ExamplesCode
      path="/content/table/striped-dark.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-table-striped-success />
    </Example>
    <ExamplesCode
      path="/content/table/striped-success.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Hoverable rows</h3>
  <p>
    テーブルの行が <code>Tbody</code> コンポーネント内でホバー状態になるように <code>hover</code> 属性を追加できます。Add <code>hover</code> to enable a hover state on table rows within a <code>Tbody</code> component.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-hover />
    </Example>
    <ExamplesCode
      path="/content/table/hover.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-table-hover-dark />
    </Example>
    <ExamplesCode
      path="/content/table/hover-dark.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <p>
    ホバリング可能な行は、縞模様のバリエーションと組み合わせることもできます。These hoverable rows can also be combined with the striped variant:
  </p>


  <Snippet>
    <Example>
      <examples-content-table-hover-striped />
    </Example>
    <ExamplesCode
      path="/content/table/hover-striped.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Active tables</h3>
  <p>
    <code>active</code> 属性を追加することで、表の行やセルを強調表示します。Highlight a table row or cell by adding a <code>active</code> class.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-active />
    </Example>
    <ExamplesCode
      path="/content/table/active.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-table-active-dark />
    </Example>
    <ExamplesCode
      path="/content/table/active-dark.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Table borders</h2>
  <h3>Bordered tables</h3>
  <p>
    テーブルとセルの四方の境界線を指定するために <code>bordered</code> 属性を追加する。Add <code>bordered</code> attribute for borders on all sides of the table and cells.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-bordered />
    </Example>
    <ExamplesCode
      path="/content/table/bordered.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <p>
    <LocalLink to="/utilities/borders#border-color">
      Border color utilities
    </LocalLink> を追加して色を変えることができます。<LocalLink to="/utilities/borders#border-color">
      Border color utilities
    </LocalLink> can be added to change colors:
  </p>


  <Snippet>
    <Example>
      <examples-content-table-bordered-primary />
    </Example>
    <ExamplesCode
      path="/content/table/bordered-primary.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Tables without borders</h3>
  <p>
    <code>borderless</code> 属性を追加すると border がなくなります。Add <code>borderless</code> attribute for a table without borders.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-borderless />
    </Example>
    <ExamplesCode
      path="/content/table/borderless.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-table-borderless-dark />
    </Example>
    <ExamplesCode
      path="/content/table/borderless-dark.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Small tables</h2>
  <p>
    <code>Table</code> コンポーネントをよりコンパクトにするために <code>small</code> 属性を追加するとセルの <code>padding</code> を半分にできます。Add <code>small</code> attribute to make any <code>Table</code> component more compact by cutting all cell <code>padding</code> in half.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-small />
    </Example>
    <ExamplesCode
      path="/content/table/small.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-table-small-dark />
    </Example>
    <ExamplesCode
      path="/content/table/small-dark.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Vertical alignment</h2>
  <p>
    <code>Thead</code> のテーブルセルは常に下に垂直に配置されます。<code>Tbody</code> のテーブルセルは <code>Table</code> からアラインメントを継承し、デフォルトでは上にアラインメントされます。必要に応じて <LocalLink to="/utilities/vertical-align">
      vertical align
    </LocalLink> 属性を使って再整列してください。Table cells of <code>Thead</code> are always vertical aligned to the bottom. Table cells in <code>Tbody</code> inherit their alignment from <code>Table</code> and are aligned to the top by default. Use the <LocalLink to="/utilities/vertical-align">
      vertical align
    </LocalLink> attribute to re-align where needed.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-vertical-alignment />
    </Example>
    <ExamplesCode
      path="/content/table/vertical-alignment.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Nesting</h2>
  <p>
    ボーダースタイル、アクティブスタイル、テーブルバリアントは、入れ子になったテーブルでは継承されません。Border styles, active styles, and table variants are not inherited by nested tables.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-nesting />
    </Example>
    <ExamplesCode
      path="/content/table/nesting.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>How nesting works</h2>
  <p>
    スタイルがネストされたテーブルに適用されないために、CSS で子コンビネーター (<code>/></code>) セレクタを使用しています。 <code>Thead</code>, <code>Tbody</code>, <code>Tfoot</code> のすべての <code>TD</code> と <code>TH</code> をターゲットにする必要があるので、これがないとセレクタがかなり長く見えてしまいます。そのため、<code>Table > :not(caption) > * > *</code> セレクタを使用して、<code>Table</code> のすべての <code>TD</code> と <code>TH</code> をターゲットにしますが、入れ子になっている可能性のあるテーブルはすべてターゲットにしません。To prevent _any_ styles from leaking to nested tables, we use the child combinator (<code>/></code>) selector in our CSS. Since we need to target all the <code>TD</code> s and <code>Th</code> s in the <code>Thead</code>, <code>Tbody</code>, and <code>Tfoot</code>, our selector would look pretty long without it. As such, we use the rather odd looking <code>Table > :not(caption) > * > *</code> selector to target all <code>TD</code>s and <code>Th</code>s of the <code>Table</code>, but none of any potential nested tables.
  </p>
  <p>
    テーブルの直接の子として <code>TR</code> を追加した場合、それらの <code>TR</code> はデフォルトでは <code>Tbody</code> でラップされることに注意してください。Note that if you add <code>TR</code>s as direct children of a table, those <code>TR</code> will be wrapped in a <code>Tbody</code> by default, thus making our selectors work as intended.
  </p>

  <h2>Anatomy</h2>
  <h3>Table head</h3>
  <p>
    表や暗い表と同様に、修飾属性 <code>light</code> や <code>dark</code> を使って <code>Theads</code> を明るい灰色や暗い灰色に見せることができます。Similar to tables and dark tables, use the modifier attributes <code>light</code> or <code>dark</code> to make <code>Thead</code>s appear light or dark gray.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-head />
    </Example>
    <ExamplesCode
      path="/content/table/head.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-table-head-dark />
    </Example>
    <ExamplesCode
      path="/content/table/head-dark.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Table foot</h3>


  <Snippet>
    <Example>
      <examples-content-table-foot />
    </Example>
    <ExamplesCode
      path="/content/table/foot.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Captions</h3>
  <p>
    <code>Caption</code> コンポーネントは表の見出しのような機能を持つ。スクリーンリーダを持つユーザが表を見つけて、それが何についてのものかを理解し、それを読みたいかどうかを決めるのに役立ちます。A <code>Caption</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-caption />
    </Example>
    <ExamplesCode
      path="/content/table/caption.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <p>
    <code>caption="top"</code> 属性で表の一番上に <code>Caption</code> を置くこともできます。You can also put the <code>Caption</code> on the top of the table with <code>caption="top"</code> attribute.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-caption-top />
    </Example>
    <ExamplesCode
      path="/content/table/caption-top.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Responsive tables</h2>
  <p>
    レスポンシブテーブルを使うと、テーブルを簡単に水平方向にスクロールさせることができます。<code>Table</code> コンポーネントに <code>responsive</code> 属性を追加することで、すべてのビューポートに対応したレスポンシブテーブルにすることができます。あるいは、<code>responsive={sm|md|lg|xl|xxl}</code>を使用して、レスポンシブテーブルの最大ブレークポイントを指定します。Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code>Table</code> cp, with <code>responsive</code> attribute. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code>responsive={sm|md|lg|xl|xxl}</code>.
  </p>

  ::: warning
  ##### Vertical clipping/truncation

  レスポンシブテーブルは `overflow-y: hidden` を利用しており、テーブルの下端や上端からはみ出したコンテンツを切り取ることができます。特に、これはドロップダウンメニューやサードパーティ製のウィジェットを切り取ることができます。Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
  :::

  <h3>Always responsive</h3>
  <p>
    すべてのブレークポイントにおいて、水平方向にスクロールするテーブルには <code>responsive</code> 属性を使用します。Across every breakpoint, use <code>responsive</code> attrobute for horizontally scrolling tables.
  </p>


  <Snippet>
    <Example>
      <examples-content-table-responsive />
    </Example>
    <ExamplesCode
      path="/content/table/responsive.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Breakpoint specific</h3>
  <p>
    特定のブレークポイントまでのレスポンシブテーブルを作成するには、必要に応じて <code>responsive={sm|md|lg|xl|xxl}</code> 属性を使用します。そのブレークポイント以降では、テーブルは正常に動作し、水平方向にはスクロールしません。Use <code>responsive={sm|md|lg|xl|xxl}</code> attribute as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.
  </p>
  <p>
    <b>これらのテーブルは、特定のビューポート幅でレスポンシブスタイルが適用されるまで壊れているように見えることがあります。These tables may appear broken until their responsive styles apply at specific viewport widths.</b>
  </p>


  <Snippet>
    <Example>
      <examples-content-table-responsive-sm />
    </Example>
    <ExamplesCode
      path="/content/table/responsive-sm.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
</template>