<script setup lang="ts">
definePageMeta({
  'title:en': 'Text',
  'description:en': `Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.`,
  'title:ja': 'テキスト ',
  'description:ja': '配置、折り返し、太字などを制御するための一般的なテキストユーティリティです。'
})
</script>

<template>
  <h2>Text alignment</h2>
  <Localization>
    <template #en>
      <p>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>
    </template>
    <template #ja>
      <p>テキストアライメント(配置)クラスを使用して、テキストを簡単に配置できます。 開始、終了、中央揃えには、グリッドシステムと同じ viewport 幅のブレークポイントを使用するレスポンシブクラスが利用できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-alignment />
    </Example>
    <ExamplesCode
      path="/utilities/text/alignment.vue"
      lang="vue"
    />
  </Snippet>


  <!-- {{< callout info >}}
Note that we don't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.
{{< /callout >}} -->

  <h2>Text wrapping and overflow</h2>
  <Localization>
    <template #en>
      <p>Wrap text with a <code>text-wrap="wrap</code>.</p>
      <p>Prevent text from wrapping with a <code>text-wrap="nowrap"</code>.</p>
    </template>
    <template #ja>
      <p><code>text-wrap="wrap</code> でテキストを折り返しできます。</p>
      <p><code>text-wrap="nowrap"</code> にするとテキスト折り返しを抑止します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-wrapping-overflow />
    </Example>
    <ExamplesCode
      path="/utilities/text/wrapping-overflow.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Word break</h2>
  <Localization>
    <template #en>
      <p>Prevent long strings of text from breaking your components' layout by using <code>text-break</code> attribute to set <code>word-wrap: break-word</code> and <code>word-break: break-word</code>. </p>
      <p>We use <code>word-wrap</code> instead of the more common <code>overflow-wrap</code> for wider browser support, and add the deprecated <code>word-break: break-word</code> to avoid issues with flex containers.</p>
    </template>
    <template #ja>
      <p><code>text-break</code> 属性を使って <code>word-wrap: break-word</code> と <code>word-break: break-word</code> を設定することで、長い文字列がレイアウトを崩すのを防ぎます。</p>
      <p>ブラウザのサポート範囲を広げるために、より一般的な <code>overflow-wrap</code> の代わりに <code>word-wrap</code> を使用し、フレックスコンテナの問題を避けるために非推奨の <code>word-break: break-word</code> を追加します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-word-break />
    </Example>
    <ExamplesCode
      path="/utilities/text/word-break.vue"
      lang="vue"
    />
  </Snippet>

  <!--背景黄色の箱を作る-->
  <!-- <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    Note that <a herf="https://rtlstyling.com/posts/rtl-styling#3.-line-break">breaking words isn't possible in Arabic</a>, which is the most used RTL language. Therefore <code>.text-break</code> is removed from our RTL compiled CSS.
  </div> -->

  <h2>Text transform</h2>
  <Localization>
    <template #en>
      <p>Transform text in components with text <code>text-transform</code> attribute.</p>
    </template>
    <template #ja>
      <p>テキストの大文字・小文字化、<code>text-transform</code> 属性を利用できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-tranceform />
    </Example>
    <ExamplesCode
      path="/utilities/text/tranceform.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Note how <code>text-transform="capitalize"</code> only changes the first letter of each word, leaving the case of any other letters unaffected.</p>
    </template>
    <template #ja>
      <p><code>text-transform="capitalize"</code> は各単語の最初の文字だけを変更します。</p>
    </template>
  </Localization>

  <h2>Font size</h2>
  <Localization>
    <template #en>
      <p>Quickly change the <code>font-size</code> of text. While our heading classes (e.g., <code>level="1-6"</code>) apply <code>font-size</code>, <code>font-weight</code>, and <code>line-height</code>, these utilities _only_ apply <code>font-size</code>. </p>
      <p>Sizing for these utilities matches HTML's heading elements, so as the number increases, their size decreases.</p>
    </template>
    <template #ja>
      <p>見出しクラス（例： <code>level="1-6"</code>）は <code>font-size</code>、 <code>font-weight</code>、および <code>line-height</code>を適用します. </p>
      <p>下記の例は <code>font-size</code> を適用します。サイズは 見出し要素と一致しているので、数値を上げるとサイズが小さくなります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-font-size />
    </Example>
    <ExamplesCode
      path="/utilities/text/font-size.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Font weight and italics</h2>
  <Localization>
    <template #en>
      <p>Quickly change the <code>font-weight</code> or <code>font-style</code> of text with these utilities.</p>
    </template>
    <template #ja>
      <p>テキストの <code>font-weight</code> や <code>font-style</code> を変更できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-font-weight-italics />
    </Example>
    <ExamplesCode
      path="/utilities/text/font-weight-italics.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Line height</h2>
  <Localization>
    <template #en>
      <p>Change the <code>line-height</code>.</p>
    </template>
    <template #ja>
      <p><code>line-height</code> を変更できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-line-height />
    </Example>
    <ExamplesCode
      path="/utilities/text/line-height.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Monospace</h2>
  <Localization>
    <template #en>
      <p>Change a selection to our monospace font stack with <code>font-monospace</code>.</p>
    </template>
    <template #ja>
      <p><code>font-monospace</code> を使って等幅フォントに変更できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-monospace />
    </Example>
    <ExamplesCode
      path="/utilities/text/monospace.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Reset color</h2>
  <Localization>
    <template #en>
      <p>Reset a text or link's color with `text-reset`, so that it inherits the color from its parent.</p>
    </template>
    <template #ja>
      <p>テキストやリンクの色を `text-reset` でリセットし、親から色を継承するようにします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-reset-color />
    </Example>
    <ExamplesCode
      path="/utilities/text/reset-color.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Text decoration</h2>
  <Localization>
    <template #en>
      <p>Decorate text in components with text <code>text-decoration</code> attributes.</p>
    </template>
    <template #ja>
      <p><code>text-decoration</code> 属性で文字を装飾できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-text-decoration />
    </Example>
    <ExamplesCode
      path="/utilities/text/decoration.vue"
      lang="vue"
    />
  </Snippet>


  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="font-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Maps

Font-size utilities はこの map と, utilities API を組み合わせて生成されます。

Font-size utilities are generated from this map, in combination with our utilities API. -->

  <!-- {{< scss-docs name="font-sizes" file="scss/_variables.scss" >}} -->

  <!-- ### Utilities API

Font と text utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Font and text utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-text" file="scss/_utilities.scss" >}} -->
</template>