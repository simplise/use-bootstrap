<script setup lang="ts">
definePageMeta({
  'title:en': 'Figures',
  'description:en': `Documentation and examples for displaying related images and text with the figure component in Bootstrap.`,
  'title:ja': '図 Figures',
  'description:ja': 'Bootstrapのfigureコンポーネントで関連画像やテキストを表示するためのドキュメントとサンプル。'
})
</script>
<template>
  <Localization>
    <template #en>
      <p>Anytime you need to display a piece of content—like an image with an optional caption, consider using a <code>Figure</code> component.</p>
      <p>Use the included <code>Figure</code>, <code>Img</code> and <code>Figcaption</code> component to provide some baseline styles for the HTML5 <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements. </p>
      <p>Images in figures have no explicit size, so be sure to add the <code>fluid</code> attribute to your <code>Img</code> to make it responsive.</p>
    </template>
    <template #ja>
      <p>任意のキャプションでコンテンツを表示する必要があるときは, <code>Figure</code> コンポーネントの使用を検討してください。</p>
      <p><code>Figure</code>, <code>Img</code>, <code>Figcaption</code> コンポーネントを使用して, HTML5の <code>&lt;figure&gt;</code> , <code>&lt;figcaption&gt;</code> 要素にいくつかのベースラインスタイルを提供します。 </p>
      <p>figureの画像サイズはサンプルのように <code>fluid</code> 属性を <code>Img</code> に追加して変更します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-figure-example-1 />
    </Example>
    <ExamplesCode
      path="/content/figure/example-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Localization>
    <template #en>
      <p>
        Aligning the figure's caption is easy with our <LocalLink to="/utilities/text#text-alignment">
          text utilities
        </LocalLink>.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/text#text-alignment">
          text utilities
        </LocalLink> を利用すると, 位置の変更が簡単にできます。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-content-figure-example-2 />
    </Example>
    <ExamplesCode
      path="/content/figure/example-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
</template>