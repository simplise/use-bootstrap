<script setup lang="ts">
definePageMeta({
  'title:en': 'Breadcrumb',
  'description:en': `Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.`,
  'title:ja': 'パンくずリスト',
  'description:ja': 'パンくずリストはページを階層化して、現在のページの位置を示します。使い方の例を示します。'
})
</script>

<template>
  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb.</p>
      <p>Use our utilities to add additional styles as desired.</p>
    </template>
    <template #ja>
      <p>リストアイテムを使用して、最小限の breadcrumb を作成できます。</p>
      <p>ユーティリティを使用して、必要に応じてスタイルを追加できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-breadcrumb-example />
    </Example>
    <ExamplesCode
      path="/components/breadcrumb/example.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Dividers</h2>
  <Localization>
    <template #en>
      <p>Dividers can be changed by modifying a attribute <code>divider</code>, </p>
      <p>or through the <code>$breadcrumb-divider</code> Sass variable — and <code>$breadcrumb-divider-flipped</code> for its RTL counterpart, if needed. </p>
      <p>We default to our Sass variable, which is set as a fallback to the custom property. </p>
      <p>This way, you get a global divider that you can override without recompiling CSS at any time.</p>
    </template>
    <template #ja>
      <p>ディバイダーは、<code>divider</code> 属性を使って変更することができます。</p>
      <p>また、ローカルCSSカスタムプロパティ <code>--bs-breadcrumb-divider</code>を変更するか、必要に応じて、 <code>$breadcrumb-divider</code> Sass変数と <code>$breadcrumb-divider-flipped</code>を使用して変更できます。 </p>
      <p>デフォルトは、カスタムプロパティへのフォールバックとして設定されているSass変数が使用されます。 </p>
      <p>このようにして、CSSを再コンパイルせずにオーバーライドできるグローバルディバイダーを取得します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-breadcrumb-dividers-1 />
    </Example>
    <ExamplesCode
      path="/components/breadcrumb/dividers-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>When modifying via Sass, the <a href="https://sass-lang.com/documentation/modules/string#quote">quote</a> function is required to generate the quotes around a string. </p>
    </template>
    <template #ja>
      <p>Sassにより変更する場合、文字列を引用符で囲むには、<a href="https://sass-lang.com/documentation/modules/string#quote">quote</a> 関数が必要です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-breadcrumb-dividers-2 />
    </Example>
    <ExamplesCode
      path="/components/breadcrumb/dividers-2.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>You can also remove the divider setting <code>--bs-breadcrumb-divider: '';</code> (empty strings in CSS custom properties counts as a value), </p>
      <p>or setting the Sass variable to <code>$breadcrumb-divider: none;</code>.</p>
    </template>
    <template #ja>
      <p>仕切りの設定 <code>--bs-breadcrumb-divider: '';</code>（CSSカスタムプロパティの空の文字列は値としてカウントされます）を削除したり、</p>
      <p>Sass変数を <code>$breadcrumb-divider: none;</code>に設定したりすることもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-breadcrumb-dividers-3 />
    </Example>
    <ExamplesCode
      path="/components/breadcrumb/dividers-3.vue"
      lang="vue"
    />
  </Snippet>




  <!--
```scss
$breadcrumb-divider: none;
``` -->

  <!-- ## Accessibility

パンくずはナビゲーションを提供するので、要素で提供されるナビゲーションのタイプを示すために、`<nav>`要素に aria-label="breadcrumb"のような意味のあるラベルを追加するのが好ましいです。 同様に現在のページを示すために aria-current=”page” 適用することができます。 
Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

詳細は WAI-ARIA Authoring Practices for the breadcrumb pattern.
For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb). -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="breadcrumb-variables" file="scss/_variables.scss" >}} -->
</template>