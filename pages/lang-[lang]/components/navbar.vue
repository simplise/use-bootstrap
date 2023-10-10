
<script setup lang="ts">
definePageMeta({
  'title:en': 'Navbar',
  'description:en': `Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.`,
  'title:ja': 'ナビゲーションバー',
  'description:ja': 'ナビゲーションバーでは、レスポンシブなヘッダーなどのドキュメントと例を示します。 '
})
</script>
<template>
  <h2>How it works</h2>
  <Localization>
    <template #en>
      <p>Navbars require a wrapping .navbar with <code>expand{-sm|-md|-lg|-xl|-xxl}</code> for responsive collapsing and color scheme classes.</p>
    </template>
    <template #ja>
      <p>レスポンシブに折りたたむために <code>Navbar</code> コンポーネントを <code>expand="{sm|md|lg|xl|xxl}"</code> 属性をつける必要があり、<code>color scheme</code> 属性も必要です</p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li>Navbars require a wrapping <code>Navbar</code> component with <code>expand="{sm|md|lg|xl|xxl}"</code> attribute for responsive collapsing and [color scheme](#color-schemes) attribute.</li>
        <li>Navbars and their contents are fluid by default. Change the container to limit their horizontal width in different ways.</li>
        <li>
          Use our <LocalLink to="/utilities/spacing/">
            spacing
          </LocalLink> and <LocalLink to="/utilities/flex/">
            flex
          </LocalLink> utility classes for controlling spacing and alignment within navbars.
        </li>
        <li>Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.</li>
        <li>Indicate the current item by using <code>active</code> attribute for the current item in a set.</li>
      </template>
      <template #ja>
        <li>ナビバーとコンテンツはデフォルトでは流動的です。color scheme を変更することで、横幅をさまざまな方法で制限することができます。</li>
        <li>ナビバー内の間隔と配置を制御するには、spacing と flex を利用します。</li>
        <li>デフォルトではレスポンシブになっていますが、簡単に変更することができます。レスポンシブな動作は Collapse JavaScript プラグインに依存します。</li>
        <li>現在のページ、アイテムには <code>active</code> 属性を用いて、現在の状態を示します。</li>
      </template>
    </Localization>
    <!-- `<nav>` 要素を使用してアクセシビリティを確保するか、`<div>` のようなより汎用的な要素を使用する場合は、 `role="navigation"` をすべてのナビゲーションバーに追加して、支援技術を使用するユーザーにとってのランドマーク領域であることを明示的に示します。
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies. -->
  </ul>
  <!-- 現在のページには `aria-current="page"` を、セット内の現在のアイテムには `aria-current="true"` を用いて、現在のアイテムを示します。
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set. -->

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <h2>Supported content</h2>
  <Localization>
    <template #en>
      <p>Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:</p>
    </template>
    <template #ja>
      <p>ナビゲーションバーには、いくつかのサブコンポーネントのサポートが組み込まれています。 必要に応じて、以下から選択してください。</p>
    </template>
  </Localization>



  <ul>
    <Localization>
      <template #en>
        <li><code>NavbarBrand</code> for your company, product, or project name.</li>
        <li><code>.navbar-nav</code> for a full-height and lightweight navigation (including support for dropdowns).</li>
        <li><code>.navbar-toggler</code> for use with our collapse plugin and other navigation toggling behaviors.</li>
        <li>Flex and spacing utilities for any form controls and actions.</li>
        <li><code>.navbar-text</code> for adding vertically centered strings of text.</li>
        <li><code>.collapse.navbar-collapse</code> for grouping and hiding navbar contents by a parent breakpoint.</li>
        <li>Add an optional `.navbar-scroll` to set a <code>max-height</code> and scroll expanded navbar content.</li>
      </template>
      <template #ja>
        <li><code>NavbarBrand</code> 会社、製品、またはプロジェクト名の <code>NavbarBrand</code> コンポーネント 。</li>
        <li><code>.navbar-nav</code> フルハイトで軽量なナビゲーション（ドロップダウンのサポートを含む）</li>
        <li><code>.navbar-toggler</code> collapse プラグインや他の navigation toggling で使用します。</li>
        <li>フォームコントロールおよびアクション用のフレックスおよびスペーシングユーティリティ。</li>
        <li><code>.navbar-text</code> 垂直方向に中央揃えのテキスト文字列を追加するための <code>.navbar-text</code>。</li>
      </template>
    </Localization>
  </ul>

  <Localization>
    <template #en>
      <p>Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the <code>lg</code> (large) breakpoint.</p>
    </template>
    <template #ja>
      <p>以下は、 <code>lg</code> ブレークポイントで自動的に折りたたむ、ライトをテーマにしたレスポンシブなナビゲーションバーに含まれるすべてのサブコンポーネントの例です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported.vue"
      lang="vue"
    />
  </Snippet>


  <!-- <p>
    color <LocalLink to="/utilities/background">
      background
    </LocalLink>(<code>bg-light</code>) と <LocalLink to="/utilities/spacing">
      spacing
    </LocalLink>(<code>me-auto</code>, <code>mb-2</code>, <code>mb-lg-0</code>, <code>me-2</code>) の例です。
    This example uses <LocalLink to="/utilities/background">
      background
    </LocalLink> (<code>bg-light</code>) and <LocalLink to="/utilities/spacing">
      spacing
    </LocalLink> (<code>me-auto</code>, <code>mb-2</code>, <code>mb-lg-0</code>, <code>me-2</code>) utility classes.
  </p> -->

  <h3>Brand</h3>
  <Localization>
    <template #en>
      <p>The <code>navbarBrand</code> attribute can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.</p>
    </template>
    <template #ja>
      <p><code>navbarBrand</code> 属性はほとんどの要素に適用できますが、一部の要素ではユーティリティクラスやカスタムスタイルが必要な場合があるので、アンカーが最適です。</p>
    </template>
  </Localization>

  <h4>Text</h4>
  <Localization>
    <template #en>
      <p>Add your text within an element with the <code>navbarBrand</code> attribute.</p>
    </template>
    <template #ja>
      <p><code>navbarBrand</code> 属性の要素内にテキストを追加します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-brand-text />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-brand-text.vue"
      lang="vue"
    />
  </Snippet>

  <h4>Image</h4>
  <Localization>
    <template #en>
      <p>You can replace the text within the <code>navbarBrand</code> attribute with an <code>b-img</code> component.</p>
    </template>
    <template #ja>
      <p><code>navbarBrand</code> 属性の要素内に <code>b-img</code> コンポーネントを配置することもできます。</p>
    </template>
  </Localization>

  <h4>Image and text</h4>
  <Localization>
    <template #en>
      <p>
        You can also make use of some additional utilities to add an image and text at the same time. Note the addition of <code>display="inline-block"</code> attribute and <code>vertical-align="text-top"</code> attrubute on the <code>b-img</code> component.
      </p>
    </template>
    <template #ja>
      <p>
        また、画像とテキストを同時に追加する追加ユーティリティを利用することもできる。
        b-imgコンポーネントに<code>display="inline-block"</code> 属性と<code>vertical-align="text-top" </code>attrubuteが追加されていることに注目してください。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-brand-image-text />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-brand-image-text.vue"
      lang="vue"
    />
  </Snippet>



  <h3>Nav</h3>
  <Localization>
    <template #en>
      <p>Navbar navigation links build on our options with their own modifier class and require the use of toggler classes for proper responsive styling.</p>
      <p><b>Navigation in navbars will also grow to occupy as much horizontal space as possible</b> to keep your navbar contents securely aligned.</p>
      <p>Add the <code>active</code> attribute on <code>NavLink</code> to indicate the current page.</p>
      <p>Please note that you should also add the <code>ariaCurrent</code> attribute on the active <code>NavLink</code>.</p>
    </template>
    <template #ja>
      <p>ナビゲーションバーのナビゲーションリンクは、独自の修飾子クラスを使用したナビゲーションオプションに基づいて構築されており、適切なレスポンシブスタイルを設定するには toggler classes を使用する必要があります。 </p>
      <p>ナビゲーションバーでのナビゲーションも、できるだけ多くの水平方向のスペースを占めるように拡大します、ナビゲーションバーのコンテンツを安全に整列させます。</p>
      <p>現在のページを <code>NavLink</code>またはその直接の親の <code>NavItem</code>に直接適用できることを示すために、 <code>active</code> 属性を使用してアクティブな状態を示します。</p>
      <p><code>NavLink</code>自体に <code>ariaCurrent</code> 属性も追加する必要があることに注意してください。</p>
    </template>
  </Localization>
  <!-- <p>
   ナビゲーションバーのナビゲーションリンクは、独自の修飾子クラスを使用した `.nav` オプションに基づいて構築されており、適切なレスポンシブスタイルを設定するには [toggler classes](#toggler) を使用する必要があります。 ナビゲーションバーでのナビゲーションも、できるだけ多くの水平方向のスペースを占めるように拡大します、ナビゲーションバーのコンテンツを安全に整列させます。
Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.
  </p> -->


  <Snippet>
    <Example>
      <examples-components-navbar-supported-nav-1 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-nav-1.vue"
      lang="vue"
    />
  </Snippet>
  <Localization>
    <template #en>
      <p>And because we use classes for our navs, you can avoid the list-based approach entirely if you like.</p>
    </template>
    <template #ja>
      <p>また、ナビゲーションにクラスを使用しているため、必要に応じてリストベースのアプローチを完全に回避できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-nav-2 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-nav-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>You can also use dropdowns in your navbar. </p>
      <p>Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for <code>NavItem</code> component and `NavLink` component as shown below.</p>
    </template>
    <template #ja>
      <p>ナビゲーションバーのナビゲーションでドロップダウンを利用することもできます。 </p>
      <p>ドロップダウンメニューには、配置するための折り返し要素が必要なので、以下に示すように、 <code>NavItem</code> コンポーネントと <code>NavLink</code> コンポーネントには別々のネストされた要素を使用してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-nav-3 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-nav-3.vue"
      lang="vue"
    />
  </Snippet>


  <h3>Forms</h3>
  <Localization>
    <template #en>
      <p>Place various form controls and components within a navbar:</p>
    </template>
    <template #ja>
      <p>さまざまなフォームコントロールとコンポーネントをナビゲーションバー内に配置します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-forms-1 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-forms-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>
        Immediate child elements of <code>Navbar</code> component use flex layout and will default to <code>justify-content: space-between</code>.
        Use additional <LocalLink to="/utilities/flex/">
          flex utilities
        </LocalLink> as needed to adjust this behavior.
      </p>
    </template>
    <template #ja>
      <p>
        コンポーネントの直接の子要素は<code>Navbar</code>フレックスレイアウトを私用し、デフォルトで<code>justify-content: space-between</code>になります。この動作を調整するには、必要に応じて追加の<LocalLink to="/utilities/flex/">
          フレックスユーティリティ
        </LocalLink>を使用します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-forms-2 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-forms-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the <code>Container</code> component as the container and save some HTML.</p>
    </template>
    <template #ja>
      <p>入力グループも機能します。ナブバーがフォーム全体、あるいはほとんどがフォームの場合は、<code>Container</code> コンポーネントをコンテナとして使用してHTMLを保存することができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-forms-3 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-forms-3.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.</p>
    </template>
    <template #ja>
      <p>様々なボタンも、これらのナビバーフォームの一部としてサポートされています。縦方向の整列ユーティリティを使用して、異なるサイズの要素を整列させることができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-forms-4 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-forms-4.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Text</h3>

  <Localization>
    <template #en>
      <p>
        Navbars may contain bits of text with the help of <code>NavbarText</code> component. This class adjusts vertical alignment and horizontal spacing for strings of text.
      </p>
    </template>
    <template #ja>
      ナビゲーションバーには、 <code>NavbarText</code> コンポーネントを使用してテキストのビットを含めることができます。 このクラスは、テキストの文字列の垂直方向の配置と水平方向の間隔を調整します。
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-text-1 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-text-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>
        Mix and match with other components and utilities as needed.
      </p>
    </template>
    <template #ja>
      <p>
        必要に応じて、他のコンポーネントやユーティリティと組み合わせて使用します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-supported-text-2 />
    </Example>
    <ExamplesCode
      path="/components/navbar/supported-text-2.vue"
      lang="vue"
    />
  </Snippet>



  <h2>Color schemes</h2>

  <Localization>
    <template #en>
      <p>
        Theming the navbar has never been easier thanks to the combination of theming classes and <code>background-color</code> attribute. Choose from <code>.navbar-light</code> for use with light background colors, or <code>.navbar-dark</code> for dark background colors. Then, customize with <code>.bg-*</code> utilities.
      </p>
    </template>
    <template #ja>
      <p>
        テーマクラスと <code>background-color</code> 属性の組み合わせにより、ナビゲーションバーのテーマ設定がこれまでになく簡単になりました。明るい背景色には <code>.navbar-light</code> から、暗い背景色には <code>.navbar-dark</code> から選択します。 次に、 <code>.bg-*</code> ユーティリティでカスタマイズします。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-color-schemes />
    </Example>
    <ExamplesCode
      path="/components/navbar/color-schemes.vue"
      lang="vue"
    />
  </Snippet>



  <h2>Containers</h2>

  <Localization>
    <template #en>
      <p>
        Although it's not required, you can wrap a navbar in a <code>Container</code> component to center it on a page–though note that an inner container is still required. Or you can add a container inside the <code>Navbar</code> component to only center the contents of a <a href="#placement">
          fixed or static top navbar
        </a>.
      </p>
    </template>
    <template #ja>
      <p>
        必須ではありませんが、ナビゲーションバーを <code>Container</code> コンポーネントでラップしてページの中央に配置するか、1つ追加して <a href="#placement">
          fixed or static top navbar
        </a> のコンテンツのみを中央に配置できます。 内部コンテナがまだ必要であることに注意してください。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-containers-1 />
    </Example>
    <ExamplesCode
      path="/components/navbar/containers-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>
        Use any of the responsive containers to change how wide the content in your navbar is presented.
      </p>
    </template>
    <template #ja>
      <p>
        レスポンシブコンテナのいずれかを使用して、ナビゲーションバーのコンテンツの表示幅を変更します。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-navbar-containers-2 />
    </Example>
    <ExamplesCode
      path="/components/navbar/containers-2.vue"
      lang="vue"
    />
  </Snippet>


  <h2>placement</h2>

  <Localization>
    <template #en>
      <p>
        <LocalLink to="/utilities/position">
          position utilities
        </LocalLink> to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use <code>position: fixed</code>, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., <code>padding-top</code> on the <code>&lt;body&gt;</code>) to prevent overlap with other elements.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/position">
          position utilities
        </LocalLink> を使用して、ナビバーを静的でない位置に配置することができます。上と下のどちらに固定するかを選択できます。 固定ナビゲーションバーは、<code>position: fixed</code>を使用します。DOMの通常のフローから取得され、他の要素との重複を防ぐために、カスタムCSS（<code>&lt;body&gt;</code>の <code>padding-top</code> など）が必要になる場合があります。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Also note that <b><code>.sticky-top</code> uses <code>position: sticky</code>, which <a href="https://caniuse.com/css-sticky">isn't fully supported in every browser</a> </b>.
      </p>
    </template>
    <template #ja>
      <p>
        <b><code>.sticky-top</code>は <code>position:sticky</code> を使用することにも注意してください。サポートブラウザは <a href="https://caniuse.com/css-sticky">isn't fully supported in every browser</a> を参考にしてください。</b>.
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-navbar-placement-1 />
    </Example>
    <ExamplesCode
      path="/components/navbar/placement-1.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-components-navbar-placement-2 />
    </Example>
    <ExamplesCode
      path="/components/navbar/placement-2.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-components-navbar-placement-3 />
    </Example>
    <ExamplesCode
      path="/components/navbar/placement-3.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-components-navbar-placement-4 />
    </Example>
    <ExamplesCode
      path="/components/navbar/placement-4.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Scrolling</h2>

  <Localization>
    <template #en>
      <p>
        Add <code>scroll</code> attribute to a <code>NavbarNavList</code> (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at <code>75vh</code> (or 75% of the viewport height), but you can override that with the local CSS custom property <code>--bs-navbar-height</code> or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.
      </p>
    </template>
    <template #ja>
      <p>
        <code>scroll</code> 属性を <code>NavbarNavList</code>（または他のnavbarサブコンポーネント）に追加して、折りたたまれたナビゲーションバーの切り替え可能なコンテンツ内で垂直スクロールを有効にします。 デフォルトでは、スクロールは <code>75vh</code> （またはビューポートの高さの75％）で開始されますが、ローカルのCSSカスタムプロパティ <code>--bs-navbar-height</code> またはカスタムスタイルでオーバーライドできます。 大きなビューポートでは、ナビゲーションバーはデフォルトのナビゲーションバーと同じように表示されます。 この動作には、overflow の潜在的な欠点があることに注意してください。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Please note that this behavior comes with a potential drawback of <code>overflow</code>—when setting <code>overflow="y-auto"</code> (required to scroll the content here), <code>overflow="x"</code> is the equivalent of <code>auto</code>, which will crop some horizontal content.
      </p>
    </template>
    <template #ja>
      <p>
        <code>overflow="y-auto"</code> を設定すると (ここでコンテンツをスクロールするために必要です)、<code>?overflow="x"</code> は <code>auto</code> と同等であり、水平方向のコンテンツが切り取られてしまいます。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Here's an example navbar using <code>scroll</code> attribute with <code>style="--bs-scroll-height: 100px;"</code>, with some extra margin utilities for optimum spacing.
      </p>
    </template>
    <template #ja>
      <p>
        ここでは、<code>style="--bs-scroll-height: 100px;"</code> で <code>scroll</code> 属性を使用し、最適な間隔を確保するために余白を設けたナビバーの例を紹介します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-scrolling />
    </Example>
    <ExamplesCode
      path="/components/navbar/scrolling.vue"
      lang="vue"
    />
  </Snippet>



  <h2>Responsive behaviors</h2>

  <Localization>
    <template #en>
      <p>
        Navbars can use <code>NavbarToggler</code> component, <code>NavbarCollapse</code> component, and <code>expand="{-sm|-md|-lg|-xl|-xxl}</code> attribute to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.
      </p>
    </template>
    <template #ja>
      <p>
        ナビゲーションバーは、 <code>NavbarToggler</code> コンポーネント、 <code>NavbarCollapse</code> コンポーネント、および <code>expand="{-sm|-md|-lg|-xl|-xxl}</code> 属性を使用して、コンテンツがボタンの後ろで折りたたまれるタイミングを決定できます。他のユーティリティと組み合わせて、特定の要素を表示または非表示にするタイミングを簡単に選択できます。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        For navbars that never collapse, add the <code>expand</code> attribute on the navbar. For navbars that always collapse, don't add any <code>expand</code> attribute.
      </p>
    </template>
    <template #ja>
      <p>
        折りたたまれないナビゲーションバーの場合は、ナビゲーションバーに <code>expand</code> 属性を追加します。常に折りたたまれるナビゲーションバーの場合、 <code>expand</code> 属性を追加しないでください。
      </p>
    </template>
  </Localization>



  <h3>Toggler</h3>
  <Localization>
    <template #en>
      <p>
        Navbar togglers are left-aligned by default, but should they follow a sibling element like a <code>navbarBrand</code>, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.
      </p>
    </template>
    <template #ja>
      <p>
        Navbar togglerはデフォルトでは左揃えですが、<code>navbarBrand</code>のような兄弟要素の後にある場合は、自動的に右端に揃えられます。マークアップを反転すると、togllerの配置も反転します。以下に、さまざまな切り替えスタイルの例を示します。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        With no <code>navbarBrand</code> component shown at the smallest breakpoint:
      </p>
    </template>
    <template #ja>
      <p>
        最小ブレークポイントに <code>navbarBrand</code> コンポーネントが表示されていない場合：
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-responsive-toggler-1 />
    </Example>
    <ExamplesCode
      path="/components/navbar/responsive-toggler-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>
        With a brand name shown on the left and toggler on the right:
      </p>
    </template>
    <template #ja>
      <p>
        左側にブランド名、右側にトグルを表示します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-responsive-toggler-2 />
    </Example>
    <ExamplesCode
      path="/components/navbar/responsive-toggler-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>
        With a toggler on the left and brand name on the right:
      </p>
    </template>
    <template #ja>
      <p>
        左側にトグル、右側にブランド名を表示します。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-navbar-responsive-toggler-3 />
    </Example>
    <ExamplesCode
      path="/components/navbar/responsive-toggler-3.vue"
      lang="vue"
    />
  </Snippet>



  <h3>External content</h3>

  <Localization>
    <template #en>
      <p>
        Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the <code>Navbar</code> . Because our plugin works on the <code>id</code> and <code>target</code> matching, that's easily done!
      </p>
    </template>
    <template #ja>
      <p>
        場合によっては、collapseプラグインを使用して、構造的に <code>Navbar</code> の外側にあるコンテンツのコンテナ要素をトリガーする必要があります。プラグインは <code>id</code> と <code>target</code> のマッチングで動作するため、簡単に実行できます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-responsive-external-content />
    </Example>
    <ExamplesCode
      path="/components/navbar/responsive-external-content.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>
        When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes *before* the toggler in the document's structure. We also recommend making sure that the toggler has the <code>aria-controls</code> attribute, pointing to the <code>id</code> of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.
      </p>
    </template>
    <template #ja>
      <p>
        これを行うときは、追加のJavaScriptを含めて、コンテナーを開いたときにプログラムでフォーカスをコンテナーに移動することをお勧めします。 そうしないと、キーボードユーザーやスクリーンリーダーを利用するユーザーは、新しく公開されたコンテンツを見つけるのに苦労する可能性があります。特に、開かれたコンテナーがドキュメントの構造のトグルの前にある場合はそうです。 また、トグルにコンテンツコンテナの <code>id</code> を指す <code>aria-controls</code> 属性をつけることをお勧めします。 理論的には、これによりスクリーンリーダーを利用するユーザーはトグルからそれが制御するコンテナーに直接ジャンプできますが、これに対するサポートは現在パッチが当てられています。
      </p>
    </template>
  </Localization>


  <h3>Offcanvas</h3>

  <Localization>
    <template #en>
      <p>
        Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas plugin. We extend both the offcanvas default styles and use our <code>expand</code> attribute to create a dynamic and flexible navigation sidebar.
      </p>
    </template>
    <template #ja>
      <p>
        オフキャンバスプラグインを使用して、展開及び折りたたみ可能なナビゲーションバーをオフキャンパスドロワーに変換します。両方のオフキャンバスのデフォルトスタイルを拡張し、<code>expand</code>属性ｗｐ使用して動的で柔軟なナビゲーションサイドバーを作成します。
      </p>
    </template>
  </Localization>


  <Localization>
    <template #en>
      <p>
        In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the <code>expand</code> attribute entirely.
      </p>
    </template>
    <template #ja>
      <p>
        以下の例では、すべてのブレークポイントにわたって常に折りたたまれるオフキャンバスナビゲーションバーを作成するには、<code>expand</code>を完全に省略します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-responsive-offcanvas />
    </Example>
    <ExamplesCode
      path="/components/navbar/responsive-offcanvas.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>
        To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like <code>lg</code>, use <code>expand="lg</code>.
      </p>
    </template>
    <template #ja>
      <p>
        <code>lg</code>のような特定のブレークポイントで通常のナビバーに展開するオフキャンバスナビバーを作成するには、<code>expand="lg"</code>を使用します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-navbar-responsive-expand />
    </Example>
    <ExamplesCode
      path="/components/navbar/responsive-expand.vue"
      lang="vue"
    />
  </Snippet>


  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="navbar-variables" file="scss/_variables.scss" >}} -->

  <!-- {{< scss-docs name="navbar-theme-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Loop

[Responsive navbar expand/collapse classes](#responsive-behaviors) (e.g., `expand="-lg`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`. -->

  <!-- {{< scss-docs name="navbar-expand-loop" file="scss/_navbar.scss" >}} -->
</template>
