<script setup lang="ts">
definePageMeta({
  title: `スクロールスパイ Scrollspy`,
  description: `スクロール位置に基づいてBootstrapナビゲーションまたはリストグループコンポーネントを自動的に更新し、ビューポート内で現在どのリンクがアクティブであるかを示します。 Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.`
})
</script>

<template>
  <!---
title: スクロールスパイ Scrollspy
description: スクロール位置に基づいてBootstrapナビゲーションまたはリストグループコンポーネントを自動的に更新し、ビューポート内で現在どのリンクがアクティブであるかを示します。 Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.
--->

  <h2>How it works</h2>
  <p>
    Scrollspy を正常に機能させるために、いくつかの要件があります。
    Scrollspy has a few requirements to function properly:
  </p>
  <ul>
    <li>
      <LocalLink to="/components/navs-tabs/">
        nav component
      </LocalLink> or <LocalLink to="/components/list-group/">
        ;ist group
      </LocalLink> 上で使用する必要があります。It must be used on a Bootstrap <LocalLink to="/components/navs-tabs/">
        nav component
      </LocalLink> or <LocalLink to="/components/list-group/">
        list group
      </LocalLink>.
    </li>
    <li> Scrollspy は、対象の要素、通常は <code>&lt;body&gt;</code> の <code>position: relative;</code> を必要とします。Scrollspy requires <code>position: relative;</code> on the element you're spying on, usually the <code>&lt;body&gt;</code>.</li>
    <li> アンカー (<code>b-a</code>) は必須であり、その <code>id</code> を持つ要素を指す必要があります。 Anchors (<code>b-a</code>) are required and must point to an element with that <code>id</code>.</li>
  </ul>
  <p>
    正常に実装されると、ナビやリストグループはそれに応じて更新され、<code>active</code> クラスは関連するターゲットに基づいて 1 つの項目から次の項目へと移動します。
    When successfully implemented, your nav or list group will update accordingly, moving the <code>active</code> class from one item to the next based on their associated targets.
  </p>
  <!--
{{< callout >}}
-->
  <!-- ### Scrollable containers and keyboard access

スクロール可能なコンテナ（ `<body>`以外）を作成する場合は、必ず `height` を設定し、`tabindex = "0"` と一緒に `overflow-y：scroll;` を適用してください。キーボードアクセスを確保するため。
If you're making a scrollable container (other than the `<body>`), be sure to have a `height` set and `overflow-y: scroll;` applied to it—alongside a `tabindex="0"` to ensure keyboard access. -->

  <h2>Example in navbar</h2>
  <p>
    ナビバーの下のエリアをスクロールして、アクティブなクラスの変化を見てください。ドロップダウン項目も同様にハイライトされます。
    Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.
  </p>
  <Snippet>
    <Example>
      <examples-components-scrollspy-navbar />
    </Example>
    <ExamplesCode
      path="/components/scrollspy/navbar.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/scrollspy/navbar.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/scrollspy/navbar.html)
:::
:::: -->

  <h2 class="mt-3">
    Example with nested nav
  </h2>
  <p>
    Scrollspy は入れ子になった <code>Nav</code> コンポーネントでも動作します。ネストされた <code>Nav</code> コンポーネントが <code>active</code> の場合、その親も <code>active</code> になります。 ナビバーの隣の領域をスクロールして、アクティブなクラスの変化は下記を参考にしてください。
    Scrollspy also works with nested <code>Nav</code>s component. If a nested <code>Nav</code> component is <code>active</code>, its parents will also be <code>active</code> Scroll the area next to the navbar and watch the active class change.
  </p>
  <Snippet>
    <Example>
      <examples-components-scrollspy-nested />
    </Example>
    <ExamplesCode
      path="/components/scrollspy/nested.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/scrollspy/nested.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/scrollspy/nested.html)
:::
:::: -->

  <h2 class="mt-3">
    Example with list-group
  </h2>
  <p>
    Scrollspy は <code>ListGroupList</code> コンポーネントでも動作します。リストグループの隣の領域をスクロールして、アクティブなクラスが変化するのは下記を参考にしてください。
    Scrollspy also works with <code>ListGroupList</code>s component. Scroll the area next to the list group and watch the active class change.
  </p>
  <Snippet>
    <Example>
      <examples-components-scrollspy-list-group />
    </Example>
    <ExamplesCode
      path="/components/scrollspy/list-group.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/scrollspy/list-group.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/scrollspy/list-group.html)
:::
:::: -->


  <h2>Usage</h2>

  <h3>Via data attributes</h3>
  <p>
    トップバーナビゲーションに scrollspy 動作を簡単に追加するには、スパイする要素に <code>spy="scroll"</code>を追加します（通常、これは <code>&lt;body&gt;</code>です）。 次に、Bootstrap <code>Nav</code>コンポーネントの親要素の ID またはクラスを使用して <code>target</code>属性を追加します。
    To easily add scrollspy behavior to your topbar navigation, add <code>spy="scroll"</code> to the element you want to spy on (most typically this would be the <code>&lt;body&gt;</code>). Then add the <code>target</code> attribute with the ID or class of the parent element of any Bootstrap <code>Nav</code> component.
  </p>
  <!-- ```css
body {
  position: relative;
}
```

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
``` -->

  <!-- ### Via JavaScript

CSS に `position: relative;` を追加した後、JavaScript で scrollspy を呼び出します。
After adding `position: relative;` in your CSS, call the scrollspy via JavaScript:

```js
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})
``` -->

  <!-- {{< callout danger >}} -->
  <h4>解決可能な ID ターゲットが必要 Resolvable ID targets required</h4>
  <p>
    ナビバーリンクは、id ターゲットを持たなければなりません。例えば、<code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code> は、<code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code> のような DOM 内の何かに対応していなければなりません。
    Navbar links must have resolvable id targets. For example, a <code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code> must correspond to something in the DOM like <code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code>.
  </p>
  <!-- {{< /callout >}} -->

  <!-- {{< callout info >}} -->
  <h4>視認できないターゲット要素は無視 Non-visible target elements ignored</h4>
  <p>
    表示されていないターゲット要素は無視され、対応するナビ項目はハイライトされません。
    Target elements that are not visible will be ignored and their corresponding nav items will never be highlighted.
  </p>
  <!-- 
{{< /callout >}}
 -->

  <h3>Methods</h3>

  <h4>refresh</h4>
  <p>
    DOM からの要素の追加や削除と同時に scrollspy を使用する場合は、次のように refresh メソッドを呼び出す必要があります。
    When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh method like so:
  </p>
  <!-- ```js
var dataSpyList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
``` -->

  <!-- #### dispose

scrollspy 要素を破棄します。
Destroys an element's scrollspy. (Removes stored data on the DOM element) -->

  <!-- #### getInstance

DOM 要素に関連付けられた scrollspy インスタンスを取得できるようにする静的メソッド。
*Static* method which allows you to get the scrollspy instance associated with a DOM element

```js
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance
``` -->

  <!-- #### getOrCreateInstance

*Static* method which allows you to get the scrollspy instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance
``` -->

  <h3>Options</h3>

  <!-- オプションは、データ属性または JavaScript で渡すことができます。データ属性の場合は、 `data-bs-offset =" "`のように、オプション名を `data-bs-`に追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-offset=""`. -->

  <!-- <docs-options-scrollspy /> -->

  <h3>Events</h3>

  <!-- <docs-events-scrollspy /> -->

  <!-- ```js
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
  // do something...
})
``` -->
</template>