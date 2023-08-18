<script setup lang="ts">
definePageMeta({
  title: `Clearfix`,
  description: `Quickly and easily clear floated content within a container by adding a clearfix utility.`
})
</script>

<template>
  <!--- 
description: Quickly and easily clear floated content within a container by adding a clearfix utility. -->


  <p>
    親要素に <code>clearfix</code> 属性を追加することで、簡単に <code>float</code> をクリアできます。 mixin としても使えます。
    Easily clear <code>float</code>s by adding <code>clearfix</code> attrubyte **to the parent element**. Can also be used as a mixin.
  </p>

  <p>Use in HTML:</p>

  <div class="code-group d-highlight bg-light">
    <pre>
 <code>&lt;b-div clearfix&gt; ... &lt;/b-div&gt;</code>
</pre>
  </div>

  <!-- The mixin source code: -->

  <!-- {{< scss-docs name="clearfix" file="scss/mixins/_clearfix.scss" >}} -->

  <!-- Use the mixin in SCSS:

```scss
.element {
 @include clearfix;
}
``` -->
  <p>
    次の例は、clearfix の使い方を示しています。clearfix を使用しないと、ラッピング div がボタンの周りに配置されず、レイアウトが崩れてしまいます。
    The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.
  </p>
  <!--↓このタグは反映できていません-->
  
  <Snippet>
    <Example>
      <examples-helpers-clearfix />
    </Example>
    <ExamplesCode
      path="/helpers/clearfix/clearfix.vue"
      lang="vue"
    />
  </Snippet>

  <div class="code-group d-highlight bg-light">
    <pre>
 <code>&lt;Template&gt; 
   &lt;b-div clearfix background-color="info" &gt;
     &lt;Button button = "secondary" float = "start"&gt; 
       Example Button floated left
     &lt;/Button&gt;
     &lt;Button button="secondary" float="end"&gt;
       Example Button floated right
       &lt;/Button&gt;
     &lt;/b-div&gt;
  &lt;/Template&gt;</code>
   
</pre>
  </div>
  <!-- :::: code-group
::: code-group-item useBootstrap
@[code](@examples/helpers/clearfix/clearfix.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/helpers/clearfix/clearfix.html)
:::
:::: -->
</template>