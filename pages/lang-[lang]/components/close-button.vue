

<script setup lang="ts">
definePageMeta({
  'title:en': 'Close button',
  'description:en': `A generic close button for dismissing content like modals and alerts.`,
  'title:ja': 'クローズボタン',
  'description:ja': 'モーダルやアラートなどのコンテンツを閉じるための汎用的なクローズボタンです。'
})
</script>

<template>
  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Provide an option to dismiss or close a component with <code>CloseButton</code> component.</p>
      <p>Default styling is limited, but highly customizable.</p>
      <p>Modify the Sass variables to replace the default <code>background-image</code>.</p>
    </template>
    <template #ja>
      <p><code>CloseButton</code> コンポーネントを使用してコンポーネントを閉じるオプションを提供します。 </p>
      <p>デフォルトのスタイルは制限されていますが, カスタマイズできます。 </p>
      <p>Sass変数を変更して、デフォルトの <code>background-image</code>を置き換えます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-close-button-example />
    </Example>
    <ExamplesCode
      path="/components/close-button/example.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Disabled state</h2>
  <Localization>
    <template #en>
      <p>Disabled close buttons change their <code>disabled</code> attribute. </p>
      <p>We've also applied <code>pointer-events='none'</code> and <code>user-select='none'</code> to preventing hover and active states from triggering.</p>
    </template>
    <template #ja>
      <p>無効にした閉じるボタンは、<code>disabled</code> 属性を追加します。</p>
      <p>また、 <code>pointer-events='none'</code> や <code>user-select='none'</code> を適用して、ホバー状態とアクティブ状態がトリガーされないようにできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-close-button-disabled-state />
    </Example>
    <ExamplesCode
      path="/components/close-button/disabled-state.vue"
      lang="vue"
    />
  </Snippet>

  <h2>White variant</h2>
  <Localization>
    <template #en>
      <p>Change the default <code>CloseButton</code> component to be white with the <code>white</code> class.</p>
      <p>This class uses the <code>filter</code> attribute to invert the <code>background-image</code>.</p>
    </template>
    <template #ja>
      <p>デフォルトの <code>CloseButton</code> コンポーネントを <code>white</code> クラスで白に変更します。</p>
      <p>このクラスは、 <code>filter</code> 属性を使用して <code>background-image</code> を反転します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-close-button-white-variant />
    </Example>
    <ExamplesCode
      path="/components/close-button/white-variant.vue"
      lang="vue"
    />
  </Snippet>
</template>