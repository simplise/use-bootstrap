
<script setup lang="ts">
definePageMeta({
  title: `ツールチップ Tooltips`,
  description: `CSSとJavaScriptでカスタムBootstrapのツールチップを追加するためのドキュメントと例。Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.`
})
</script>

<template>
  <!---
title: ツールチップ Tooltips
description: CSSとJavaScriptでカスタムBootstrapのツールチップを追加するためのドキュメントと例。Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.
--->
  <h2>Overview</h2>
  <p>
    ツールチッププラグインを使うときに知っておきたいこと
    Things to know when using the tooltip plugin:
  </p>
  <!-- - Tooltips の配置は 3rd party library Popper に依存します。bootstrap.jsの前にpopper.min.jsをインクルードするか、Tooltips を動作させるためにはPopper.jsをインクルードしたbootstrap.bundle.min.js / bootstrap.bundle.jsを使用する必要があります。 Tooltips rely on the 3rd party library [Popper](https://popper.js.org/) for positioning. You must include [popper.min.js](cdn.popper) before bootstrap.js or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper in order for tooltips to work!
- Tooltipsはパフォーマンス上の理由でオプトインされているため、自分で初期化する必要があります。 Tooltips are opt-in for performance reasons, so **you must initialize them yourself**. -->
  <ul>
    <li>
      長さゼロのタイトルを持つツールチップは表示されません。
      Tooltips with zero-length titles are never displayed.
    </li>
    <!-- - 複雑なコンポーネント(入力グループやボタングループなど)でのレンダリングの問題を避けるために container: 'body' を指定します。 
Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc). -->
    <li> 隠された要素で tooltips をトリガーすると機能しません。 Triggering tooltips on hidden elements will not work.</li>
    <li> 複数行にまたがるハイパーリンクからトリガーされた場合、tooltips は中央に配置されます。この動作を避けるには、<code>b-a</code> コンポーネントに <code>white-space: nowrap;</code> を使用してください。 <code>disabled</code> 属性の tooltips は、ラッパー要素上でトリガされなければなりません。 Tooltips for <code>disabled</code> attribute must be triggered on a wrapper element.</li>
    <li> Tooltips は、対応する要素が DOM から削除される前に非表示にしなければなりません。 When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use <code>white-space: nowrap;</code> on your <code>b-a</code>s component to avoid this behavior.</li>
    <li> Tooltips は、対応する要素が DOM から削除される前に非表示にしなければなりません。 Tooltips must be hidden before their corresponding elements have been removed from the DOM.</li>
    <li> Tooltips は、shadow DOM 内の要素のおかげでトリガーすることができます。 Tooltips can be triggered thanks to an element inside a shadow DOM.</li>
  </ul>
  <!-- {{< callout info >}}
{{< partial "callout-info-sanitizer.md" >}}
{{< /callout >}} -->

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->
  <p>
    Got all that? Great, let's see how they work with some examples.
  </p>

  <h2>Example: Enable tooltips everywhere</h2>
  <p>
    One way to initialize all tooltips on a page would be to select them by their <code>toggle</code> attribute:
  </p>
  <!-- ```js
var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
``` -->

  <h2>Examples</h2>
  <p>
    下のリンクにカーソルを合わせると、ツールチップが表示されます。
    Hover over the links below to see tooltips:
  </p>
  <Snippet>
    <Example>
      <examples-components-tooltip-example-1 />
    </Example>
    <ExamplesCode
      path="/components/tooltip/example-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/example-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/example-1.html)
:::
:::: -->
  <p>
    下のボタンにカーソルを合わせると、上、右、下、左の4つのツールチップの方向が表示されます。
    Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL.
  </p>
  <Snippet>
    <Example>
      <examples-components-tooltip-example-2 />
    </Example>
    <ExamplesCode
      path="/components/tooltip/example-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/example-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/example-2.html)
:::
:::: -->

  <p class="mt-2">
    Cutom HTML を追加した場合
    And with custom HTML added:
  </p>
  <Snippet>
    <Example>
      <examples-components-tooltip-html />
    </Example>
    <ExamplesCode
      path="/components/tooltip/html.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/html.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/html.html)
:::
:::: -->
  <p>
    With an SVG:
  </p>
  <Snippet>
    <Example>
      <examples-components-tooltip-example-3 />
    </Example>
    <ExamplesCode
      path="/components/tooltip/example-3.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/example-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/example-3.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="tooltip-variables" file="scss/_variables.scss" >}} -->

  <!-- ## Usage

tooltip プラグインは、オンデマンドでコンテンツとマークアップを生成し、デフォルトではトリガー要素の後にツールチップを配置します。
The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.

JavaScript で tooltip をトリガーする場合:
Trigger the tooltip via JavaScript:

```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
``` -->
  <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <h5>Overflow <code>auto</code> and <code>scroll</code> </h5>
    <p>
      Tooltip の位置は、親コンテナに <code>tableResponsive</code> のように <code>overflow：auto</code> や <code>verflow：scroll</code> がある場合に自動的に変更されますが、元の配置の位置は保持されます。 解決するには、 <a href="https://popper.js.org/docs/v2/modifiers/flip/#boundary">boundary option</a> をデフォルト値 <code>scrollParent</code> 以外(例えば <code>window</code> )に設定します。
      Tooltip position attempts to automatically change when a parent container has <code>overflow: auto</code> or <code>overflow: scroll</code> like our <code>tableResponsive</code>, but still keeps the original placement's positioning. To resolve this, set the <a href="https://popper.js.org/docs/v2/modifiers/flip/#boundary">boundary option</a> (for the flip modifier using the <code>popperConfig</code> option) to any HTMLElement to override the default value, <code>'clippingParents'</code>, such as <code>document.body</code>:
    </p>
    <!-- ```js
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})
``` -->
  </div>
  <h3>Markup</h3>
  <p>
    Tooltip に必要なマークアップは、 Tooltip を作成したいHTML要素の data 属性と title だけです。 Tooltip のマークアップは単純ですが、位置を指定する必要があります(デフォルトではプラグインによって top に設定されています)。
    The required markup for a tooltip is only a <code>data</code> attribute and <code>title</code> on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to <code>top</code> by the plugin).
  </p>

  <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <h5>Making tooltips work for keyboard and assistive technology users</h5>
    <p>
      Tooltips を追加すべきなのは、キーボードフォーカスが可能でインタラクティブなHTML要素（リンクやフォームコントロールなど）のみです。 任意のコンポーネント（ <code>b-span</code> など）は、<code>tabindex="0"</code> 属性を追加することでフォーカス可能にすることができますが、 これはキーボードユーザにとっては非インタラクティブな要素のタブストップが追加されてしまうので、 キーボードユーザが混乱する可能性があり、現在ほとんどの支援技術はこのような状況でのツールチップをアナウンスしません。 また、ツールチップのトリガーとして <code>hover</code> だけに頼ってはいけません。これにより、キーボードユーザーが Tooltips をトリガーできなくなります。
      You should only add tooltips to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary component (such as <code>b-span</code>s) can be made focusable by adding the <code>tabindex="0"</code> attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce the tooltip in this situation. Additionally, do not rely solely on <code>hover</code> as the trigger for your tooltip, as this will make your tooltips impossible to trigger for keyboard users.
    </p>
  </div>
  <Snippet>
    <Example>
      <examples-components-tooltip-markup />
    </Example>
    <ExamplesCode
      path="/components/tooltip/markup.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/markup.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/markup.html)
:::
:::: -->

  <h3>Disabled elements</h3>
  <p>
    <code>disabled</code> 属性を持つ要素はインタラクティブではありません。つまり、ユーザーはそれらにフォーカスしたり、ホバーしたり、クリックしたりしてツールチップ（またはポップオーバー）をトリガーすることはできません。 回避策としては、ラッパー <code>b-div</code> や <code>b-span</code> コンポーネントでツールチップをトリガーし、理想的には <code>tabindex="0"</code> でキーボードフォーカス可能にして、 無効要素の pointer-events をオーバーライドします。
    Elements with the <code>disabled</code> attribute aren't interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you'll want to trigger the tooltip from a wrapper <code>b-div</code> or <code>b-span</code> component, ideally made keyboard-focusable using <code>tabindex="0"</code>.
  </p>

  <Snippet>
    <Example>
      <examples-components-tooltip-disabled />
    </Example>
    <ExamplesCode
      path="/components/tooltip/disabled.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/disabled.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/disabled.html)
:::
:::: -->



  <h3>Options</h3>

  <!-- オプションは、データ属性またはJavaScriptで渡すことができます。データ属性の場合は、 data-bs-animation =" "のように、オプション名を data-bs-に追加します。 データ属性でオプションを渡す場合は, 必ずオプション名のケースタイプを camelCase から kebab-case に変更してください。 たとえば、 data-bs-customClass =" beautifier "を使用する代わりに、 data-bs-custom-class =" beautifier "を使用します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-animation=""`. Make sure to change the case type of the option name from camelCase to kebab-case when passing the options via data attributes. For example, instead of using `data-bs-customClass="beautifier"`, use `data-bs-custom-class="beautifier"`. -->

  <!-- ::: warning
セキュリティ上の理由から、sanitize, sanitizeFn および allowList オプションはデータ属性を用いて指定することができないことに注意してください。
Note that for security reasons the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied using data attributes.
::: -->

  <!-- <docs-options-tooltip /> -->

  <!-- {{< callout info >}}
#### Data attributes for individual tooltips

Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.
{{< /callout >}} -->

  <!-- #### Using function with `popperConfig`

```js
var tooltip = new bootstrap.Tooltip(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
``` -->

  <h3>Methods</h3>

  <!-- ::: danger
{{< partial "callout-danger-async-methods.md" >}}
::: -->

  <h3>show</h3>
  <p>
    tooltip 要素を表示します。 <b>tooltip が実際に表示される前に呼び出し元に戻ります。</b> (<code>shown.bs.tooltip</code> が発生する前). “manual” トリガーとみなされます。tooltip のトリガを設定します。長さゼロのタイトルの場合は tooltip は表示されません。
    Reveals an element's tooltip. <b>Returns to the caller before the tooltip has actually been shown</b> (i.e. before the <code>shown.bs.tooltip</code> event occurs). This is considered a "manual" triggering of the tooltip. Tooltips with zero-length titles are never displayed.
  </p>
  <!-- ```js
tooltip.show()
``` -->

  <h4>hide</h4>
  <p>
    tooltip 要素を非表示します。 <b>tooltip が実際に隠される前に呼び出し元に戻ります。</b> (<code>hidden.bs.tooltip</code> が発生した時). “manual” トリガーとみなされます
    Hides an element's tooltip. <b>Returns to the caller before the tooltip has actually been hidden</b> (i.e. before the <code>hidden.bs.tooltip</code> event occurs). This is considered a "manual" triggering of the tooltip.
  </p>
  <!---
```js
tooltip.hide()
``` -->

  <h4>toggle</h4>
  <p>
    tooltip 要素をトグルします。 <b>tooltip が実際に表示または非表示になる前に呼び出し元に戻ります。</b> ( <code>shown.bs.tooltip</code> または <code>hidden.bs.tooltip</code> が発生した時).“manual” トリガーとみなされます。
    Toggles an element's tooltip. <b>Returns to the caller before the tooltip has actually been shown or hidden</b> (i.e. before the <code>shown.bs.tooltip</code> or <code>hidden.bs.tooltip</code> event occurs). This is considered a "manual" triggering of the tooltip.
  </p>
  <!-- ```js
tooltip.toggle()
``` -->

  <!-- #### dispose

tooltip 要素を非表示して、破棄します。 委任を使用するツールチップは (the selector option を使用している) 子孫のトリガ要素を個別に破壊することはできません。
Hides and destroys an element's tooltip (Removes stored data on the DOM element). Tooltips that use delegation (which are created using [the `selector` option](#options)) cannot be individually destroyed on descendant trigger elements.

```js
tooltip.dispose()
``` -->

  <h4>enable</h4>
  <p>
    tooltip 要素に表示する機能を与えます。<b>デフォルトで有効になっています。</b>
    Gives an element's tooltip the ability to be shown. <b>Tooltips are enabled by default.</b>
  </p>
  <!-- ```js
tooltip.enable()
``` -->

  <h4>disable</h4>
  <p>
    tooltip 要素を表示する機能を削除します。tooltip は再有効化された場合にのみ表示されます。
    Removes the ability for an element's tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.
  </p>
  <!-- ```js
tooltip.disable()
``` -->

  <h4>toggleEnabled</h4>
  <p>
    tooltip 要素の表示・非表示を切り替えます。
    Toggles the ability for an element's tooltip to be shown or hidden.
  </p>
  <!-- ```js
tooltip.toggleEnabled()
``` -->

  <h4>update</h4>
  <p>
    tooltip 要素の位置を更新します。
    Updates the position of an element's tooltip.
  </p>
  <!-- 
```js
tooltip.update()
``` -->

  <!-- #### getInstance

DOM要素に関連付けられたツールチップインスタンスを取得できる静的メソッド
*Static* method which allows you to get the tooltip instance associated with a DOM element

```js
var exampleTriggerEl = document.getElementById('example')
var tooltip = bootstrap.Tooltip.getInstance(exampleTriggerEl) // Returns a Bootstrap tooltip instance
``` -->

  <!-- #### getOrCreateInstance

*Static* method which allows you to get the tooltip instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
var exampleTriggerEl = document.getElementById('example')
var tooltip = bootstrap.Tooltip.getOrCreateInstance(exampleTriggerEl) // Returns a Bootstrap tooltip instance
``` -->

  <h3>Events</h3>
  <!-- <Snippet>
    <Example>
      <examples-components-tooltip-events />
    </Example>
    <ExamplesCode path="/components/tooltip/events.vue" lang="vue" />
  </Snippet> -->


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/tooltip/events.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/tooltip/events.html)
:::
::::-->


  <!-- 
<examples-components-tooltip-Demo_top />
<b-div style="height:5em;"></b-div>
<examples-components-tooltip-Demo_right />
<b-div style="height:5em;"></b-div>
<examples-components-tooltip-Demo_bottom />
<b-div style="height:5em;"></b-div>
<examples-components-tooltip-Demo_left />
<b-div style="height:5em;"></b-div>
<examples-components-tooltip-Demo_html /> -->
</template>