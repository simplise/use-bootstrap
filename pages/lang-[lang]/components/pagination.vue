<script setup lang="ts">
definePageMeta({
  'title:en': 'Pagination',
  'description:en': `Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.`,
  'title:ja': 'ページネーション',
  'description:ja': 'ページネーションについてのドキュメントと例です。'
})
</script>

<template>
  <h2>Overview</h2>
  <Localization>
    <template #en>
      <p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas.</p>
      <p>Pagination is built with list HTML elements so screen readers can announce the number of available links.</p>
      <p>Use a wrapping <code>Nav</code> component to identify it as a navigation section to screen readers and other assistive technologies.</p>
    </template>
    <template #ja>
      <p>件数が多く, 画面の多くの領域を締める場合はページネーションを活用できます。</p>
      <p>ページネーションはリストのHTML要素で構成され,スクリーンリーダーは利用可能なリンクの数を知らせることが可能です。</p>
      <p><code>Nav</code> コンポーネントを使用して, それをリーダーやその他の支援技術を絞り込むためのナビゲーションセクションとして識別します。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive <code>aria-label</code> attribute for the <code>Nav</code> component to reflect its purpose.</p>
      <p>For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
    </template>
    <template #ja>
      <p>ページにはこのようなナビゲーションセクションが複数存在する可能性があるので, その目的を反映するため <code>Nav</code> コンポーネントに <code>aria-label</code> 属性を付けることを推奨します。</p>
      <p>例えば, ページネーションを使用して一連の検索結果の間を移動する場合, 適切なラベルは aria-label="Search results pages" となります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-pagination-overview />
    </Example>
    <ExamplesCode
      path="/components/pagination/overview.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Working with icons</h2>
  <Localization>
    <template #en>
      <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>
    </template>
    <template #ja>
      <p>ページネーションリンクのテキストの代わりにアイコンやシンボルを使用したい場合は, <code>aria</code> 属性を使用してスクリーンリーダーを適切にサポートするようにしてください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-pagination-icon />
    </Example>
    <ExamplesCode
      path="/components/pagination/icon.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Disabled and active states</h2>
  <Localization>
    <template #en>
      <p>Pagination links are customizable for different circumstances. Use <code>disabled</code> attribute for links that appear un-clickable and <code>active</code> attribute to indicate the current page.</p>
      <p>While the <code>disabled</code> attribute uses <code>pointer-events: none</code> to _try_ to disable the link functionality of <code>b-a</code> components, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> attribute on disabled links and use custom JavaScript to fully disable their functionality.</p>
    </template>
    <template #ja>
      <p>ページ分割リンクは、さまざまな状況に応じてカスタマイズすることができます。クリックできないリンクには <code>disabled</code> 属性を、現在のページを示すには <code>active</code> 属性を使います。</p>
      <p><code>disabled</code> 属性は <code>b-a</code> コンポーネントのリンク機能を無効にするために <code>pointer-events: none</code> を使用していますが、この CSS プロパティはまだ標準化されておらず、キーボードナビゲーションを考慮していません。そのため、無効化されたリンクには常に <code>tabindex="-1"</code> 属性を追加し、その機能を完全に無効化するためにカスタム JavaScript を使用しなければなりません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-pagination-state-1 />
    </Example>
    <ExamplesCode
      path="/components/pagination/state-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>You can optionally swap out active or disabled anchors for `PageLink`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
    </template>
    <template #ja>
      <p>アクティブなアンカーや無効なアンカーを `PageLink` コンポーネントと入れ替えたり、前/次の矢印の場合はアンカーを省略したりして、意図したスタイルを維持したままクリック機能を削除したり、キーボードフォーカスを防ぐことができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-pagination-state-2 />
    </Example>
    <ExamplesCode
      path="/components/pagination/state-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Sizing </h2>
  <Localization>
    <template #en>
      <p>Fancy larger or smaller pagination? Add <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.</p>
    </template>
    <template #ja>
      <p>サイズの変更には <code>size="lg"</code> や <code>size="sm"</code> を利用できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-pagination-sizing-lg />
    </Example>
    <ExamplesCode
      path="/components/pagination/sizing-lg.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-pagination-sizing-sm />
    </Example>
    <ExamplesCode
      path="/components/pagination/sizing-sm.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Alignment</h2>
  <Localization>
    <template #en>
      <p>
        Change the alignment of pagination components with <LocalLink to="/utilities/flex">
          flexbox utilities
        </LocalLink>.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/flex">
          flexbox utilities
        </LocalLink>でページネーションコンポーネントの配置を変更します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-pagination-alignment-1 />
    </Example>
    <ExamplesCode
      path="/components/pagination/alignment-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-pagination-alignment-2 />
    </Example>
    <ExamplesCode
      path="/components/pagination/alignment-2.vue"
      lang="vue"
    />
  </Snippet>
</template>