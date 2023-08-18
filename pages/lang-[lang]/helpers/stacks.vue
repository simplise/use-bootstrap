<script setup lang="ts">
definePageMeta({
  title: `Stacks`,
  description: `Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.`
})
</script>

<template>
  <!---
title: Stacks
description: Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.
--->

  <p>
    Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap. All credit for the concept and implementation goes to the open source <a href="https://almonk.github.io/pylon/">Pylon project</a>
  </p>

  <div style="background-color: antiquewhite;">
    <div class="mx-auto">
      <h5> warning</h5>
      <p>
        Heads up! Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues.
        <a href="https://caniuse.com/flexbox-gap">Read more</a>
      </p>
    </div>
  </div>

  <h2>Vertical</h2>

  <p>
    Use <code>vstack</code> attribute to create vertical layouts. Stacked items are full-width by default. Use <code>gap</code> attribute to add space between items.
  </p>

  
  <Snippet>
    <Example flex>
      <examples-helpers-stack-vertical />
    </Example>
    <ExamplesCode
      path="/helpers/stack/vertical.vue"
      lang="vue"
    />
  </Snippet>

  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stack/vertical.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stack/vertical.html)
:::
:::: -->

  <h2>Horizontal</h2>

  <p>
    Use <code>hstack</code> for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use <code>gap</code> attribute to add space between items.
  </p>
  
  <Snippet>
    <Example flex>
      <examples-helpers-stack-horizontal-1 />    
    </Example>
    <ExamplesCode
      path="/helpers/stack/horizontal-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stack/horizontal-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stack/horizontal-1.html)
:::
::::-->
  <p>
    Using horizontal margin utilities like <code>margin="s-auto"</code> as spacers:
  </p>
  
  <Snippet>
    <Example flex>
      <examples-helpers-stack-horizontal-2 />    
    </Example>
    <ExamplesCode
      path="/helpers/stack/horizontal-2.vue"
      lang="vue"
    />
  </Snippet>

  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stack/horizontal-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stack/horizontal-2.html)
:::
:::: -->

  <p>
    And with <LocalLink to="/helpers/vertical-rule">
      vertical rules:
    </LocalLink>
  </p>
  
  <Snippet>
    <Example flex>
      <examples-helpers-stack-horizontal-3 />    
    </Example>
    <ExamplesCode
      path="/helpers/stack/horizontal-3.vue"
      lang="vue"
    />
  </Snippet>

  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stack/horizontal-3.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stack/horizontal-3.html)
:::
:::: -->

  <h2>Examples</h2>

  <p>Use <code>vstack</code> to stack buttons and other elements:</p>

  
  <Snippet>
    <Example>
      <examples-helpers-stack-examples-1 />    
    </Example>
    <ExamplesCode
      path="/helpers/stack/examples-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stack/examples-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stack/examples-1.html)
:::
:::: -->

  <p>
    Create an inline form with <code>hstack</code>:
  </p>
  
  <Snippet>
    <Example>
      <examples-helpers-stack-examples-2 />
    </Example>
    <ExamplesCode
      path="/helpers/stack/examples-2.vue"
      lang="vue"
    />
  </Snippet>

  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/stack/examples-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/stack/examples-2.html)
:::
:::: -->

  <!-- ## Sass -->

  <!--
{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}
-->
</template>