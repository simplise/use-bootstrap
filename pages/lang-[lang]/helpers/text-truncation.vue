 <script setup lang="ts">
 definePageMeta({
   title: `テキスト省略 Text truncation`,
   description: `長い文字列のテキストを省略記号で切り捨てます。 Truncate long strings of text with an ellipsis.`
 })
 </script>
 
<template>
  <!---
title: テキスト省略 Text truncation
description: 長い文字列のテキストを省略記号で切り捨てます。 Truncate long strings of text with an ellipsis.
--->

  <p>
    長い内容の場合は、<code>text-truncate</code> 属性を追加して、テキストを省略記号で切り詰めることができます。<!--太字--> <b><code>display: inline-block</code> または <code>display: block</code> を必要とします。</b>
  </p>

  <p>
    For longer content, you can add a <code>text-truncate</code> attribute to truncate the text with an ellipsis. ,<!--太字--><b>Requires <code>display: inline-block</code> or <code>display: block</code>.</b>
  </p>

  
  <Snippet>
    <Example>
      <examples-helpers-text-truncation-example />
    </Example>
    <ExamplesCode
      path="/helpers/text-truncation/example.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/text-truncation/example.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/text-truncation/example.html)
:::
::::-->
</template>