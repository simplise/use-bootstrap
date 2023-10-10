<script setup lang="ts">
definePageMeta({
  'title:en': 'Carousel',
  'description:en': `A slideshow component for cycling through elements—images or slides of text—like a carousel.`,
  'title:ja': 'カルーセル',
  'description:ja': 'カルーセルは、画像やスライドを横にスライドさせて複数表示させるコンポーネントです。'
})
</script>

<template>
  <h2>How it works</h2>

  <Localization>
    <template #en>
      <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.</p>
      <p>
        In browsers where the <NuxtLink to="https://www.w3.org/TR/page-visibility/">
          Page Visibility
        </NuxtLink> is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).
      </p>
    </template>
    <template #ja>
      <p>カルーセルは、CSS 3D トランスフォームと JavaScript で構築された、一連のコンテンツを循環させるためのスライドショーです。一連の画像、テキスト、カスタムマークアップで動作します。また、前/次のコントロールやインジケータもサポートしています。</p>
      <p>
        <NuxtLink to="https://www.w3.org/TR/page-visibility/">
          Page Visibility
        </NuxtLink> がサポートされているブラウザでは、ブラウザのタブがアクティブではない場合やウィンドウが最小化されいる場合など、ページが表示されていない場合はカルーセルは動きません。
      </p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <Localization>
    <template #en>
      <p>Please be aware that nested carousels are not supported, and carousels are generally not compliant with accessibility standards.</p>
    </template>
    <template #ja>
      <p>入れ子になっているカルーセルはサポートされていません。カルーセルは一般的にアクセシビリティ基準に準拠していないことに注意してください。</p>
      <p>カルーセルは、スライドの寸法を自動的に正規化しません。そのため、コンテンツのサイズを適切に調整するために、追加のユーティリティやカスタム スタイルを使用する必要がある場合があります。カルーセルは前/次のコントロールやインジケータをサポートしていますが、明示的に必須ではありません。カスタマイズしてください。</p>
    </template>
  </Localization>


  <h2>Example</h2>

  <h3>Slides only</h3>
  <Localization>
    <template #en>
      <p>Here's a carousel with slides only. </p>
      <p>Note the presence of the <code>d-block</code> and <code>w-100</code> on carousel images to prevent browser default image alignment.</p>
    </template>
    <template #ja>
      <p>スライドのみのカルーセルです。</p>
      <p>カルーセルの画像に <code>.d-block</code>と <code>.w-100</code> があることに注意してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-carousel-slides-only />
    </Example>
    <ExamplesCode
      path="/components/carousel/slides-only.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    With controls
  </h3>
  <Localization>
    <template #en>
      <p>Adding in the previous and next controls. We recommend using <code>control</code> attribute.</p>
    </template>
    <template #ja>
      <p><code>control</code>属性を追加して前後のコントロールを追加します。</p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-carousel-with-controls />
    </Example>
    <ExamplesCode
      path="/components/carousel/with-controls.vue"
      lang="vue"
    />
  </Snippet>


  <h3 class="mt-3">
    With indicators
  </h3>
  <Localization>
    <template #en>
      <p>You can also add the indicators to the carousel, alongside the controls, too.</p>
    </template>
    <template #ja>
      <p>カルーセルには、コントロールと並んでインジケーターを追加することもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-carousel-with-indicators />
    </Example>
    <ExamplesCode
      path="/components/carousel/with-indicators.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    With captions
  </h3>
  <Localization>
    <template #en>
      <p>Add captions to your slides easily with the <code>CarouselCaption</code> element within any <code>CarouselItem</code>.</p>
      <p>
        They can be easily hidden on smaller viewports, as shown below, with optional <LocalLink to="/utilities/display">
          display utilities
        </LocalLink>.
      </p>
      <p>We hide them initially with <code>display="none</code> and bring them back on medium-sized devices with <code>display="none</code>.</p>
    </template>
    <template #ja>
      <p><code>CarouselItem</code> コンポーネント内に <code>CarouselCaption</code> コンポーネントを使用して、スライドにキャプションを追加できます。</p>
      <p>
        以下に示すように、オプションの <LocalLink to="/utilities/display">
          display utilities
        </LocalLink>を使用することで、小さいビューポートで簡単に非表示にすることができます。
      </p>
      <p>最初は <code>display="none"</code> で非表示にし、中型のデバイスでは <code>display="md-none</code> を使用します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-carousel-with-captions />
    </Example>
    <ExamplesCode
      path="/components/carousel/with-captions.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Crossfade
  </h3>
  <Localization>
    <template #en>
      <p>Add <code>fade</code> attribute to your carousel to animate slides with a fade transition instead of a slide.</p>
    </template>
    <template #ja>
      <p><code>fade</code> 属性をカルーセルに追加すると、スライドの代わりにフェードトランジションでスライドをアニメーションさせることができます。</p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-carousel-crossfade />
    </Example>
    <ExamplesCode
      path="/components/carousel/crossfade.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/carousel/crossfade.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/carousel/crossfade.html)
:::
:::: -->

  <h3 class="mt-3">
    Individual <code>CarouselItem</code> interval
  </h3>

  <Localization>
    <template #en>
      <p>Add <code>interval</code> attribute to a <code>CarouselItem</code> component to change the amount of time to delay between automatically cycling to the next item.</p>
    </template>
    <template #ja>
      <p><code>CarouselItem</code> コンポーネントに <code>interval</code> 属性を追加して、自動的に次のアイテムに切り替わるまでの遅延時間を変更します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-carousel-individual />
    </Example>
    <ExamplesCode
      path="/components/carousel/individual.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Disable touch swiping
  </h3>

  <Localization>
    <template #en>
      <p>Carousels support swiping left/right on touchscreen devices to move between slides. </p>
      <p>This can be disabled using the <code>touch</code> attribute. </p>
      <p>The example below also does not include the <code>ride</code> attribute and has <code>touch="false"</code> so it doesn't autoplay.</p>
    </template>
    <template #ja>
      <p>左右のスワイプによるスライド間の移動をサポートしています。</p>
      <p>これを無効にするには、<code>touch</code> 属性を使用します。 </p>
      <p>以下の例では、<code>ride</code> 属性を含まず、<code>touch="false"</code> としているため、自動再生されません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-carousel-disable-touch-swiping />
    </Example>
    <ExamplesCode
      path="/components/carousel/disable-touch-swiping.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Dark variant
  </h2>
  <Localization>
    <template #en>
      <p>Add <code>dark</code> attribute to the <code>Carousel</code> component for darker controls, indicators, and captions.</p>
    </template>
    <template #ja>
      <p>コントロール、インジケーター、キャプションを暗くするには、Carousel コンポーネントに dark 属性を追加します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-carousel-dark-variant />
    </Example>
    <ExamplesCode
      path="/components/carousel/dark-variant.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="carousel-variables" file="scss/_variables.scss" >}} -->

  <!-- <h2>Usage</h2>

  <h3>Via data attributes</h3>


  <p>
    カルーセルの位置を制御するには、データ属性を使用します <code>data-bs-slide</code> はキーワード <code>prev</code> や <code>next</code> を受け付け、現在の位置に対するスライドの位置を変更します。または、 <code>data-bs-slide-to</code> を使用して生のスライドインデックスをカルーセル <code>data-bs-slide-to="2"</code> に渡します。これにより、スライドの位置が <code>0</code> で始まる特定のインデックスに移動します。
    Use data attributes to easily control the position of the carousel. <code>data-bs-slide</code> accepts the keywords <code>prev</code> or <code>next</code>, which alters the slide position relative to its current position. Alternatively, use <code>data-bs-slide-to</code> to pass a raw slide index to the carousel <code>data-bs-slide-to="2"</code>, which shifts the slide position to a particular index beginning with <code>0</code>.
  </p>
  <p>
    <code>data-bs-ride="carousel"</code> 属性は、ページの読み込み時にカルーセルをアニメーションとしてマークするために使用されます。 <code>data-bs-ride="carousel"</code> を使用してカルーセルを初期化しない場合は、自分で初期化する必要があります。同じカルーセルの（冗長かつ不要な）明示的なJavaScript初期化と組み合わせて使用することはできません。
    The <code>data-bs-ride="carousel"</code> attribute is used to mark a carousel as animating starting at page load. If you don't use <code>data-bs-ride="carousel"</code> to initialize your carousel, you have to initialize it yourself.
    <b>It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.</b>
  </p> -->
  <!-- ### Via JavaScript

カルーセルを手動で呼び出す場合：
Call carousel manually with:

```js
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
``` -->

  <!-- <h3>Options</h3> -->

  <!-- オプションは、データ属性またはJavaScriptを介して渡すことができます。 データ属性の場合は、 data-bs-interval="" のように、オプション名を data-bs-に追加します。
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-interval=""`. -->

  <!-- <docs-options-carousel /> -->

  <!-- <h3>Methods</h3>

  <h5>
    danger
    {{< partial "callout-danger-async-methods.md" >}}
  </h5>
  <p>
    たとえば、カルーセルコンストラクターでカルーセルインスタンスを作成して、追加のオプションで初期化し、アイテムの循環を開始できます。
    You can create a carousel instance with the carousel constructor, for example, to initialize with additional options and start cycling through items:
  </p> -->
  <!-- ```js
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
``` -->

  <!-- <docs-methods-carousel /> -->

  <!-- <h3>Events</h3>
  <p>
    ブートストラップのカルーセルクラスは、カルーセル機能にフックするための2つのイベントがあります。どちらのイベントにも次の追加プロパティがあります。
    Bootstrap's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:
  </p>
  <ul>
    <li> <code>direction</code>: カルーセルがスライドする方向（「左」または「右」のいずれか）。The direction in which the carousel is sliding (either <code>"left"</code> or <code>"right"</code>).</li>
    <li> <code>relatedTarget</code>: アクティブなアイテムとしてスライドされている DOM 要素。The DOM element that is being slid into place as the active item.</li>
    <li> <code>from</code>: 現在のアイテムのインデックス The index of the current item</li>
    <li> <code>to</code>: 次の項目のインデックス The index of the next item</li>
  </ul>
  <p>
    すべてのカルーセルイベントはカルーセル自体で発生します。 (i.e. at the <code>&lt;div class="carousel"&gt;</code>).
    All carousel events are fired at the carousel itself (i.e. at the <code>&lt;div class="carousel"&gt;</code>).
  </p> -->
  <!-- <docs-events-carousel /> -->

  <!-- ```js
var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})
``` -->
</template>