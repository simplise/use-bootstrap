<script setup lang="ts">
definePageMeta({
  title: `トースト Toasts`,
  description: `軽量で簡単にカスタマイズできるアラートメッセージをプッシュ通知します。Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.`
})
</script>

<template>
  <!---
title: トースト Toasts
description: 軽量で簡単にカスタマイズできるアラートメッセージをプッシュ通知します。Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
--->
  <p>
    Toasts は、モバイルやデスクトップの OS で普及しているプッシュ通知を模倣して設計された軽量な通知です。flexbox で作られているので、位置合わせや配置が簡単です。
    Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They're built with flexbox, so they're easy to align and position.
  </p>

  <h2>Overview</h2>
  <p>
    Toasts プラグインを使うときに知っておきたいこと
    Things to know when using the toast plugin:
  </p>
  <ul>
    <li> Toasts はパフォーマンスのためにオプトインされています。自分で初期化する必要があります。Toasts are opt-in for performance reasons, so <b>you must initialize them yourself</b>.</li>
    <li> Toasts は <code>autohide: false</code> を指定しないと自動的に非表示になります。Toasts will automatically hide if you do not specify <code>autohide: false</code>.</li>
  </ul>
  <!--
{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}
-->
  <h2>Examples</h2>

  <h3>Basic</h3>
  <p>
    Toasts の拡張性と予測可能性を高めるために、ヘッダと本文を推奨します。Toasts のヘッダは <code>display: flex</code> を使用しており、 margin と flexbox ユーティリティによりコンテンツを簡単に整列させることができます。
    To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use <code>display: flex</code>, allowing easy alignment of content thanks to our margin and flexbox utilities.
  </p>
  <p>
    Toasts は必要なマークアップはほとんどありません。最低限、“Toasts” コンテンツを含む要素を 1 つだけ必要とし、却下ボタンを強く推奨します。
    Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your "toasted" content and strongly encourage a dismiss button.
  </p>
  <!--
{{< callout warning >}}
Previously, our scripts dynamically added the `.hide` class to completely hide a toast (with `display:none`, rather than just with `opacity:0`). This is now not necessary anymore. However, for backwards compatibility, our script will continue to toggle the class (even though there is no practical need for it) until the next major version.
{{< /callout >}}
-->

  <h5>tip</h5>
  <p>
    Previously, our scripts dynamically added the <code>hide</code> attribute to completely hide a toast (with <code>display:none</code>, rather than just with <code>opacity:0</code>). This is now not necessary anymore. However, for backwards compatibility, our script will continue to toggle the class (even though there is no practical need for it) until the next major version.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-basic />
    </Example>
    <ExamplesCode
      path="/components/toast/basic.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/basic.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/basic.html)
:::
:::: -->

  <h3 class="mt-3">
    Live example
  </h3>
  <p>
    下のボタンをクリックして、デフォルトで <code>hide</code> 属性で非表示になっているトースト（ユーティリティで右下隅に配置）を表示します。
    Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-live />
    </Example>
    <ExamplesCode
      path="/components/toast/live.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/live.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/live.html)
:::
:::: -->

  <h3 class="mt-3">
    Translucent
  </h3>
  <p>
    Toasts は半透明なので、上に表示されるものは何でも溶け込みます。
    Toasts are slightly translucent to blend in with what's below them.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-translucent />
    </Example>
    <ExamplesCode
      path="/components/toast/translucent.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/translucent.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/translucent.html)
:::
:::: -->

  <h3 class="mt-3">
    Stacking
  </h3>
  <p>
    Toast が複数ある場合は、読みやすいように縦に重ねるのがデフォルトになっています。
    You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-stacking />
    </Example>
    <ExamplesCode
      path="/components/toast/.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/stacking.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/stacking.html)
:::
:::: -->

  <h3 class="mt-2">
    Custom content
  </h3>
  <p>
    サブコンポーネントを削除したり、utilities を使って調整したり、独自のマークアップを追加したりして、トーストをカスタマイズできます。ここでは、デフォルトの <code>ToastHeader</code> コンポーネントを削除し、Bootstrap Iconsからカスタムの非表示アイコンを追加し、<LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink> を使ってレイアウトを調整することで、よりシンプルなトーストを作成しています。
    Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup. Here we've created a simpler toast by removing the default <code>ToastHeader</code> component, adding a custom hide icon from <a href="https://icons.getbootstrap.jp/">Bootstrap Icons</a>, and using some <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink> to adjust the layout.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-custom-1 />
    </Example>
    <ExamplesCode
      path="/components/toast/custom-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/custom-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/custom-1.html)
:::
:::: -->
  <p>
    Alternatively, you can also add additional controls and components to toasts.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-custom-2 />
    </Example>
    <ExamplesCode
      path="/components/toast/custom-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/custom-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/custom-2.html)
:::
:::: -->

  <h3 class="mt-3">
    Color schemes
  </h3>
  <p>
    上記の例に基づいて、 <LocalLink to="/utilities/colors">
      color
    </LocalLink> と <LocalLink to="/utilities/background">
      background
    </LocalLink> ユーティリティを使用して、さまざまなトーストのカラースキームを作成することができます。ここでは、<code>Toast</code> コンポーネントに .bg-primary と <code>text-color="white"</code> 属性を追加しています。鮮明なエッジを出すために、<code>border="0"</code> 属性でデフォルトのボーダーを削除しています。
    Building on the above example, you can create different toast color schemes with our <LocalLink to="/utilities/colors">
      color
    </LocalLink> and <LocalLink to="/utilities/background">
      background
    </LocalLink> utilities. Here we've added <code>.bg-primary</code> and <code>text-color="white"</code> attribute to the <code>Toast</code> component. For a crisp edge, we remove the default border with <code>border="0"</code> attribute.
    <!-- 上記の例に基づいて、 [color](/utilities/colors) と [background](/utilities/background) ユーティリティを使用して、さまざまなトーストのカラースキームを作成することができます。ここでは、`Toast` コンポーネントに .bg-primary と `text-color="white"` 属性を追加し、クローズボタンに `.btn-close-white` を追加しています。鮮明なエッジを出すために、`border="0"` 属性でデフォルトのボーダーを削除しています。
Building on the above example, you can create different toast color schemes with our [color](/utilities/colors) and [background](/utilities/background) utilities. Here we've added `.bg-primary` and `text-color="white"` attribute to the `Toast` component, and then added `.btn-close-white` to our close button. For a crisp edge, we remove the default border with `border="0"` attribute. -->
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-color />
    </Example>
    <ExamplesCode
      path="/components/toast/color.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/color.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/color.html)
:::
:::: -->

  <h2 class="mt-2">
    Placement
  </h2>
  <p>
    必要に応じてカスタム CSS で配置します。右上は通知によく使用されます。一度に 1 つの Toast しか表示しない場合は、配置スタイルを <code>Toast</code> コンポーネントに配置してください。
    Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you're only ever going to show one toast at a time, put the positioning styles right on the <code>Toast</code> component.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-placement-1 />
    </Example>
    <ExamplesCode
      path="/components/toast/placement-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/placement-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/placement-1.html)
:::
:::: -->
  <p class="mt-2">
    多くの通知を生成するシステムでは、簡単にスタックできるようにラッピング要素を使用することを検討してください。
    For systems that generate more notifications, consider using a wrapping element so they can easily stack.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-placement-2 />
    </Example>
    <ExamplesCode
      path="/components/toast/placement-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/placement-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/placement-2.html)
:::
:::: -->
  <p class="mt-2">
    flexbox ユーティリティを使って、Toast を水平方向や垂直方向に整列させることもできます。
    You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.
  </p>
  <Snippet>
    <Example>
      <examples-components-toast-placement-3 />
    </Example>
    <ExamplesCode
      path="/components/toast/placement-3.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/placement-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/placement-3.html)
:::
:::: -->

  <!-- ## Accessibility

Toasts はユーザーのページ閲覧の中断を意味するので、スクリーンリーダーや同様の支援技術を使用しているユーザーを支援するには、Toast を aria-live region でラップする必要があります。 ライブ領域への変更（ Toast の挿入/更新など ）は、ユーザーのフォーカスを移動したり、ユーザーを中断したりする必要なく、スクリーンリーダーによって自動的に通知されます。 さらに、 aria-atomic =" true "を含めて、変更内容を通知するのではなく、トースト全体が常に 1 つの（アトミック）ユニットとしてアナウンスされるようにします (これは、トーストの内容の一部だけを更新したり、後の時点で同じ内容を表示したりする場合に問題を引き起こす可能性があります)。 必要な情報がプロセスにとって重要な場合。 フォーム内のエラーのリストについては、Toast の代わりにalert component を使用してください。
Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, include `aria-atomic="true"` to ensure that the entire toast is always announced as a single (atomic) unit, rather than just announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the [alert component](/components/alerts") instead of toast.

Toast が生成されたり更新されたりする前に、マークアップに存在する必要があることに注意してください。両方を同時に動的に生成してページに注入した場合、一般的には支援技術によってアナウンスされることはありません。
Note that the live region needs to be present in the markup *before* the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.

また、内容に応じて role と aria-live のレベルを調整する必要があります。エラーなどの重要なメッセージであれば role="alert" aria-live="assertive" を使い、そうでなければ role="status" aria-live="polite" 属性を使います。
You also need to adapt the `role` and `aria-live` level depending on the content. If it's an important message like an error, use `role="alert" aria-live="assertive"`, otherwise use `role="status" aria-live="polite"` attributes.

表示する内容が変更されたら、時間を確保するために delay timeout を更新するようにしてください。
As the content you're displaying changes, be sure to update the [`delay` timeout](#options) so that users have enough time to read the toast.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

autohide: false を使用する場合は、ユーザーがトーストを閉じることができるように閉じるボタンを追加する必要があります。
When using `autohide: false`, you must add a close button to allow users to dismiss the toast. -->
  <!--
{{< example class="bg-light" >}}
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <b-button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></b-button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}
-->
  <Snippet>
    <Example>
      <examples-components-toast-access />
    </Example>
    <ExamplesCode
      path="/components/toast/access.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/toast/access.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/toast/access.html)
:::
:::: -->
  <p class="mt-2">
    技術的には、Toast の中にフォーカスやアクションが可能なコントロール（追加のボタンやリンクなど）を追加することは可能ですが、自動非表示の Toast ではこれを避けるべきです。 Toast に長い<a href="#options">
      delay timeout
    </a>を与えたとしても、キーボードや支援技術のユーザーが行動を起こすために Toast にたどり着くのは難しいかもしれません（ Toast は表示された時点ではフォーカスを受けないため）。 コントロールが必要な場合は、<code>autohide: false</code> のトーストを使用することをお勧めします。
    While technically it's possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give the toast a long <a href="#options">
      delay timeout
    </a>, keyboard and assistive technology users may find it difficult to reach the toast in time to take action (since toasts don't receive focus when they are displayed). If you absolutely must have further controls, we recommend using a toast with <code>autohide: false</code>.
  </p>
  <!-- ## Sass

### Variables -->
  <!--
{{< scss-docs name="toast-variables" file="scss/_variables.scss" >}}
-->
  <h2>Usage</h2>

  <!-- JavaScript で Toast を初期化します。
Initialize toasts via JavaScript:

```js
var toastElList = Array.prototype.slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})
``` -->

  <h3>Triggers</h3>
  <!--
{{% js-dismiss "toast" %}}
-->
  <h3>Options</h3>

  <!-- オプションは、データ属性または JavaScript で渡すことができます。データ属性の場合は、 data-bs-animation =" "のように、オプション名を data-bs-に追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-animation=""`. -->

  <!-- <docs-options-toast /> -->

  <h3>Methods</h3>
  <!--
{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}
-->
  <h4>show</h4>
  <p>
    Toast 要素を表示します。<b>トーストが実際に表示される前に呼び出し元に戻ります。</b>(<code>shown.bs.toast</code> イベントが発生する前)。 メソッドは手動で呼び出す必要があります。
    Reveals an element's toast. <b>Returns to the caller before the toast has actually been shown</b> (i.e. before the <code>shown.bs.toast</code> event occurs).
    You have to manually call this method, instead your toast won't show.
  </p>
  <!-- ```js
toast.show()
``` -->

  <h4>hide</h4>
  <p>
    Toast 要素を非表示します。 <b>トーストが実際に隠される前に呼び出し元に戻ります。</b> ( <code>hidden.bs.toast</code> が発生します。)。 <code>autohide</code> を <code>false</code> にした場合は、このメソッドを手動で呼び出す必要がある。
    Hides an element's toast. <b>Returns to the caller before the toast has actually been hidden</b> (i.e. before the <code>hidden.bs.toast</code> event occurs). You have to manually call this method if you made <code>autohide</code> to <code>false</code>.
  </p>
  <!-- ```js
toast.hide()
``` -->

  <!-- #### dispose

Toast 要素を隠します。Toast は DOM 上に残りますが、表示されなくなります。
Hides an element's toast. Your toast will remain on the DOM but won't show anymore.

```js
toast.dispose()
``` -->
  <!-- 
#### getInstance

*Static* method which allows you to get the toast instance associated with a DOM element

```js
var myToastEl = document.getElementById('myToastEl')
var myToast = bootstrap.Toast.getInstance(myToastEl) // Returns a Bootstrap toast instance
``` -->

  <!-- #### getOrCreateInstance

*Static* method which allows you to get the toast instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
var myToastEl = document.getElementById('myToastEl')
var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl) // Returns a Bootstrap toast instance
``` -->

  <h3>vents</h3>

  <!-- <docs-events-toast /> -->

  <!-- ```js
var myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', function () {
  // do something...
})
``` -->
</template>