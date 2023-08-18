<script setup lang="ts">
definePageMeta({
  title: `Opacity`,
  description: `Control the opacity of elements.`
})
</script>

<template>
  <!---
title: Opacity
description: Control the opacity of elements.
--->

  <p>
    The <code>opacity</code> property sets the opacity level for an element. The opacity level describes the transparency level, where <code>1</code> is not transparent at all,<code>.5</code> is 50% visible, and <code>0</code> is completely transparent.
  </p>

  <p>
    Set the <code>opacity</code> of an element using <code>opacity="{value}"</code> utilities.
  </p>

  
  <Snippet>
    <Example>
      <examples-utilities-opacity-example />    
    </Example>
    <ExamplesCode
      path="/utilities/opacity/example.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/opacity/example.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/opacity/example.html)
:::
:::: -->

  <!-- ### Utilities API

Opacity utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!--
{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}
-->
</template>