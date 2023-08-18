<script setup lang="ts">
definePageMeta({
  title: `垂直配置 Vertical alignment`,
  description: `インライン、インラインブロック、インラインテーブル、テーブルセルの垂直配置を簡単に変更できます。 Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.`
})
</script>

<template>
  <!---
title:  垂直配置 Vertical alignment
description: インライン、インラインブロック、インラインテーブル、テーブルセルの垂直配置を簡単に変更できます。 Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.
--->

  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">vertical-alignment</a>utilitiesを使用して、要素の整列を変更します。vertical-align (垂直方向)の整列は inline, inline-block, inline-table, and table cell にのみ影響することに注意してください。
  </p>

  <p>
    Change the alignment of elements with the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">vertical-alignment</a> utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.
  </p>

  <p>
    必要に応じて <code>vertical-align=</code> <code>baseline</code>, <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>text-bottom</code>, <code>text-top</code> から選択してください。
  </p>

  <p>
    Choose from <code>vertical-align=</code> <code>baseline</code>, <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>text-bottom</code>, and <code>text-top</code> as needed.
  </p>

  <p>
    インラインではないコンテンツ <code>&lt;div&gt;</code> など を垂直方向にセンタリングするには、<LocalLink to="/utilities/flex">
      flex box utilities
    </LocalLink>を使用します。
  </p>

  <p>
    To vertically center non-inline content (like <code>&lt;div&gt;</code>s and more), use our <LocalLink to="/utilities/flex">
      flex box utilities
    </LocalLink>.
  </p>

  <p>
    インライン要素:
  </p>

  <p>
    With inline elements:
  </p>


  <Snippet>
    <Example>
      <examples-utilities-vertical-align-inline />
    </Example>
    <ExamplesCode
      path="/utilities/vertical-align/inline.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/vertical-align/inline.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/vertical-align/inline.html)
:::
:::: -->

  <p>
    テーブルセル:
  </p>

  <p>
    With table cells:
  </p>


  <Snippet>
    <Example>
      <examples-utilities-vertical-align-example />
    </Example>
    <ExamplesCode
      path="/utilities/vertical-align/example.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/vertical-align/example.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/vertical-align/example.html)
:::
:::: -->

  <!-- ## Sass

### Utilities API

Vertical align utilities は scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Vertical align utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-vertical-align" file="scss/_utilities.scss" >}} -->
</template>