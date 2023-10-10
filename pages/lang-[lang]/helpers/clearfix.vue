<script setup lang="ts">
definePageMeta({
  'title:en': 'Clearfix',
  'description:en': `Quickly and easily clear floated content within a container by adding a clearfix utility.`,
  'title:ja': 'Clearfix',
  'description:ja': 'clearficユーティリティを追加することで、コンテナ内のフロートされたコンテンツを素早く簡単にクリアできます。'
})
</script>

<template>
  <!--- 
description: Quickly and easily clear floated content within a container by adding a clearfix utility. -->
  <Localization>
    <template #en>
      <p>Easily clear <code>float</code>s by adding <code>clearfix</code> attrubyte <b>to the parent element</b>. Can also be used as a mixin.</p>
    </template>
    <template #ja>
      <p>親要素に <code>clearfix</code> 属性を追加することで、簡単に <code>float</code> をクリアできます。 mixin としても使えます。</p>
    </template>
  </Localization>

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

  <Localization>
    <template #en>
      <p>The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.</p>
    </template>
    <template #ja>
      <p>次の例は、clearfix の使い方を示しています。clearfix を使用しないと、ラッピング div がボタンの周りに配置されず、レイアウトが崩れてしまいます。</p>
    </template>
  </Localization>


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
</template>