<script setup lang="ts">
definePageMeta({
  'title:en': 'Migration',
  'description:en': 'Migrate from Bootstrap5 codes.',
  'title:ja': 'マイグレーション',
  'description:ja': 'Bootstrap5 コードを use-bootstrap に移行します。'
})
</script>

<template>
  <Localization>
    <template #en>
      <h2>Raw Bootstrap5 HTML</h2>
      <p />
    </template>
    <template #ja>
      <h2>生の Bootstrap5 HTML</h2>
      <p>Bootstrap5を用いて記述されたHTMLは そのまま問題なく利用できます。</p>
      <p>但しJavaScriptを用いるコンポーネントは そのままでは動作しません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-migration-raw-bootstrap />
    </Example>
    <ExamplesCode
      path="/migration/raw-bootstrap.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <h2>HTML components</h2>
      <p />
    </template>
    <template #ja>
      <h2>use-bootstrap HTML コンポーネント</h2>
      <p>use-bootstrap では HTML 要素に対応したHTMLコンポーネントが用意されています。</p>
      <p>use-bootstrap の HTMLコンポーネントは デフォルトでBのプリフィクスが設定されています。</p>
      <p>このドキュメントでは HTMLコンポーネントを利用する際に ケバブケースで b- を要素名に指定しています。</p>
      <p>class 属性は 独自のスタイル指定のために 専用の属性として利用できます。</p>
      <p>HTML要素を use-bootstrap の HTMLコンポーネントに変更する例を下記に示します。</p>
      <p>レンダリング結果は、bootstrap5 HTML と同一になります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-migration-html-component />
    </Example>
    <ExamplesCode
      path="/migration/html-component.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <h2>Directive</h2>
      <p />
    </template>
    <template #ja>
      <h2>Directive</h2>
      <p>use-bootstrap の HTMLコンポーネントを利用する代わりに HTML要素とv-bootstrap ディレクティブを利用することもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-migration-use-directive />
    </Example>
    <ExamplesCode
      path="/migration/use-directive.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <h2>Bootstrap components</h2>
      <p />
    </template>
    <template #ja>
      <h2>Bootstrap components</h2>
      <p>use-bootstrap では Bootstrap5 コンポーネントに対応したBootstrap コンポーネントが用意されています。</p>
      <p>use-bootstrap の Bootstrapコンポーネントは、デフォルトでは プリフィクス文字が空文字に設定されています。</p>
      <p>このドキュメントでは、Bootstrapコンポーネントを利用する際に、キャメルケースで要素名に指定しています。</p>
      <p>Bootstrapコンポーネントを利用する際に、初期化のためのJavaScriptは必要ありません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-single-button-1 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/single-button-1.vue"
      lang="vue"
    />
  </Snippet>

  
  <Localization>
    <template #en>
      <h2>Multi property values</h2>
      <h3>String values with spaces</h3>
      <p />
    </template>
    <template #ja>
      <h2>Multi property values</h2>
      <h3>String values with spaces</h3>
      <p>プロパティに複数の値を指定する場合は、空白で区切ります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-migration-property-multi-string />
    </Example>
    <ExamplesCode
      path="/migration/property-multi-string.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <h3>Array values with v-bind</h3>
      <p />
    </template>
    <template #ja>
      <h3>Array values with v-bind</h3>
      <p>v-bind を利用して、配列を指定することもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-migration-property-multi-bind />
    </Example>
    <ExamplesCode
      path="/migration/property-multi-bind.vue"
      lang="vue"
    />
  </Snippet>
</template>
