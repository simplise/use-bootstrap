
<script setup lang="ts">
definePageMeta({
  'title:en': 'Typography',
  'description:en': `Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.`,
  'title:ja': 'タイポグラフィ',
  'description:ja': '見出し,本文,リストなどの例です。'
})
</script>

<template>
  <!--  title ; タイポグラフィ Typography   見出し,本文,リストなどの例です。 
   Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.
   -->


  <!-- 
## Global settings

Bootstrapは文字に関するスタイル(文字の大きさや, リンクスタイル)を設定しています。カスタマイズが必要な場合は [textual utility classes](/utilities/text) を参照してください。
Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the [textual utility classes](/utilities/text).

- OSやデバイスに最適な `font-family` を適用します。 native font stack Use a [native font stack](/content/reboot#native-font-stack) that selects the best `font-family` for each OS and device.
- 包括的でアクセシブルなタイプのスケールを実現するために、ブラウザの標準の font-size ( 16px ) を想定しています。 For a more inclusive and accessible type scale, we use the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- `<body>` には `$font-family-base`, `$font-size-base`, `$line-height-base` 属性を適用しています。 Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
- `$link-color`を使用してグローバルリンクの色を設定します。 Set the global link color via `$link-color`.
- `$body-bg` を使用して、`<body>` に `background-color` を設定します（デフォルトでは ＃fff）。 Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

これらのスタイルは `_reboot.scss` の中にあり、グローバル変数は `_variables.scss` で定義されています。また、`rem` で `$font-size-base` を設定するようにしてください。
These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`. -->

  <h2>Headings</h2>

  <Localization>
    <template #en>
      <p>All HTML headings, <code>level="1"</code> through <code>level="6"</code>, are available.</p>
    </template>
    <template #ja>
      <p>HTML の見出し <code>level="1"</code> から <code>level="6"</code> が利用可能です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-headings />
    </Example>
    <ExamplesCode
      path="/content/typography/headings.vue"
      lang="vue"
    />
  </Snippet>


  <!--examplesを書く場所-->
  <Localization>
    <template #en>
      <p><code>headings="1"</code> through <code>headings="6"</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
    </template>
    <template #ja>
      <p><code>headings="1"</code> から <code>headings="6"</code> 属性も利用できます。これは、見出しのフォントスタイリングを一致させたいが、関連する HTML 要素を使用できない場合に利用できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-headings-class />
    </Example>
    <ExamplesCode
      path="/content/typography/headings-class.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Customizing headings</h2>
  <Localization>
    <template #en>
      <p>Use the included <code>text-color</code> attribute to recreate the small secondary heading text from Bootstrap 3.</p>
    </template>
    <template #ja>
      <p><code>text-color</code> 属性を利用して下記のような見出しを作成できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-headings-custom />
    </Example>
    <ExamplesCode
      path="/content/typography/headings-custom.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Display headings</h2>
  <Localization>
    <template #en>
      <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <code>display-headings</code> attribute —a larger, slightly more opinionated heading style.</p>
    </template>
    <template #ja>
      <p>見出しを目立たせる必要がある場合は、<code>display-headings</code> 属性を使用することを検討してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-headings-display />
    </Example>
    <ExamplesCode
      path="/content/typography/headings-display.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Lead</h2>
  <Localization>
    <template #en>
      <p>Make a paragraph stand out by adding <code>lead</code> attribute.</p>
    </template>
    <template #ja>
      <p><code>lead</code>属性を追加して目立たせることができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-lead />
    </Example>
    <ExamplesCode
      path="/content/typography/lead.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Inline text elements</h2>
  <Localization>
    <template #en>
      <p>Styling for common inline HTML5 elements.</p>
    </template>
    <template #ja>
      <p>一般的なインライン HTML5 要素のためのスタイリング。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-inline-1 />
    </Example>
    <ExamplesCode
      path="/content/typography/inline-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
  <Localization>
    <template #en>
      <p>Beware that those tags should be used for semantic purpose:</p>
    </template>
    <template #ja>
      <p>これらのタグは意味を表す目的で使用する必要があることに注意してください。</p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li><code>mark</code> represents text which is marked or highlighted for reference or notation purposes.</li>
        <li><code>small</code> represents side-comments and small print, like copyright and legal text.</li>
        <li><code>&lt;s&gt;</code> represents element that are no longer relevant or no longer accurate.</li>
        <li><code>&lt;u&gt;</code> represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.</li>
      </template>
      <template #ja>
        <li><code>mark</code> 参照または表記の目的でマークまたは強調表示されたテキストを表します。</li>
        <li><code>small</code> 著作権や法的文章のような副次的なコメントや小さな活字を表します。</li>
        <li><code>&lt;s&gt;</code> 関連しなくなった要素や正確でなくなった要素を表します。</li>
        <li><code>&lt;u&gt;</code> テキスト以外の注釈があることを示す方法でレンダリングされるべきインラインテキストのスパンを表します。</li>
      </template>
    </Localization>
  </ul>

  <Localization>
    <template #en>
      <p>If you want to style your text, you should use the following classes instead:</p>
    </template>
    <template #ja>
      <p>テキストのスタイルを整えたい場合は、代わりに以下のクラスを使用してください。</p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li><code>mark</code> will apply the same styles as <code>mark</code>.</li>
        <li><code>small</code> will apply the same styles as <code>small</code>.</li>
        <li>.<code>textDecoration = "underline"</code> will apply the same styles as <code>&lt;u&gt;</code>.</li>
        <li>.<code>textDecoration = "line-through"</code> will apply the same styles as <code>&lt;s&gt;</code>.</li>
      </template>
      <template #ja>
        <li><code>mark</code> 属性は <code>mark</code> コンポーネントと同じスタイルを適用します。</li>
        <li><code>small</code> 属性は <code>small</code> コンポーネントと同じスタイルを適用します。</li>
        <li><code>textDecoration = "underline"</code> は <code>&lt;u&gt;</code> と同じスタイルを適用します。</li>
        <li><code>textDecoration = "line-through"</code> は <code>&lt;s&gt;</code> と同じスタイルを適用します。</li>
      </template>
    </Localization>
  </ul>

  <Localization>
    <template #en>
      <p>While not shown above, feel free to use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> in HTML5. </p>
      <p><code>&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance, while <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.</p>
    </template>
    <template #ja>
      <p>上記には示していませんが、HTML5では <code>&lt;b&gt;</code> や <code>&lt;i&gt;</code> を自由に使ってください。</p>
      <p><code>&lt;b&gt;</code> は追加の重要性を伝えずに単語やフレーズを強調するためのもので、<code>&lt;i&gt;</code> は主に音声や専門用語などのためのものです。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-inline-2 />
    </Example>
    <ExamplesCode
      path="/content/typography/inline-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Text utilities</h2>
  <Localization>
    <template #en>
      <p>
        Change text alignment, transform, style, weight, line-height, decoration and color with our <LocalLink to="/utilities/text/">
          text utilities
        </LocalLink> and <LocalLink to="/utilities/colors/">
          color utilities
        </LocalLink>.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/text/">
          text utilities
        </LocalLink> と <LocalLink to="/utilities/colors/">
          color utilities
        </LocalLink> で、テキストの整列、変形、スタイル、太さ、線の高さ、装飾、色を変更できます。
      </p>
    </template>
  </Localization>


  <h2>Abbreviations</h2>

  <Localization>
    <template #en>
      <p>Stylized implementation of HTML's <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. </p>
      <p>Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
      <p>Add <code>initialism</code> attribute to an abbreviation for a slightly smaller font-size.</p>
    </template>
    <template #ja>
      <p><code>&lt;abbr&gt;</code> 要素で、略語と頭字語を表します。ホバーした際に省略されていないテキストを表示します。 </p>
      <p>デフォルトで下線が引かれ、ホバーしたときや支援技術のユーザーに追加の文脈を提供するためのヘルプカーソルが表示されます。</p>
      <p>文字サイズを少し小さくするための略語に <code>initialism</code> 属性を追加できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-abbreviations />
    </Example>
    <ExamplesCode
      path="/content/typography/abbreviations.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Lists</h2>

  <h3>Unstyled</h3>
  <Localization>
    <template #en>
      <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). </p>
      <p><b>This only applies to immediate children list items</b>, meaning you will need to add the class for any nested lists as well.</p>
    </template>
    <template #ja>
      <p><code>list-style</code>, margin-left は削除されています。(直後の子のみ)</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-lists-unstyled />
    </Example>
    <ExamplesCode
      path="/content/typography/lists-unstyled.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Inline</h3>

  <Localization>
    <template #en>
      <p>Remove a list's bullets and apply some light <code>margin</code> with a combination of two classes, <code>inline</code> attribute.</p>
    </template>
    <template #ja>
      <p>箇条書きの黒丸がなくなり, <code>inline</code> 属性により <code>margin</code> が適用されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-lists-inline />
    </Example>
    <ExamplesCode
      path="/content/typography/lists-inline.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h3>Description list alignment</h3>

  <Localization>
    <template #en>
      <p>Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). </p>
      <p>For longer terms, you can optionally add a <code>text-truncate</code> attribute to truncate the text with an ellipsis.</p>
    </template>
    <template #ja>
      <p>グリッドシステム(または semantic mixins )を使用して, 用語と説明リストを水平方向に配置します。 </p>
      <p>文字が長い場合は場合は <code>text-truncate</code> 属性を追加してテキストを省略できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-typography-lists-alignment />
    </Example>
    <ExamplesCode
      path="/content/typography/lists-alignment.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
  <!-- 
  <h2>Responsive font sizes</h2>

  <p>
    Bootstrap 5では、デフォルトでレスポンシブフォントサイズを有効にして、デバイスやビューポートのサイズに合わせてテキストをより自然に拡大縮小できるようにしました。これがどのように動作するかについては、<LocalLink to="/getting-started/rfs">
      RFS page
    </LocalLink> を見てみてください。
    In Bootstrap 5, we've enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the <LocalLink to="/getting-started/rfs">
      RFS page
    </LocalLink> to find out how this works.
  </p> -->
</template>
