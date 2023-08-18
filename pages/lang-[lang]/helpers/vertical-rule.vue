<script setup lang="ts">
definePageMeta({
  title: `Vertical rule`,
  description: `Use the custom vertical rule helper to create vertical dividers like the 'Vr' component.`
})
</script>

<template>
  <!--title: Vertical rule
description: Use the custom vertical rule helper to create vertical dividers like the `Vr` component.
--->

  <h2>How it works</h2>

  Vertical rules are inspired by the <code>Vr</code> component, allowing you to create vertical dividers in common layouts. They're styled just like <code>Vr</code> component:
  <ul>
    <li> They're <code>1px</code> wide </li>
    <li> They have <code>min-height</code> of <code>1em</code> </li>
    <li> Their color is set via <code>currentColor</code> and <code>opacity</code> </li>
  </ul>
  Customize them with additional styles as needed.

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

  <p>
    Vertical rules scale their height in flex layouts:
  </p>
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
  <p>
    They can also be used in <LocalLink to="/helpers/stacks">
      stacks
    </LocalLink>:
  </p>


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