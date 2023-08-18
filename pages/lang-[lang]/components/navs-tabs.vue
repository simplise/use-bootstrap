<script setup lang="ts">
definePageMeta({
  title: `ナブとタブ Navs and tabs`,
  description: `Bootstrap に含まれるナビゲーションコンポーネントをどのように使用するかのドキュメントと例です。 Documentation and examples for how to use Bootstrap's included navigation components.`
})
</script>

<template>
  <!---
title: ナブとタブ Navs and tabs
description: Bootstrap に含まれるナビゲーションコンポーネントをどのように使用するかのドキュメントと例です。 Documentation and examples for how to use Bootstrap's included navigation components.
--->
  <h2>Base nav</h2>
  <p>
    Bootstrap で利用可能なナビゲーションは、基本的な <code>NavList</code> コンポーネントからアクティブな状態と無効な状態まで、一般的なマークアップとスタイルを共有します。それぞれのスタイルを切り替えるために修飾子クラスを入れ替えます。
    Navigation available in Bootstrap share general markup and styles, from the base <code>NavList</code> component to the active and disabled states. Swap modifier classes to switch between each style.
  </p>
  <p>
    ベースの <code>NavList</code> コンポーネントは flexbox で構築されており、すべてのタイプのナビゲーションコンポーネントを構築するための強力な基盤を提供します。これには、いくつかのスタイルのオーバーライド (リストを扱うための)、より大きなヒットエリアのためのリンクのパディング、基本的な無効化されたスタイルが含まれています。
    The base <code>NavList</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.
  </p>
  <!-- {{< callout info >}}
The base `NavList` component does not include any `.active` state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.

To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for current page, or `true` for the current item in a set.
{{< /callout >}} -->
  <Snippet>
    <Example>
      <examples-components-nav-tab-base-1 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/base-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/base-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/base-1.html)
:::
:::: -->
  <!-- 
クラスは全体的に使用されているので、あなたのマークアップは非常に柔軟性があります。上記のように `<ul>` を使用したり、アイテムの順序が重要な場合は `<ol>` を使用したり、`<nav>` 要素を使用して独自のロールを作成したりします。.nav は display: flex を使用しているため、nav-link は、追加のマークアップがなしで nav-item と同じように動作します。
Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, `<ol>` if the order of your items is important, or roll your own with a `<nav>` element. Because the `NavList` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup. -->
  <Snippet>
    <Example>
      <examples-components-nav-tab-base-2 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/base-2.vue"
      lang="vue"
    />
  </Snippet>



  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/base-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/base-2.html)
:::
:::: -->

  <h2>Available styles</h2>

  <p>
    <code>NavList</code> コンポーネントのスタイルを修飾子とユーティリティで変更します。必要に応じて組み合わせて使用することもできますし、独自のスタイルを構築することもできます。
    Change the style of <code>NavList</code>s component with modifiers and utilities. Mix and match as needed, or build your own.
  </p>

  <h3>Horizontal alignment</h3>
  <p>
    <LocalLink to="/layout/grid#horizontal-alignment">
      flexbox utilities
    </LocalLink>を使用して、ナビゲーションの水平方向の配置を変更できます。 デフォルトでは、ナビゲーションは左揃えですが、簡単に中央または右揃えに変更できます。
    Change the horizontal alignment of your nav with <LocalLink to="/layout/grid#horizontal-alignment">
      flexbox utilities
    </LocalLink>. By default, navs are left-aligned, but you can easily change them to center or right aligned.
  </p>
  <p>
    <code>justify-content="center"</code> 属性で中央揃えにします。
    Centered with <code>justify-content="center"</code> attribute:
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-horizontal-1 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/horizontal-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/horizontal-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/horizontal-1.html)
:::
:::: -->
  <p>
    <code>justify-content="end"</code> 属性で右揃えにします。
    Right-aligned with <code>justify-content="end"</code> attribute:
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-horizontal-2 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/horizontal-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/horizontal-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/horizontal-2.html)
:::
:::: -->

  <h3>Vertical</h3>
  <p>
    <code>flex-direction="column"</code> 属性で flex item(フレックスアイテム) の方向を変更してナビゲーションを縦に積み上げることができます。一部のビューポートでは縦にしたいが、他のビューポートでは縦したくない場合は、<code>flex-direction="sm-column"</code> を使用してください。
    Stack your navigation by changing the flex item direction with the <code>flex-direction="column"</code> attribute. Need to stack them on some viewports but not others? Use the responsive versions (e.g., <code>flex-direction="sm-column"</code>).
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-vertical-1 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/vertical-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/vertical-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/vertical-1.html)
:::
:::: -->
  <p>
    いつものように、<code>NavItem</code> コンポーネントがなくても縦方向のナビゲーションは可能です。
    As always, vertical navigation is possible without <code>NavItem</code>s component, too.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-vertical-2 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/vertical-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/vertical-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/vertical-2.html)
:::
:::: -->

  <h3>Tabs</h3>
  <p>
    <code>nav="tabs"</code> 属性を追加してタブ付きのインターフェイスを生成できます。 <a href="#javascript-behavior">
      tab JavaScript plugin
    </a>でタブ可能領域を作成します。
    Takes the basic nav from above and adds the <code>nav="tabs"</code> attribute to generate a tabbed interface. Use them to create tabbable regions with our <a to="#javascript-behavior">
      tab JavaScript plugin
    </a>.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-tabs />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/tabs.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/tabs.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/tabs.html)
:::
:::: -->

  <h3 class="mt-3">
    Pills
  </h3>
  <p>
    同じ HTML を使用しますが、代わりに <code>nav="pills"^^</code> 属性を使用します。
    Take that same HTML, but use <code>nav="pills"</code> attribute instead:
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-pills />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/pills.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/pills.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/pills.html)
:::
:::: -->

  <h3 class="mt-3">
    Fill and justify
  </h3>
  <p>
    <code>NavList</code> の内容が利用可能な幅いっぱいになるように強制します。<code>NavItem</code> コンポーネントで利用可能なすべてのスペースを比例して埋めるには、 <code>fill</code> 属性を使います。すべてのナビゲーションアイテムの幅が同じではないことに注意してください。
    Force your <code>NavList</code>'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your <code>NavItem</code>s component, use <code>fill</code> attribute. Notice that all horizontal space is occupied, but not every nav item has the same width.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-fill-justify-1 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/fill-justify-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/fill-justify-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/fill-justify-1.html)
:::
:::: -->
  <p class="mt-2">
    <code>Nav</code> コンポーネントベースのナビゲーションを使用する場合、<code>NavLink</code> コンポーネントのスタイリングに必要なのは <code>NavLink</code> コンポーネントだけなので、 <code>NavItem</code> コンポーネントを省略しても問題ありません。
  </p>
  <p>
    When using a <code>Nav</code> component-based navigation, you can safely omit <code>NavItem</code> compoentnt as only <code>NavLink</code> comoponent is required for styling <code>NavLink</code> component elements.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-fill-justify-2 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/fill-justify-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/fill-justify-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/fill-justify-2.html)
:::
::::-->
  <p class="mt-3">
    アイテムを等しいサイズにしたい場合は <code>justified</code> 属性を使用します。 すべての水平方向のスペースはナビゲーションリンクで占められますが、上記の <code>fill</code> 属性とは異なり、すべてのナビゲーションアイテムは同じ幅になります。
    For equal-width elements, use <code>justified</code> attribute. All horizontal space will be occupied by nav links, but unlike the <code>fill</code> attribute above, every nav item will be the same width.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-fill-justify-3 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/fill-justify-3.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/fill-justify-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/fill-justify-3.html)
:::
:::: -->
  <p>
    <code>Nav</code> コンポーネントに <code>fill</code> 属性を適用した場合は
    Similar to the <code>fill</code> component example using a <code>Nav</code> component-based navigation.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-fill-justify-4 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/fill-justify-4.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/fill-justify-4.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/fill-justify-4.html)
:::
:::: -->

  <h2 class="mt-3">
    Working with flex utilities
  </h2>
  <p>
    レスポンシブナブのバリエーションが必要な場合は <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink> を使用します。 これらの utilities(ユーティリティ) は冗長ではありますが、レスポンシブブレークポイント間でより大きなカスタマイズが可能です。 下の例では、ナビは最も低いブレークポイントの場合は縦になり、幅をひろげることで、水平レイアウトになります。
    If you need responsive nav variations, consider using a series of <LocalLink to="/utilities/flex">
      flexbox utilities
    </LocalLink>. While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-flex />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/flex.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/flex.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/flex.html)
:::
:::: -->

  <h2 class="mt-2">
    Regarding accessibility
  </h2>
  <p>
    ナビゲーションバーを提供するためにナビゲーションを使っている場合、<code>NavList</code> コンポーネントの親コンテナに <code>role="navigation"</code> を追加するか、<code>Nav</code> コンポーネントをナビゲーション全体にラップしてください。role を <code>NavList</code> コンポーネント自体に追加しないでください。
    If you're using navs to provide a navigation bar, be sure to add a <code>role="navigation"</code> to the most logical parent container of the <code>NavList</code> component, or wrap a <code>Nav</code> component around the whole navigation. Do not add the role to the <code>NavList</code> component itself, as this would prevent it from being announced as an actual list by assistive technologies.
  </p>
  <p>
    ナビゲーションバーは、<code>nav="tabs"</code> 属性で視覚的にタブとしてスタイリングされていますが、<code>role="tablist"</code> 、<code>role="tab"</code> 、 <code>role="tabpanel"</code> 属性を与えないでください。 これらは <a href="https://www.w3.org/WAI/ARIA/apg/#tabpanel">WAI ARIA Authoring Practices</a> で説明されているように、動的なタブ付きインターフェースにのみ適切です。<a to="#javascript-behavior">
      JavaScript behavior
    </a>を参照してください。JavaScript はアクティブなタブに <code>aria-selected="true"</code> 属性を追加することで選択された状態を処理するため、動的なタブ付きインターフェースでは <code>aria-current</code> 属性は必要ありません。
    Note that navigation bars, even if visually styled as tabs with the <code>nav="tabs"</code> attribute, should **not** be given <code>role="tablist"</code>, <code>role="tab"</code> or <code>role="tabpanel"</code> attributes. These are only appropriate for dynamic tabbed interfaces, as described in the <a href="https://www.w3.org/WAI/ARIA/apg/#tabpanel" />. See <a to="#javascript-behavior">
      JavaScript behavior
    </a> for dynamic tabbed interfaces in this section for an example. The <code>aria-current</code> attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding <code>aria-selected="true"</code> attribute on the active tab.
  </p>

  <h2>Using dropdowns</h2>
  <p>
    dropdown menu(ドロップダウンメニュー)に HTML を少し追加して、<LocalLink to="/components/dropdowns#usage">
      dropdowns JavaScript plugin
    </LocalLink>でドロップダウンメニューを追加します。
    Add dropdown menus with a little extra HTML and the <LocalLink to="/components/dropdowns#usage">
      dropdowns JavaScript plugin
    </LocalLink>.
  </p>

  <h3>Tabs with dropdowns</h3>
  <Snippet>
    <Example>
      <examples-components-nav-tab-tabs-dropdown />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/dropdown.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/tabs-dropdown.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/tabs-dropdown.html)
:::
:::: -->

  <h3 class="mt-2">
    Pills with dropdowns
  </h3>
  <Snippet>
    <Example>
      <examples-components-nav-tab-pills-dropdown />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/pills-dropdown.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/pills-dropdown.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/pills-dropdown.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="nav-variables" file="scss/_variables.scss" >}} -->

  <h2>JavaScript behavior</h2>

  <!-- bootstrap.js ファイルを介して、タブの JavaScript plugin を使用することで、ナビゲーションタブとピルを拡張し、ドロップダウンメニューからでもローカルコンテンツのタブ可能なペインを作成できます。
Use the tab JavaScript plugin—include it individually or through the compiled `bootstrap.js` file—to extend our navigational tabs and pills to create tabbable panes of local content. -->

  <!-- WAI ARIA Authoring Practices では、支援技術(スクリーンリーダなど)の利用者に構造、機能、現在の状態を伝えるために role="tablist"、 role="tab"、 role="tabpanel"、および追加の aria- 属性を必要とします。 ベストプラクティスとして、タブには `<button>` 要素を使用することをお勧めします。これは、新しいページや場所に移動するリンクではなく、動的な変更をトリガーするコントロールだからです。
Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers). As a best practice, we recommend using `<button>` elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location. -->

  <!-- 動的なタブ付きインターフェイスは、ドロップダウンメニューを 含むべきではありません。ユーザビリティの観点からは、現在表示されているタブのトリガー要素がすぐには表示されない（閉じたドロップダウンメニューの中にあるため）という事実は、混乱を引き起こす可能性があります。アクセシビリティの観点からは、この種の構造を標準的な WAI ARIA パターンにマッピングするための賢明な方法は現在のところありません。
Note that dynamic tabbed interfaces should <em>not</em> contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies. -->

  <Snippet>
    <Example>
      <examples-components-nav-tab-behavior-1 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/behavior-1.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/behavior-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/behavior-1.html)
:::
:::: -->

  <!-- ニーズに合わせて、これは上に示したような `<ul>` ベースのマークアップでも、任意のマークアップでも動作します。`<nav>` を使用している場合、role="tablist" を直接追加すべきではありません。代わりに、別の要素(以下の例では単純な `<div>`)に切り替えて `<nav>` を囲みます。
To help fit your needs, this works with `<ul>`-based markup, as shown above, or with any arbitrary "roll your own" markup. Note that if you're using `<nav>`, you shouldn't add `role="tablist"` directly to it, as this would override the element's native role as a navigation landmark. Instead, switch to an alternative element (in the example below, a simple `<div>`) and wrap the `<nav>` around it. -->
  <Snippet>
    <Example>
      <examples-components-nav-tab-behavior-2 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/behavior-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/behavior-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/behavior-2.html)
:::
:::: -->
  <p>
    タブのプラグインは pills でも動作します。
    The tabs plugin also works with pills.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-behavior-3 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/behavior-3.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/behavior-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/behavior-3.html)
:::
:::: -->
  <p>
    縦の pills でも同様です。
    And with vertical pills.
  </p>
  <Snippet>
    <Example>
      <examples-components-nav-tab-behavior-4 />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/behavior-4.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/behavior-4.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/behavior-4.html)
:::
:::: -->

  <h3>Using data attributes</h3>
  <p>
    要素に <code>tab</code> 属性または <code>pill</code> 属性を指定するだけで、JavaScript を書かなくてもタブやピルのナビゲーションを有効にすることができます。これらのデータ属性は <code>nav="tabs"</code> 属性や <code>nav="pills"</code> 属性を持った <code>NavList</code> コンポーネントで使用します。
    You can activate a tab or pill navigation without writing any JavaScript by simply specifying <code>tab</code> attribute or <code>pill</code> attribute on an element. Use these data attributes on <code>NavList</code> component with <code>nav="tabs"</code> attribute or <code>nav="pills"</code> attribute.
  </p>

  <Snippet>
    <Example>
      <examples-components-nav-tab-attributes />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/attributes.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/attributes.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/attributes.html)
:::
:::: -->

  <!-- ### Via JavaScript

JavaScript でタブ可能なタブを有効にします（各タブを個別に有効にする必要があります）。
Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

```js
var triggerTabList = Array.prototype.slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

個々のタブはいくつかの方法でアクティブにすることができます。
You can activate individual tabs in several ways:

```js
var triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
``` -->

  <h3>Fade effect</h3>
  <p>
    タブをフェードインさせるには、<code>TabPane</code> コンポーネントに <code>fade</code> 属性を追加します。最初のタブペインには、最初のコンテンツを表示するために <code>show</code> 属性を追加する必要があります。
    To make tabs fade in, add <code>fade</code> atribute to each <code>TabPane</code> component. The first tab pane must also have <code>show</code> attribute to make the initial content visible.
  </p>

  <Snippet>
    <Example>
      <examples-components-nav-tab-fade />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/fade.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/fade.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/fade.html)
:::
:::: -->


  <!-- ### Methods

::: danger
 {{< partial "callout-danger-async-methods.md" >}}
::: -->

  <h4>constructor</h4>
  <p>
    tab 要素とコンテンツコンテナをアクティブにします。Tab は、DOM 内のコンテナノードをターゲットとする <code>tab</code> 属性か <code>href</code> 属性のいずれかを持つ必要があります。
    Activates a tab element and content container. Tab should have either a <code>tab</code> attribute or, if using a link, an <code>href</code> attribute, targeting a container node in the DOM.
  </p>

  <Snippet>
    <Example>
      <examples-components-nav-tab-constructor />
    </Example>
    <ExamplesCode
      path="/components/nav-tab/constructor.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/nav-tab/constructor.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/nav-tab/constructor.html)
:::
:::: -->

  <h4>show</h4>
  <p>
    指定されたタブを選択し、関連するペインを表示します。以前に選択されていた他のタブは非選択状態になり、関連するペインは非表示になります。
    <b>タブペインが実際に表示される前に呼び出し元に戻ります</b> ( <code>shown.bs.tab</code> イベントが発生する前)。
    Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. <b>Returns to the caller before the tab pane has actually been shown</b> (i.e. before the <code>shown.bs.tab</code> event occurs).
  </p>
  <!-- ```js
  var someTabTriggerEl = document.querySelector('#someTabTrigger')
  var tab = new bootstrap.Tab(someTabTriggerEl)

  tab.show()
``` -->

  <!-- #### dispose

タブ要素を破棄します。
Destroys an element's tab. -->

  <!-- #### getInstance

DOM 要素に関連付けられたタブのインスタンスを取得する Static メソッド
*Static* method which allows you to get the tab instance associated with a DOM element

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getInstance(triggerEl) // Returns a Bootstrap tab instance
``` -->

  <!-- #### getOrCreateInstance

*Static* method which allows you to get the tab instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
var triggerEl = document.querySelector('#trigger')
var tab = bootstrap.Tab.getOrCreateInstance(triggerEl) // Returns a Bootstrap tab instance
``` -->

  <h3>Events</h3>
  <p>
    新しいタブを表示すると、以下の順番でイベントが発生します。
    When showing a new tab, the events fire in the following order:
  </p>
  <ol>
    <li> <code>hide.bs.tab</code> (現在のアクティブなタブ)(on the current active tab)</li>
    <li> <code>show.bs.tab</code> (表示されるタブ)(on the to-be-shown tab)</li>
    <li> <code>hidden.bs.tab</code> (hide.bs.tab イベントと同じ)(on the previous active tab, the same one as for the <code>hide.bs.tab</code> event)</li>
    <li> <code>shown.bs.tab</code> (show.bs.tab イベントと同じ)(on the newly-active just-shown tab, the same one as for the <code>show.bs.tab</code> event)</li>
  </ol>
  <p>
    既にアクティブなタブがなかった場合、hide.bs.tab および hidden.bs.tab イベントは発生しません。
    If no tab was already active, then the <code>hide.bs.tab</code> and <code>hidden.bs.tab</code> events will not be fired.
  </p>
  <!-- <docs-events-nav-tab /> -->

  <!-- ```js
var tabEl = document.querySelector('button[toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
``` -->
</template>