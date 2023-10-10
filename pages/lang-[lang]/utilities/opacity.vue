<script setup lang="ts">
definePageMeta({
  'title:en': 'Opacity',
  'description:en': `Control the opacity of elements.`,
  'title:ja': 'オパシティ',
  'description:ja': '要素の不透明度を制御します。'
})
</script>

<template>
  <Localization>
    <template #en>
      <p>
        The <code>opacity</code> property sets the opacity level for an element. The opacity level describes the transparency level, where <code>1</code> is not transparent at all,<code>.5</code> is 50% visible, and <code>0</code> is completely transparent.
      </p>
    </template>
    <template #ja>
      <p>
        この<code>opacity</code>プロパティは、要素の不透明度レベルを設定します。不透明度レベル<code>1</code>は、全く透明ではありません。<code>5</code>は50%程見えます。<code>0</code>は完全に透明である透明度のレベルを表します。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Set the <code>opacity</code> of an element using <code>opacity="{value}"</code> utilities.
      </p>
    </template>
    <template #ja>
      <p>
        <code>opacity</code>ユーティリティを使用して、要素の<code>opacity="{value}"</code>を設定します。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-utilities-opacity-example />
    </Example>
    <ExamplesCode
      path="/utilities/opacity/example.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ### Utilities API

Opacity utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!--
{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}
-->
</template>