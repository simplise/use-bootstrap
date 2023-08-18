<script setup lang="ts">
definePageMeta({
  title: 'Containers',
  description: 'コンテナは、Bootstrap 基本的なレイアウト要素であり、特定のデバイスやビューポート内のコンテンツに適切な余白を与え整列させることができます。   Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.'
})
</script>

<template>
  <h2>How they work</h2>
  <p>
    コンテナは、Bootstrap の基本的なレイアウト要素であり、デフォルトのグリッドシステムを使用する際には必須です。コンテナは内部にコンテンツを格納したり、適切な余白を与えたり(場合によっては)中央に配置したりするために使われます。コンテナはネストできますが、ほとんどのレイアウトではネストする必要はありません。
    Containers are the most basic layout element in Bootstrap and are <b>required when using our default grid system</b>. Containers are used to contain, pad, and (sometimes) center the content within them. While containers _can_ be nested, most layouts do not require a nested container.
  </p>
  <p>
    Bootstrapには3つの異なるコンテナがあります。
    Bootstrap comes with three different containers:
  </p>
  <ul>
    <li> <code>Container</code> コンポーネントは各レスポンシブブレークポイントで <code>max-width</code> を設定します。<code>Container</code>, which sets a <code>max-width</code> at each responsive breakpoint </li>
    <li> <code>type="fluid"</code> 属性を指定した場合、すべてのブレークポイントで <code>width: 100%</code> となります。<code>type="fluid"</code>, which is <code>width: 100%</code> at all breakpoints </li>
    <li> <code>type="{breakpoint}"</code> は、指定されたブレークポイントまで <code>width: 100%</code> になります。<code>type="{breakpoint}"</code>, which is <code>width: 100%</code> until the specified breakpoint </li>
  </ul>
  <p>
    下の表は、各コンテナの <code>max-width</code> と元の <code>Container</code> および <code>type="fluid"</code> との比較を各ブレークポイントで示しています。
    The table below illustrates how each container's <code>max-width</code> compares to the original <code>Container</code> and <code>type="fluid"</code> across each breakpoint.
  </p>
  <!-- <p>
    これらを実際に見て比較するには、<LocalLink to="/examples/grid#containers">
      グリッドの例
    </LocalLink>を参照してください。
    See them in action and compare them in our <LocalLink to="/examples/grid#containers">
      Grid example
    </LocalLink>.
  </p> -->

  <docs-descriptions-containers-how />

  <h2>Default container</h2>
  <p>
    デフォルトの <code>Container</code> 固定幅でレスポンシブなコンテナです。
    Our default <code>Container</code> class is a responsive, fixed-width container, meaning its <code>max-width</code> changes at each breakpoint.
  </p>
  <examples-layout-container-default />

  <!--:::: code-group
  ::: code-group-item useBootstrap
  @[code](@examples/layout/container/default.vue)
  :::
  ::: code-group-item bootstrap5
  @[code](@examples/layout/container/default.html)
  :::
  :::: -->

  <h2>Responsive containers</h2>
  <p>
    レスポンシブコンテナは、指定したブレークポイントに到達するまで 100% の幅を持つクラスを指定することができます。その後はより高いブレークポイントごとに<code>max-width</code>が適用されます。 例えば <code>type="sm"</code> 属性は <code>sm</code> ブレークポイントに到達するまで 100% の幅で始まり、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> とスケールアップしていきます。
    Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply <code>max-width</code>s for each of the higher breakpoints. For example, <code>type="sm"</code> is 100% wide to start until the <code>sm</code> breakpoint is reached, where it will scale up with <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
  </p>
  <examples-layout-container-responsive />

  <!--:::: code-group
  ::: code-group-item useBootstrap
  @[code](@examples/layout/container/responsive.vue)
  :::
  ::: code-group-item bootstrap5
  @[code](@examples/layout/container/responsive.html)
  :::
  :::: -->

  <h2>Fluid containers</h2>
  <p>
    ビューポート幅のコンテナを使うには<code>Container</code> に <code>type="fluid"</code> 属性を追加してください。
    Use <code>type="fluid"</code> for a full width container, spanning the entire width of the viewport.
  </p>
  <examples-layout-container-fluid />

  <!--:::: code-group
  ::: code-group-item useBootstrap
  @[code](@examples/layout/container/fluid.vue)
  :::
  ::: code-group-item bootstrap5
  @[code](@examples/layout/container/fluid.html)
  :::
  :::: -->


  <!-- ## Sass -->

  <!--上記のように、Bootstrap は望むレイアウトを実現するクラスを生成できます。これらのクラスは Sass マップ(`_variables.scss` にあります)を修正することによってカスタマイズできます。
As shown above, Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_variables.scss`) that powers them:  -->

  <!-- {{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}} -->

  <!-- Sass をカスタマイズするだけでなく、Sass mixin を使って独自のコンテナも作成できます。
In addition to customizing the Sass, you can also create your own containers with our Sass mixin. -->

  <!-- ```scss
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}

// Usage
.custom-container {
  @include make-container();
}
```

Sass マップや変数などの詳細は、グリッドドキュメントの[Sassセクション](/layout/grid#sass) を参照してください。
For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](/layout/grid#sass). -->
</template>
