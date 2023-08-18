
<script setup lang="ts">
definePageMeta({
 title: 'Range',
 description: 'カスタムレンジ入力を使用すると、クロスブラウザで一貫したスタイリングが可能になり、カスタマイズも可能です。 Use our custom range inputs for consistent cross-browser styling and built-in customization.'
})
</script>
 
<template>
  <!---
 title: Range
 description: カスタムレンジ入力を使用すると、クロスブラウザで一貫したスタイリングが可能になり、カスタマイズも可能です。 Use our custom range inputs for consistent cross-browser styling and built-in customization.
 --->

  <h2>Overview</h2>

  <p>
    <code>FormRange</code> コンポーネントを適用します。track(background) と thumb(value) は、ブラウザ間で同じように表示されるようにスタイリングされています。 進行状況を視覚的に示す手段として、左または右からトラックを「埋める」ことをサポートしているのは Firefox だけなので、現時点ではサポートしていません。
    Create custom <code>FormRange</code> controls with <code>.form-range</code>. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-range-overview />
    </Example>
    <ExamplesCode
      path="/forms/range/overview.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
 ::: code-group-item useBootstrap
 @[code](@examples/forms/range/overview.vue)
 :::
 ::: code-group-item bootstrap5
 @[code](@examples/forms/range/overview.html)
 :::
 :::: -->

  <h2>Disabled</h2>

  <p>
    コンポーネントに <code>Disabled</code> というブーリアン属性を追加すると、グレーアウトしたような外観になり、ポインターイベントが削除されます。
    Add the <code>Disabled</code> boolean attribute on an input to give it a grayed out appearance and remove pointer events.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-range-disabled />
    </Example>
    <ExamplesCode
      path="/forms/range/disabled.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
 ::: code-group-item useBootstrap
 @[code](@examples/forms/range/disabled.vue)
 :::
 ::: code-group-item bootstrap5
 @[code](@examples/forms/range/disabled.html)
 :::
 :::: -->

  <h2>Min and max</h2>
  <p>
    範囲入力には、<code>min</code>と<code>max</code>の暗黙の値があり、それぞれ<code>0</code>と<code>100</code>となっています。これらの値は <code>min</code> と <code>max</code> 属性を使って新たに指定することができます。
    Range inputs have implicit values for <code>min</code> and <code>max</code>—<code>0</code> and <code>100</code>, respectively. You may specify new values for those using the <code>min</code> and <code>max</code> attributes.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-range-min-max />
    </Example>
    <ExamplesCode
      path="/forms/range/min-max.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
 ::: code-group-item useBootstrap
 @[code](@examples/forms/range/min-max.vue)
 :::
 ::: code-group-item bootstrap5
 @[code](@examples/forms/range/min-max.html)
 :::
 :::: -->

  <h2>Steps</h2>
  <p>
    デフォルトでは、レンジ入力は整数値に “snap” します。これを変更するには、<code>step</code> の値を指定することができます。以下の例では、<code>step="0.5"</code> を用いてステップ数を 2 倍にしています。
    By default, range inputs "snap" to integer values. To change this, you can specify a <code>step</code> value. In the example below, we double the number of steps by using <code>step="0.5"</code>.
  </p>
  
  <Snippet>
    <Example>
      <examples-forms-range-steps />
    </Example>
    <ExamplesCode
      path="/forms/range/steps.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
 ::: code-group-item useBootstrap
 @[code](@examples/forms/range/steps.vue)
 :::
 ::: code-group-item bootstrap5
 @[code](@examples/forms/range/steps.html)
 :::
 :::: -->

  <!-- ## Sass
 
 ### Variables -->

  <!-- {{< scss-docs name="form-range-variables" file="scss/_variables.scss" >}} -->
</template>