<script setup lang="ts">
definePageMeta({
  title: `プログレス Progress`,
  description: `プログレスバーを使用するためのドキュメントと例を示します。Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.`
})
</script>

<template>
  <!---
title: 
description: 
--->

  <h2>How it works</h2>
  <p>
    Progressコンポーネントは、2つのHTML要素、幅を設定するためのCSS、およびいくつかの属性で構築されています。 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 progress element</a> を使用しないため、プログレスバーを積み重ねてアニメーション化できます、その上にテキストラベルを配置します。
    Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 progress element</a> , ensuring you can stack progress bars, animate them, and place text labels over them.
  </p>
  <ul>
    <li> 進行状況バーの最大値を示すラッパーとして <code>Progress</code> コンポーネントを使用します。 We use the <code>Progress</code> component as a wrapper to indicate the max value of the progress bar.</li>
    <li> 内部の <code>ProgressBar</code> コンポーネントを使用して、これまでの進捗状況を示します。 We use the inner <code>ProgressBar</code> component to indicate the progress so far.</li>
    <li> <code>ProgressBar</code> コンポーネントの幅を設定するには、インラインスタイル、ユーティリティクラス、またはカスタムCSSが必要です。 The <code>ProgressBar</code> component requires an inline style, utility class, or custom CSS to set their width.</li>
    <li> <code>ProgressBar</code> コンポーネントには、アクセス可能にするためにいくつかの <code>role</code> および <code>aria</code> 属性も必要です。 The <code>ProgressBar</code> component also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
  </ul>
  <p>
    これらすべてを組み合わせると、次の例のようになります。
    Put that all together, and you have the following examples.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-few />
    </Example>
    <ExamplesCode
      path="/components/progress/few.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/few.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/few.html)
:::
:::: -->
  <!-- <p class="mt-3">
    <LocalLink to="/utilities/sizing">
      utilities for setting width
    </LocalLink>によって、必要に応じて、進行状況の構成をします。これらは進行状況の迅速な構成に役立ちます。
    Bootstrap provides a handful of <LocalLink to="utilities/sizing">
      utilities for setting width
    </LocalLink>. Depending on your needs, these may help with quickly configuring progress.
  </p> -->
  <Snippet>
    <Example>
      <examples-components-progress-bar />
    </Example>
    <ExamplesCode
      path="/components/progress/bar.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/bar.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/bar.html)
:::
:::: -->

  <h2 class="mt-3">
    Labels
  </h2>
  <p>
    <code>ProgressBar</code> コンポーネント内にテキストを配置して、プログレスバーにラベルを追加します。
    Add labels to your progress bars by placing text within the <code>ProgressBar</code> component.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-label />
    </Example>
    <ExamplesCode
      path="/components/progress/label.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/label.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/label.html)
:::
:::: -->

  <h2 class="mt-3">
    Height
  </h2>
  <p>
    <code>Progress</code> コンポーネントには <code>height</code> 値のみを設定するため、その値を変更すると、内側の <code>ProgressBar</code> コンポーネントはそれに応じて自動的にサイズ変更されます。
    We only set a <code>height</code> value on the <code>Progress</code> component, so if you change that value the inner <code>ProgressBar</code> component will automatically resize accordingly.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-height />
    </Example>
    <ExamplesCode
      path="/components/progress/height.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/height.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/height.html)
:::
:::: -->

  <h2 class="mt-3">
    Backgrounds
  </h2>
  <p>
    バックグラウンドユーティリティクラスを使用して、個々のプログレスバーの外観を変更します。
    Use background utility classes to change the appearance of individual progress bars.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-background />
    </Example>
    <ExamplesCode
      path="/components/progress/background.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/background.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/background.html)
:::
:::: -->

  <h2 class="mt-3">
    Multiple bars
  </h2>
  <p>
    コンポーネントに複数の進行状況バーを含め流ことができます。
    Include multiple progress bars in a progress component if you need.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-multibar />
    </Example>
    <ExamplesCode
      path="/components/progress/multibar.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/multibar.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/multibar.html)
:::
:::: -->

  <h2 class="mt-3">
    Striped
  </h2>
  <p>
    プログレスバーの背景色の上にCSSグラデーションでストライプを適用するには、任意の <code>ProgressBar</code> コンポーネントに <code>striped</code> 属性を追加します。
    Add <code>striped</code> attribute to any <code>ProgressBar</code> component to apply a stripe via CSS gradient over the progress bar's background color.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-striped />
    </Example>
    <ExamplesCode
      path="/components/progress/striped.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/striped.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/striped.html)
:::
:::: -->

  <h2 class="mt-3">
    Animated stripes
  </h2>
  <p>
    縞模様のグラデーションもアニメーション化できます。 CSS3 アニメーションでストライプを右から左にアニメーション化するには、 <code>animated</code> 属性を <code>ProgressBar</code> コンポーネントに追加します。
    The striped gradient can also be animated. Add <code>animated</code> attribute to <code>ProgressBar</code> component to animate the stripes right to left via CSS3 animations.
  </p>
  <Snippet>
    <Example>
      <examples-components-progress-animated />
    </Example>
    <ExamplesCode
      path="/components/progress/animated.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/progress/animated.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/progress/animated.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- 
{{< scss-docs name="progress-variables" file="scss/_variables.scss" >}}
 -->

  <!-- ### Keyframes

Used for creating the CSS animations for `.progress-bar-animated`. Included in `scss/_progress-bar.scss`. -->

  <!-- 
{{< scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}
 -->
</template>