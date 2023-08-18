<script setup lang="ts">
definePageMeta({
    title: `テキスト Text`,
    description: `配置、折り返し、太字などを制御するための一般的なテキストユーティリティです。 Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.`
})
</script>

<template>
  <!---
title: テキスト Text
description: 配置、折り返し、太字などを制御するための一般的なテキストユーティリティです。 Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
--->

  <h2>Text alignment</h2>

  <p>
    テキストアライメント(配置)クラスを使用して、テキストを簡単に配置できます。 開始、終了、中央揃えには、グリッドシステムと同じ viewport 幅のブレークポイントを使用するレスポンシブクラスが利用できます。
  </p>

  <p>
    Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-alignment />    
    </Example>
    <ExamplesCode
      path="/utilities/text/alignment.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/alignment.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/alignment.html)
:::
:::: -->

  <!-- {{< callout info >}}
Note that we don't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.
{{< /callout >}} -->

  <h2>Text wrapping and overflow</h2>

  <p>
    <code>text-wrap="wrap</code> でテキストを折り返しできます。
  </p>

  <p>
    Wrap text with a <code>text-wrap="wrap</code>.
  </p>

  <p>
    <code>text-wrap="nowrap"</code> にするとテキスト折り返しを抑止します。
  </p>

  <p>
    Prevent text from wrapping with a <code>text-wrap="nowrap"</code>.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-wrapping-overflow />    
    </Example>
    <ExamplesCode
      path="/utilities/text/wrapping-overflow.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/wrapping-overflow.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/wrapping-overflow.html)
:::
:::: -->

  <h2>Word break</h2>

  <p>
    <code>text-break</code> 属性を使って <code>word-wrap: break-word</code> と <code>word-break: break-word</code> を設定することで、長い文字列がレイアウトを崩すのを防ぎます。ブラウザのサポート範囲を広げるために、より一般的な <code>overflow-wrap</code> の代わりに <code>word-wrap</code> を使用し、フレックスコンテナの問題を避けるために非推奨の <code>word-break: break-word</code> を追加します。
  </p>

  <p>
    Prevent long strings of text from breaking your components' layout by using <code>text-break</code> attribute to set <code>word-wrap: break-word</code> and <code>word-break: break-word</code>. We use <code>word-wrap</code> instead of the more common <code>overflow-wrap</code> for wider browser support, and add the deprecated <code>word-break: break-word</code> to avoid issues with flex containers.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-word-break />    
    </Example>
    <ExamplesCode
      path="/utilities/text/word-break.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/word-break.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/word-break.html)
:::
:::: -->

  <!--背景黄色の箱を作る-->
  <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    Note that <a herf="https://rtlstyling.com/posts/rtl-styling#3.-line-break">breaking words isn't possible in Arabic</a>, which is the most used RTL language. Therefore <code>.text-break</code> is removed from our RTL compiled CSS.
  </div>

  <h2>Text transform</h2>

  <p>
    テキストの大文字・小文字化、<code>text-transform</code> 属性を利用できます。
  </p>

  <p>
    Transform text in components with text <code>text-transform</code> attribute.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-tranceform />    
    </Example>
    <ExamplesCode
      path="/utilities/text/tranceform.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/tranceform.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/tranceform.html)
:::
:::: -->

  <p>
    <code>text-transform="capitalize"</code> は各単語の最初の文字だけを変更します。
  </p>

  <p>
    Note how <code>text-transform="capitalize"</code> only changes the first letter of each word, leaving the case of any other letters unaffected.
  </p>

  <h2>Font size</h2>

  <p>
    見出しクラス（例： <code>level="1-6"</code>）は <code>font-size</code>、 <code>font-weight</code>、および <code>line-height</code>を適用します. 下記の例は <code>font-size</code> を適用します。サイズは 見出し要素と一致しているので、数値を上げるとサイズが小さくなります。
  </p>

  <p>
    Quickly change the <code>font-size</code> of text. While our heading classes (e.g., <code>level="1-6"</code>) apply <code>font-size</code>, <code>font-weight</code>, and <code>line-height</code>, these utilities _only_ apply <code>font-size</code>. Sizing for these utilities matches HTML's heading elements, so as the number increases, their size decreases.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-font-size />    
    </Example>
    <ExamplesCode
      path="/utilities/text/font-size.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/font-size.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/font-size.html)
:::
:::: -->

  <!-- Sass マップの$font-sizesを変更することで、利用可能なfont-sizeをカスタマイズすることができます。

Customize your available `font-size`s by modifying the `$font-sizes` Sass map. -->

  <h2>Font weight and italics</h2>

  <p>
    テキストの <code>font-weight</code> や <code>font-style</code> を変更できます。
  </p>

  <p>
    Quickly change the <code>font-weight</code> or <code>font-style</code> of text with these utilities.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-font-weight-italics />    
    </Example>
    <ExamplesCode
      path="/utilities/text/font-weight-italics.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/font-weight-italics.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/font-weight-italics.html)
:::
:::: -->

  <h2>Line height</h2>

  <p>
    <code>line-height</code> を変更できます。
  </p>

  <p>
    Change the <code>line-height</code>.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-line-height />    
    </Example>
    <ExamplesCode
      path="/utilities/text/line-height.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/line-height.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/line-height.html)
:::
:::: -->

  <h2>Monospace</h2>

  <p>
    <code>font-monospace</code> を使って等幅フォントに変更できます。
  </p>

  <p>
    Change a selection to our monospace font stack with <code>font-monospace</code>.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-monospace />    
    </Example>
    <ExamplesCode
      path="/utilities/text/monospace.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/monospace.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/monospace.html)
:::
:::: -->

  <h2>Reset color</h2>

  <p>
    テキストやリンクの色を `text-reset` でリセットし、親から色を継承するようにします。
  </p>

  <p>
    Reset a text or link's color with `text-reset`, so that it inherits the color from its parent.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-reset-color />    
    </Example>
    <ExamplesCode
      path="/utilities/text/reset-color.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/reset-color.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/reset-color.html)
:::
:::: -->

  <h2>Text decoration</h2>

  <p>
    <code>text-decoration</code> 属性で文字を装飾できます。
  </p>

  <p>
    Decorate text in components with text <code>text-decoration</code> attributes.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-text-decoration />    
    </Example>
    <ExamplesCode
      path="/utilities/text/decoration.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/text/decoration.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/text/decoration.html)
:::
:::: -->

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