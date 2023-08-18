
<script setup lang="ts">
definePageMeta({
  'title:en': 'Buttons',
  'description:en': `Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.`,
  'title:ja': 'ボタン',
  'description:ja': 'ボタンはフォームやダイアログなどのアクションにカスタムボタンスタイルを利用できます。 サイズや状態管理に対応しています。ボタンの使い方の例を示します。'
})
</script>

<template>
  <h2>Examples</h2>
  <Localization>
    <template #en>
      <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
    </template>
    <template #ja>
      <p>いくつかの定義済みのボタンスタイルがあり, それぞれ目的を持っています。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}} -->
  <Snippet>
    <Example>
      <examples-components-button-example />
    </Example>
    <ExamplesCode
      path="/components/button/example.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Disable text wrapping</h2>
  <Localization>
    <template #en>
      <p>If you don't want the button text to wrap, you can add the <code>text-wrap="nowrap"</code> attribute to the button. In Sass, you can set <code>$btn-white-space: nowrap</code> to disable text wrapping for each button.</p>
    </template>
    <template #ja>
      <p>ボタンのテキストを折り返したくない場合は、<code>text-wrap="nowrap"</code> 属性をボタンに追加することができます。Sassでは、<code>$btn-white-space: nowrap</code> を設定することで、各ボタンのテキストの折り返しを無効にすることができます。</p>
    </template>
  </Localization>

  <h2>Button tags</h2>
  <Localization>
    <template #en>
      <p>You can also use `button` attribute on <code>&lt;b-a&gt;</code> or <code>&lt;b-input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
      <p>When using button classes on <code>&lt;b-a&gt;</code> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a <code>type</code> attribute to appropriately convey their purpose to assistive technologies such as screen readers.</p>
    </template>
    <template #ja>
      <p><code>button</code> 属性は<code>&lt;b-a&gt;</code> や <code>&lt;b-input&gt;</code> 要素でも使うことができます。 (ブラウザによっては若干異なるレンダリングが適用される場合があります)</p>
      <p>現在のページ内で、新しいページやセクションへのリンクではなく、ページ内の機能(コンテンツの折りたたみなど)のトリガーとして使用される <code>&lt;b-a&gt;</code> 要素に、ボタンクラスを使用する場合、これらのリンクには <code>type</code> 属性を与え、スクリーンリーダのような支援技術のためにその目的を適切に伝えるべきです。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-tags />
    </Example>
    <ExamplesCode
      path="/components/button/tags.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Outline buttons
  </h2>
  <p>
    In need of a button, but not the hefty background colors they bring? <code>button="outline-*"</code> を適用すると枠線を残してボタンの背景色を透過することができます。 Replace the default modifier classes with the <code>button="outline-*"</code> ones to remove all background images and colors on any button.
  </p>
  <!-- {{< callout info >}}
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}} -->
  <Snippet>
    <Example>
      <examples-components-button-outline />
    </Example>
    <ExamplesCode
      path="/components/button/outline.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Sizes
  </h2>
  <Localization>
    <template #en>
      <p>Fancy larger or smaller buttons? Add <code>size="lg"</code> or <code>size="sm"</code> mfor additional sizes.</p>
    </template>
    <template #ja>
      <p>ボタンのサイズを <code>size="lg"</code> や <code>size="sm"</code> を適用すると変更できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-sizes-1 />
    </Example>
    <ExamplesCode
      path="/components/button/sizes-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-button-sizes-2 />
    </Example>
    <ExamplesCode
      path="/components/button/sizes-2.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Disabled state
  </h2>
  <Localization>
    <template #en>
      <p>Make buttons look inactive by adding the <code>disabled</code> boolean attribute. Disabled buttons have <code>pointer-events: none</code> applied to, preventing hover and active states from triggering.</p>
    </template>
    <template #ja>
      <p>ボタンを非アクティブに見せるには、<code>disabled</code> 属性を追加します。無効化されたボタンには <code>pointer-events: none</code> が適用され、ホバーやアクティブな状態がトリガーされるのを防ぎます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-disabled-state-1 />
    </Example>
    <ExamplesCode
      path="/components/button/disabled-state-1.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    Link functionality caveat
  </h3>
  <Localization>
    <template #en>
      <p>To cover cases where, you have to keep the <code>href</code> attribute on a disabled link, the <code>.disabled</code> class uses <code>pointer-events: none</code> to try to disable the link functionality of <code>&lt;a&gt;</code>s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. </p>
      <p>In addition, even in browsers that do support <code>pointer-events: none</code>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. </p>
      <p>So to be safe, in addition to <code>aria-disabled="true"</code>, also include a <code>tabindex="-1"</code> attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.</p>
    </template>
    <template #ja>
      <p>.disabled クラスは <code>&lt;a&gt;</code> の機能を使えなくする <code>pointer-events: none</code> を使用していますが、この CSS プロパティは標準化されていません。</p>
      <p>もしブラウザが <code>pointer-events: none</code> をサポートしていない場合、キーボードナビゲーションが影響を受けず残り続け、キーボードを用いたユーザやスクリーンリーダーなどの補助機能を使ったユーザはこのリンクを開くことができます。</p>
      <p>安全のため、これらのリンクに <code>aria-disabled="true"</code>に加えて、 <code>tabindex="-1"</code> 属性（キーボードからのフォーカスを防ぐ）をつけ、カスタム JavaScript を用いてこれらの機能を無効にしてください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-link-functionality-caveat />
    </Example>
    <ExamplesCode
      path="/components/button/link-functionality-caveat.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Block buttons
  </h2>
  <Localization>
    <template #en>
      <p>Create responsive stacks of full-width, "block buttons" like those in Bootstrap 4 with a mix of our display and gap utilities. </p>
      <p>By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.</p>
    </template>
    <template #ja>
      <p>display ユーティリティと gap ユーティリティを組み合わせて、Bootstrap4のような全幅の「ブロックボタン」のレスポンシブスタックを作成します。 </p>
      <p>ボタン固有のクラスの代わりにユーティリティを使用することで、間隔、配置、およびレスポンシブ動作を大幅に制御できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-block-buttons-1 />
    </Example>
    <ExamplesCode
      path="/components/button/block-buttons-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Here we create a responsive variation, starting with vertically stacked buttons until the <code>md</code> breakpoint, where <code>display="md-block"</code> replaces the <code>display="grid"</code> class, thus nullifying the <code>gap="2"</code> attribute. </p>
      <p>Resize your browser to see them change.</p>
    </template>
    <template #ja>
      <p>レスポンシブのバリエーションです。ブラウザのサイズを変更して、確認してみてください。</p>
      <p><code>md</code> ブレークポイントまで、 <code>display="md-block"</code> が <code>display="grid"</code> クラスを置き換え、<code>gap="2"</code> 属性を無効にします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-block-buttons-2 />
    </Example>
    <ExamplesCode
      path="/components/button/block-buttons-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use <code>col="6"</code>. </p>
      <p>Center it horizontally with <code>margin="x-auto"</code>, too.</p>
    </template>
    <template #ja>
      <p>grid column を使用して、ブロックボタンの幅を調整できます。たとえば、半分の幅の “block button” の場合は、 <code>col="6"</code> を使用します。 </p>
      <p><code>margin="x-auto"</code> も水平方向に中央揃えにします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-block-buttons-3 />
    </Example>
    <ExamplesCode
      path="/components/button/block-buttons-3.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Additional attributes can be used to adjust the alignment of buttons when horizontal. </p>
      <p>Here we've taken our previous responsive example and added some flex attributes and a margin utility on the button to right align the buttons when they're no longer stacked.</p>
    </template>
    <template #ja>
      <p>追加の属性を使用して、水平の場合のボタンの配置を調整できます。 </p>
      <p>前のレスポンシブな例を取り上げ、ボタンにいくつかのflex 属性と margin 属性を追加して、ボタンがスタックされなくなったときにボタンが右揃えになります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-block-buttons-4 />
    </Example>
    <ExamplesCode
      path="/components/button/block-buttons-4.vue"
      lang="vue"
    />
  </Snippet>



  <h2 class="mt-3">
    Button plugin
  </h2>

  <Localization>
    <template #en>
      <p />
    </template>
    <template #ja>
      <p>ボタンのプラグインでは、シンプルなオン/オフのトグルボタンを作成することができます。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}} -->

  <h5>tip</h5>
  <p>
    Visually, these toggle buttons are identical to the <LocalLink to="/forms/checks-radios#checkbox-toggle-buttons">
      checkbox toggle button
    </LocalLink>. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
  </p>

  <h3>Toggle states</h3>
  <Localization>
    <template #en>
      <p>Add <code>toggle="button"</code> to toggle a button's <code>active</code> state. </p>
      <p>If you're pre-toggling a button, you must manually add the <code>active</code> attribute to ensure that it is conveyed appropriately to assistive technologies.</p>
    </template>
    <template #ja>
      <p><code>toggle="button"</code> を追加して, ボタンの active 状態を切り替えます。</p>
      <p>事前に切り替える場合は, <code>active</code> 属性を追加して, スクリーンリーダーに適切に伝達されるようにする必要があります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-toggle-states-1 />
    </Example>
    <ExamplesCode
      path="/components/button/toggle-states-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-button-toggle-states-2 />
    </Example>
    <ExamplesCode
      path="/components/button/toggle-states-2.vue"
      lang="vue"
    />
  </Snippet>


  <!-- <h3>Methods</h3> -->

  <!-- ボタンのインスタンスは、例えばボタンのコンストラクタを使って作成することができます。
You can create a button instance with the button constructor, for example:

```js
var button = document.getElementById('myButton')
var bsButton = new bootstrap.Button(button)
``` -->

  <!-- <docs-methods-button /> -->

  <!-- For example, to toggle all buttons

```js
var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})
``` -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="btn-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Mixins

There are three mixins for buttons: button and button outline variant mixins (both based on `$theme-colors`), plus a button size mixin. -->

  <!-- {{< scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}} -->

  <!-- {{< scss-docs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" >}} -->

  <!-- {{< scss-docs name="btn-size-mixin" file="scss/mixins/_buttons.scss" >}} -->

  <!-- ### Loops

Button variants (for regular and outline buttons) use their respective mixins with our `$theme-colors` map to generate the modifier classes in `scss/_buttons.scss`. -->

  <!-- {{< scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}} -->
</template>