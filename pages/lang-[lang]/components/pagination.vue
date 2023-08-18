<script setup lang="ts">
definePageMeta({
  title: `ページネーション Pagination`,
  description: `ページネーションについてのドキュメントと例です。 Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.`
})
</script>

<template>
  <!---
title: ページネーション Pagination
description: ページネーションについてのドキュメントと例です。 Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
--->

  <h2>Overview</h2>
  <p>
    件数が多く, 画面の多くの領域を締める場合はページネーションを活用できます。 ページネーションはリストのHTML要素で構成され,スクリーンリーダーは利用可能なリンクの数を知らせることが可能です。 <code>Nav</code> コンポーネントを使用して, それをリーダーやその他の支援技術を絞り込むためのナビゲーションセクションとして識別します。
    We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping <code>Nav</code> component to identify it as a navigation section to screen readers and other assistive technologies.
  </p>
  <p>
    ページにはこのようなナビゲーションセクションが複数存在する可能性があるので, その目的を反映するため L<code>Nav</code> コンポーネントに <code>aria-label</code> 属性を付けることを推奨します。 例えば, ページネーションを使用して一連の検索結果の間を移動する場合, 適切なラベルは aria-label="Search results pages" となります。
    In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive <code>aria-label</code> attribute for the <code>Nav</code> component to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.
  </p>
  <Snippet>
    <Example>
      <examples-components-pagination-overview />
    </Example>
    <ExamplesCode
      path="/components/pagination/overview.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/overview.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/overview.html)
:::
::::-->

  <h2>Working with icons</h2>
  <p>
    ページネーションリンクのテキストの代わりにアイコンやシンボルを使用したい場合は, <code>aria</code> 属性を使用してスクリーンリーダーを適切にサポートするようにしてください。
    Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.
  </p>
  <Snippet>
    <Example>
      <examples-components-pagination-icon />
    </Example>
    <ExamplesCode
      path="/components/pagination/icon.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/icon.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/icon.html)
:::
:::: -->

  <h2>Disabled and active states</h2>
  <p>
    ページ分割リンクは、さまざまな状況に応じてカスタマイズすることができます。クリックできないリンクには <code>disabled</code> 属性を、現在のページを示すには <code>active</code> 属性を使います。
    Pagination links are customizable for different circumstances. Use <code>disabled</code> attribute for links that appear un-clickable and <code>active</code> attribute to indicate the current page.
  </p>
  <p>
    <code>disabled</code> 属性は <code>b-a</code> コンポーネントのリンク機能を無効にするために <code>pointer-events: none</code> を使用していますが、この CSS プロパティはまだ標準化されておらず、キーボードナビゲーションを考慮していません。そのため、無効化されたリンクには常に <code>tabindex="-1"</code> 属性を追加し、その機能を完全に無効化するためにカスタム JavaScript を使用しなければなりません。
    While the <code>disabled</code> attribute uses <code>pointer-events: none</code> to _try_ to disable the link functionality of <code>b-a</code> components, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> attribute on disabled links and use custom JavaScript to fully disable their functionality.
  </p>
  <Snippet>
    <Example>
      <examples-components-pagination-state-1 />
    </Example>
    <ExamplesCode
      path="/components/pagination/state-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/state-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/state-1.html)
:::
:::: -->

  <p>
    アクティブなアンカーや無効なアンカーを `PageLink` コンポーネントと入れ替えたり、前/次の矢印の場合はアンカーを省略したりして、意図したスタイルを維持したままクリック機能を削除したり、キーボードフォーカスを防ぐことができます。
    You can optionally swap out active or disabled anchors for `PageLink`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.
  </p>
  <Snippet>
    <Example>
      <examples-components-pagination-state-2 />
    </Example>
    <ExamplesCode
      path="/components/pagination/state-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/state-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/state-2.html)
:::
:::: -->

  <h2>Sizing </h2>
  <p>
    サイズの変更には <code>size="lg"</code> や <code>size="sm"</code> を利用できます。
    Fancy larger or smaller pagination? Add <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.
  </p>
  <Snippet>
    <Example>
      <examples-components-pagination-sizing-lg />
    </Example>
    <ExamplesCode
      path="/components/pagination/sizing-lg.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/sizing-lg.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/sizing-lg.html)
:::
:::: -->
  <Snippet>
    <Example>
      <examples-components-pagination-sizing-sm />
    </Example>
    <ExamplesCode
      path="/components/pagination/sizing-sm.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/sizing-sm.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/sizing-sm.html)
:::
:::: -->

  <h2>Alignment</h2>
  <p>
    <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink>でページネーションコンポーネントの配置を変更します。
    Change the alignment of pagination components with <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink>.
  </p>
  <Snippet>
    <Example>
      <examples-components-pagination-alignment-1 />
    </Example>
    <ExamplesCode
      path="/components/pagination/alignment-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/alignment-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/alignment-1.html)
:::
:::: -->
  <Snippet>
    <Example>
      <examples-components-pagination-alignment-2 />
    </Example>
    <ExamplesCode
      path="/components/pagination/alignment-2.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/pagination/alignment-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/pagination/alignment-2.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!--
{{< scss-docs name="pagination-variables" file="scss/_variables.scss" >}}
-->

  <!-- ### Mixins -->

  <!--
{{< scss-docs name="pagination-mixin" file="scss/mixins/_pagination.scss" >}}
-->
</template>