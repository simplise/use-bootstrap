

<script setup lang="ts">
definePageMeta({
  title: `クローズボタン Close button`,
  description: `モーダルやアラートなどのコンテンツを閉じるための汎用的なクローズボタンです。A generic close button for dismissing content like modals and alerts.`
})
</script>

<template>
  <h2>Example</h2>
  <p>
    <code>CloseButton</code> コンポーネントを使用してコンポーネントを閉じるかオプションを提供します。 デフォルトのスタイルは制限されていますが, カスタマイズできます。 Sass変数を変更して、デフォルトの <code>background-image</code>を置き換えます。 <code>aria-label</code>で行ったように、<b>スクリーンリーダー用のテキストを含めてください</b>
    Provide an option to dismiss or close a component with <code>CloseButton</code> component. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default <code>background-image</code>. <b>Be sure to include text for screen readers</b>, as we've done with <code>aria-label</code>.
  </p>
  <Snippet>
    <Example>
      <examples-components-close-button-example />
    </Example>
    <ExamplesCode
      path="/components/close-button/example.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/close-button/example.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/close-button/example.html)
:::
:::: -->

  <h2>Disabled state</h2>
  <p>
    無効にした閉じるボタンは、<code>disabled</code> 属性を追加します。また、 <code>pointer-events: none</code> や <code>user-select: none</code> を適用して、ホバー状態とアクティブ状態がトリガーされないようにできます。
    Disabled close buttons change their <code>disabled</code> attribute. We've also applied <code>pointer-events: none</code> and <code>user-select: none</code> to preventing hover and active states from triggering.
  </p>
  <Snippet>
    <Example>
      <examples-components-close-button-disabled-state />
    </Example>
    <ExamplesCode
      path="/components/close-button/disabled-state.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/close-button/disabled-state.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/close-button/disabled-state.html)
:::
::::-->

  <h2>White variant</h2>
  <p>
    デフォルトの <code>CloseButton</code> コンポーネントを <code>white</code> クラスで白に変更します。このクラスは、 <code>filter</code> 属性を使用して <code>background-image</code> を反転します。
    Change the default <code>CloseButton</code> component to be white with the <code>white</code> class. This class uses the <code>filter</code> attribute to invert the <code>background-image</code>.
  </p>
  <Snippet>
    <Example>
      <examples-components-close-button-white-variant />
    </Example>
    <ExamplesCode
      path="/components/close-button/white-variant.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/close-button/white-variant.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/close-button/white-variant.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="close-variables" file="scss/_variables.scss" >}} -->
</template>