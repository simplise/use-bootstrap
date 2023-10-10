
<script setup lang="ts">
definePageMeta({
  'title:en': 'Offcanvas',
  'description:en': `Build hidden sidebars into your project for navigation, shopping carts, and more with a Offcanvas components.`,
  'title:ja': 'Offcanvas',
  'description:ja': 'Offcanvasコンポーネントによって、ナビゲーションやショッピングカートなどのための隠しサイドバーをプロジェクトに組み込むことができます。'
})
</script>
<template>
  <h2>How it works</h2>
  <Localization>
    <template #en>
      <p>Offcanvas is a sidebar component that can be toggled to appear from the left, right, top, or bottom edge of the viewport. </p>
    </template>
    <template #ja>
      <p>Offcanvas は、 切り替え可能で、ビューポートの左端、右端、または下端から表示できるサイドバーコンポーネントです。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.</p>
      <p>Similar to modals, only one offcanvas can be shown at a time.</p>
    </template>
    <template #ja>
      <p>表示されている場合、offcanvas にはデフォルトの背景が含まれており、クリックすると offcanvas を隠すことができます。</p>
      <p>Modal と同様に、一度に表示できるオフキャンバスは1つだけです。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p><b>Heads up!</b> Given how CSS handles animations, you cannot use <code>margin</code> or <code>translate</code> on an <code>Offcanvas</code> element. </p>
      <p>Instead, use the class as an independent wrapping element.</p>
    </template>
    <template #ja>
      <p><b>Heads up!</b> CSS によるアニメーションの処理方法を考慮すると、<code>Offcanvas</code> 要素に対して <code>margin</code> や <code>translate</code> を使用することはできません。</p>
      <p>代わりに、このクラスを独立したラッピング要素として使用してください。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <h2>Examples</h2>

  <h3>Offcanvas components</h3>

  <Localization>
    <template #en>
      <p>Below is an offcanvas example that is shown by default (via <code>show</code> on <code>Offcanvas</code>). </p>
      <p>Offcanvas includes support for a header with a close button and an optional body class for some initial <code>padding</code>. </p>
      <p>We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.</p>
    </template>
    <template #ja>
      <p>以下は, デフォルトで表示される (<code>show</code> on <code>Offcanvas</code> による) offcanvas の例です。</p>
      <p>Offcanvas には、閉じるボタン付きのヘッダと、初期の <code>padding</code> のためのオプションのボディクラスがサポートされています。</p>
      <p>可能な限り, offcanvas のヘッダに dismiss アクションを含めるか、明示的な dismiss アクションを提供することをお勧めします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example offcanvas>
      <examples-components-offcanvas-components />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/components.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Live demo</h3>
  <Localization>
    <template #en>
      <p>
        Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>show</code> attribute on an element with the <code>Offcanvas</code> component.
      </p>
    </template>
    <template #ja>
      <p>
        <code>Offcanvas</code>コンポーネントの要素の<code>show</code>属性を切り替えるJavaScriptを介して、Offcanvas要素を表示または非表示にするためには、以下のボタンを使用します。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <ul>
        <li> <code>Offcanvas</code> hides content (default)</li>
        <li> <code>show</code> shows content</li>
      </ul>
    </template>
    <template #ja>
      <ul>
        <li><code>Offcanvas</code>コンテンツを非表示にします(デフォルト)。</li>
        <li><code>show</code>コンテンツを表示します。</li>
      </ul>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        You can use a link with the <code>href</code> attribute, or a button with the <code>target</code> attribute. In both cases, the <code>toggle="offcanvas"</code> is required.
      </p>
    </template>
    <template #ja>
      <p>
        属性を指定したリンク<code>href</code>、または属性を指定したボタン<code>target</code>を使用できます。どちらの場合も、<code>toggle="offcanvas"</code>は必須です。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-offcanvas-livedemo />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/livedemo.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Body scrolling</h3>
  <Snippet>
    <Example>
      <examples-components-offcanvas-body-scrolling />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/body-scrolling.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Body scrolling and backdrop</h3>
  <Snippet>
    <Example>
      <examples-components-offcanvas-body-scrolling-backdrop />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/body-scrolling-backdrop.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Static backdrop</h3>
  <Snippet>
    <Example>
      <examples-components-offcanvas-static-backdrop />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/static-backdrop.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-2">
    Responsive
  </h2>

  <Snippet>
    <Example>
      <examples-components-offcanvas-responsive />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/responsive.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-2">
    Placement
  </h2>

  <Localization>
    <template #en>
      <p>
        There's no default placement for offcanvas components, so you must add one of the modifier classes below;
      </p>
    </template>
    <template #ja>
      <p>
        offcanvasコンポーネントにはデフォルトの配置がないため、以下のモディファイアクラスのいずれかを追加する必要があります。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <ul>
        <li> <code>Offcanvas-start</code> places offcanvas on the left of the viewport (shown above)</li>
        <li> <code>Offcanvas-end</code> places offcanvas on the right of the viewport </li>
        <li> <code>Offcanvas-top</code> places offcanvas on the top of the viewport</li>
        <li> <code>Offcanvas-bottom</code> places offcanvas on the bottom of the viewport </li>
      </ul>
    </template>
    <template #ja>
      <ul>
        <li><code>Offcanvas-start</code> ビューポートの左側にoffcanvasを配置します（上に表示）</li>
        <li><code>Offcanvas-end</code> ビューポートの右側にoffcanvasを配置します</li>
        <li><code>Offcanvas-top</code> ビューポートの上部にoffcanvasを配置します</li>
        <li><code>Offcanvas-bottom</code> ビューポートの下部にoffcanvasを配置します</li>
      </ul>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Try the top, right, and bottom examples out below.
      </p>
    </template>
    <template #ja>
      以下の上部、右側、下部の例を試してください。
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-offcanvas-placement-top />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/placement-top.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-offcanvas-placement-right />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/placement-right.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-offcanvas-placement-bottom />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/placement-bottom.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-2">
    Backdrop
  </h2>

  <Localization>
    <template #en>
      <p>
        Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>scroll</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>backdrop</code> attribute to toggle the backdrop.
      </p>
    </template>
    <template #ja>
      <p>
        offcanvasとその背景が表示されているときは、<code>&lt;body&gt;</code>要素のスクロールは無効になります。<code>scroll</code>属性で<code>&lt;body&gt;</code>要素のスクロールを、<code>backdrop</code>属性で背景のスクロールを切り替えます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-offcanvas-backdrop />
    </Example>
    <ExamplesCode
      path="/components/offcanvas/backdrop.vue"
      lang="vue"
    />
  </Snippet>


  <!-- ## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `Offcanvas`. Note that you don’t need to add `role="dialog"` since we already add it via JavaScript. -->
  <!-- 
## Sass

### Variables -->

  <!-- {{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}} -->

  <h2 class="mt-2">
    Usage
  </h2>

  <Localization>
    <template #en>
      <p>
        The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:
      </p>
    </template>
    <template #ja>
      <p>
        offcanvasプラグインは、いくつかのクラスとアトリビュートを利用して、重い処理を行います。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <ul>
        <li> <code>placement</code> hides the content </li>
        <li> <code>placement="show"</code> shows the content </li>
        <li> <code>placement="start"</code> hides the offcanvas on the left </li>
        <li> <code>placement="end"</code> hides the offcanvas on the right </li>
        <li> <code>placement="top"</code> hides the offcanvas on the top </li>
        <li> <code>placement="bottom"</code> hides the offcanvas on the bottom </li>
      </ul>
    </template>
    <template #ja>
      <ul>
        <li> <code>placement</code> コンテンツを隠します </li>
        <li> <code>placement="show"</code> コンテンツを表示します</li>
        <li> <code>placement="start"</code> 左側のoffcanvasを非表示にします</li>
        <li> <code>placement="end"</code> 右側のoffcanvasを非表示にします</li>
        <li> <code>placement="top"</code> 上部のoffcanvasを非表示にします</li>
        <li> <code>placement="bottom"</code> 下部のoffcanvasを非表示にします</li>
      </ul>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Add a dismiss button with the <code>dismiss="offcanvas"</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code>BvBbutton</code> component with it for proper behavior across all devices.
      </p>
    </template>
    <template #ja>
      <p>
        <code>dismiss="offcanvas"</code>属性をもつdismissボタンを追加し、JavaScript機能をトリガーします。すべてのデバイスで適切に動作するように、必ず<code>BvBbutton</code>コンポーネントを一緒に使用してください。
      </p>
    </template>
  </Localization>

  <!-- <h3>Via data attributes</h3>

  <h4>Toggle</h4>
  <p>
    Add <code>toggle="offcanvas"</code> and a <code>target</code> or <code>href</code> to the element to automatically assign control of one offcanvas element. The <code>target</code> attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the component <code>Offcanvas</code> to the offcanvas element. If you'd like it to default open, add the additional attribute <code>show</code>.
  </p>

  <h4>Dismiss</h4> -->

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

  <!-- <h3>Options</h3> -->

  <!-- Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-backdrop=""`. -->

  <!-- {{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean | `true` | Apply a backdrop on body while offcanvas is open |
| `keyboard` | boolean | `true` | Closes the offcanvas when escape key is pressed |
| `scroll` | boolean | `false` | Allow body scrolling while offcanvas is open |
{{< /bs-table >}} -->

  <!-- <h3>Methods</h3> -->

  <!-- {{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}} -->
  <!-- <p>
    Activates your content as an offcanvas element. Accepts an optional options <code>object</code>
  </p>
  <p>
    You can create an offcanvas instance with the constructor, for example:
  </p> -->
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

  <!-- <h3>Events</h3>
  <p>
    Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.
  </p> -->
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