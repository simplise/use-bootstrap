<script setup lang="ts">
definePageMeta({
  'title:en': 'Text truncation',
  'description:en': `Truncate long strings of text with an ellipsis.`,
  'title:ja': 'テキストトランケーション',
  'description:ja': '長い文字列のテキストを省略記号で切り捨てます。'
})
</script>
 
<template>
  <Localization>
    <template #en>
      <p>For longer content, you can add a <code>text-truncate</code> attribute to truncate the text with an ellipsis. ,<!--太字--><b>Requires <code>display: inline-block</code> or <code>display: block</code>.</b></p>
    </template>
    <template #ja>
      <p>長い内容の場合は、<code>text-truncate</code> 属性を追加して、テキストを省略記号で切り詰めることができます。<!--太字--> <b><code>display: inline-block</code> または <code>display: block</code> を必要とします。</b></p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-helpers-text-truncation-example />
    </Example>
    <ExamplesCode
      path="/helpers/text-truncation/example.vue"
      lang="vue"
    />
  </Snippet>
</template>