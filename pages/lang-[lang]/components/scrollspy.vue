<script setup lang="ts">
definePageMeta({
  'title:en': 'Scrollspy',
  'description:en': `Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.`,
  'title:ja': 'スクロールスパイ',
  'description:ja': 'スクロール位置に基づいてBootstrapナビゲーションまたはリストグループコンポーネントを自動的に更新し、ビューポート内で現在どのリンクがアクティブであるかを示します。'
})
</script>

<template>
  <h2>How it works</h2>

  <ul>
    <Localization>
      <template #en>
        <li>It must be used on a Bootstrap <code> nav component </code> or <code> list group </code>.</li>
        <li>Scrollspy requires <code>position: relative;</code> on the element you're spying on, usually the <code>&lt;body&gt;</code>.</li>
        <li>Anchors (<code>b-a</code>) are required and must point to an element with that <code>id</code>.</li>
      </template>
      <template #ja>
        <li><code> nav component </code> or <code>list group </code> 上で使用する必要があります。</li>
        <li>Scrollspy は、対象の要素、通常は <code>&lt;body&gt;</code> の <code>position: relative;</code> を必要とします。</li>
        <li>アンカー (<code>b-a</code>) は必須であり、その <code>id</code> を持つ要素を指す必要があります。</li>
      </template>
    </Localization>
  </ul>
  <Localization>
    <template #en>
      <p>When successfully implemented, your nav or list group will update accordingly, moving the <code>active</code> class from one item to the next based on their associated targets.</p>
    </template>
    <template #ja>
      <p>正常に実装されると、ナビやリストグループはそれに応じて更新され、<code>active</code> クラスは関連するターゲットに基づいて 1 つの項目から次の項目へと移動します。</p>
    </template>
  </Localization>

  <!--
{{< callout >}}
-->
  <!-- ### Scrollable containers and keyboard access

スクロール可能なコンテナ（ `<body>`以外）を作成する場合は、必ず `height` を設定し、`tabindex = "0"` と一緒に `overflow-y：scroll;` を適用してください。キーボードアクセスを確保するため。
If you're making a scrollable container (other than the `<body>`), be sure to have a `height` set and `overflow-y: scroll;` applied to it—alongside a `tabindex="0"` to ensure keyboard access. -->

  <h2>Example in navbar</h2>
  <Localization>
    <template #en>
      <p>Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.</p>
    </template>
    <template #ja>
      <p>ナビバーの下のエリアをスクロールして、アクティブなクラスの変化を見てください。ドロップダウン項目も同様にハイライトされます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-scrollspy-navbar />
    </Example>
    <ExamplesCode
      path="/components/scrollspy/navbar.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Example with nested nav
  </h2>
  <Localization>
    <template #en>
      <p>Scrollspy also works with nested <code>Nav</code>s component. </p>
      <p>If a nested <code>Nav</code> component is <code>active</code>, its parents will also be <code>active</code></p>
      <p>Scroll the area next to the navbar and watch the active class change.</p>
    </template>
    <template #ja>
      <p>Scrollspy は入れ子になった <code>Nav</code> コンポーネントでも動作します。</p>
      <p>ネストされた <code>Nav</code> コンポーネントが <code>active</code> の場合、その親も <code>active</code> になります。</p>
      <p>ナビバーの隣の領域をスクロールして、アクティブなクラスの変化は下記を参考にしてください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-scrollspy-nested />
    </Example>
    <ExamplesCode
      path="/components/scrollspy/nested.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Example with list-group
  </h2>
  <Localization>
    <template #en>
      <p>Scrollspy also works with <code>ListGroupList</code>s component. </p>
      <p>Scroll the area next to the list group and watch the active class change.</p>
    </template>
    <template #ja>
      <p>Scrollspy は <code>ListGroupList</code> コンポーネントでも動作します。</p>
      <p>リストグループの隣の領域をスクロールして、アクティブなクラスが変化するのは下記を参考にしてください。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-components-scrollspy-list-group />
    </Example>
    <ExamplesCode
      path="/components/scrollspy/list-group.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Usage</h2>

  <h3>Via data attributes</h3>

  <Localization>
    <template #en>
      <p>To easily add scrollspy behavior to your topbar navigation, add <code>spy="scroll"</code> to the element you want to spy on (most typically this would be the <code>&lt;body&gt;</code>). </p>
      <p>Then add the <code>target</code> attribute with the ID or class of the parent element of any Bootstrap <code>Nav</code> component.</p>
    </template>
    <template #ja>
      <p>トップバーナビゲーションに scrollspy 動作を簡単に追加するには、スパイする要素に <code>spy="scroll"</code>を追加します（通常、これは <code>&lt;body&gt;</code>です）。</p>
      <p>次に、Bootstrap <code>Nav</code>コンポーネントの親要素の ID またはクラスを使用して <code>target</code>属性を追加します。</p>
    </template>
  </Localization>

  <!-- {{< callout danger >}} -->
  <h4>Resolvable ID targets required</h4>
  <Localization>
    <template #en>
      <p>Navbar links must have resolvable id targets.</p>
      <p>For example, a <code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code> must correspond to something in the DOM like <code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code>.</p>
    </template>
    <template #ja>
      <p>ナビバーリンクは、id ターゲットを持たなければなりません。</p>
      <p>例えば、<code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code> は、<code>&lt;b-a href ="#home"&gt;home&lt;b-a&gt;</code> のような DOM 内の何かに対応していなければなりません。</p>
    </template>
  </Localization>

  <!-- {{< /callout >}} -->

  <!-- {{< callout info >}} -->
  <h4>Non-visible target elements ignored</h4>
  <Localization>
    <template #en>
      <p>Target elements that are not visible will be ignored and their corresponding nav items will never be highlighted.</p>
    </template>
    <template #ja>
      <p>表示されていないターゲット要素は無視され、対応するナビ項目はハイライトされません。</p>
    </template>
  </Localization>
  <!-- 
{{< /callout >}}
 -->

  <!-- <h3>Methods</h3>

  <h4>refresh</h4>
  <p>
    DOM からの要素の追加や削除と同時に scrollspy を使用する場合は、次のように refresh メソッドを呼び出す必要があります。
    When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh method like so:
  </p> -->
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

  <!-- <h3>Options</h3> -->

  <!-- オプションは、データ属性または JavaScript で渡すことができます。データ属性の場合は、 `data-bs-offset =" "`のように、オプション名を `data-bs-`に追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-offset=""`. -->

  <!-- <docs-options-scrollspy /> -->

  <!-- <h3>Events</h3> -->

  <!-- <docs-events-scrollspy /> -->

  <!-- ```js
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
  // do something...
})
``` -->
</template>