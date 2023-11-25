<script setup lang="ts">
definePageMeta({
  'title:en': 'Visibility',
  'description:en': `Control the visibility of elements, without modifying their display, with visibility utilities.`,
  'title:ja': 'ビジビリティ',
  'description:ja': 'display は変更せずに、visibility を変更します。'
})
</script>

<template>
  <Localization>
    <template #en>
      <p>Set the <code>visibility</code> of elements with our visibility utilities. These utility classes do not modify the <code>display</code> value at all and do not affect layout – <code>invisible</code> elements still take up space in the page.</p>
    </template>
    <template #ja>
      <p>visibility utilities を使って要素の <code>visibility</code> を設定します。これは <code>display</code> の値を変更せず、レイアウトにも影響しません - <code>invisible</code> 要素はページ内のレイアウトを保持します。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>Apply <code>visible</code> or <code>invisible</code> as needed.</p>
    </template>
    <template #ja>
      <p>必要に応じて <code>visible</code> または <code>invisible</code> を適用してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-visibility />
    </Example>
    <ExamplesCode
      path="/utilities/visibility/visibility.vue"
      lang="vue"
    />
  </Snippet>
</template>