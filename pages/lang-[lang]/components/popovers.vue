
<script setup lang="ts">
definePageMeta({
  'title:en': 'Popovers',
  'description:en': `Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.`,
  'title:ja': 'ポップオーバー',
  'description:ja': 'ポップオーバーをサイト上の任意の要素に追加するためのドキュメントと例を示します。'
})
</script>
<template>
  <h2>Overview</h2>

  <Localization>
    <template #en>
      <ul>
        <!-- - Popovers rely on the 3rd party library [Popper](https://popper.js.org/) for positioning. You must include [popper.min.js](cdn.popper) before bootstrap.js or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper in order for popovers to work! -->
        <!-- - Popovers require the [tooltip plugin](/components/tooltips) as a dependency. -->
        <!-- - Popovers are opt-in for performance reasons, so **you must initialize them yourself**. -->
        <li> Zero-length <code>title</code> and <code>content</code> attributes will never show a popover.</li>
        <!-- - Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc). -->
        <li> Triggering popovers on hidden elements will not work.</li>
        <li> Popovers for <code>disabled</code> elements must be triggered on a wrapper element.</li>
        <li> When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors' overall width. Use <code>textNowrap</code> on your <code>b-a</code> components to avoid this behavior.</li>
        <li> Popovers must be hidden before their corresponding elements have been removed from the DOM.</li>
        <li> Popovers can be triggered thanks to an element inside a shadow DOM.</li>
      </ul>
    </template>
    <template #ja>
      <ul>
        <li>長さがゼロの<code>title</code>属性と<code>content</code>属性はポップオーバーを表示しません。</li>
        <li>非表示要素のポップオーバーは動作しません。</li>
        <li><code>disabled</code>要素のポップオーバーはwrapper要素でトリガーされなければなりません。</li>
        <li>複数行にまたがるアンカーからトリガーされた場合、ポップオーバーはアンカー全体の幅の中央に配置されます。この動作を避けるために、<code>b-a</code>コンポーネントで <code>textNowrap</code>を使用してください。</li>
        <li>ポップオーバーは、対応する要素がDOMから削除される前に隠されなければなりません。</li>
        <li>ポップオーバーは、shadowDOM内の要素によってトリガーすることができます。</li>
      </ul>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-info-sanitizer.md" >}}
{{< /callout >}} -->

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <!-- Keep reading to see how popovers work with some examples.

## Example: Enable popovers everywhere

One way to initialize all popovers on a page would be to select them by their `data-bs-toggle` attribute:

```js
var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
``` -->

  <!-- ## Example: Using the `container` option

When you have some styles on a parent element that interfere with a popover, you'll want to specify a custom `container` so that the popover's HTML appears within that element instead.

```js
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})
``` -->

  <h2>Example</h2>
  <Snippet>
    <Example>
      <examples-components-popover-example />
    </Example>
    <ExamplesCode
      path="/components/popover/example.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Four directions</h3>

  <Localization>
    <template #en>
      <p>
        Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using Bootstrap in RTL.
      </p>
    </template>
    <template #ja>
      <p>
        top、right、bottom、left alignedの4つのオプションがあります。BootstrapをRTLで使用する場合、方向はミラーリングされます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-popover-directions />
    </Example>
    <ExamplesCode
      path="/components/popover/directions.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Dismiss on next click</h3>

  <Localization>
    <template #en>
      <p>
        Use the <code>focus</code> trigger to dismiss popovers on the user's next click of a different element than the toggle element.
      </p>
    </template>
    <template #ja>
      <p>
        <code>focus</code>トリガーを使用して、ユーザーが次にトグル要素とは異なる要素をクリックしたときにポップオーバーを解除します。
      </p>
    </template>
  </Localization>

  <!-- <div style="background-color: salmon;">
    <h5>danger</h5>
    <h4>Specific markup required for dismiss-on-next-click</h4>
    <p>
      For proper cross-browser and cross-platform behavior, you must use the <code>b-a</code> component, _not_ the <code>Button</code> component, and you also must include a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">taibindex</a> attribute.
    </p>
  </div> -->
  <Snippet>
    <Example>
      <examples-components-popover-dismiss />
    </Example>
    <ExamplesCode
      path="/components/popover/dismiss.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Disabled elements</h3>

  <Localization>
    <template #en>
      <p>
        Elements with the <code>disabled</code> attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper <code>b-div</code> component or <code>span</code> tag, ideally made keyboard-focusable using <code>tabindex="0"</code>.
      </p>
    </template>
    <template #ja>
      <p>
        <code>disabled</code>属性を持つ要素は、インタラクティブではありません。つまり、ユーザーがポップオーバー（またはツールチップ）をトリガーするためにカーソルを合わせたり、クリックしたりすることはできません。回避策として、wrapperの<code>b-div</code>コンポーネントまたは<code>span</code>タグからポップオーバーをトリガーする必要があります。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        For disabled popover triggers, you may also prefer <code>trigger="hover focus"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to _click_ on a disabled element.
      </p>
    </template>
    <template #ja>
      <p>
        無効化されたポップオーバートリガーでは、<code>trigger="hover focus"</code>を好むかもしれません、そうすることで、ユーザーは無効化された要素をクリックすることを期待しないかもしれないので、ポップオーバーが即座に視覚的なフィードバックとして表示されます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-popover-disabled />
    </Example>
    <ExamplesCode
      path="/components/popover/disabled.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/popover/disabled.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/popover/disabled.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="popover-variables" file="scss/_variables.scss" >}} -->

  <!-- ## Usage

Enable popovers via JavaScript:

```js
var exampleEl = document.getElementById('example')
var popover = new bootstrap.Popover(exampleEl, options)
``` -->
  <!-- <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <h3>Making popovers work for keyboard and assistive technology users</h3>
    <p>
      To allow keyboard users to activate your popovers, you should only add them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as <code>&lt;s&gt;</code>s) can be made focusable by adding the <code>tabindex="0"</code> attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce the popover's content in this situation. Additionally, do not rely solely on <code>hover</code> as the trigger for your popovers, as this will make them impossible to trigger for keyboard users.
    </p>
    <p>
      While you can insert rich, structured HTML in popovers with the <code>html</code> option, we strongly recommend that you avoid adding an excessive amount of content. The way popovers currently work is that, once displayed, their content is tied to the trigger element with the <code>aria-describedby</code> attribute. As a result, the entirety of the popover's content will be announced to assistive technology users as one long, uninterrupted stream.
    </p>
    <p>
      Additionally, while it is possible to also include interactive controls (such as form elements or links) in your popover (by adding these elements to the <code>allowList</code> of allowed attributes and tags), be aware that currently the popover does not manage keyboard focus order. When a keyboard user opens a popover, focus remains on the triggering element, and as the popover usually does not immediately follow the trigger in the document's structure, there is no guarantee that moving forward/pressing <kbd>TAB</kbd> will move a keyboard user into the popover itself. In short, simply adding interactive controls to a popover is likely to make these controls unreachable/unusable for keyboard users and users of assistive technologies, or at the very least make for an illogical overall focus order. In these cases, consider using a modal dialog instead.
      :::
    </p>
  </div>
  <h3>Options</h3> -->

  <!-- Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-animation=""`. Make sure to change the case type of the option name from camelCase to kebab-case when passing the options via data attributes. For example, instead of using `data-bs-customClass="beautifier"`, use `data-bs-custom-class="beautifier"`. -->

  <!-- ::: warning
Note that for security reasons the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied using data attributes.
::: -->

  <!-- <docs-options-popover /> -->

  <!-- {{< callout info >}}
#### Data attributes for individual popovers

Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.
{{< /callout >}} -->

  <!-- #### Using function with `popperConfig`

```js
var popover = new bootstrap.Popover(element, {
  popperConfig: function (defaultBsPopperConfig) {
    // var newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
``` -->

  <!-- <h3>Methods</h3> -->

  <!-- ::: danger
{{< partial "callout-danger-async-methods.md" >}}
:: -->

  <!-- <h4>show</h4>
  <p>
    Reveals an element's popover. <b>Returns to the caller before the popover has actually been shown</b> (i.e. before the <code>shown.bs.popover</code> event occurs). This is considered a "manual" triggering of the popover. Popovers whose title and content are both zero-length are never displayed.
  </p> -->
  <!-- ```js
myPopover.show()
``` -->

  <!-- <h4>hide</h4>
  <p>
    Hides an element's popover. <b>Returns to the caller before the popover has actually been hidden</b> (i.e. before the <code>hidden.bs.popover</code> event occurs). This is considered a "manual" triggering of the popover.
  </p> -->
  <!-- ```js
myPopover.hide()
``` -->

  <!-- <h4>toggle</h4>
  <p>
    Toggles an element's popover.
    <b>Returns to the caller before the popover has actually been shown or hidden</b> (i.e. before the <code>shown.bs.popover</code> or <code>hidden.bs.popover</code> event occurs). This is considered a "manual" triggering of the popover.
  </p> -->
  <!-- ```js
myPopover.toggle()
``` -->

  <!-- #### dispose

Hides and destroys an element's popover (Removes stored data on the DOM element). Popovers that use delegation (which are created using [the `selector` option](#options)) cannot be individually destroyed on descendant trigger elements.

```js
myPopover.dispose()
``` -->

  <!-- <h4>enable</h4>
  <p>
    Gives an element's popover the ability to be shown. <b>Popovers are enabled by default.</b>
  </p> -->
  <!-- ```js
myPopover.enable()
``` -->

  <!-- <h4>disable</h4>
  <p>
    Removes the ability for an element's popover to be shown. The popover will only be able to be shown if it is re-enabled.
  </p> -->
  <!-- ```js
myPopover.disable()
``` -->

  <!-- <h4>toggleEnabled</h4>
  <p>
    Toggles the ability for an element's popover to be shown or hidden.
  </p> -->
  <!-- ```js
myPopover.toggleEnabled()
``` -->

  <!-- <h4>update</h4>
  <p>
    Updates the position of an element's popover.
  </p> -->
  <!-- ```js
myPopover.update()
``` -->

  <!-- #### getInstance

*Static* method which allows you to get the popover instance associated with a DOM element

```js
var exampleTriggerEl = document.getElementById('example')
var popover = bootstrap.Popover.getInstance(exampleTriggerEl) // Returns a Bootstrap popover instance
``` -->

  <!-- #### getOrCreateInstance

*Static* method which allows you to get the popover instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
var exampleTriggerEl = document.getElementById('example')
var popover = bootstrap.Popover.getOrCreateInstance(exampleTriggerEl) // Returns a Bootstrap popover instance
``` -->

  <!-- <h3>Events</h3> -->

  <!-- <docs-events-popover /> -->

  <!-- ```js
var myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('hidden.bs.popover', function () {
  // do something...
})
``` -->
</template>