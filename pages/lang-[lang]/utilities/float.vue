<script setup lang="ts">
definePageMeta({
  title: `フロート Float`,
  description: `レスポンシブなフロートを使用して、ブレークポイントを越えて要素のフロートをコントロールします。 Toggle floats on any element, across any breakpoint, using our responsive float utilities.`
})
</script>

<template>
  <!---
title: フロート Float
description: レスポンシブなフロートを使用して、ブレークポイントを越えて要素のフロートをコントロールします。 Toggle floats on any element, across any breakpoint, using our responsive float utilities.
--->

  <h2>Overview</h2>

  <p>
    これらのユーティリティクラスは、<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS float プロパティ</a>を使用して、現在のビューポートサイズに基づいて要素を左右にフロートしたり、無効にします。
    <code>重要!</code> これらは Grid システムと同じビューポートブレークポイントを使用しています。float utilities は Flex アイテム には影響しないことに注意してください。
  </p>

  <p>
    These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS float property</a> <code>!important</code> is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no effect on flex items.
  </p>


  
  <Snippet>
    <Example>
      <examples-utilities-float-overview />    
    </Example>
    <ExamplesCode
      path="/utilities/float/overview.vue"
      lang="vue"
    />
  </Snippet>
  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/float/overview.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/float/overview.html)
:::
:::: -->

  <h2>Responsive</h2>

  <p>
    <code>float</code> にはレスポンシブ utilities があります。
  </p>

  <p>
    Responsive variations also exist for each <code>float</code> value.
  </p>


  
  <Snippet>
    <Example>
      <examples-utilities-float-responsive />
    </Example>
    <ExamplesCode
      path="/utilities/float/responsive.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/float/responsive.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/float/responsive.html)
:::
:::: -->

  <p>
    サポートしているクラスは以下の通りです。
  </p>

  <p>
    Here are all the support classes:
  </p>

  <!-- {{< markdown >}}
{{< float.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.float{{ .abbr }}-start`
- `.float{{ .abbr }}-end`
- `.float{{ .abbr }}-none`
{{- end -}}
{{< /float.inline >}}
{{< /markdown >}} -->

  <!--表示されていないcomponent-->
  <docs-descriptions-float-supportclass />
  <ul>
    <li><code>float="start"</code></li>
    <li><code>float="end"</code></li>
    <li><code>float="none"</code></li>
    <li><code>float="sm-start"</code></li>
    <li><code>float="sm-end"</code></li>
    <li><code>float="sm-none"</code></li>
    <li><code>float="md-start"</code></li>
    <li><code>float="md-end"</code></li>
    <li><code>float="md-none"</code></li>
    <li><code>float="lg-start"</code></li>
    <li><code>float="lg-end"</code></li>
    <li><code>float="lg-none"</code></li>
    <li><code>float="xl-start"</code></li>
    <li><code>float="xl-end"</code></li>
    <li><code>float="xl-none"</code></li>
    <li><code>float="xxl-start"</code></li>
    <li><code>float="xxl-end"</code></li>
    <li><code>float="xxl-none"</code></li>
  </ul>
  <!-- ## Sass

### Utilities API

Float utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Float utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-float" file="scss/_utilities.scss" >}} -->
</template>