<script setup lang="ts">
definePageMeta({
  'title:en': 'Vertical alignment',
  'description:en': `Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.`,
  'title:ja': 'バーティカルアライメント',
  'description:ja': 'インライン、インラインブロック、インラインテーブル、テーブルセルの垂直配置を簡単に変更できます。'
})
</script>

<template>
  <Localization>
    <template #en>
      <p>Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.</p>
      <p>Choose from <code>vertical-align=</code> <code>baseline</code>, <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>text-bottom</code>, and <code>text-top</code> as needed. </p>
      <p>
        To vertically center non-inline content (like <code>&lt;div&gt;</code>s and more), use our <LocalLink to="/utilities/flex/">
          flex box utilities
        </LocalLink>.
      </p>
    </template>
    <template #ja>
      <p>vertical-align (垂直方向)の整列は inline, inline-block, inline-table, and table cell にのみ影響することに注意してください。</p>
      <p>必要に応じて <code>vertical-align=</code> <code>baseline</code>, <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>text-bottom</code>, <code>text-top</code> から選択してください。</p>
      <p>
        インラインではないコンテンツ <code>&lt;div&gt;</code> など を垂直方向にセンタリングするには、<LocalLink to="/utilities/flex/">
          flex box utilities
        </LocalLink>を使用します。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>With inline elements:</p>
    </template>
    <template #ja>
      <p>インライン要素:</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-vertical-align-inline />
    </Example>
    <ExamplesCode
      path="/utilities/vertical-align/inline.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>With table cells:</p>
    </template>
    <template #ja>
      <p>テーブルセル:</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-vertical-align-example />
    </Example>
    <ExamplesCode
      path="/utilities/vertical-align/example.vue"
      lang="vue"
    />
  </Snippet>
</template>