<script setup lang="ts">
definePageMeta({
  'title:en': 'Vertical rule',
  'description:en': `Use the custom vertical rule helper to create vertical dividers like the Vr component.`,
  'title:ja': 'Vertical rule',
  'description:ja': 'カスタム垂直ルールヘルパーを使用して、Vrコンポーネントのような垂直の仕切りを作成します。'
})
</script>

<template>
  <!--title: Vertical rule
description: Use the custom vertical rule helper to create vertical dividers like the `Vr` component.
--->

  <h2>How it works</h2>

  <Localization>
    <template #en>
      <p>
        Vertical rules are inspired by the <code>Vr</code> component, allowing you to create vertical dividers in common layouts. They're styled just like <code>Vr</code> component:
      </p>
    </template>
    <template #ja>
      <p>
        垂直罫線は、Vrコンポーネントにインスパイアされたもので、一般的なレイアウトで垂直の仕切りを作ることができます。Vrコンポーネントと同じスタイルです。
      </p>
    </template>
  </Localization>

  <ul>
    <Localization>
      <template #en>
        <li> They're <code>1px</code> wide </li>
        <li> They have <code>min-height</code> of <code>1em</code> </li>
        <li> Their color is set via <code>currentColor</code> and <code>opacity</code> </li>
      </template>
      <template #ja>
        <li> 幅は<code>1px</code></li>
        <li> <code>min-height</code>は<code>1em</code></li>
        <li> 色は<code>currentColor</code>と<code>opacity</code>で設定されます。</li>
      </template>
    </Localization>
  </ul>

  <Localization>
    <template #en>
      <p>
        Customize them with additional styles as needed.
      </p>
    </template>
    <template #ja>
      <p>
        必要に応じてスタイルを追加してカスタマイズしてください。
      </p>
    </template>
  </Localization>

  <h2>Example</h2>


  <Snippet>
    <Example>
      <examples-helpers-vertical-rule-example-1 />
    </Example>
    <ExamplesCode
      path="/helpers/vertical-rule/example-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers//vertical-rule/example-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers//vertical-rule/example-1.html)
:::
:::: -->

  <Localization>
    <template #en>
      <p>
        Vertical rules scale their height in flex layouts:
      </p>
    </template>
    <template #ja>
      <p>
        縦罫線はフレックスレイアウトで高さをスケーリングします。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-helpers-vertical-rule-example-2 />
    </Example>
    <ExamplesCode
      path="/helpers/vertical-rule/example-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers//vertical-rule/example-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers//vertical-rule/example-2.html)
:::
:::: -->

  <h2>With stacks</h2>

  <Localization>
    <template #en>
      <p>
        They can also be used in <LocalLink to="/helpers/stacks">
          stacks
        </LocalLink>:
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/helpers/stacks">
          stacks
        </LocalLink>での利用も可能です。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example flex>
      <examples-helpers-vertical-rule-stacks />
    </Example>
    <ExamplesCode
      path="/helpers/vertical-rule/stacks.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers//vertical-rule/stacks.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers//vertical-rule/stacks.html)
:::
:::: -->
</template>