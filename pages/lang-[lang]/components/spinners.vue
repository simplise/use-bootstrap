<script setup lang="ts">
definePageMeta({
  'title:en': 'Spinners',
  'description:en': `Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.`,
  'title:ja': 'スピナー ',
  'description:ja': 'スクロール位置に基づいてBootstrapナビゲーションまたはリストグループコンポーネントを自動的に更新し、ビューポート内で現在どのリンクがアクティブであるかを示します。'
})
</script>

<template>
  <h2>About</h2>
  <Localization>
    <template #en>
      <p>Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.</p>
    </template>
    <template #ja>
      <p>外観、配置、サイズは、utility (ユーティリティ) クラスを使用して簡単にカスタマイズすることができます。</p>
    </template>
  </Localization>

  <!-- それらはHTMLとCSSだけで構築されているので、JavaScriptを必要としません。 可視性を切り替える場合は、いくつかのカスタムJavaScriptが必要になります。  -->
  <!-- Bootstrap "spinners" can be used to show the loading state in your projects. 
They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility.  -->
  <!-- アクセシビリティの観点から、 `role="status"` と入れ子になった `<span class="visually-hidden">Loading...</span>` を含んでいます。
For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`. -->

  <!--
{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}
-->

  <h2>Border spinne</h2>
  <Localization>
    <template #en>
      <p>Use the border spinners for a lightweight loading indicator.</p>
    </template>
    <template #ja>
      <p>Border spinner (ボーダースピナー) を使用して軽量なローディングインジケーターを実現します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-spinner-border />
    </Example>
    <ExamplesCode
      path="/components/spinner/border.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Colors</h3>
  <Localization>
    <template #en>
      <p>The border spinner uses <code>text-color</code> attribute for its <code>Spinner</code> component, meaning you can customize the color with <code> text color utilities </code>.</p>
      <p>You can use any of our text color utilities on the standard spinner.</p>
    </template>
    <template #ja>
      <p><code>Spinner</code> コンポーネントに <code>text-color</code> 属性を使用します。</p>
      <p>標準のスピナーでは、<code> text color utilitites </code>を使用することができます。</p>
    </template>
  </Localization>
  
  <!--

{{< callout info >}}
**Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.
{{< /callout >}}
-->
  <Snippet>
    <Example>
      <examples-components-spinner-colors />
    </Example>
    <ExamplesCode
      path="/components/spinner/colors.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Growing spinner
  </h2>
  <Localization>
    <template #en>
      <p>If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!</p>
    </template>
    <template #ja>
      <p>grow spinner (グロースピナー) も用意されています。動きは下記を参考にしてください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-spinner-growing-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/growing-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p class="mt-3">
        Once again, this spinner is built with <code>text-color</code>, so you can easily change its appearance with [text color utilities][color]. Here it is in blue, along with the supported variants.
      </p>
    </template> 
    <template #ja>
      <p class="mt-3">
        繰り返しますが、このスピナーは<code>text-color</code>で作られていますので、[text color utilities][color]で簡単に外観を変えることができます。ここでは、サポートされているバリエーションとともに、青で表示しています。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-spinner-growing-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/growing-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Alignment
  </h2>
  <Localization>
    <template #en>
      <p>Spinners in Bootstrap are built with <code>rem</code>s, <code>text-color</code>, and <code>display: inline-flex</code>.</p>
      <p>This means they can easily be resized, recolored, and quickly aligned.</p>
    </template>
    <template #ja>
      <p><code>rem</code>, <code>text-color</code>, <code>display: inline-flex</code> で構築されています。</p>
      <p>簡単にサイズを変更したり、色を変更したり、素早く整列させることができます。</p>
    </template>
  </Localization>

  <h3>Margin</h3>
  <Localization>
    <template #en>
      <p>Use <code> margin utilities </code> like <code>mergin="5"</code> for easy spacing.</p>
    </template>
    <template #ja>
      <p><code>mergin="5"</code> <code> margin utilities </code> で簡単にスペースを追加できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-spinner-margin />
    </Example>
    <ExamplesCode
      path="/components/spinner/margin.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Placement
  </h3>
  <Localization>
    <template #en>
      <p>Use <code> flexbox utilities </code>, <code> float utilites </code>, or <code> text alignment </code> utilities to place spinners exactly where you need them in any situation.</p>
    </template>
    <template #ja>
      <p><code> flexbox utilities </code>, <code> float utilites </code>, <code> text alignment </code> を使用して、配置することができます。</p>
    </template>
  </Localization>
  <h4>Flex</h4>
  <Snippet>
    <Example>
      <examples-components-spinner-flex-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/flex-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-spinner-flex-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/flex-2.vue"
      lang="vue"
    />
  </Snippet>

  <h4>Floats</h4>
  <Snippet>
    <Example>
      <examples-components-spinner-float />
    </Example>
    <ExamplesCode
      path="/components/spinner/float.vue"
      lang="vue"
    />
  </Snippet>

  <h4>Text align</h4>
  <Snippet>
    <Example>
      <examples-components-spinner-textalign />
    </Example>
    <ExamplesCode
      path="/components/spinner/textalign.vue"
      lang="vue"
    />
  </Snippet>

  <h4>Size</h4>
  <Localization>
    <template #en>
      <p>Add <code>sm</code> attribute to make a smaller spinner that can quickly be used within other components.</p>
    </template>
    <template #ja>
      <p><code>sm</code> 属性を追加して、サイズの変更ができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-spinner-size-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/size-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Or, use custom CSS or inline styles to change the dimensions as needed.</p>
    </template>
    <template #ja>
      <p>カスタムCSSやインラインスタイルを使用して、必要に応じて寸法を変更することができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-spinner-size-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/size-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Buttons
  </h2>
  <Localization>
    <template #en>
      <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>
    </template>
    <template #ja>
      <p>ボタンの中でスピナーを使用して、アクションが現在処理中または実行中であることを示します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-spinner-buttons-1 />
    </Example>
    <ExamplesCode
      path="/components/spinner/buttons-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-spinner-buttons-2 />
    </Example>
    <ExamplesCode
      path="/components/spinner/buttons-2.vue"
      lang="vue"
    />
  </Snippet>


  <!-- ## Sass

### Variables -->
  <!--
{{< scss-docs name="spinner-variables" file="scss/_variables.scss" >}}
-->
  <!-- ### Keyframes

Used for creating the CSS animations for our spinners. Included in `scss/_spinners.scss`. -->
  <!--
{{< scss-docs name="spinner-border-keyframes" file="scss/_spinners.scss" >}}

{{< scss-docs name="spinner-grow-keyframes" file="scss/_spinners.scss" >}}
-->

  <!-- [color]:   (/utilities/colors)
[display]: (/utilities/display)
[flex]:    (/utilities/flex)
[float]:   (/utilities/float)
[margin]:  (/utilities/spacing)
[sizing]:  (/utilities/sizing)
[text]:    (/utilities/text) -->
</template>