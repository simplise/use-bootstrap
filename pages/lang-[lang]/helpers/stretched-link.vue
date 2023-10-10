<script setup lang="ts">
definePageMeta({
  'title:en': 'Stretched link',
  'description:en': `Make any HTML element or Bootstrap component clickable by stretching a nested link via CSS.`,
  'title:ja': 'ストレッチリンク',
  'description:ja': 'CSSでネストされたリンクを「Stretched link (ストレッチリンク) にすることで、任意のHTML要素やBootstrapコンポーネントをクリックできるようにします。'
})
</script>
 
<template>
  <Localization>
    <template #en>
      <p>Add <code>stretched-link</code> attribute to a link to make its containing block clickable via a <code>::after</code> pseudo element. </p>
      <p>In most cases, this means that an element with <code>position: relative;</code> that contains a link with the <code>stretched-link</code> attribute is clickable. </p>
      <p>Please note given how CSS <code>position</code> works, <code>stretched-link</code> attribute cannot be mixed with most table elements.</p>
      <p>Cards have <code>position: relative</code> by default in Bootstrap, so in this case you can safely add the <code>stretched-link</code> attribute to a link in the card without any other HTML changes.</p>
      <p>Multiple links and tap targets are not recommended with stretched links. However, some <code>position</code> and <code>z-index</code> styles can help should this be required.</p>
    </template>
    <template #ja>
      <p>リンクに <code>stretched-link</code> 属性を追加して、<code>::after</code> 擬似要素を使ってそのリンクの containing block がクリックが可能になるようにします。 </p>
      <p>ほとんどの場合、これは、 <code>stretched-link</code> 属性のリンクを含む <code>position：relative;</code> の要素がクリック可能であることを意味します。</p>
      <p>Bootstrapではデフォルトでカードに <code>position：relative;</code> があるため、この場合、他のHTMLを変更せずに、カード内のリンクに <code>stretched-link</code> 属性を安全に追加できます。</p>
      <p>複数のリンクやタップターゲットは、ストレッチリンクでは推奨されません。しかし、必要に応じて <code>position</code> や <code>z-index</code> スタイルを利用することができます。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>Most custom components do not have <code>position: relative</code> by default, so we need to add the <code>.position-relative,</code> here to prevent the link from stretching outside the parent element.</p>
    </template>
    <template #ja>
      <p>ほとんどのカスタムコンポーネントはデフォルトで position: relative を持っていないので、リンクが親要素の外に伸びないようにするためにここに .position-relative を追加する必要があります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-helpers-stretched-link-custom />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/custom.vue"
      lang="vue"
    />
  </Snippet>




  <!--うまく表示されていません Custom component with stretched link -->

  <Snippet>
    <Example>
      <examples-helpers-stretched-link-columns />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/columns.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Identifying the containing block</h2>

  <Localization>
    <template #en>
      <p>
        If the stretched link doesn't seem to work, the containing block will probably be the cause. The following CSS properties will make an element the containing block:
      </p>
    </template>
    <template #ja>
      <p>
        伸びたリンクがうまくいかないようであれば、containing block が原因ではないかと思います。以下のCSSプロパティで要素を content blockにします。
      </p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li> A <code>position</code> value other than <code>static</code></li>
        <li> A <code>transform</code> or <code>perspective</code> value other than <code>none</code></li>
        <li> A <code>will-change</code> value of <code>transform</code> or <code>perspective</code></li>
        <li> A <code>filter</code> value other than <code>none</code> or a <code>will-change</code> value of <code>filter</code> (only works on Firefox)</li>
      </template>
      <template #ja>
        <li> <code>static</code>以外の<code>position</code>値</li>
        <li> <code>none</code>以外の<code>transform</code>または<code>perspective</code>値</li>
        <li> <code>transform</code>または<code>perspective</code>の<code>will-change</code>値</li>
        <li> <code>filter</code>の<code>none</code>または<code>filter</code>の<code>will-change</code>以外の値 (Firefoxでのみ動作します。)</li>
      </template>
    </Localization>
  </ul>


  <Snippet>
    <Example>
      <examples-helpers-stretched-link-identifying />
    </Example>
    <ExamplesCode
      path="/helpers/stretched-link/identifying.vue"
      lang="vue"
    />
  </Snippet>
</template>