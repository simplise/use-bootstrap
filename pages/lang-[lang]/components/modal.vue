<script setup lang="ts">
definePageMeta({
  title: `モーダル Modal`,
  description: `モーダルでは, JavaScript modal プラグインを使用して, ライトボックス, 通知, カスタムダイアログを作成できます。モーダルの使い方の例を示します。 Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.`
})
</script>

<template>
  <!---
title: モーダル Modal
description: モーダルでは, JavaScript modal プラグインを使用して, ライトボックス, 通知, カスタムダイアログを作成できます。モーダルの使い方の例を示します。 Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
--->

  <h2>How it works</h2>

  <!-- Bootstrapのモーダルコンポーネントを使い始める前に、メニューオプションが変更されたので、以下を読んでください。
Before getting started with Bootstrap's modal component, be sure to read the following as our menu options have recently changed. -->

  <!-- モーダルは HTML、CSS、JavaScript で構築されます。モーダルはドキュメント内の他のすべてのものの上に配置され、`<body>` からスクロールを取り除き、モーダルのコンテンツがスクロールするようにします。
- Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead. -->
  <p>
    モーダルの「背景」をクリックすると、自動的にモーダルが閉じます。
  </p>
  <ul>
    <li>
      Clicking on the modal "backdrop" will automatically close the modal.
      Bootstrapは、一度に1つのモーダルウィンドウしかサポートしていません。ネスト(入れ子)になったモーダルはユーザーエクスペリエンスが低いと考えられるためサポートされていません。
    </li>
    <li> Bootstrap only supports one modal window at a time. Nested modals aren't supported as we believe them to be poor user experiences.</li>
  </ul>
  <!-- モーダルは position: fixed を使用します。可能な限り、他の要素との干渉を避けるために、モーダルHTMLをトップレベルの位置に配置してください。別の固定要素の中に .modal を入れ子にすると、問題が発生する可能性があります。
- Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You'll likely run into issues when nesting a `.modal` within another fixed element. -->
  <!-- 繰り返しになりますが、position: fixedのため、モバイルデバイスでモーダルを使用する際にはいくつかの注意点があります。詳細は See our browser support docs を参照してください。
- Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. [See our browser support docs](/getting-started/browsers-devices#modals-and-dropdowns-on-mobile) for details. -->
  <!-- HTML5がそのセマンティクスを定義する方法のため, the autofocus HTML attribute はBootstrapのモーダルでは効果がありません。同じ効果を得るためには、いくつかのカスタムJavaScriptを使用してください。
- Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript: -->

  <!-- ```js
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
``` -->

  <!--
{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}
-->

  <!-- デモと使用ガイドラインについては、引き続きお読みください。
Keep reading for demos and usage guidelines. -->

  <!-- <h2>Examples</h2>

  <h3>Modal components</h3>
  <p>
    以下は static モーダルの例です (つまり、 <code>position</code> と <code>display</code> がオーバーライドされていることを意味します)。 これには、モーダルヘッダ、モーダルボディ( <code>padding</code> のために必要)、モーダルフッタ(オプション)が含まれています。 可能な限り、モーダルヘッダを dismiss アクションと一緒に含めるか、別の明示的な dismiss アクションを提供するようにお願いします。
    Below is a _static_ modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-compo />
    </Example>
    <ExamplesCode path="/components/modal/compo.vue" lang="vue" />
  </Snippet> -->



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/compo.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/compo.html)
:::
:::: -->

  <h3>Live demo</h3>
  <p>
    下のボタンをクリックして、モーダルデモをトグルします。ページの上からスライドダウンしてフェードインします。
    Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
  </p>
  <!--
<div class="modal fade" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLiveLabel">Modal title</h5>
        <b-button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></b-button>
      </div>
      <div class="modal-body">
        <p>Woohoo, you're reading this text in a modal!</p>
      </div>
      <div class="modal-footer">
        <b-button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</b-button>
        <b-button type="button" class="btn btn-primary">Save changes</b-button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <b-button type="button" class="btn btn-primary" toggle="modal" data-bs-target="#exampleModalLive">
    Launch demo modal
  </b-button>
</div>
-->
  <Snippet>
    <Example>
      <examples-components-modal-live />
    </Example>
    <ExamplesCode
      path="/components/modal/live.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/live.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/live.html)
:::
:::: -->

  <h3 class="mt-2">
    Static backdrop
  </h3>
  <p>
    <code>backdrop="static"</code>属性を設定していると、その外側をクリックしてもモーダルが閉じません。下のボタンをクリックして試してみてください。
  </p>
  <p>
    When <code>backdrop="static"</code>attribute is setted, the modal will not close when clicking outside it. Click the button below to try it.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-static-backdrop />
    </Example>
    <ExamplesCode
      path="/components/modal/static-backdrop.vue"
      lang="vue"
    />
  </Snippet>



  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/static-backdrop.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/static-backdrop.html)
:::
:::: -->

  <h3 class="mt-2">
    Scrolling long content
  </h3>
  <p>
    モーダルがユーザーのビューポートやデバイスに対して長すぎると、ページ自体から独立してスクロールします。以下のデモを試してみてください。
    When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-scroll-1 />
    </Example>
    <ExamplesCode
      path="/components/modal/scroll-1.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/scroll-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/scroll-1.html)
:::
:::: -->
  <p class="mt-2">
    また、<code>ModalDialog</code> コンポーネントに <code>scrollable</code> 属性を追加することで、モーダル本体をスクロールできるスクロール可能なモーダルを作成することもできます。
    You can also create a scrollable modal that allows scroll the modal body by adding <code>scrollable</code> attribute to <code>ModalDialog</code> component.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-scroll-2 />
    </Example>
    <ExamplesCode
      path="/components/modal/scroll-2.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/scroll-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/scroll-2.html)
:::
:::: -->


  <h3 class="mt-2">
    Vertically centered
  </h3>
  <p>
    モーダルを垂直方向に中央に配置するために <code>centered</code> 属性を <code>ModalDialog</code> コンポーネント に追加します。
    Add <code>centered</code> attribute to <code>ModalDialog</code> component to vertically center the modal.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-vertically-centered />
    </Example>
    <ExamplesCode
      path="/components/modal/vertically-centered.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/vertically-centered.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/vertically-centered.html)
:::
:::: -->


  <h3 class="mt-2">
    Tooltips and popovers
  </h3>
  <p>
    <LocalLink to="/components/tooltips">
      Tooltips
    </LocalLink>と <LocalLink to="/components/popovers">
      popovers
    </LocalLink>は、必要に応じてモーダル内に配置することができます。モーダルが閉じられると、その中にあるツールチップやポップオーバーも自動的に削除されます。
    <LocalLink to="/components/tooltips">
      Tooltips
    </LocalLink> and <LocalLink to="/components/popovers">
      popovers
    </LocalLink>can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-tooltips />
    </Example>
    <ExamplesCode
      path="/components/modal/tooltips.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/tooltips.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/tooltips.html)
:::
:::: -->

  <h3 class="mt-2">
    Using the grid
  </h3>
  <p>
    <code>ModalBody</code> コンポーネントの中に <code>fluid</code> 属性の <code>Container</code> コンポーネントを入れ子にすることで、モーダル内の グリッドシステムを利用します。
    Utilize the Bootstrap grid system within a modal by nesting <code>Container</code> component with <code>fluid</code> attribute within the <code>ModalBody</code> component. Then, use the normal grid system classes as you would anywhere else.
  </p>
  <Snippet>
    <Example>
      <examples-components-modal-grid />
    </Example>
    <ExamplesCode
      path="/components/modal/grid.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/grid.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/grid.html)
:::
:::: -->


  <h3 class="mt-2">
    Varying modal content
  </h3>
  <p>
    クリックされたボタンに応じて、モーダルの内容を変更できます。 <code>event.relatedTarget</code> と [HTML <code>data-bs-*</code> <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">HTML data-bs * attributes</a> を使用してください。
    Have a bunch of buttons that all trigger the same modal with slightly different contents? Use <code>event.relatedTarget</code> and <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">HTML data-bs * attributes</a> to vary the contents of the modal depending on which button was clicked.
  </p>
  <p>
    以下は、HTMLとJavaScriptの例に続くライブデモです。 <code>relatedTarget</code> の詳細は <a href="#events">
      read the modal events docs
    </a> を参考にしてください。
    Below is a live demo followed by example HTML and JavaScript. For more information, <a href="#events">
      read the modal events docs
    </a> for details on `relatedTarget`.
  </p>

  <Snippet>
    <Example>
      <examples-components-modal-varying />
    </Example>
    <ExamplesCode
      path="/components/modal/varying.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/varying.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/varying.html)
:::
:::: -->

  <!-- ```js
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})
``` -->

  <h3 class="mt-2">
    Toggle between modals
  </h3>
  <p>
    <code>data-bs-target</code> 属性と <code>data-bs-toggle</code> 属性を利用して、複数のモーダルを切り替え可能です。 複数のモーダルを同時に開くことはできないことに注意してください —この方法は、2つの別々のモーダルを切り替えるだけです。
    Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. For example, you could toggle a password reset modal from within an already open sign in modal. <b>Please note multiple modals cannot be open at the same time</b>—this method simply toggles between two separate modals.
  </p>

  <Snippet>
    <Example>
      <examples-components-modal-toggle />
    </Example>
    <ExamplesCode
      path="/components/modal/toggle.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/toggle.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/toggle.html)
:::
:::: -->

  <h3 class="mt-2">
    Change animation
  </h3>
  <p>
    変数 <code>$modal-fade-transform</code> はモーダルフェードインアニメーションの前の <code>.modal-dialog</code> のトランスフォーム状態を決定し、変数 <code>$modal-show-transform</code> はモーダルフェードインアニメーションの終了時の <code>.modal-dialog</code> のトランスフォーム状態を決定します。
    The <code>$modal-fade-transform</code> variable determines the transform state of <code>.modal-dialog</code> before the modal fade-in animation, the <code>$modal-show-transform</code> variable determines the transform of <code>.modal-dialog</code> at the end of the modal fade-in animation.
  </p>
  <p>
    例えばズームインアニメーションを作りたい場合は、$modal-fade-transform: scale(.8)を設定します。
    If you want for example a zoom-in animation, you can set <code>$modal-fade-transform: scale(.8)</code>.
  </p>

  <h3>Remove animation</h3>

  <p>
    フェードインして表示するのではなく、単に表示するだけのモーダルの場合は、<code>.fade</code> クラスを削除します。
    For modals that simply appear rather than fade in to view, remove the <code>.fade</code> class from your modal markup.
  </p>

  <!--```html
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
  ...
</div>
``` -->

  <h3>Dynamic heights</h3>
  <p>
    モーダルの高さが開いている間に変更された場合は、スクロールバーが表示されたときのモーダルの位置を再調整するために <code>myModal.handleUpdate()</code> を呼び出す必要があります。
    If the height of a modal changes while it is open, you should call <code>myModal.handleUpdate()</code> to readjust the modal's position in case a scrollbar appears.
  </p>
  <!-- ### Accessibility

必ず .modal にモーダルのタイトルを参照する aria-labelledby="...." を追加してください。さらに、.modal に aria-describedby を追加することで、モーダルダイアログの説明を与えることができます。JavaScriptで既に追加しているので、role="dialog"を追加する必要はありません。
Be sure to add `aria-labelledby="..."`, referencing the modal title, to `.modal`. Additionally, you may give a description of your modal dialog with `aria-describedby` on `.modal`. Note that you don't need to add `role="dialog"` since we already add it via JavaScript. -->

  <h3>Embedding YouTube videos</h3>
  <p>
    YouTubeの動画をモーダルに埋め込むには、BootstrapにはないJavaScriptを追加して自動で再生を停止させるなどの工夫が必要です。詳しくは、<a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">See this helpful Stack Overflow post</a> を参照にしてください。
    Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">See this helpful Stack Overflow post</a> for more information.
  </p>

  <h2>Optional sizes</h2>
  <p>
    モーダルには3つのオプションのサイズがあり、<code>.modal-dialog</code> に配置することができます。これらのサイズは、狭いビューポートでの水平スクロールバーを避けるために、特定のブレークポイントで有効になります。
    Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
  </p>
  <!-- <docs-descriptions-modal-optinalsizes /> -->
  <p>
    デフォルトのモーダルは、“medium” サイズのモーダルを構成します。
    Our default modal without modifier class constitutes the "medium" size modal.
  </p>

  <Snippet>
    <Example>
      <examples-components-modal-optinalsizes />
    </Example>
    <ExamplesCode
      path="/components/modal/optinalsizes.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/optinalsizes.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/optinalsizes.html)
:::
:::: -->

  <h2 class="mt-2">
    Fullscreen Modal
  </h2>
  <p>
    <code>.modal-dialog</code> には 下記のクラスをついかすることにより、フルスクリーンのモーダルを利用可能です。
    Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.
  </p>
  <docs-descriptions-modal-fullscreen />


  <Snippet>
    <Example>
      <examples-components-modal-fullscreen />
    </Example>
    <ExamplesCode
      path="/components/modal/.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/modal/fullscreen.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/modal/fullscreen.html)
:::
:::: -->

  <!-- ## Sass

### Variables


{{< scss-docs name="modal-variables" file="scss/_variables.scss" >}}


### Loop

[Responsive fullscreen modals](#fullscreen-modal) are generated via the `$breakpoints` map and a loop in `scss/_modal.scss`. 
-->

  <!--
{{< scss-docs name="modal-fullscreen-loop" file="scss/_modal.scss" >}}
-->

  <h2 class="mt-2">
    Usage
  </h2>
  <p>
    The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also overrides default scrolling behavior and generates a <code>.modal-backdrop</code> to provide a click area for dismissing shown modals when clicking outside the modal.
  </p>

  <h3>Via data attributes</h3>
  <h4>Toggle</h4>
  <p>
    モーダルプラグインは、データ属性やJavaScriptを使って、必要に応じて隠しコンテンツを切り替えます。また、デフォルトのスクロール動作を上書きするために <code>.modal-open</code> を <code> body </code> に追加し、モーダルの外側をクリックしたときに表示されたモーダルを削除するためのクリック領域を提供するために <code>.modal-backdrop</code> を生成します。
    Activate a modal without writing JavaScript. Set <code>toggle="modal"</code> on a controller element, like a button, along with a <code>data-bs-target="#foo"</code> or <code>href="#foo"</code> to target a specific modal to toggle.
  </p>
  <!--
```html
<b-button type="button" toggle="modal" data-bs-target="#myModal">Launch modal</b-button>
``` -->

  <h4>Dismiss</h4>

  <!--
{{% js-dismiss "modal" %}}
-->

  <!--
{{< callout warning >}}
While both ways to dismiss a modal are supported, keep in mind that dismissing from outside a modal does not match [the WAI-ARIA modal dialog design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal). Do this at your own risk.
{{< /callout >}}
-->

  <!-- ### Via JavaScript

JavaScript 1行でモーダルを作成します。
Create a modal with a single line of JavaScript:

```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
``` -->

  <h3>Options</h3>

  <!-- オプションは、データ属性またはJavaScriptで渡すことができます。データ属性の場合は、data-bs-backdrop="" のように data-bs- にオプション名を追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-backdrop=""`. -->

  <!-- <docs-options-modal /> -->

  <h3>Methods</h3>

  <!--
{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}
-->

  <h4>Passing options</h4>
  <p>
    モーダルとしてコンテンツをアクティブにします。オプションの <code>object</code>を受け取ります。
    Activates your content as a modal. Accepts an optional options <code>object</code>.
  </p>
  <!-- ```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false
})
``` -->

  <h4>toggle</h4>
  <p>
    モーダルを手動で切り替えます。モーダルが実際に表示または非表示になる前に呼び出し元に戻ります (<code>shown.bs.modal</code> または <code>hidden.bs.modal</code> イベントが発生する前)。
    Manually toggles a modal.
    <b>Returns to the caller before the modal has actually been shown or hidden</b> (i.e. before the <code>shown.bs.modal</code> or <code>hidden.bs.modal</code> event occurs).
  </p>
  <!-- ```js
myModal.toggle()
``` -->

  <h4>show</h4>
  <p>
    手動でモーダルを開きます。モーダルが実際に表示される前に呼び出し元に戻ります (<code>shown.bs.modal</code> イベントが発生する前)。
    Manually opens a modal.
    <b>Returns to the caller before the modal has actually been shown</b> (i.e. before the <code>shown.bs.modal</code> event occurs).
  </p>
  <!-- ```js
myModal.show()
``` -->

  <!-- Also, you can pass a DOM element as an argument that can be received in the modal events (as the `relatedTarget` property).

```js
var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
myModal.show(modalToggle)
``` -->

  <h4>hide</h4>
  <p>
    手動でモーダルを非表示にします。モーダルが実際に隠される前に呼び出し元に戻ります **** (<code>hidden.bs.modal</code> イベントが発生する前)。****
    Manually hides a modal. <b>Returns to the caller before the modal has actually been hidden</b> (i.e. before the <code>hidden.bs.modal</code> event occurs).
  </p>
  <!-- ```js
myModal.hide()
``` -->
  <!-- 
#### handleUpdate

開いている間にモーダルの高さが変化した場合、モーダルの位置を手動で再調整します（スクロールバーが表示されている場合など）。
Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).

```js
myModal.handleUpdate()
``` -->

  <!-- #### dispose

モーダル要素を破棄します。
Destroys an element's modal. (Removes stored data on the DOM element)

```js
myModal.dispose()
``` -->

  <!-- #### getInstance

DOM 要素に関連付けられたモーダルインスタンスを取得できるようにする Static メソッドです。
*Static* method which allows you to get the modal instance associated with a DOM element

```js
var myModalEl = document.getElementById('myModal')
var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
``` -->

  <!-- #### getOrCreateInstance

*Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
var myModalEl = document.querySelector('#myModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) // Returns a Bootstrap modal instance
``` -->

  <!-- ### Events

Bootstrapのモーダルクラスは、モーダル機能にフックするためのいくつかのイベントがあります。 すべてのモーダルイベントは、モーダル自体（つまり、`<div class="modal">`）で発生します。
Bootstrap's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

<doc_modal_events/>

```js
var myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  // do something...
})
``` -->
</template>