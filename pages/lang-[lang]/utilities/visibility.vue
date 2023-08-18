<script setup lang="ts">
definePageMeta({
  title: `ビジビリティ Visibility`,
  description: `display は変更せずに、visibility を変更します。 Control the visibility of elements, without modifying their display, with visibility utilities.`
})
</script>

<template>
  <!---
title: ビジビリティ Visibility
description: display は変更せずに、visibility を変更します。 Control the visibility of elements, without modifying their display, with visibility utilities.
--->

  <p>
    visibility utilities を使って要素の <code>visibility</code> を設定します。これは <code>display</code> の値を変更せず、レイアウトにも影響しません - <code>invisible</code> 要素はページ内のレイアウトを保持します。
  </p>

  <p>
    Set the <code>visibility</code> of elements with our visibility utilities. These utility classes do not modify the <code>display</code> value at all and do not affect layout – <code>invisible</code> elements still take up space in the page.
  </p>


  <!--黄色の枠を作る-->
  <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <p>
      Elements with the <code>invisible</code> attribute will be hidden <b>both</b> visually and for assistive technology/screen reader users.
    </p>
  </div>

  <p>
    必要に応じて <code>visible</code> または <code>invisible</code> を適用してください。
  </p>

  <p>
    Apply <code>visible</code> or <code>invisible</code> as needed.
  </p>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/visibility/visibility.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/visibility/visibility.html)
:::
:::: -->


  <!-- 
```scss
// Class
.visible {
 visibility: visible !important;
}
.invisible {
 visibility: hidden !important;
}
``` -->

  <!-- ## Sass

### Utilities API

Visibility utilities は scss/_utilities.scss で宣言されています. Learn how to use the utilities API.

Visibility utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-visibility" file="scss/_utilities.scss" >}} -->
  <!-- 
```scss
 "visibility": (
   property: visibility,
   class: null,
   values: (
     visible: visible,
     invisible: hidden,
   )
 )
``` -->
</template>