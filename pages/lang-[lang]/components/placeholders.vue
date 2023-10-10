<script setup lang="ts">
definePageMeta({
  'title:en' : `Placeholders`,
  'description:en' : `Use loading placeholders for your components or pages to indicate something may still be loading.`,
  'title:ja' : 'Placeholders',
  'description:ja' : 'コンポーネントやページのローディングプレイスホルダーを使用して、何かがまだローディング中であることを示します。'
})
</script>

<template>
  <h2>About</h2>
  <Localization>
    <template #en>
      <p>
        Placeholders can be used to enhance the experience of your application. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.
      </p>
    </template>
    <template #ja>
      <p>
        プレイスホルダーは、アプリケーションの体験を向上させるために使用できます。プレイスホルダーはHTMLとCSSだけで作られているので、JavaScriptは必要ありません。ただし、表示/非表示を切り替えるにはカスタムJavaScriptが必要です。外観、色、サイズはユーティリティクラスで簡単にカスタマイズできます。
      </p>
    </template>
  </Localization>

  <h2>Example</h2>

  <Localization>
    <template #en>
      <p>
        In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.
      </p>
    </template>
    <template #ja>
      <p>
        下の例では、典型的なカードコンポーネントにプレイスホルダーを適用して、「ローディングカード」を作成します。サイズと比率は両者で同じです。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-placeholder-example />
    </Example>
    <ExamplesCode
      path="/components/placeholder/example.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    How it works
  </h2>

  <Localization>
    <template #en>
      <p>
        Create placeholders with the <code>placeholder</code> attribute and a grid column attribute (e.g., <code>col="6"</code>) to set the <code>width</code>. They can replace the text inside an element or be added as a modifier class to an existing component.
      </p>
    </template>
    <template #ja>
      <p>
        <code>placeholder</code>属性とグリッドカラム属性（例：<code>col="6"</code>）でプレイスホルダーを作成し、<code>width</code>を設定します。これらは、要素内のテキストを置き換えたり、既存のコンポーネントに就職クラスとして追加することができます。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        We apply additional styling to <code>button</code> attributes via <code>::before</code> to ensure the <code>height</code> is respected. You may extend this pattern for other situations as needed, or add a <code /> within the element to reflect the height when actual text is rendered in its place.
      </p>
    </template>
    <template #ja>
      <p>
        <code>button</code>属性には、<code>::before</code>を介して追加のスタイルを適用し、<code>height</code>が尊重されるようにしています。必要に応じてほかの状況用にこのパターンを拡張したり、実際のテキストがその場所にレンダリングされるときに高さを反映するために要素内に追加したりできます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-placeholder-howitworks />
    </Example>
    <ExamplesCode
      path="/components/placeholder/howitworks.vue"
      lang="vue"
    />
  </Snippet>

  <h5>tip</h5>
  
  <Localization>
    <template #en>
      <p>
        The use of <code>aria-hidden="true"</code> only indicates that the element should be hidden to screen readers. The <var>loading</var> behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to <var>swap</var> the state of the placeholder and inform AT users of the update.
      </p>
    </template>
    <template #ja>
      <p>
        <code>aria-hidden="true"</code>の使用は、要素がスクリーンリーダーに隠されるべきことを示すだけです。プレイスホルダーの読み込み動作は、作者が実際にどのようにプレイスホルダーのスタイルを使うか、どのように更新するかなどに依存します。プレイスホルダーの状態を入れ替え、ATユーザーに更新を知らせるために、JavaScriptのコードが必要になるかもしれません。
      </p>
    </template>
  </Localization>


  <h3>Width</h3>
  <Localization>
    <template #en>
      <p>
        You can change the <code>width</code> through grid column classes, width utilities, or inline styles.
      </p>
    </template>
    <template #ja>
      <p>
        グリッドのカラムクラス、widthユーティリティ、インラインスタイルで<code>width</code>を変更できます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-placeholder-width />
    </Example>
    <ExamplesCode
      path="/components/placeholder/width.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Color</h3>

  <Localization>
    <template #en>
      <p>
        By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be overridden with a custom color or utility class.
      </p>
    </template>
    <template #ja>
      <p>
        デフォルトでは、<code>placeholder</code>は<code>currentColor</code>を使用します。これは、カスタムカラーまたはユーティリティクラスでオーバーライドできます。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-placeholder-color />
    </Example>
    <ExamplesCode
      path="/components/placeholder/color.vue"
      lang="vue"
    />
  </Snippet>


  <!-- 
原因不明のオンラインビルドエラー
### Sizing

The size of `.placeholder`s are based on the typographic style of the parent element. Customize them with sizing modifiers: `.placeholder-lg`, `.placeholder-sm`, or `.placeholder-xs`.

<examples-components-placeholder-Sizing/>

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/Sizing.vue)
:::
::: code-group-item bootstrap5
```html
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
```
:::
:::: 


### Animation

Animate placeholders with `.placeholder-glow` or `.placeholder-wave` to better convey the perception of something being _actively_ loaded.

<examples-components-placeholder-Animation/>

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/Animation.vue)
:::
::: code-group-item bootstrap5
```html
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
```
:::
::::



-->
</template>