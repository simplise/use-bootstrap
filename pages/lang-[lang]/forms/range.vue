
<script setup lang="ts">
definePageMeta({
  'title:en': 'Range',
  'description:en': `Use our custom range inputs for consistent cross-browser styling and built-in customization.`,
  'title:ja': 'レンジ',
  'description:ja': 'カスタムレンジ入力を使用すると、クロスブラウザで一貫したスタイリングが可能になり、カスタマイズも可能です。'
})
</script>
 
<template>
  <h2>Overview</h2>
  <Localization>
    <template #en>
      <p>Create  <code>FormRange</code> component. </p>
      <p>The track (the background) and thumb (the value) are both styled to appear the same across browsers. </p>
    </template>
    <template #ja>
      <p><code>FormRange</code> コンポーネントを適用します。</p>
      <p>track(background) と thumb(value) は、ブラウザ間で同じように表示されるようにスタイリングされています。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-forms-range-overview />
    </Example>
    <ExamplesCode
      path="/forms/range/overview.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Disabled</h2>
  <Localization>
    <template #en>
      <p>Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance and remove pointer events.</p>
    </template>
    <template #ja>
      <p>コンポーネントに <code>disabled</code> というブーリアン属性を追加すると、グレーアウトしたような外観になり、ポインターイベントが削除されます。</p>
    </template>
  </Localization>
  
  
  <Snippet>
    <Example>
      <examples-forms-range-disabled />
    </Example>
    <ExamplesCode
      path="/forms/range/disabled.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Min and max</h2>
  <Localization>
    <template #en>
      <p>Range inputs have implicit values for <code>min</code> and <code>max</code>—<code>0</code> and <code>100</code>, respectively. </p>
      <p>You may specify new values for those using the <code>min</code> and <code>max</code> attributes.</p>
    </template>
    <template #ja>
      <p>範囲入力には、<code>min</code>と<code>max</code>の暗黙の値があり、それぞれ<code>0</code>と<code>100</code>となっています。</p>
      <p>これらの値は <code>min</code> と <code>max</code> 属性を使って新たに指定することができます。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-forms-range-min-max />
    </Example>
    <ExamplesCode
      path="/forms/range/min-max.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Steps</h2>
  <Localization>
    <template #en>
      <p>By default, range inputs "snap" to integer values. To change this, you can specify a <code>step</code> value. </p>
      <p>In the example below, we double the number of steps by using <code>step="0.5"</code>.</p>
    </template>
    <template #ja>
      <p>デフォルトでは、レンジ入力は整数値に “snap” します。これを変更するには、<code>step</code> の値を指定することができます。</p>
      <p>以下の例では、<code>step="0.5"</code> を用いてステップ数を 2 倍にしています。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-forms-range-steps />
    </Example>
    <ExamplesCode
      path="/forms/range/steps.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass
 
 ### Variables -->

  <!-- {{< scss-docs name="form-range-variables" file="scss/_variables.scss" >}} -->
</template>