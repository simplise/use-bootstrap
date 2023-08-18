<script setup lang="ts">
definePageMeta({
  title: `ポジション Position`,
  description: `素早くポジションを設定します。 Use these shorthand utilities for quickly configuring the position of an element.`
})
</script>

<template>
  <!---
title: ポジション Position
description: 素早くポジションを設定します。 Use these shorthand utilities for quickly configuring the position of an element.
--->

  <h2>Position values</h2>

  <p>
    レスポンシブではありませんが、Position クラスを利用できます。
  </p>

  <p>
    Quick positioning classes are available, though they are not responsive.
  </p>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/position/values.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/position/values.html)
:::
:::: -->

  <h2>Arrange elements </h2>

  <p>
    edge positioning attribute を使用して、要素を簡単に配置できます。 形式は <code>position="{position}"</code>です。
  </p>

  <p>
    Arrange elements easily with the edge positioning utilities. The format is <code>position="{position}"</code>.
  </p>

  <p>
    property は次のいずれかです。
  </p>

  <p>
    Where <var>property</var> is one of:
  </p>

  <ul>
    <li> <code>top</code> - for the vertical <code>top</code> position </li>
    <li> <code>start</code> - for the horizontal <code>left</code> position (in LTR)</li>
    <li> <code>bottom</code> - for the vertical <code>bottom</code> position </li>
    <li> <code>end</code> - for the horizontal <code>right</code> position (in LTR) </li>
  </ul>

  <p>
    position は次のいずれかです。
  </p>

  <!--フォントが変わっている-->
  <p>
    Where <b>position</b> is one of:
  </p>
  <ul>
    <li> <code>0</code> - for <code>0</code> edge position</li>
    <li> <code>50</code> - for <code>50%</code> edge position</li>
    <li> <code>100</code> - for <code>100%</code> edge position</li>
  </ul>
  <!-- ($position-values Sassマップ変数にエントリを追加することで、位置を追加できます。) -->

  <!-- (You can add more position values by adding entries to the `$position-values` Sass map variable.) -->


  <Snippet>
    <Example>
      <examples-utilities-position-arrange />
    </Example>
    <ExamplesCode
      path="/utilities/position/arrange.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/position/arrange.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/position/arrange.html)
:::
:::: -->

  <h2>Center elements</h2>

  <p>
    transform utility attribute <code>translate="middle"</code>を使用して要素を中央に配置することもできます。
  </p>

  <p>
    In addition, you can also center the elements with the transform utility attribute <code>translate="middle"</code>.
  </p>

  <p>
    このクラスは、<code>translateX(-50%)</code> および <code>translateY(-50%)</code> を要素に適用します。edge positioning utilities と組み合わせて、要素を絶対的に中央に配置できます。
  </p>

  <p>
    This class applies the transformations <code>translateX(-50%)</code> and <code>translateY(-50%)</code> to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.
  </p>


  <Snippet>
    <Example>
      <examples-utilities-position-center-1 />
    </Example>
    <ExamplesCode
      path="/utilities/position/center-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/position/center-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/position/center-1.html)
:::
:::: -->
  <p>
    <code>translate="middle-x"` または `translate="middle-y"` クラスを追加することにより、要素は水平方向または垂直方向にのみ配置できます。</code>
  </p>
  <p>
    <code>By adding <code>translate="middle-x"</code> or <code>translate="middle-y"</code> classes, elements can be positioned only in horizontal or vertical direction.</code>
  </p>

  <Snippet>
    <Example>
      <examples-utilities-position-center-2 />
    </Example>
    <ExamplesCode
      path="/utilities/position/center-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/position/center-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/position/center-2.html)
:::
:::: -->

  <h2>Examples</h2>

  <p>
    実際の例を次に示します。
  </p>

  <p>
    Here are some real life examples of these classes:
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-position-1 />
    </Example>
    <ExamplesCode
      path="/utilities/position/position-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/position/examples-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/position/examples-1.html)
:::
:::: -->

  <p>
    既存のコンポーネントとともに使用して、新しいコンポーネントを作成できます。 $position-values 変数にエントリを追加することで、その機能を拡張できます。
  </p>

  <p>
    You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the <code>$position-values</code> variable.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-position-2 />
    </Example>
    <ExamplesCode
      path="/utilities/position/position-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/position/examples-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/position/examples-2.html)
:::
:::: -->

  <!-- ## Sass

### Maps

position  の デフォルトの値は Sass map で宣言され、utilities の生成に使用されます。

Default position utility values are declared in a Sass map, then used to generate our utilities. -->

  <!-- {{< scss-docs name="position-map" file="scss/_variables.scss" >}} -->
  <!-- 
### Utilities API

Position utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Position utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-position" file="scss/_utilities.scss" >}} -->
</template>