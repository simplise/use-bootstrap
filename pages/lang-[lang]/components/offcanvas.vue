
<script setup lang="ts">
definePageMeta({
  title: `Offcanvas`,
  description: `いくつかのクラスとJavaScriptプラグインを使って、ナビゲーションやショッピングカートなどのための隠しサイドバーをプロジェクトに組み込むことができます。 Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.`
})
</script>
<template>
  <!---
title: Offcanvas
description: いくつかのクラスとJavaScriptプラグインを使って、ナビゲーションやショッピングカートなどのための隠しサイドバーをプロジェクトに組み込むことができます。 Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.
--->

  <h2>How it works</h2>
  <p>
    Offcanvas は、
    <!-- JavaScriptによって -->
    切り替え可能で、ビューポートの左端、右端、または下端から表示できるサイドバーコンポーネントです。
    ボタンまたはアンカーは、切り替えた特定の要素にアタッチされるトリガーとして使用され、 <code>data</code> 属性は JavaScript を呼び出すために使用されます。
    Offcanvas is a sidebar component that can be toggled
  </p>
  <!-- via JavaScript -->
  <p>
    to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and <code>data</code> attributes are used to invoke our JavaScript.
  </p>
  <!-- Offcanvas は、Modal と同じ JavaScript コードの一部を共有しています。概念的にはよく似ていますが、それぞれ別のプラグインです。
- Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins. -->
  <!-- Offcanvas のスタイルと寸法のためのいくつかの source Sass 変数は、Modal の変数から継承されています。
- Similarly, some [source Sass](#sass) variables for offcanvas's styles and dimensions are inherited from the modal's variables. -->
  <p>
    表示されている場合、offcanvas にはデフォルトの背景が含まれており、クリックすると offcanvas を隠すことができます。
  </p>
  <ul>
    <li>
      When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.
      Modal と同様に、一度に表示できるオフキャンバスは1つだけです。
    </li> Similar to modals, only one offcanvas can be shown at a time.
  </ul>
  <p>
    <b>Heads up!</b> CSS によるアニメーションの処理方法を考慮すると、<code>Offcanvas</code> 要素に対して <code>margin</code> や <code>translate</code> を使用することはできません。代わりに、このクラスを独立したラッピング要素として使用してください。
    <b>Heads up!</b> Given how CSS handles animations, you cannot use <code>margin</code> or <code>translate</code> on an <code>Offcanvas</code> element. Instead, use the class as an independent wrapping element.
  </p>
  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <h2>Examples</h2>

  <h3>Offcanvas components</h3>
  <p>
    以下は, デフォルトで表示される (<code>show</code> on <code>Offcanvas</code> による) offcanvas の例です。 Offcanvas には、閉じるボタン付きのヘッダと、初期の <code>padding</code> のためのオプションのボディクラスがサポートされています。可能な限り, offcanvas のヘッダに dismiss アクションを含めるか、明示的な dismiss アクションを提供することをお勧めします。
    Below is an offcanvas example that is shown by default (via <code>show</code> on <code>Offcanvas</code>). Offcanvas includes support for a header with a close button and an optional body class for some initial <code>padding</code>. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.
  </p>
  <Snippet>
    <Example>
      <examples-components-offcanvas-components />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/components.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/offcanvas/components.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/offcanvas/components.html)
:::
:::: -->


  <h3>Live demo</h3>
  <p>
    Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>show</code> attribute on an element with the <code>Offcanvas</code> component.
  </p>
  <ul>
    <li> <code>Offcanvas</code> hides content (default)</li>
    <li> <code>show</code> shows content</li>
  </ul>
  <p>
    You can use a link with the <code>href</code> attribute, or a button with the <code>target</code> attribute. In both cases, the <code>toggle="offcanvas"</code> is required.
  </p>
  <Snippet>
    <Example>
      <examples-components-offcanvas-livedemo />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/components.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/offcanvas/livedemo.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/offcanvas/livedemo.html)
:::
:::: -->
  <h2 class="mt-2">
    Placement
  </h2>
  <p>
    There's no default placement for offcanvas components, so you must add one of the modifier classes below;
  </p>
  <ul>
    <li> <code>Offcanvas-start</code> places offcanvas on the left of the viewport (shown above)</li>
    <li> <code>Offcanvas-end</code> places offcanvas on the right of the viewport </li>
    <li> <code>Offcanvas-top</code> places offcanvas on the top of the viewport</li>
    <li> <code>Offcanvas-bottom</code> places offcanvas on the bottom of the viewport </li>
  </ul>
  <p>
    Try the top, right, and bottom examples out below.
  </p>
  <Snippet>
    <Example>
      <examples-components-offcanvas-placement-top />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/placement-top.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/offcanvas/placement-top.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/offcanvas/placement-top.html)
:::
:::: -->
  <Snippet>
    <Example>
      <examples-components-offcanvas-placement-right />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/placement-right.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/offcanvas/placement-right.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/offcanvas/placement-right.html)
:::
:::: -->
  <Snippet>
    <Example>
      <examples-components-offcanvas-placement-bottom />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/placement-bottom.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/offcanvas/placement-bottom.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/offcanvas/placement-bottom.html)
:::
:::: -->

  <h2 class="mt-2">
    Backdrop
  </h2>
  <p>
    Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>scroll</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>backdrop</code> attribute to toggle the backdrop.
  </p>

  <Snippet>
    <Example>
      <examples-components-offcanvas-backdrop />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/backdrop.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/offcanvas/backdrop.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/offcanvas/backdrop.html)
:::
:::: -->

  <!-- ## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `Offcanvas`. Note that you don’t need to add `role="dialog"` since we already add it via JavaScript. -->
  <!-- 
## Sass

### Variables -->

  <!-- {{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}} -->

  <h2 class="mt-2">
    Usage
  </h2>
  <p>
    The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:
  </p>
  <ul>
    <li> <code>placement</code> hides the content </li>
    <li> <code>placement="show"</code> shows the content </li>
    <li> <code>placement="start"</code> hides the offcanvas on the left </li>
    <li> <code>placement="end"</code> hides the offcanvas on the right </li>
    <li> <code>placement="top"</code> hides the offcanvas on the top </li>
    <li> <code>placement="bottom"</code> hides the offcanvas on the bottom </li>
  </ul>
  <p>
    Add a dismiss button with the <code>dismiss="offcanvas"</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code>BvBbutton</code> component with it for proper behavior across all devices.
  </p>

  <h3>Via data attributes</h3>

  <h4>Toggle</h4>
  <p>
    Add <code>toggle="offcanvas"</code> and a <code>target</code> or <code>href</code> to the element to automatically assign control of one offcanvas element. The <code>target</code> attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the component <code>Offcanvas</code> to the offcanvas element. If you'd like it to default open, add the additional attribute <code>show</code>.
  </p>

  <h4>Dismiss</h4>

  <!-- {{% js-dismiss "offcanvas" %}} -->

  <!-- {{< callout warning >}}
While both ways to dismiss an offcanvas are supported, keep in mind that dismissing from outside an offcanvas does not match [the WAI-ARIA modal dialog design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal). Do this at your own risk.
{{< /callout >}} -->

  <!-- ### Via JavaScript

Enable manually with:

```js
var offcanvasElementList = Array.prototype.slice.call(document.querySelectorAll('Offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrapOffcanvas(offcanvasEl)
})
``` -->

  <h3>Options</h3>

  <!-- Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-backdrop=""`. -->

  <!-- {{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean | `true` | Apply a backdrop on body while offcanvas is open |
| `keyboard` | boolean | `true` | Closes the offcanvas when escape key is pressed |
| `scroll` | boolean | `false` | Allow body scrolling while offcanvas is open |
{{< /bs-table >}} -->

  <h3>Methods</h3>

  <!-- {{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}} -->
  <p>
    Activates your content as an offcanvas element. Accepts an optional options <code>object</code>
  </p>
  <p>
    You can create an offcanvas instance with the constructor, for example:
  </p>
  <!-- ```js
var myOffcanvas = document.getElementById('myOffcanvas')
var bsOffcanvas = new bootstrapOffcanvas(myOffcanvas)
``` -->

  <!-- {{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `toggle` | Toggles an offcanvas element to shown or hidden. **Returns to the caller before the offcanvas element has actually been shown or hidden** (i.e. before the `shown.bsOffcanvas` or `hidden.bsOffcanvas` event occurs). |
| `show` | Shows an offcanvas element. **Returns to the caller before the offcanvas element has actually been shown** (i.e. before the `shown.bsOffcanvas` event occurs).|
| `hide` | Hides an offcanvas element. **Returns to the caller before the offcanvas element has actually been hidden** (i.e. before the `hidden.bsOffcanvas` event occurs).|
| `getInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn't initialized |
{{< /bs-table >}} -->

  <h3>Events</h3>
  <p>
    Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.
  </p>
  <!-- {{< bs-table "table" >}}
| Event type | Description |
| --- | --- |
| `show.bsOffcanvas` | This event fires immediately when the `show` instance method is called. |
| `shown.bsOffcanvas` | This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete). |
| `hide.bsOffcanvas` | This event is fired immediately when the `hide` method has been called. |
| `hidden.bsOffcanvas` | This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete). |
{{< /bs-table >}} -->

  <!-- ```js
var myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bsOffcanvas', function () {
  // do something...
})
``` -->
</template>