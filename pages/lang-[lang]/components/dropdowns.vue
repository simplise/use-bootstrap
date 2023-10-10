
<script setup lang="ts">
definePageMeta({
  'title:en': 'Dropdowns',
  'description:en': `Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown component.`,
  'title:ja': 'ドロップダウン',
  'description:ja': 'ドロップダウンコンポーネントで、リンクのリストなどを表示するためのコンテキストオーバーレイをトグルします。'
})
</script>
<template>
  <h2>Overview</h2>
  <Localization>
    <template #en>
      <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more.</p>
      <p>They're toggled by clicking, not by hovering.</p>
    </template>
    <template #ja>
      <p>ドロップダウンは、トグル可能で、リンクのリストなどを表示するためのコンテキストオーバーレイです。</p>
      <p>これらは、ホバリングではなく、クリックで切り替えられます。</p>
    </template>
  </Localization>

  <!-- ## Accessibility

WAI ARIA では実際の role="menu" widgetが定義されていますが、これはアクションや機能をトリガーとするアプリケーションライクなメニューに特化したものです。 ARIAメニューは、メニュー項目、チェックボックスメニュー項目、ラジオボタンメニュー項目、ラジオボタングループ、サブメニューのみを含むことができます。
The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

一方、Bootstrapのドロップダウンは、汎用性があり、様々な状況やマークアップ構造に適用できるように設計されています。例えば、検索フィールドやログインフォームなどの追加入力やフォームコントロールを含むドロップダウンを作成することが可能です。このため、ARIAメニューに必要なroleとaria-属性のいずれも期待していません（自動的に追加もしていません）。これらのより具体的な属性を自分自身で含めなければなりません。
Bootstrap's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.

しかし、カーソルキーを使って個々の .dropdown-item 要素を移動したり、ESCキーでメニューを閉じたりする機能など、ほとんどの標準的なキーボードメニューのインタラクションのための組み込みサポートを追加しています。
However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key. -->

  <h2>Examples</h2>
  <Localization>
    <template #en>
      <p>Wrap the dropdown's toggle (your button or link) and the dropdown menu within <code>dropdown</code>.</p>
      <p>Dropdowns can be triggered from <code> DropdownMenu </code> elements to better fit your potential needs.</p>
    </template>
    <template #ja>
      <p>ドロップダウンのトグル（ボタンやリンク）とドロップダウンメニューを <code>Dropdown</code> コンポーネントで囲みます。</p>
      <p>また、ドロップダウンアイテムは <code>DropdownMenu</code> コンポーネントで囲みます。</p>
    </template>
  </Localization>

  <!-- 
ドロップダウンのトグル（ボタンやリンク）とドロップダウンメニューを .dropdown や position: relative; を宣言する別の要素で囲みます。ドロップダウンは `<a>` や `<button>` 要素からトリガーすることができます。ここで示した例では、必要に応じて `<ul>` 要素を使用していますが、カスタムマークアップもサポートしています。
Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs. The examples shown here use semantic `<ul>` elements where appropriate, but custom markup is supported. -->

  <h3>Single button</h3>
  <Localization>
    <template #en>
      <p>Any single button can be turned into a dropdown toggle with some markup changes.</p>
    </template>
    <template #ja>
      <p>マークアップを変更するだけで、任意の単一のボタンをドロップダウントグルに変えることができます。</p>
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
      <p>The best part is you can do this with any button variant, too:</p>
    </template>
    <template #ja>
      <p>色の変更も可能です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-single-button-color />
    </Example>
    <ExamplesCode
      path="/components/dropdown/single-button-color.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    Split button
  </h3>
  <Localization>
    <template #en>
      <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>DropdownToggleSplit</code> for proper spacing around the dropdown caret.</p>
    </template>
    <template #ja>
      <p>同様に、単一ボタンのドロップダウンと実質的に同じマークアップで分割ボタンのドロップダウンを作成しますが、<code>DropdownToggleSplit</code> コンポーネント使用して、ドロップダウンのキャレットの周りの適切な間隔を確保します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-split-button />
    </Example>
    <ExamplesCode
      path="/components/dropdown/split-button.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Sizing
  </h2>
  <Localization>
    <template #en>
      <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>
    </template>
    <template #ja>
      <p>ボタンのドロップダウンは、デフォルトのドロップダウンボタンや分割されたドロップダウンボタンなど、あらゆるサイズのボタンで動作します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-sizing-1 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/sizing-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-dropdown-sizing-2 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/sizing-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Dark dropdowns
  </h2>
  <Localization>
    <template #en>
      <p>Opt into darker dropdowns to match a dark navbar or custom style by adding <code>dark</code> attribute onto an existing <code>DropdownMenu</code> component.</p>
      <p>No changes are required to the dropdown items.</p>
    </template>
    <template #ja>
      <p><code>DropdownMenu</code> コンポーネントに<code>dark</code>属性を追加することで、ダークドロップダウンにします。</p>
      <p>DropdownItemsを変更する必要はありません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-dark-1 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/dark-1.vue"
      lang="vue"
    />
  </Snippet>
  <Localization>
    <template #en>
      <p class="mt-3">
        And putting it to use in a navbar:
      </p>
    </template>
    <template #ja>
      <p>
        そして、それをナビバーでも使用できます。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-dropdown-dark-2 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/dark-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Directions</h2>

  <!-- {{< callout info >}}
#### RTL
Directions are mirrored when using Bootstrap in RTL, meaning `.dropstart` will appear on the right side.
{{< /callout >}} -->

  <h3>Dropup</h3>
  <Localization>
    <template #en>
      <p>Trigger dropdown menus above elements by addingm <code>placement="dropup"</code> attribute to the parent element.</p>
    </template>
    <template #ja>
      <p>親要素に <code>placement="dropup"</code> 属性を追加することで、上向きに表示できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-dropup />
    </Example>
    <ExamplesCode
      path="/components/dropdown/dropup.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-2">
    Dropright
  </h3>
  <Localization>
    <template #en>
      <p>Trigger dropdown menus at the right of the elements by adding <code>placement="dropend"</code> to the parent element.</p>
    </template>
    <template #ja>
      <p> <code>placement="dropend"</code> を追加することで、右向きに表示できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-dropright />
    </Example>
    <ExamplesCode
      path="/components/dropdown/dropright.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-2">
    Dropleft
  </h3>
  <Localization>
    <template #en>
      <p>Trigger dropdown menus at the left of the elements by adding <code>placement="dropstart"</code> to the parent element.</p>
    </template>
    <template #ja>
      <p>親要素に <code>placement="dropstart"</code> を追加することで、左向きにできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-dropleft />
    </Example>
    <ExamplesCode
      path="/components/dropdown/dropleft.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-2">
    Menu items
  </h2>

  <Localization>
    <template #en>
      <p>You can also create non-interactive dropdown items with <code>text</code> attribute. Feel free to style further with custom CSS or text utilities.</p>
    </template>
    <template #ja>
      <p><code>text</code> 属性で非インタラクティブなドロップダウン項目を作成することもできます。カスタムCSSやテキストユーティリティを使用して、さらに自由にスタイルを設定してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-items-2 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-items-2.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-2">
    Active
  </h3>
  <Localization>
    <template #en>
      <p>Add <code>active</code> attribute to items in the dropdown to **style them as active**. </p>
    </template>
    <template #ja>
      <p>ドロップダウンの項目に <code>active</code> 属性を追加して、**アクティブのスタイルにします**。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-items-active />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-items-active.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-2">
    Disabled
  </h3>
  <Localization>
    <template #en>
      <p>Add <code>disabled</code> attribute to items in the dropdown to <b>style them as disabled</b>.</p>
    </template>
    <template #ja>
      <p>ドロップダウンの項目に <code>disabled</code> 属性を追加して、<b>無効化のスタイルにできます</b>。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-items-disabled />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-items-disabled.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-2">
    Menu alignment
  </h2>
  <Localization>
    <template #en>
      <p>By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the directional <code>.drop*</code> classes, but you can also control them with additional modifier classes.</p>
      <p>Add <code>alignment="end"</code> attribute to a <code>DropdownMenu</code> component to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning <code>alignment="end"</code> attribute will appear on the left side.</p>
    </template>
    <template #ja>
      <p>デフォルトでは、ドロップダウンメニューは自動的に上から100%の位置と親の左側に沿って配置されます。</p>
      <p>ドロップダウンメニューを右寄せにするには、<code>alignment="end"</code> 属性を <code>DropdownMenu</code> コンポーネントに追加します。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
**Heads up!** Dropdowns are positioned thanks to Popper except when they are contained in a navbar.
{{< /callout >}} -->
  <Snippet>
    <Example>
      <examples-components-dropdown-menu-alignment />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-alignment.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-2">
    Responsive alignment
  </h3>
  <Localization>
    <template #en>
      <p>If you want to use responsive alignment, disable dynamic positioning by adding the <code>display="static"</code> attribute and use the responsive variation classes.</p>
      <p>To align <b>right</b> the dropdown menu with the given breakpoint or larger, add <code>alignment="{-sm|-md|-lg|-xl|-xxl}-end"</code>.</p>
    </template>
    <template #ja>
      <p>レスポンシブアライメントを使用したい場合は、<code>display="static"</code> 属性を追加して動的な位置合わせを無効にし、レスポンシブバリエーションクラスを使用します。</p>
      <p>ドロップダウンメニューを<b>右に</b>配置するには、 <code>alignment="{-sm|-md|-lg|-xl|-xxl}-end"</code> を追加します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-alignment-responsive-1 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-alignment-responsive-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>To align <b>left</b> the dropdown menu with the given breakpoint or larger, add <code>alignment="end"</code> and <code>alignment="{-sm|-md|-lg|-xl|-xxl}-start"</code>.</p>
    </template>
    <template #ja>
      <p><b>左の</b>ドロップダウンメニューを指定されたブレークポイント以上の大きさに揃えるには、<code>alignment="end"</code> と <code>alignment="{-sm|-md|-lg|-xl|-xxl}-start"</code> を追加します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-alignment-responsive-2 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-alignment-responsive-2.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Alignment options</h3>
  <Localization>
    <template #en>
      <p>Taking most of the options shown above, here's a small kitchen sink demo of various dropdown alignment options in one place</p>
    </template>
    <template #ja>
      <p>上記のオプションのほとんどを利用して、様々なドロップダウンの配置オプションを一箇所に集めたデモを紹介します。</p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-dropdown-menu-alignment-options />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-alignment-options.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-2">
    Menu content
  </h2>

  <h3>Headers</h3>
  <Localization>
    <template #en>
      <p>Add a header to label sections of actions in any dropdown menu.</p>
    </template>
    <template #ja>
      <p>任意のドロップダウンメニューのアクションのセクションのラベルにヘッダーを追加します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-content-headers />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-content-headers.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Dividers</h3>
  <Localization>
    <template #en>
      <p>Separate groups of related menu items with a divider.</p>
      <p />
    </template>
    <template #ja>
      <p>関連するメニュー項目のグループを仕切りで区切流ことができます。</p>
      <p />
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-content-dividers />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-content-dividers.vue"
      lang="vue"
    />
  </Snippet>


  <h3>Text</h3>
  <Localization>
    <template #en>
      <p>
        Place any freeform text within a dropdown menu with text and use <LocalLink to="/utilities/spacing">
          spacing utilities
        </LocalLink>.
      </p>
      <p>Note that you'll likely need additional sizing styles to constrain the menu width.</p>
    </template>
    <template #ja>
      <p>
        フリーフォームのテキストをドロップダウンメニュー内にテキストで配置し <LocalLink to="/utilities/spacing">
          spacing utilities
        </LocalLink> を使用します。
      </p>
      <p>メニューの幅を制限するために、追加のサイジングスタイルが必要になる可能性がもあります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-content-text />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-content-text.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Forms</h3>
  <Localization>
    <template #en>
      <p>
        Put a form within a dropdown menu, or make it into a dropdown menu, and use <LocalLink to="/utilities/spacing">
          margin or padding utilities
        </LocalLink> to give it the negative space you require.
      </p>
    </template>
    <template #ja>
      <p>
        ドロップダウンメニューの中にフォームを入れたり、ドロップダウンメニューにして、<LocalLink to="/utilities/spacing">
          margin or padding
        </LocalLink> を使って、必要なネガティブスペースを与えます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-content-forms-1 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-content-forms-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-dropdown-menu-content-forms-2 />
    </Example>
    <ExamplesCode
      path="/components/dropdown/menu-content-forms-2.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Dropdown options</h2>
  <Localization>
    <template #en>
      <p>Use <code>offset</code> attribute or <code>reference</code> attribute to change the location of the dropdown.</p>
    </template>
    <template #ja>
      <p>ドロップダウンの位置を変更するには、 <code>offset</code> 属性または <code>reference</code> 属性を使用します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-options />
    </Example>
    <ExamplesCode
      path="/components/dropdown/options.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    Auto close behavior
  </h3>
  <Localization>
    <template #en>
      <p>By default, the dropdown menu is closed when clicking inside or outside the dropdown menu.</p>
      <p>You can use the <code>auto-close="true"</code> attribute option to change this behavior of the dropdown.</p>
    </template>
    <template #ja>
      <p>デフォルトでは、ドロップダウンメニューの内側または外側をクリックすると、ドロップダウンメニューが閉じます。</p>
      <p><code>auto-close="true"</code> 属性を使って、このドロップダウンの動作を変更することができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-dropdown-options-autoclose-behavior />
    </Example>
    <ExamplesCode
      path="/components/dropdown/options-autoclose-behavior.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/dropdown/options-autoclose-behavior.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/dropdown/options-autoclose-behavior.html)
:::
:::: -->

  <!-- ## Sass

### Variables

Variables for all dropdowns: -->

  <!-- {{< scss-docs name="dropdown-variables" file="scss/_variables.scss" >}} -->

  <!-- Variables for the [dark dropdown](#dark-dropdowns): -->

  <!-- {{< scss-docs name="dropdown-dark-variables" file="scss/_variables.scss" >}} -->

  <!-- Variables for the CSS-based carets that indicate a dropdown's interactivity: -->

  <!-- {{< scss-docs name="caret-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Mixins

Mixins are used to generate the CSS-based carets and can be found in `scss/mixins/_caret.scss`. -->

  <!-- {{< scss-docs name="caret-mixins" file="scss/mixins/_caret.scss" >}} -->
  <!-- 
  <h2 class="mt-3">
    Usage
  </h2>
  <Localization>
    <template #en>
      <p></p>
      <p></p>
    </template>
    <template #ja>
      <p></p>
      <p></p>
    </template>
  </Localization>
  <p>
    データ属性やJavaScriptを介して、dropdownプラグインは、親リスト項目の <code>show</code> クラスをトグルすることで、隠しコンテンツ(ドロップダウンメニュー)をトグルします。 <code>toggle="dropdown"</code> 属性はアプリケーションレベルでドロップダウンメニューを閉じることができます。
    Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the <code>show</code> class on the parent <code>DropdownMenu</code>. The <code>toggle="dropdown"</code> attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.
  </p> -->
  <!-- {{< callout info >}}
On touch-enabled devices, opening a dropdown adds empty `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.
{{< /callout >}} -->

  <!-- <h3>Via data attributes</h3>
  <Localization>
    <template #en>
      <p></p>
      <p></p>
    </template>
    <template #ja>
      <p></p>
      <p></p>
    </template>
  </Localization>
  <p>
    リンクやボタンに <code>toggle="dropdown"</code> を追加して、ドロップダウンを切り替えるようにします。
    Add <code>toggle="dropdown"</code> to a link or button to toggle a dropdown.
  </p> -->
  <!-- ```html
<div class="dropdown">
  <b-button id="dLabel" type="button" toggle="dropdown" aria-expanded="false">
    Dropdown trigger
  </b-button>
  <ul class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </ul>
</div>
``` -->

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/dropdown/sass.vue)
:::
:::: -->

  <!-- ### Via JavaScript

JavaScriptでドロップダウンを呼び出す場合
Call the dropdowns via JavaScript:

```js
var dropdownElementList = Array.prototype.slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
``` -->

  <!-- {{< callout info >}}
##### `toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `toggle="dropdown"` is always required to be present on the dropdown's trigger element.
{{< /callout >}} -->

  <!-- <h3>Options</h3> -->

  <!-- オプションは、データ属性かJavaScriptで渡すことができます。データ属性の場合は、 data-bs-offset =" "のように、オプション名を data-bs-に追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-offset=""`. Make sure to change the case type of the option name from camelCase to kebab-case when passing the options via data attributes. For example, instead of using `data-bs-autoClose="false"`, use `data-bs-auto-close="false"`. -->

  <!-- <docs-options-dropdown /> -->

  <!-- #### Using function with `popperConfig`

```js
var dropdown = new bootstrap.Dropdown(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
``` -->

  <!-- <h3>Methods</h3> -->

  <!-- <docs-methods-dropdown /> -->
  <!-- 
  <h3>Events</h3>
  <p>
    ドロップダウンイベントは <code>DropdownMenu</code> コンポーネントの親要素で発生し、relatedTarget プロパティを持ちます。 <code>hide.bs.dropdown</code> と <code>hidden.bs.dropdown</code> イベントは <code>clickEvent</code> プロパティを持ちます (元のイベントタイプが <code>click</code> の場合のみ)。
    All dropdown events are fired at the toggling element and then bubbled up. So you can also add event listeners on the <code>DropdownMenu</code>'s parent element. <code>hide.bs.dropdown</code> and <code>hidden.bs.dropdown</code> events have a <code>clickEvent</code> property (only when the original Event type is <code>click</code>) that contains an Event Object for the click event.
  </p> -->
  <!-- <docs-events-dropdown /> -->

  <!-- ```js
var myDropdown = document.getElementById('myDropdown')
myDropdown.addEventListener('show.bs.dropdown', function () {
  // do something...
})
``` -->
</template>