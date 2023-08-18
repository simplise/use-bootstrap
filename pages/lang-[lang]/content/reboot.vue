
<script setup lang="ts">
definePageMeta({
  title: 'リブート Reboot',
  description: 'description: Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.'
})
</script>

<template>
  <!-- title: リブート Reboot
    description: Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon. -->


  <h2>Approach</h2>
  <p>
    Normalize.css に基づき, デフォルトのスタイルを利用しながら, 要素セレクタを用いてあらゆる要素のスタイルを正常化しています。スタイルが必要なときはクラスに追加します。 例えば <code>&lt;table&gt;</code> 要素はシンプルな作りになっていて, スタイルを適用したいときは <code>.table</code> , <code>.table-bordered</code> などが用意されています。
    Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some <code>&lt;table&gt;</code> styles for a simpler baseline and later provide <code>.table</code>, <code>.table-bordered</code>, and more.
  </p>

  <p>
    Rebootを適用するガイドラインがあります。
    Here are our guidelines and reasons for choosing what to override in Reboot:
  </p>

  <ul>
    <li>
      <code>mark</code> 参照または表記の目的でマークまたは強調表示されたテキストを表します。
      <code>mark</code> represents text which is marked or highlighted for reference or notation purposes.
    </li>
    <li>
      <code>small</code> 著作権や法的文章のような副次的なコメントや小さな活字を表します。
      <code>small</code> represents side-comments and small print, like copyright and legal text.
    </li>
    <li>
      <code>&lt;s&gt;</code> 関連しなくなった要素や正確でなくなった要素を表します。
      <code>&lt;s&gt;</code> represents element that are no longer relevant or no longer accurate.
    </Li>
    <li>
      <code>&lt;u&gt;</code> テキスト以外の注釈があることを示す方法でレンダリングされるべきインラインテキストのスパンを表します。
      <code>&lt;u&gt;</code> represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.
    </li>
  </ul>

  <p>
    テキストのスタイルを整えたい場合は、代わりに以下のクラスを使用してください。
    If you want to style your text, you should use the following classes instead:
  </p>

  <ul>
    <li>
      <code>mark</code> 属性は <code>mark</code> コンポーネントと同じスタイルを適用します。
      <code>mark</code> will apply the same styles as <code>mark</code>.
    </li>
    <li>
      <code>small</code> 属性は <code>small</code> コンポーネントと同じスタイルを適用します。
      <code>small</code> will apply the same styles as <code>small</code>.
    </li>
    <li>
      <code>textDecoration = "underline"</code> は <code>&lt;u&gt;</code> と同じスタイルを適用します。
      <code>textDecoration = "underline"</code> will apply the same styles as <code>&lt;u&gt;</code>.
    </li>
    <li>
      <code>textDecoration = "line-through"</code> は <code>&lt;s&gt;</code> と同じスタイルを適用します。
      <code>textDecoration = "line-through"</code> will apply the same styles as <code>&lt;s&gt;</code>.
    </li>
  </ul>

  <p>
    上記には示していませんが、HTML5では <code>&lt;b&gt;</code> や <code>&lt;&gt;</code> を自由に使ってください。<code>&lt;b&gt;</code> は追加の重要性を伝えずに単語やフレーズを強調するためのもので、<code>&lt;i&gt;</code> は主に音声や専門用語などのためのものです。
    While not shown above, feel free to use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> in HTML5. <code>&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance, while <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.
  </p>


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
  <p>
    <LocalLink to="/utilities/text/">
      text utilities
    </LocalLink> と <LocalLink to="/utilities/colors">
      color utilities
    </LocalLink> で、テキストの整列、変形、スタイル、太さ、線の高さ、装飾、色を変更できます。
    Change text alignment, transform, style, weight, line-height, decoration and color with our <LocalLink to="/utilities/text/">
      text utilities
    </LocalLink> and <LocalLink to="/utilities/colors">
      color utilities
    </LocalLink>.
  </p>

  <h2>Abbreviations</h2>
  <p>
    <code>&lt;abbr&gt;</code> 要素で、略語と頭字語を表します。ホバーした際に省略されていないテキストを表示します。 デフォルトで下線が引かれ、ホバーしたときや支援技術のユーザーに追加の文脈を提供するためのヘルプカーソルが表示されます。
    Stylized implementation of HTML's <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.
  </p>

  <p>
    文字サイズを少し小さくするための略語に <code>initialism</code> 属性を追加できます。
    Add <code>initialism</code> attribute to an abbreviation for a slightly smaller font-size.
  </p>


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
  <p>
    <code>list-style</code>, margin-left は削除されています。(直後の子のみ)
    Remove the default <code>list-style</code> and left margin on list items (immediate children only). <b>This only applies to immediate children list items</b>, meaning you will need to add the class for any nested lists as well.
  </P>


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
  <p>
    箇条書きの黒丸がなくなり, <code>inline</code> 属性により <code>margin</code> が適用されます。
    Remove a list's bullets and apply some light <code>margin</code> with a combination of two classes, <code>inline</code> attribute.
  </p>


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
  <p>
    グリッドシステム(または semantic mixins )を使用して, 用語と説明リストを水平方向に配置します。 文字が長い場合は場合は <code>text-truncate</code> 属性を追加してテキストを省略できます。
    Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>text-truncate</code> attribute to truncate the text with an ellipsis.
  </p>


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

  <!-- <h2 class="mt-3">
    Responsive font sizes
  </h2>
  <p>
    Bootstrap 5では、デフォルトでレスポンシブフォントサイズを有効にして、デバイスやビューポートのサイズに合わせてテキストをより自然に拡大縮小できるようにしました。これがどのように動作するかについては、<LocalLink to="/getting-started/rfs">
      RFS page
    </LocalLink> を見てみてください。
    In Bootstrap 5, we've enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the <LocalLink to="/getting-started/rfs">
      RFS page
    </LocalLink> to find out how this works.
  </P> -->
</template>