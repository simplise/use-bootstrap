<script setup lang="ts">
definePageMeta({
  title: `フレックス Flex`,
  description: `レスポンシブな flexbox ユーティリティを使って, グリッドカラム, ナビゲーション, コンポーネントなどをレイアウト, 整列, サイズ調整をすばやく設定できます。より複雑な実装の場合は, カスタム CSS が必要になる場合があります。 Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.`
})
</script>

<template>
  <!---
title: フレックス Flex
description: レスポンシブな flexbox ユーティリティを使って, グリッドカラム, ナビゲーション, コンポーネントなどをレイアウト, 整列, サイズ調整をすばやく設定できます。より複雑な実装の場合は, カスタム CSS が必要になる場合があります。 Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
--->

  <h2>フレックス Flex</h2>

  <p>
    レスポンシブな flexbox ユーティリティを使って, グリッドカラム, ナビゲーション, コンポーネントなどをレイアウト, 整列, サイズ調整をすばやく設定できます。より複雑な実装の場合は, カスタム CSS が必要になる場合があります。
  </p>

  <p>
    Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
  </p>

  <h3>Enable flex behaviors</h3>

  <p>
    display クラスを適用して flexbox コンテナを作成し, 直下の子要素 を flex アイテムに変換します。 Flex コンテナとアイテムは, フレックスプロパティを追加することでさらに変更することができます。
  </p>

  <!--太字箇所あります-->
  <p>
    Apply <code>display</code> utilities to create a flexbox container and transform <!--太字-->**direct children elements** into flex items. Flex containers and items are able to be modified further with additional flex properties.
  </p>

  ---

  <Snippet>
    <Example flex>
      <examples-utilities-flex-enable-1 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/enable-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/enable-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/enable-1.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-enable-2 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/enable-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/enable-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/enable-2.html)
:::
:::: -->

  <p>
    Responsive variations also exist for <code>display="flex</code> and <code>display="inline-flex</code>.
  </p>

  <ul>
    <li><code>display="flex"</code> </li>
    <li><code>display="inline-flex"</code></li>
    <li><code>display="sm-flex"</code></li>
    <li><code>display="sm-inline-flex"</code></li>
    <li><code>display="md-flex"</code></li>
    <li><code>display="md-inline-flex"</code></li>
    <li><code>display="lg-flex"</code></li>
    <li><code>display="lg-inline-flex"</code></li>
    <li><code>display="xl-flex"</code></li>
    <li><code>display="xl-inline-flex"</code></li>
    <li><code>display="xxl-flex"</code></li>
    <li><code>display="xxl-inline-flex"</code></li>
  </ul>
  <h2>Direction</h2>

  <p>
    direction utilities を使って Flex アイテムの向きを設定します。ほとんどのブラウザでデフォルトは <code>row</code> なので, ここでは水平クラスを省略できます。しかし, この値を明示的に設定する必要があるかもしれません(レスポンシブレイアウトで切り替える場合など)。
  </p>

  <p>
    Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is <code>row</code>. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).
  </p>

  <p>
    水平方向(デフォルト)を設定するには <code>flex-direction="flex-row"</code>, 反対側から水平方向を開始するには <code>flex-direction="row-reverse"</code> を使用します。
  </p>

  <p>
    Use <code>flex-direction="row"</code> to set a horizontal direction (the browser default), or <code>flex-direction="row-reverse"</code> to start the horizontal direction from the opposite side.
  </p>

  ---

  <Snippet>
    <Example flex>
      <examples-utilities-flex-direction-row />
    </Example>
    <ExamplesCode
      path="/utilities/flex/direction-row.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group

::: code-group-item useBootstrap
@[code](@examples/utilities/flex/direction-row.vue)
:::

::: code-group-item bootstrap5
@[code](@examples/utilities/flex/direction-row.html)
:::
:::: -->

  <p>
    垂直方向を設定するには <code>flex-direction="column"</code>, 下から開始するには `flex-direction="column-reverse"` を使用します。
  </p>

  <p>
    Use <code>flex-direction="column"</code> to set a vertical direction, or <code>flex-direction="column-reverse"</code> to start the vertical direction from the opposite side.
  </p>

  ---

  <Snippet>
    <Example flex>
      <examples-utilities-flex-direction-column />
    </Example>
    <ExamplesCode
      path="/utilities/flex/direction-column.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group

::: code-group-item useBootstrap
@[code](@examples/utilities/flex/direction-column.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/direction-column.html)
:::
:::: -->

  <p>
    flex-direction にもレスポンシブユーティリティがあります。
  </p>

  <p>
    Responsive variations also exist for <code>flex-direction</code>.
  </p>

  <h3>Justify content</h3>

  <p>
    <code>justify-content</code> 属性を使用して, Flex アイテムの主軸(<code>flex-direction: column</code> の場合は x 軸を始点とし, y 軸)上の配置を変更します。<code>start</code> (デフォルト), <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>, <code>evenly</code> から選択できます。
  </p>

  <p>
    Use <code>justify-content</code> attribute on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <code>flex-direction: column</code>). Choose from <code>start</code> (browser default), <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>, or <code>evenly</code>.
  </p>

  ---

  <Snippet>
    <Example flex>
      <examples-utilities-flex-justify-content />
    </Example>
    <ExamplesCode
      path="/utilities/flex/justify-content.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group

::: code-group-item useBootstrap
@[code](@examples/utilities/flex/justify-content.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/justify-content.html)
:::
:::: -->

  <p>
    <code>justify-content</code> にもレスポンシブユーティリティがあります。
  </p>

  Responsive variations also exist for <code>justify-content</code>.

  <h2>Align items</h2>

  <p>
    <code>align-items</code> 属性を使用して, Flex アイテムのクロス軸(<code>flex-direction: column</code> の場合は x 軸を始点とし, y 軸)上の配置を変更します。<code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, <code>stretch</code> (デフォルト) から選択できます。
  </p>

  <p>
    Use <code>align-items</code> attribute on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).
  </p>

  ---

  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-items />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-items.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group

::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-items.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-items.html)
:::
:::: -->

  <p>
    <code>align-items</code> にもレスポンシブユーティリティがあります。
  </p>

  <p>
    Responsive variations also exist for <code>align-items</code>.
  </p>


  <Snippet>
    <Example flex>
      <docs-descriptions-flex-align-item />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-item.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Align self</h2>

  <p>
    <code>align-self</code> 属性を使用して, Flex アイテムのクロス軸(<code>flex-direction: column</code> の場合は x 軸を始点とし, y 軸)上の配置を個別に変更します。<code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, <code>stretch</code> (デフォルト) から選択できます。
  </p>

  <p>
    Use <code>align-self</code> attribute on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from the same options as <code>align-items</code>: <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).
  </p>

  ---


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-self />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-self.vue"
      lang="vue"
    />
  </Snippet>

  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-self.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-self.html)
:::
:::: -->

  <p>
    <code>align-self</code> にもレスポンシブ utilities があります。
  </p>

  <p>
    Responsive variations also exist for <code>align-self</code>.
  </p>
  <!--読み込まれいていないnav components-->
  <docs-descriptions-flex-align-self />


  <h2>Fill</h2>

  <p>
    兄弟要素に <code>flex-fill</code> を適用すると, 利用可能な水平スペースをすべて使って, それらの要素をコンテンツと同じ幅(コンテンツがボーダーボックスを超えていない場合は同じ幅)に強制的に配置します。
  </p>

  <p>
    Use the <code>flex-fill</code> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.
  </p>



  <Snippet>
    <Example flex>
      <examples-utilities-flex-fill />
    </Example>
    <ExamplesCode
      path="/utilities/flex/fill.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/fill.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/fill.html)
:::
:::: -->

  <p>
    <code>flex-fill</code> にもレスポンシブ utilities があります。
  </p>

  <p>
    Responsive variations also exist for <code>flex-fill</code>.
  </p>

  <!--読み込まれていないnav components-->
  <docs-descriptions-flex-fill />


  <h2>Grow and shrink</h2>

  <p>
    <code>flex-grow-*</code> 属性を使うと, Flex アイテムが利用可能なスペースを埋めるように伸長するかどうかを切り替えることができます。下の例では, `flex-grow="grow-1"` 要素は利用可能なスペースをすべて使い, 残りの 2 つの Flex アイテムは必要なスペースを確保しています。
  </p>

  <p>
    Use <code>flex-grow-*</code> attribute to toggle a flex item's ability to grow to fill available space. In the example below, the <code>flex-grow="grow-1"</code> elements uses all available space it can, while allowing the remaining two flex items their necessary space.
  </p>

  <!--読み込まれていないcomponents-->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-grow-shrink-1 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/grow-shrink-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/grow-shrink-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/grow-shrink-1.html)
:::
:::: -->

  <p>
    必要に応じて Flex アイテムの縮小を切り替えるには <code>flex-shrink</code> 属性を利用します。 下の例では, <code>flex-shrink="1"</code> を指定した2番目の Flex アイテムは, <code>width="100"</code> を指定した前の Flex アイテムのためのスペースを確保するために “縮小” して内容を改行するように強制されています。
  </p>

  <p>
    Use <code>flex-shrink</code> attributes to toggle a flex item's ability to shrink if necessary. In the example below, the second flex item with <code>flex-shrink="1"</code> is forced to wrap its contents to a new line, "shrinking" to allow more space for the previous flex item with <code>width="100"</code>.
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-grow-shrink-2 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/grow-shrink-2.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/grow-shrink-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/grow-shrink-2.html)
:::
:::: -->
  <p>
    <code>flex-grow</code>, <code>flex-shrink</code> にもレスポンシブユーティリティがあります。
  </p>
  <p>
    Responsive variations also exist for <code>flex-grow</code> and <code>flex-shrink</code>.
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-grow-shrink-3 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/grow-shrink-3.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/grow-shrink-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/grow-shrink-3.html)
:::
:::: -->

  <h2>Auto margins</h2>

  <p>
    Flexbox は, Flex の配置と auto margin を組み合わせると非常に便利です。以下に示すのは, auto margin でFlex アイテムを制御する 3つの例です: デフォルト(auto margin なし), 2 アイテムを右寄せ (<code>margin="e-auto"</code>), 2 アイテムを左寄せ (<code>margin="s-auto"</code>)。
  </p>

  <p>
    Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<code>margin="e-auto"</code>), and pushing two items to the left (<code>margin="s-auto"</code>).
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-automargins />
    </Example>
    <ExamplesCode
      path="/utilities/flex/automargins.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/automargins.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/automargins.html)
:::
::::-->


  <h2>With align-items</h2>

  <p>
    <code>align-items</code>, <code>flex-direction="column"</code>, <code>margin="t-auto"</code>, <code>margin="b-auto"</code> を組み合わせて, Flex アイテムをコンテナの上部または下部に垂直に配置できます。
  </p>

  <p>
    Vertically move one flex item to the top or bottom of a container by mixing <code>align-items</code>, <code>flex-direction="column"</code>, and <code>margin="t-auto"</code> or <code>margin="b-auto"</code>.
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align.html)
:::
:::: -->

  <h2>Wrap</h2>

  <p>
    Flex アイテムの折り返しを変更します。デフォルトは <code>flex-wrap="nowrap"</code> で全く折り返しなし, <code>flex-wrap="wrap"</code> で折り返し, <code>flex-wrap="wrap-reverse"</code> で逆方向でかつ折り返しを設定できます。
  </p>

  <p>
    Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with <code>flex-wrap="nowrap"</code>, wrapping with <code>flex-wrap="wrap"</code>, or reverse" wrapping with <code>flex-wrap="wrap-reverse</code>.
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-wrap-1 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/wrap-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/wrap-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/wrap-1.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-wrap-2 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/wrap-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/wrap-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/wrap-2.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-wrap-3 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/wrap-3.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/wrap-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/wrap-3.html)
:::
:::: -->

  <p>
    <code>flex-warp</code> にもレスポンシブ utilities があります。
  </p>

  <p>
    Responsive variations also exist for <code>flex-wrap</code>.
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-wrap-4 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/wrap-4.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/wrap-4.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/wrap-4.html)
:::
::::-->

  <h2>Order</h2>

  <p>
    <code>flex-order</code> 属性で Flex アイテムの見栄え上の順番を変更します。アイテムを最初か最後にするオプションと, DOM の順序を使用するためのリセットのみを提供しています。<code>flex-order</code> は 0 から 5 までの任意の整数値を取るので, 必要に応じてカスタム CSS を追加してください。
  </p>

  <p>
    Change the _visual_ order of specific flex items with a handful of <code>flex-order</code> ttribute. We only provide options for making an item first or last, as well as a reset to use the DOM order. As <code>flex-order</code> takes any integer value from 0 to 5, add custom CSS for any additional values needed.
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-order-1 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/order-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/order-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/order-1.html)
:::
:::: -->

  <p>
    <code>flex-order</code> にもレスポンシブ utilities があります。
  </p>

  <p>
    Responsive variations also exist for <code>flex-order</code>.
  </p>
  <!--反映されていないnav components-->
  <docs-descriptions-flex-order1 />

  <p>
    さらに, レスポンシブな <code>flex-order="first"</code> と <code>flex-order="last"</code> クラスもあり, それぞれ <code>flex-order="-1"</code> と <code>flex-order="6"</code> を適用して要素の <code>flex-order</code> を変更します。
  </p>

  <p>
    Additionally there are also responsive <code>flex-order="first"</code> and <code>flex-order="last"</code> classes that change the <code>flex-order</code> of an element by applying <code>flex-order="-1"</code> and <code>flex-order="6"</code>, respectively.
  </p>
  <!--反映されていないnav components-->
  <docs-descriptions-flex-order2 />

  <h2>Align content</h2>

  <p>
    Flex コンテナ上の<code>align-content</code> 属性を使用して, Flex アイテムをクロス軸上に全体的に揃えることができます。<code>start</code> (デフォルト), <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>, <code>stretch</code> から選択します。 ここでは, デモのために <code>flex-wrap="wrap"</code> を指定し Flex アイテムの数を増やしています。
  </p>

  <p>
    Use <code>align-content</code> attribute on flexbox containers to align flex items *together* on the cross axis. Choose from <code>start</code> (browser default), <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>, or <code>stretch</code>. To demonstrate these utilities, we've enforced <code>flex-wrap="wrap"</code> and increased the number of flex items.
  </p>

  <p><b>注意</b> このプロパティは, Flex アイテムの単一行には影響しません。</p>

  <p><b>Heads up!</b> This property has no effect on single rows of flex items.</p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-content-1 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-content-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-content-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-content-1.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-content-2 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-content-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-content-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-content-2.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-content-3 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-content-3.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-content-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-content-3.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-content-4 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-content-4.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-content-4.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-content-4.html)
:::
:::: -->



  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-content-5 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-content-5.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-content-5.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-content-5.html)
:::
:::: -->


  <Snippet>
    <Example flex>
      <examples-utilities-flex-align-content-6 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/align-content-6.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/align-content-6.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/align-content-6.html)
:::
:::: -->

  <p>
    <code>align-content</code> にもレスポンシブ utilities があります。
  </p>

  <p>
    Responsive variations also exist for <code>align-content</code>.
  </p>

  <!--表示されていない-->
  <docs-descriptions-flex-align-content />


  <h3>Media object</h3>

  <p>
    Bootstrap4 <a href="https://getbootstrap.com/docs/4.6/components/media-object/">media object component</a>の再現が必要な場合は、 以前よりもさらに柔軟性とカスタマイズが可能ないくつかの flex utilities を使用して再現できます。
  </p>

  <p>
    Looking to replicate the <a href="https://getbootstrap.com/docs/4.6/components/media-object/">media object component</a>from Bootstrap 4? Recreate it in no time with a few flex utilities that allow even more flexibility and customization than before.
  </p>

  <!--表示されていないコンポーネント-->

  <Snippet>
    <Example flex>
      <examples-utilities-flex-media-1 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/media-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/media-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/media-1.html)
:::
::::-->

  <p>
    画像の横にあるコンテンツを垂直方向に中央に配置したい場合
  </p>

  <p>
    And say you want to vertically center the content next to the image:
  </p>


  <Snippet>
    <Example flex>
      <examples-utilities-flex-media-2 />
    </Example>
    <ExamplesCode
      path="/utilities/flex/media-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/flex/media-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/flex/media-2.html)
:::
:::: -->

  <!-- ## Sass

### Utilities API

Flexbox utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->
  <!--
{{< scss-docs name="utils-flex" file="scss/_utilities.scss" >}}
-->
</template>