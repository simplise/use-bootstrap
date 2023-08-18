<script setup lang="ts">
definePageMeta({
  title: `Placeholders`,
  description: `Use loading placeholders for your components or pages to indicate something may still be loading.`
})
</script>

<template>
  <!---
title: Placeholders
description: Use loading placeholders for your components or pages to indicate something may still be loading.
--->

  <h2>About</h2>
  <p>
    Placeholders can be used to enhance the experience of your application. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.
  </p>

  <h2>Example</h2>
  <p>
    In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.
  </p>
  <Snippet>
    <Example>
      <examples-components-placeholder-example />
    </Example>
    <ExamplesCode
      path="/components/placeholder/example.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/example.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/placeholder/example.html)
:::
:::: -->

  <h2 class="mt-3">
    How it works
  </h2>
  <p>
    Create placeholders with the <code>placeholder</code> attribute and a grid column attribute (e.g., <code>col="6"</code>) to set the <code>width</code>. They can replace the text inside an element or be added as a modifier class to an existing component.
  </p>
  <p>
    We apply additional styling to <code>button</code> attributes via <code>::before</code> to ensure the <code>height</code> is respected. You may extend this pattern for other situations as needed, or add a <code /> within the element to reflect the height when actual text is rendered in its place.
  </p>
  <Snippet>
    <Example>
      <examples-components-placeholder-howitworks />
    </Example>
    <ExamplesCode
      path="/components/placeholder/howitworks.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/howitworks.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/placeholder/howitworks.html)
:::
:::: -->

  <h5>tip</h5>
  <p>
    The use of <code>aria-hidden="true"</code> only indicates that the element should be hidden to screen readers. The <var>loading</var> behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to <var>swap</var> the state of the placeholder and inform AT users of the update.
  </p>


  <h3>Width</h3>
  <p>
    You can change the <code>width</code> through grid column classes, width utilities, or inline styles.
  </p>
  <Snippet>
    <Example>
      <examples-components-placeholder-width />
    </Example>
    <ExamplesCode
      path="/components/placeholder/width.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/width.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/placeholder/width.html)
:::
:::: -->


  <h3>Color</h3>
  <p>
    By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be overridden with a custom color or utility class.
  </p>
  <Snippet>
    <Example>
      <examples-components-placeholder-color />
    </Example>
    <ExamplesCode
      path="/components/placeholder/color.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/color.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/placeholder/color.html)
:::
:::: -->


  <!-- 
原因不明のオンラインビルドエラー
### Sizing

The size of `.placeholder`s are based on the typographic style of the parent element. Customize them with sizing modifiers: `.placeholder-lg`, `.placeholder-sm`, or `.placeholder-xs`.

<examples-components-placeholder-Sizing/>

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/Sizing.vue)
:::
::: code-group-item bootstrap5
```html
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
```
:::
:::: 


### Animation

Animate placeholders with `.placeholder-glow` or `.placeholder-wave` to better convey the perception of something being _actively_ loaded.

<examples-components-placeholder-Animation/>

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/placeholder/Animation.vue)
:::
::: code-group-item bootstrap5
```html
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
```
:::
::::



-->
</template>