
<script setup lang="ts">
definePageMeta({
  'title:en': 'Blockquotes - Typography',
  'description:en': `For quoting blocks of content from another source within your document.`,
  'title:ja': '引用 - タイポグラフィー',
  'description:ja': '文章に外部ソースからのコンテンツやブロックを引用する場合は Blockquote コンポーネントを利用します。'
})
</script>

<template>
  <Localization>
    <template #en>
      <p>For quoting blocks of content from another source within your document. Wrap <code>Blockquote</code> component around any <code>&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;</code> as the quote.</p>
    </template>
    <template #ja>
      <p>文章に外部ソースからのコンテンツやブロックを引用する場合は <code>Blockquote</code> コンポーネントを利用します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-blockquotes />
    </Example>
    <ExamplesCode
      path="/content/typography/blockquotes.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Naming a source</h3>
  <Localization>
    <template #en>
      <p>The HTML spec requires that blockquote attribution be placed outside the <code>Blockquote</code> component. </p>
      <p>When providing attribution, wrap your <code>Blockquote</code> component in a <code>Figure</code> component and use a <code>footer</code> attribute or a block level element (e.g., <code>&lt;P&gt;</code>) with the <code>Figcaption</code> component class. </p>
      <p>Be sure to wrap the name of the source work in <code>&lt;cite&gt;</code> tag as well.</p>
    </template>
    <template #ja>
      <p>HTML仕様では、ブロック引用符の帰属を <code>Blockquote</code> コンポーネントの外側に配置する必要があります。</p>
      <p>アトリビューションを提供するときは、 <code>Blockquote</code> コンポーネントを <code>Figure</code> コンポーネントでラップし <code>Figcaption</code> コンポーネント で <code>footer</code> 属性 またはブロックレベル要素（例：<code>&lt;P&gt;</code>）を使用します。 </p>
      <p>ソース作品の名前も必ず <code>&lt;cite&gt;</code> タグで囲んでください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-blockquotes-naming />
    </Example>
    <ExamplesCode
      path="/content/typography/blockquotes-naming.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Alignment</h3>
  <Localization>
    <template #en>
      <p>Use <code>text-alignment</code> attribute as needed to change the alignment of your blockquote.</p>
    </template>
    <template #ja>
      <p>引用の配置を変更するには, <code>text-alignment</code> 属性を使用します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-blockquotes-center />
    </Example>
    <ExamplesCode
      path="/content/typography/blockquotes-center.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
  <Snippet>
    <Example>
      <examples-content-typography-blockquotes-end />
    </Example>
    <ExamplesCode
      path="/content/typography/blockquotes-end.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
</template>