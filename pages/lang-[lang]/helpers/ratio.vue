<script setup lang="ts">
definePageMeta({
  'title:en': 'Ratios',
  'description:en': `Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.`,
  'title:ja': 'Ratios',
  'description:ja': '生成された疑似要素を使用して、要素を選択したアスペクト比に維持させます。親の幅に基づいて動画やスライドショーの埋め込みをレスポンシブに扱うのに最適です。'
})
</script>

<template>
  <h2>About</h2>
  <Localization>
    <template #en>
      <p>Use the ratio helper to manage the aspect ratios of external content like <code>&lt;iframe&gt;</code>s, <code>&lt;embed&gt;</code>s, <code>&lt;video&gt;</code>s, and <code>&lt;object&gt;</code>s. These helpers also can be used on any standard HTML child element (e.g., a <code>&lt;div&gt;</code>or <code>&lt;img&gt;</code>). Styles are applied from the parent <code>ratio</code> attribute directly to the child.</p>
    </template>
    <template #ja>
      <p>ratioヘルパーを使って、<code>&lt;iframe&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;video&gt;</code>、<code>&lt;object&gt;</code> などの外部コンテンツのアスペクト比を管理します。これらのヘルパーは、標準的な HTML の子要素 (例えば、<code>&lt;div&gt;</code> や <code>&lt;img&gt;</code>) にも使用できます。スタイルは親の <code>ratio</code> 属性から直接子要素に適用されます。</p>
    </template>
  </Localization>

  <!-- アスペクト比は Sass マップで宣言され、CSS 変数を介して各クラスに含まれているので、custom aspect ratios も可能です。
Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows [custom aspect ratios](#custom-ratios). -->

  <h5>TIP</h5>


  <Localization>
    <template #en>
      <p>
        <b>Pro-Tip!</b> You don't need <code>frameborder="0"</code> on your &lt;iframe&gt;s as we override that for you in <LocalLink to="/content/reboot">
          reboot
        </LocalLink>
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/content/reboot">
          Reboot
        </LocalLink>
        でオーバーライドするので、&lt;iframe&gt;に<code>frameborder="0"</code>は必要ありません。
      </p>
    </template>
  </Localization>

  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Wrap any embed, like an <code>&lt;iframe&gt;</code>, in a parent element with <code>ratio</code> attribute and an aspect ratio class. </p>
      <p>The immediate child element is automatically sized thanks to our universal selector <code>ratio > *</code>.</p>
    </template>
    <template #ja>
      <p>親要素に <code>ratio</code> 属性とアスペクト比クラスを指定して、<code>&lt;iframe&gt;</code> のような埋め込みをラップします。</p>
      <p>即時の子要素は、ユニバーサルセレクタ<code> ratio > *</code> のおかげで自動的にサイズが決まります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-helpers-ratio-example />
    </Example>
    <ExamplesCode
      path="/helpers/ratio/example.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Aspect ratios</h2>

  <Localization>
    <template #en>
      <p>Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:</p>
    </template>
    <template #ja>
      <p>アスペクト比は修飾クラスでカスタマイズできます。デフォルトでは以下のratioクラスが用意されています。</p>
    </template>
  </Localization>

  <Snippet>
    <Example ratios>
      <examples-helpers-ratio-aspect />
    </Example>
    <ExamplesCode
      path="/helpers/ratio/aspect.vue"
      lang="vue"
    />
  </Snippet>

  <h2> Custom ratios</h2>

  <Localization>
    <template #en>
      <p>Each <code>ratio</code> attribute includes a CSS custom property (or CSS variable) in the selector. </p>
      <p>You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part.</p>
      <p>For example, to create a 2x1 aspect ratio, set <code>--bs-aspect-ratio: 50%</code> on the <code>ratio</code>.</p>
    </template>
    <template #ja>
      <p>各 <code>ratio</code> 属性には、セレクタに CSS のカスタム・プロパティ（または CSS 変数）が含まれています。</p>
      <p>この CSS 変数をオーバーライドして、簡単な計算でカスタムアスペクト比を作成することができます。</p>
      <p>例えば、2x1 のアスペクト比を作成するには、<code>ratio</code> の <code>--bs--aspect-ratio: 50%</code> を設定します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example ratios>
      <examples-helpers-ratio-custom-1 />
    </Example>
    <ExamplesCode
      path="/helpers/ratio/custom-1.vue"
      lang="vue"
    />
  </Snippet>



  <!-- この CSS 変数は、ブレークポイント間のアスペクト比を簡単に変更できるようにします。以下は、最初は 4x3 ですが、中段のブレークポイントではカスタム 2x1 に変更されます。
This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but changes to a custom 2x1 at the medium breakpoint.

```scss
 .ratio-4x3 {
    @media( max-width: 768px) { 
       width: 16rem;
       --bs-aspect-ratio: 50%;
     }
 }
``` -->
  <h3>※sample domo code vew </h3>


  <Snippet>
    <Example
      ratios
      ratios-breakpoint
    >
      <examples-helpers-ratio-custom-2 />
    </Example>
    <ExamplesCode
      path="/helpers/ratio/custom-2.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass map

_variables.scss の中で、使用するアスペクト比を変更することができます。Sass を再コンパイルして使用してください。
Within `_variables.scss`, you can change the aspect ratios you want to use. Modify the map as you like and recompile your Sass to put them to use.  -->

  <!-- 
## Sass map

_variables.scss の中で、使用するアスペクト比を変更することができます。これがデフォルトの $ratio-aspect-ratios マップです。このマップを好きなように変更して、Sass を再コンパイルして使用するようにしてください。
Within `_variables.scss`, you can change the aspect ratios you want to use. Here's our default `$ratio-aspect-ratios` map. Modify the map as you like and recompile your Sass to put them to use. -->

  <!-- {{< scss-docs name="aspect-ratios" file="scss/_variables.scss" >}} -->
</template>