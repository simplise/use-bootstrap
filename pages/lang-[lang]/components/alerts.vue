<script setup lang="ts">
definePageMeta({
  'title:en': 'Alerts',
  'description:en': 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
  'title:ja': 'アラート',
  'description:ja': '柔軟性のあるアラートメッセージで、典型的なユーザーアクションに対して文脈に沿ったフィードバックメッセージを提供します。'
})
</script>

<template>
  <h2>Examples</h2>
  <Localization>
    <template #en>
      <p>Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight <b>required</b> contextual classes (e.g., <code>theme="success"</code>).</p>
    </template>
    <template #ja>
      <p>任意の長さのアラートを表示できます。オプションで閉じるボタンがあります。 適切なスタイルを設定するには、8つの <b>required</b> コンテキストクラスのいずれかを使用します（例： <code>theme="success"</code>）</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-alert-example />
    </Example>
    <ExamplesCode
      path="/components/alert/example.vue"
      lang="vue"
    />
  </Snippet>

  <!--
{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}} -->

  <h3>Link color</h3>
  <Localization>
    <template #en>
      <p>Use the <code>AlertLink</code> compoennt utility class to quickly provide matching colored links within any alert.</p>
    </template>
    <template #ja>
      <p><code>AlertLink</code> コンポーネントを適用すると、リンクが適切なカラーになります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-alert-linkcolor />
    </Example>
    <ExamplesCode
      path="/components/alert/linkcolor.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/alert/linkcolor.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/alert/linkcolor.html)
:::
:::: -->

  <h3> Additional content</h3>

  <Localization>
    <template #en>
      <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
    </template>
    <template #ja>
      <p>アラートには、 見出し、段落、仕切りなどのHTML要素を含めることができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-alert-additional />
    </Example>
    <ExamplesCode
      path="/components/alert/additional.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mb-3">
    Icons
  </h3>

  <!-- Similarly, you can use [flexbox utilities]({{< docsref "/utilities/flex" >}}) and [Bootstrap Icons]({{< param icons >}}) to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles. -->

  <Snippet>
    <Example>
      <examples-components-alert-icons-1 />
    </Example>
    <ExamplesCode
      path="/components/alert/icons-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>Need more than one icon for your alerts? Consider using more NuxtIcon and making a SVG sprite like so to easily reference the same icons repeatedly.</p>
    </template>
    <template #ja>
      <p>同じアイコンを繰り返し簡単に参照できるようにすることもできます。NuxtIcons を使用し SVGスプライトを作成してる例をご覧ください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-alert-icons-2 />
    </Example>
    <ExamplesCode
      path="/components/alert/icons-2.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Dismissing</h3>
  <Localization>
    <template #en>
      <p>Using the <code>CloseButton</code> components, it's possible to dismiss any alert inline. Here's how:</p>
      <p>You can see this in action with a live demo:</p>
    </template>
    <template #ja>
      <p><code>CloseButton</code> コンポーネント を使用すると、アラートインラインを消すことができます。</p>
      <p>ライブデモを見ることができます：</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-components-alert-dismissing />
    </Example>
    <ExamplesCode
      path="/components/alert/dismissing.vue"
      lang="vue"
    />
  </Snippet>



  <!-- {{< callout warning >}}
When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the `closed.bs.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive element that normally does not receive focus, make sure to add `tabindex="-1"` to the element.
{{< /callout >}} -->


  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="alert-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Variant mixin

Used in combination with `$theme-colors` to create contextual modifier classes for our alerts. -->

  <!-- {{< scss-docs name="alert-variant-mixin" file="scss/mixins/_alert.scss" >}} -->

  <!-- ### Loop

Loop that generates the modifier classes with the `alert-variant()` mixin. -->

  <!-- {{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}} -->

  <!-- ## JavaScript behavior

### Initialize

Initialize elements as alerts

```js
var alertList = document.querySelectorAll('.alert')
var alerts = Array.prototype.slice.call(alertList).map(function (element) {
  return new bootstrap.Alert(element)
})
``` -->

  <!-- {{< callout info >}}
For the sole purpose of dismissing an alert, it isn't necessary to initialize the component manually via the JS API. By making use of `data-bs-dismiss="alert"`, the component will be initialized automatically and properly dismissed.

See the [triggers](#triggers) section for more details.
{{< /callout >}} -->

  <h3>Triggers</h3>
  <Localization>
    <template #en>
      <p>
        Dismissal can be achieved with the data attribute on a button within the alert as demonstrated below:
      </p>
    </template>
    <template #ja>
      <p>
        解除は、以下に示すように、アラート内のボタンのdata属性で行うことができます。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-alert-trigger-within />
    </Example>
    <ExamplesCode
      path="/components/alert/trigger-within.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/alert/trigger-within.vue)
:::
::: code-group-item bootstrap5
```html
@[code](@examples/components/alert/trigger-within.html)
```
:::
:::: -->
  <Localization>
    <template #en>
      <p>
        or on a button outside the alert using the data-bs-target as demonstrated below:
      </p>
    </template>
    <template #ja>
      <p>
        または、以下のようにdata-bs-targetを使用してアラートの外側のボタンに表示します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-alert-trigger-outside />
    </Example>
    <ExamplesCode
      path="/components/alert/trigger-outside.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/alert/trigger-outside.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/alert/trigger-outside.html)
:::
:::: -->


  <!-- {{% js-dismiss "alert" %}} -->

  <!-- **Note that closing an alert will remove it from the DOM.** -->

  <!-- <h3 class="mt-3">
    Methods
  </h3> -->

  <!-- <docs-methods-alert /> -->

  <!-- ```js
var alertNode = document.querySelector('.alert')
var alert = bootstrap.Alert.getInstance(alertNode)
alert.close()
``` -->

  <!-- <h3>Events</h3>
  <p>
    Bootstrapのalertプラグインは、アラート機能にフックするためのいくつかのイベントがあります。
    Bootstrap's alert plugin exposes a few events for hooking into alert functionality.
  </p> -->
  <!-- <docs-events-alert /> -->


  <!-- <Snippet>
    <Example>
      <examples-components-alert-event />
    </Example>
    <ExamplesCode path="/components/alert/event.vue" lang="vue" />
  </Snippet> -->


  <!-- ```js
var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
``` -->
</template>