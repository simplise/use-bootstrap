
<script setup lang="ts">
definePageMeta({
  'title:en': 'Collapse',
  'description:en': `Toggle the visibility of content across your project with a few classes and attributes.`,
  'title:ja': 'コラプス ',
  'description:ja': 'いくつかのクラスと属性を使用して、プロジェクト全体のコンテンツの表示を切り替えます。'
})
</script>

<template>
  <h2>How it works</h2>
  <Localization>
    <template #en>
      <p>The collapse JavaScript plugin is used to show and hide content.</p>
      <p>Buttons or anchors are used as triggers that are mapped to specific elements you toggle.</p>
      <p>Collapsing an element will animate the <code>height</code> from its current value to <code>0</code>.</p>
      <p>Given how CSS handles animations, you cannot use <code>padding</code> attribute on a <code>collapse</code> attribute.</p>
      <p>Instead, use the class as an independent wrapping element.</p>
    </template>
    <template #ja>
      <p>collapse JavaScript プラグインは、コンテンツの表示と非表示に使用されます。</p>
      <p>ボタンやアンカーは、トグルする特定の要素にマッピングされたトリガーとして使われます。</p>
      <p>要素を折りたたむと <code>height</code> が現在の値から <code>0</code> にアニメーションします。</p>
      <p>CSSがアニメーションをどのように扱うかを考えると、<code>collapse</code> 属性に <code>padding</code> 属性を使うことはできません。</p>
      <p>代わりに、このクラスを独立したラッピング要素として使用します。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Click the buttons below to show and hide another element.</p>
    </template>
    <template #ja>
      <p>下のボタンをクリックすると、別の要素の表示・非表示を切り替えることができます。</p>
    </template>
  </Localization>
  <Localization>
    <template #en>
      <p>Generally, we recommend using a button with the <code>target</code> attribute.</p>
      <p>While not recommended from a semantic point of view, you can also use a link with the href attribute (and a role="button"). </p>
      <p>In both cases, the <code>toggle="collapse"</code> attribute is required.</p>
    </template>
    <template #ja>
      <p>href属性を持つリンク、または <code>data-bs-target</code> 属性を持つボタンを使用できます。</p>
      <p>どちらの場合も、 <code>toggle="collapse"</code> 属性が必要です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-collapse-example />
    </Example>
    <ExamplesCode
      path="/components/collapse/example.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Horizontal</h2>
  <Localization>
    <template #en>
      <p>The collapse plugin also supports horizontal collapsing.</p>
    </template>
    <template #ja>
      <p>水平方向の折りたたみもサポートしています。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
Please note that while the example below has a `min-height` set to avoid excessive repaints in our docs, this is not explicitly required. **Only the `width` on the child element is required.**
{{< /callout >}} -->
  <Snippet>
    <Example>
      <examples-components-collapse-horizontal />
    </Example>
    <ExamplesCode
      path="/components/collapse/horizontal.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Multiple targets</h2>
  <Localization>
    <template #en>
      <p>A <code>&lt;Button&gt;</code> or <code>&lt;b-a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code>href</code> or <code>target</code> attribute.</p>
      <p>Multiple <code>&lt;Button&gt;</code> or <code>&lt;b-a&gt;</code> can show and hide an element if they each reference it with their <code>href</code> or <code>target</code> attribute</p>
    </template>
    <template #ja>
      <p><code>&lt;Button&gt;</code>または <code>&lt;b-a&gt;</code> は、href属性 または <code>target</code> 属性のセレクターで参照することにより、複数の要素を表示および非表示にすることができます。</p>
      <p>複数の <code>&lt;Button&gt;</code>または <code>&lt;b-a&gt;</code> は、それぞれがhrefまたは <code>target</code> 属性で要素を参照する場合、要素を表示および非表示にすることができます</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-components-collapse-multiple-targets />
    </Example>
    <ExamplesCode
      path="/components/collapse/multiple-targets.vue"
      lang="vue"
    />
  </Snippet>


  <!-- 
## Accessibility

必ずコントロール要素にaria-expandedを追加してください。 この属性は、コントロールに関連付けられたcollapsible要素の現在の状態をスクリーンリーダーや同様の支援技術に明示的に伝えます。 collapsible要素がデフォルトで閉じている場合、コントロール要素の属性の値はaria-expanded = "false"である必要があります。 折りたたみ可能な要素を、デフォルトで表示クラスを使用して開くように設定している場合は、代わりにコントロールでaria-expanded = "true"を設定します。 プラグインは、折りたたみ可能な要素が開いているか閉じているか（JavaScriptを介して、またはユーザーが同じ折りたたみ可能な要素に関連付けられている別のコントロール要素をトリガーしたため）に基づいて、コントロールのこの属性を自動的に切り替えます。 コントロール要素のHTML要素がボタンではない場合（`<a>`や`<div>`など）、属性role = "button"を要素に追加する必要があります。
Be sure to add `aria-expanded` to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you've set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

control要素が単一の折りたたみ可能な要素をターゲットにしている場合、つまり data-bs-target 属性が id セレクタを指している場合、 折りたたみ可能な要素の id を含む aria-controls 属性を control要素に追加しなければなりません。 最近のスクリーンリーダや同様の支援技術では、この属性を利用して、折りたたみ可能な要素自体に直接移動するための追加のショートカットをユーザーに提供しています。
If your control element is targeting a single collapsible element – i.e. the `data-bs-target` attribute is pointing to an `id` selector – you should add the `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

Bootstrapの現在の実装は、WAI-ARIA Authoring Practices 1.1 accordion patternで説明されている様々なキーボードインタラクションをカバーしていないことに注意してください - カスタムJavaScriptでこれらを自分で含める必要があります。
Note that Bootstrap's current implementation does not cover the various *optional* keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) - you will need to include these yourself with custom JavaScript. -->
  <!-- 
## Sass

### Variables -->

  <!-- {{< scss-docs name="collapse-transition" file="scss/_variables.scss" >}} -->

  <!-- ### Classes

Collapse のトランジションクラスは、複数のコンポーネント(collapse and accordion)で共有されているため、scss/_transitions.scss にあります。
Collapse transition classes can be found in `scss/_transitions.scss` as these are shared across multiple components (collapse and accordion). -->

  <!-- {{< scss-docs name="collapse-classes" file="scss/_transitions.scss" >}} -->

  <!-- <h2>Usage</h2>
  <p>
    collapse プラグインは、いくつかのクラスを利用して重い作業を処理します。
    The collapse plugin utilizes a few classes to handle the heavy lifting:
  </p>
  <ul>
    <li> <code>collapse</code> コンテンツを非表示にする <code>collapse</code> hides the content</li>
    <li> <code>show</code> コンテンツを表示する <code>show</code> shows the content</li>
    <li> <code>collapsing</code> はトランジションの開始時に追加され、終了時に削除されます。<code>collapsing</code> is added when the transition starts, and removed when it finishes</li>
  </ul>
  <p>
    These classes can be found in <code>_transitions.scss</code>.
  </p>

  <h3>Via data attributes</h3>
  <p>
    要素に <code>toggle="collapse"</code> と <code>target</code> 属性を追加するだけで、1つ以上の折りたたみ可能な要素の制御を自動的に割り当てることができます。<code>target</code> 属性には、折り畳みを適用する CSS セレクタを指定します。折りたたみ可能な要素には必ず <code>collapse</code> 属性を追加してください。デフォルトで開いた状態にしたい場合は、 <code>show</code> 属性を追加します。
    Just add <code>toggle="collapse"</code> and a <code>target</code> attribute to the element to automatically assign control of one or more collapsible elements. The <code>target</code> attribute accepts a CSS selector to apply the collapse to. Be sure to add the <code>collapse</code> attribute to the collapsible element. If you'd like it to default open, add the additional <code>show</code> attribute.
  </p>
  <p>
    折りたたみ可能な領域にアコーディオンのようなグループ管理を追加するには、 <code>AccordionCollapse</code> コンポーネントを追加します。デモを参照してください。
    To add accordion-like group management to a collapsible area, add the data attribute <code>AccordionCollapse</code> component. Refer to the <LocalLink to="/components/accordion">
      accordion page
    </LocalLink> for more information.
  </p> -->
  <!-- ### Via JavaScript

手動で有効にする場合
Enable manually with:

```js
var collapseElementList = Array.prototype.slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
``` -->

  <!-- <h3>Options</h3> -->

  <!-- オプションは、データ属性またはJavaScriptで渡すことができます。データ属性の場合は、data-bs-parent=""のように data-bs-にオプション名を追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-parent=""`. -->

  <!-- <docs-options-collapse /> -->

  <!-- <h3>Methods</h3>

  <h5>danger</h5> -->
  <!-- {{< partial "callout-danger-async-methods.md" >}} -->
  <!-- <p>
    折りたたみ可能な要素としてコンテンツをアクティブにします。オプションの <code>object</code> を受け取ります。
    Activates your content as a collapsible element. Accepts an optional options <code>object</code>.
  </p>
  <p>
    コンストラクタを使用して、例えばcollapseのインスタンスを作成することができます。
    You can create a collapse instance with the constructor, for example:
  </p> -->
  <!-- ```js
var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})
``` -->

  <!-- <docs-methods-collapse /> -->

  <!-- <h3>Events</h3>
  <p>
    Bootstrapのcollapseクラスは、collapse機能にフックするためのいくつかのイベントがあります。
    Bootstrap's collapse class exposes a few events for hooking into collapse functionality.
  </p> -->
  <!-- <docs-events-collapse /> -->

  <!-- ```js
var myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
  // do something...
})
``` -->
</template>