<script setup lang="ts">
definePageMeta({
  'title:en': 'Popovers',
  'description:en': `Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.`,
  'title:ja': 'プログレス',
  'description:ja': 'プログレスバーを使用するためのドキュメントと例を示します。'
})
</script>

<template>
  <h2>How it works</h2>
  <Localization>
    <template #en>
      <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
      <p>We don't use the HTML5 progress element, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
    </template>
    <template #ja>
      <p>Progressコンポーネントは、2つのHTML要素、幅を設定するためのCSS、およびいくつかの属性で構築されています。</p>
      <p>the HTML5 progress element を使用しないため、プログレスバーを積み重ねてアニメーション化できます、その上にテキストラベルを配置します。</p>
    </template>
  </Localization>
  
  <Localization>
    <template #en>
      <p>We use the <code>Progress</code> component as a wrapper to indicate the max value of the progress bar.</p>
      <p>We use the inner <code>ProgressBar</code> component to indicate the progress so far.</p>
      <p>The <code>ProgressBar</code> component requires an inline style, utility class, or custom CSS to set their width.</p>
      <p>The <code>ProgressBar</code> component also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</p>
    </template>
    <template #ja>
      <p>進行状況バーの最大値を示すラッパーとして <code>Progress</code> コンポーネントを使用します。</p>
      <p>内部の <code>ProgressBar</code> コンポーネントを使用して、これまでの進捗状況を示します。</p>
      <p><code>ProgressBar</code> コンポーネントの幅を設定するには、インラインスタイル、ユーティリティクラス、またはカスタムCSSが必要です。</p>
      <p><code>ProgressBar</code> コンポーネントには、アクセス可能にするためにいくつかの <code>role</code> および <code>aria</code> 属性も必要です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-progress-few />
    </Example>
    <ExamplesCode
      path="/components/progress/few.vue"
      lang="vue"
    />
  </Snippet>



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


  <h2 class="mt-3">
    Labels
  </h2>
  <Localization>
    <template #en>
      <p>Add labels to your progress bars by placing text within the <code>ProgressBar</code> component.</p>
    </template>
    <template #ja>
      <p><code>ProgressBar</code> コンポーネント内にテキストを配置して、プログレスバーにラベルを追加します。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-components-progress-label />
    </Example>
    <ExamplesCode
      path="/components/progress/label.vue"
      lang="vue"
    />
  </Snippet>



  <h2 class="mt-3">
    Height
  </h2>
  <Localization>
    <template #en>
      <p>We only set a <code>height</code> value on the <code>Progress</code> component, so if you change that value the inner <code>ProgressBar</code> component will automatically resize accordingly.</p>
    </template>
    <template #ja>
      <p><code>Progress</code> コンポーネントには <code>height</code> 値のみを設定するため、その値を変更すると、内側の <code>ProgressBar</code> コンポーネントはそれに応じて自動的にサイズ変更されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-progress-height />
    </Example>
    <ExamplesCode
      path="/components/progress/height.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Backgrounds
  </h2>
  <Localization>
    <template #en>
      <p>Use background utility classes to change the appearance of individual progress bars.</p>
    </template>
    <template #ja>
      <p>バックグラウンドユーティリティクラスを使用して、個々のプログレスバーの外観を変更します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-progress-background />
    </Example>
    <ExamplesCode
      path="/components/progress/background.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Multiple bars
  </h2>
  <Localization>
    <template #en>
      <p>Include multiple progress bars in a progress component if you need.</p>
    </template>
    <template #ja>
      <p>コンポーネントに複数の進行状況バーを含め流ことができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-progress-multibar />
    </Example>
    <ExamplesCode
      path="/components/progress/multibar.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Striped
  </h2>
  <Localization>
    <template #en>
      <p>Add <code>striped</code> attribute to any <code>ProgressBar</code> component to apply a stripe via CSS gradient over the progress bar's background color.</p>
    </template>
    <template #ja>
      <p>プログレスバーの背景色の上にCSSグラデーションでストライプを適用するには、任意の <code>ProgressBar</code> コンポーネントに <code>striped</code> 属性を追加します。</p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-components-progress-striped />
    </Example>
    <ExamplesCode
      path="/components/progress/striped.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Animated stripes
  </h2>
  <Localization>
    <template #en>
      <p>The striped gradient can also be animated. Add <code>animated</code> attribute to <code>ProgressBar</code> component to animate the stripes right to left via CSS3 animations.</p>
    </template>
    <template #ja>
      <p>縞模様のグラデーションもアニメーション化できます。 CSS3 アニメーションでストライプを右から左にアニメーション化するには、 <code>animated</code> 属性を <code>ProgressBar</code> コンポーネントに追加します。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-components-progress-animated />
    </Example>
    <ExamplesCode
      path="/components/progress/animated.vue"
      lang="vue"
    />
  </Snippet>
</template>