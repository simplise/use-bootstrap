
<script setup lang="ts">
definePageMeta({
  'title:en': 'Cards',
  'description:en': `Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.`,
  'title:ja': 'カード',
  'description:ja': 'カードは、複数のバリエーションとオプションで柔軟で拡張可能なコンテナを提供します。カードの使い方の例を示します。'
})
</script>

<template>
  <h2>About</h2>
  <Localization>
    <template #en>
      <p>A <b>card</b> is a flexible and extensible content container.</p>
      <p>It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
      <p>If you're familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails.</p>
      <p>Similar functionality to those components is available as modifier classes for cards.</p>
    </template>
    <template #ja>
      <p><b>card</b> は柔軟で拡張ができるコンテナです。</p>
      <p>headers や footers のオプション、多様なコンテンツ、背景色、表示オプション が含まれています。</p>
      <p>Bootstrap3 の panels、wells、thumbnails は card に置きかわります。</p>
      <p>これらのコンポーネントの機能は card のコンポーネントとして利用できます。</p>
    </template>
  </Localization>

  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. </p>
      <p>Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. </p>
      <p>They have no <code>margin</code> by default, so use [spacing utilities] as needed.</p>
    </template>
    <template #ja>
      <p>カードは少ないマークアップとスタイルで構築されていますが, 多くのカスタマイズが可能です。</p>
      <p>Flexbox で構築されているため、簡単に配置ができ、他のコンポーネントと組み合わせ可能です。 </p>
      <p>デフォルトでは <code>margin</code> の設定がないので, 必要に応じて spacing utilities を使用します。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. </p>
      <p>This is easily customized with our various <a href="#sizing">sizing options</a>.</p>
    </template>
    <template #ja>
      <p>以下は,幅が固定されたカードの例です。カードには固定幅がないので, 親要素の幅に広がります。</p>
      <p>これは <a href="#sizing">sizing options</a> でカスタマイズ可能です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-example />
    </Example>
    <ExamplesCode
      path="/components/card/example.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Content types
  </h2>
  <Localization>
    <template #en>
      <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what's supported.</p>
    </template>
    <template #ja>
      <p>画像やテキスト、リスト、リンクなどカードは多様なコンテントをサポートしています。下記は例になります。</p>
    </template>
  </Localization>

  <h3>Body</h3>
  <Localization>
    <template #en>
      <p>The building block of a card is the <code>CardBody</code>. Use it whenever you need a padded section within a card.</p>
    </template>
    <template #ja>
      <p>カードを構築するコンポーネントは <code>CardBody</code> です。padding が必要な section の時はいつでも利用できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-body />
    </Example>
    <ExamplesCode
      path="/components/card/content-body.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    Titles, text, and links
  </h3>
  <Localization>
    <template #en>
      <p>Card titles are used by adding <code>CardTitle</code> component. </p>
      <p>In the same way, links are added and placed next to each other by adding `CardLink` tag.</p>
      <p>Subtitles are used by adding a <code>CardSubTitle</code> component. </p>
      <p>If the <code>CardTitle</code> and the <code>CardSubTitle</code> items are placed in a <code>CardBody</code> item, the card title and subtitle are aligned nicely.</p>
    </template>
    <template #ja>
      <p>カードタイトルは <code>CardTitle</code> コンポーネントを利用します。 </p>
      <p><code>CardLink</code> コンポーネントを利用するとリンクが追加されます。</p>
      <p>サブタイトルは、<code>CardSubTitle</code> を適用します。</p>
      <p><code>CardTitle</code> と <code>CardSubTitle</code> のアイテムを <code>CardBody</code> の中に表記すると、良い感じに配置されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-title-text-links />
    </Example>
    <ExamplesCode
      path="/components/card/content-title-text-links.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Images
  </h3>
  <Localization>
    <template #en>
      <p><code>CardImgTop</code> component places an image to the top of the card. </p>
      <p>With <code>CardText</code>component, text can be added to the card. Text within <code>CardText</code> component can also be styled with the standard HTML tags.</p>
    </template>
    <template #ja>
      <p><code>CardImgTop</code> コンポーネントは画像を上に持ってきます。 </p>
      <p><code>CardText</code> コンポーネントはテキストをカードに追加できます。(標準の HTML タグでスタイルを設定可能)</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-images />
    </Example>
    <ExamplesCode
      path="/components/card/content-images.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    List groups
  </h3>
  <Localization>
    <template #en>
      <p>Create lists of content in a card with a flush list group.</p>
    </template>
    <template #ja>
      <p><code>ListGroup</code> コンポーネントに <code>flush</code> 属性を追加してカードの中にリストを作成できます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-list-groups-1 />
    </Example>
    <ExamplesCode
      path="/components/card/content-list-groups-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-card-content-list-groups-2 />
    </Example>
    <ExamplesCode
      path="/components/card/content-list-groups-2.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-card-content-list-groups-3 />
    </Example>
    <ExamplesCode
      path="/components/card/content-list-groups-3.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    Kitchen sink
  </h3>
  <Localization>
    <template #en>
      <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>
    </template>
    <template #ja>
      <p>複数のコンテンツをカードの中に入れても横幅は固定になります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-kitchen-sink />
    </Example>
    <ExamplesCode
      path="/components/card/content-kitchen-sink.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Header and footer
  </h3>
  <Localization>
    <template #en>
      <p>Add an optional header and/or footer within a card.</p>
    </template>
    <template #ja>
      <p>カードの中にオプションとしてヘッダーやフッターを加えることできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-header />
    </Example>
    <ExamplesCode
      path="/components/card/content-header.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Card headers can be styled by adding <code>CardHeader</code> elements.</p>
    </template>
    <template #ja>
      <p><code>CardHeader</code> コンポーネントを利用することでカードにヘッダーを付け足すことできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-content-header-headings />
    </Example>
    <ExamplesCode
      path="/components/card/content-header-headings.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-components-card-content-quote />
    </Example>
    <ExamplesCode
      path="/components/card/content-quote.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-components-card-content-footer />
    </Example>
    <ExamplesCode
      path="/components/card/content-footer.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Sizing
  </h2>
  <Localization>
    <template #en>
      <p>Cards assume no specific <code>width</code> to start, so they'll be 100% wide unless otherwise stated.</p>
      <p>You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
    </template>
    <template #ja>
      <p>カードの幅 <code>width</code> は特に設定がされていない限り 100%に設定されています。</p>
      <p>カスタム CSS、グリッド属性、グリッド Sass ミックスイン、またはユーティリティを使用することで必要に応じて変更できます。</p>
    </template>
  </Localization>

  <h3>Using grid markup</h3>
  <Localization>
    <template #en>
      <p>Using the grid, wrap cards in columns and rows as needed.</p>
    </template>
    <template #ja>
      <p>グリッドレイアウトでは columns と rows の中にカードを使ってください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-size-grid />
    </Example>
    <ExamplesCode
      path="/components/card/size-grid.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Using utilities
  </h3>
  <Localization>
    <template #en>
      <p>Use <code>relative-width</code> attribute to quickly set a card's width.</p>
    </template>
    <template #ja>
      <p>カードの幅は <code>relative-width</code> 属性を使います。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-size-utilities />
    </Example>
    <ExamplesCode
      path="/components/card/size-utilities.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    Using custom CSS
  </h3>
  <Localization>
    <template #en>
      <p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>
    </template>
    <template #ja>
      <p>スタイルシートでまたはインラインスタイルとして幅を設定するときはカスタム CSS を使用してください。</p>
    </template>
  </Localization>

  <!-- ここ見つけられず -->
  <Snippet>
    <Example>
      <examples-components-card-customecss />
    </Example>
    <ExamplesCode
      path="/components/card/customecss.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Text alignment
  </h2>
  <Localization>
    <template #en>
      <p>You can quickly change the text alignment of any card—in its entirety or specific parts—with our <code>text align classes</code>,<code>docsref "/utilities/text#text-alignment"</code>.</p>
    </template>
    <template #ja>
      <p>カード全体または一部分のテキストの配置を素早く変更することができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-text-align />
    </Example>
    <ExamplesCode
      path="/components/card/text-align.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Navigation
  </h2>
  <Localization>
    <template #en>
      <p>Add some navigation to a card's header (or block) with Bootstrap's <code>Nav</code> component, <code>docsref "/components/navs-tabs"</code>.</p>
    </template>
    <template #ja>
      <p>Bootstrap の <code>Nav</code> コンポーネントを使えばカードのヘッダーにナビゲーションをつけることができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-navigation />
    </Example>
    <ExamplesCode
      path="/components/card/navigation.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-components-card-navigation-2 />
    </Example>
    <ExamplesCode
      path="/components/card/navigation-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Images
  </h2>
  <Localization>
    <template #en>
      <p>Cards include a few options for working with images. Choose from appending "image caps" at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>
    </template>
    <template #ja>
      <p>カードには、画像とともに作用するいくつかのオプションが含まれています。カードの両端に「画像キャップ」を追加するか、画像にカードコンテンツをオーバーレイするか、単に画像をカードに埋め込むかを選択します。</p>
    </template>
  </Localization>


  <h3>Image caps</h3>
  <Localization>
    <template #en>
      <p>Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.</p>
    </template>
    <template #ja>
      <p>ヘッダーやフッターに似ていますがカードの上部または下部にイメージキャップをつけることができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-image-caps />
    </Example>
    <ExamplesCode
      path="/components/card/image-caps.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Image overlays
  </h3>
  <Localization>
    <template #en>
      <p>Turn an image into a card background and overlay your card's text.</p>
      <p>Depending on the image, you may or may not need additional styles or utilities.</p>
    </template>
    <template #ja>
      <p>画像をカードの背景に変換し、カードのテキストをオーバーレイします。</p>
      <p>画像によっては、追加のスタイルやユーティリティが必要な場合と不要な場合があります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-image-overlay />
    </Example>
    <ExamplesCode
      path="/components/card/image-overlay.vue"
      lang="vue"
    />
  </Snippet>


  <h5 class="mt-3">
    tip
  </h5>
  <Localization>
    <template #en>
      <p>Note that content should not be larger than the height of the image.</p>
      <p>If content is larger than the image the content will be displayed outside the image.</p>
    </template>
    <template #ja>
      <p>コンテンツは画像の高さを超えないようにしてください。</p>
      <p>もしコンテンツが画像より大きい場合、画像をはみだしてコンテンツが表示されます。</p>
    </template>
  </Localization>

  <h2>Horizontal</h2>
  <Localization>
    <template #en>
      <p>
        Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with <code>gutter="0"</code> attributes and use <code>col="md-*"</code> attributes to make the card horizontal at the <code>md</code> breakpoint. Further adjustments may be needed depending on your card content.
      </p>
    </template>
    <template #ja>
      <p>
        グリッドとユーティリティ・クラスを組み合わせることで、モバイルフレンドリーでレスポンシブな方法でカードを水平にすることができます。下の例では、<code>gutter="0"</code>属性でグリッドのガターを取り除き、<code>col="md-*"</code>属性を使ってmdブレイクポイントでカードを水平にしています。カードの内容によっては、さらに調整が必要かもしれません。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-card-horizontal />
    </Example>
    <ExamplesCode
      path="/components/card/horizontal.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Card styles</h2>
  <Localization>
    <template #en>
      <p>
        Cards include various options for customizing their backgrounds, borders, and color.
      </p>
    </template>
    <template #ja>
      <p>
        カードには、背景、ボーダー、色をカスタマイズできる様々なオプションがあります。
      </p>
    </template>
  </Localization>

  <h3>Background and color</h3>
  <Localization>
    <template #en>
      <p>
        Use <LocalLink to="/utilities/colors">
          text color
        </LocalLink> and <LocalLink to="/utilities/background">
          background utilities
        </LocalLink> to change the appearance of a card.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/colors">
          文字色
        </LocalLink>と<LocalLink to="/utilities/background">
          背景
        </LocalLink>のユーティリティを使用して、カードの外観を変更できます。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-card-background-color />
    </Example>
    <ExamplesCode
      path="/components/card/background-color.vue"
      lang="vue"
    />
  </Snippet>


  <!-- {{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}} -->

  <h3>Border</h3>

  <!-- Use [border utilities]({{< docsref "/utilities/borders" >}}) to change just the `border-color` of a card. Note that you can put `.text-{color}` classes on the parent `.card` or a subset of the card's contents as shown below. -->

  <Snippet>
    <Example>
      <examples-components-card-border />
    </Example>
    <ExamplesCode
      path="/components/card/border.vue"
      lang="vue"
    />
  </Snippet>


  <h3>Mixins utilities</h3>
  <Localization>
    <template #en>
      <p>
        You can also change the borders on the card header and footer as needed, and even remove their <code>background-color</code> with <code>background-color="transparent"</code> attribute.
      </p>
    </template>
    <template #ja>
      <p>
        また、必要に応じて、カードのヘッダーとフッターのボーダーを変更したり、<code>background-color="transparent"</code>属性で背景色を削除することもできます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-mixins />
    </Example>
    <ExamplesCode
      path="/components/card/mixins.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Card layout</h2>
  <Localization>
    <template #en>
      <p>
        In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, <b>these layout options are not yet responsive</b>
      </p>
    </template>
    <template #ja>
      <p>
        カード内のコンテンツのスタイリングに加えて、Bootstrapには、一連のカードをレイアウトするためのいくつかのオプションがあります。いまのところ、<b>これらのレイアウトオプションはまだレスポンシブではありません。</b>
      </p>
    </template>
  </Localization>
  
  <h3>Card groups</h3>
  <Localization>
    <template #en>
      <p>
        Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use <code>display: flex;</code> to become attached with uniform dimensions starting at the <code>sm</code> breakpoint.
      </p>
    </template>
    <template #ja>
      <p>
        カードグループを使って、カードを幅と高さの等しいカラムを持つ１つのくっついた要素としてレンダリングします。カードグループは積み重ねられた状態から始まり、<code>display: flex;</code>をつかって、<code>sm</code>ブレークポイントから始まる均一の寸法でくっついた状態になります。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-card-group />
    </Example>
    <ExamplesCode
      path="/components/card/group.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p class="mt-3">
        When using card groups with footers, their content will automatically line up.
      </p>
    </template>
    <template #ja>
      <p>
        フッター付きのカードグループを使用すると、コンテンツが自動的に並びます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-group-footer />
    </Example>
    <ExamplesCode
      path="/components/card/group-footer.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Grid cards
  </h3>
  <Localization>
    <template #en>
      <p>
        Use the Bootstrap grid system and its <LocalLink to="/layout/grid#row-columns">
          Row components with columns
        </LocalLink> to control how many grid columns (wrapped around your cards) you show per row. For example, here's <code>columns="1 md-2"</code> laying out the cards on one column, and <code>columns="md-2"</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.
      </p>
    </template>
    <template #ja>
      <p>
        Bootstrapのグリッドシステムと<LocalLink to="/layout/grid#row-columns">
          Rowコンポーネントのcolumns
        </LocalLink>を使用して、1行に表示するグリッドカラム（カードを含む）の数を制御します。ここでは、<code>columns="1 md-2"</code>は、1つの列にカードをレイアウトし、<code>columns="md-2"</code>は、中間のブレイクポイントから上に、複数の行にわたって4つのカードを同じ幅に分割します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-grid />
    </Example>
    <ExamplesCode
      path="/components/card/grid.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p class="mt-3">
        Change it to <code>columns="3"</code> and you'll see the fourth card wrap.
      </p>
    </template>
    <template #ja>
      <p class="mt-3">
        <code>columns="3"</code>に変更すると、4枚目のカードが折り返されます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-grid-2 />
    </Example>
    <ExamplesCode
      path="/components/card/grid-2.vue"
      lang="vue"
    />
  </Snippet>
  
  <Localization>
    <template #en>
      <p class="mt-3">
        When you need equal height, add <code>height="100"</code> attributes to the cards. If you want equal heights by default, you can set <code>$card-height: 100%</code> in Sass.
      </p>
    </template>
    <template #ja>
      <p class="mt-3">
        同じ高さが必要な場合は、カードに<code>height="100"</code>属性を追加します。デフォルトで同じ高さが必要な場合は、Sassで<code>$card-height: 100%;</code>を設定します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-card-grid-3 />
    </Example>
    <ExamplesCode
      path="/components/card/grid-3.vue"
      lang="vue"
    />
  </Snippet>
</template>