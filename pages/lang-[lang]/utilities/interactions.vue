<script setup lang="ts">
definePageMeta({
  title: `インタラクション Interactions`,
  description: `ユーザーのインタラクションするかを変更するユーティリティクラスです。 Utility classes that change how users interact with contents of a website.`
})
</script>

<template>
  <!---
title: インタラクション Interactions
description: ユーザーのインタラクションするかを変更するユーティリティクラスです。 Utility classes that change how users interact with contents of a website.
--->

  <h2>Text selection</h2>

  <p>
    ユーザのテキスト選択を制御するクラスです。
  </p>

  <p>
    Change the way in which the content is selected when the user interacts with it.
  </p>


  <Snippet>
    <Example>
      <examples-utilities-interaction-text-selection />
    </Example>
    <ExamplesCode
      path="/utilities/interaction/text-selection.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/interaction/text-selection.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/interaction/text-selection.html)
:::
:::: -->

  <h2>Pointer events</h2>

  <p>
    Bootstrapには、インタラクションを防止したり、追加したりするためのカーソル用クラス <code>pointer-events="none"</code> と <code>pointer-events="auto"</code> を用意しています。
  </p>

  <p>
    Bootstrap provides <code>.pointer-events="none"</code> and <code>.pointer-events="auto"</code> classes to prevent or add element interactions.
  </p>

  <!--このリンク コンポーネントは反映されていません-->

  <p>
    <a href="#">
      This link
    </a> can not be clicked.
  </p>

  <p>
    <LocalLink to="/utilities/interactions/">
      This link
    </LocalLink>can be clicked (this is default behavior).
  </p>

  <p>
    <a href="#">
      This Link
    </a>This link can not be clicked because the pointer-events property is inherited from its parent. However, <LocalLink to="/utilities/interactions/">
      This link
    </LocalLink> has a pe-auto class and can be clicked.
  </p>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/interaction/pointer-events.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/interaction/pointer-events.html)
:::
:::: -->

  <p>
    The<code>pointer-events="none"</code> class (and the <code>pointer-events</code> CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with <code>pointer-events="none"</code> are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as <code>tabindex="-1"</code> (to prevent them from receiving keyboard focus) and <code>aria-disabled="true"</code> (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable.
  </p>

  <p>
    If possible, the simpler solution is:
  </p>
  <ul>
    <li> For form controls, add the <code>disabled</code> HTML attribute.</li>
    <li> For links, remove the <code>href</code> attribute, making it a non-interactive anchor or placeholder link.</li>
  </ul>
  <!-- ## Sass

### Utilities API

Interaction utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Interaction utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-interaction" file="scss/_utilities.scss" >}} -->
</template>