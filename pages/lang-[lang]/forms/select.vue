
<script setup lang="ts">

definePageMeta({

  'title:en': 'Select',
  'description:en': `Customize the native select elements with custom CSS that changes the element's initial appearance.`,
  'title:ja': 'セレクト',
  'description:ja': 'ネイティブの select 要素をカスタムCSSでカスタマイズして、要素の初期表示を変更することができます。'
})

</script>

<template>
  <h2>Default</h2>

  <Localization>
    <template #en>
      <p>Custom styles are limited to the <code>FormSelect</code>'s initial appearance and cannot modify the <code>Option</code>s due to browser limitations.</p>
    </template>
    <template #ja>
      <p>カスタムスタイルは <code>FormSelect</code> の最初の外観に限定され、ブラウザの制限により <code>Option</code> を変更することはできません。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-forms-select-default />
    </Example>
    <ExamplesCode
      path="/forms/select/default.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Sizing
  </h2>

  <Localization>
    <template #en>
      <p>You may also choose from small and large custom selects to match our similarly sized text inputs.</p>
    </template>
    <template #ja>
      <p>また、同サイズのテキスト入力に合わせて、大小のカスタムセレクトを選択することもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-select-sizing-1 />
    </Example>
    <ExamplesCode
      path="/forms/select/sizing-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>The <code>multiple</code> attribute is also supported:</p>
    </template>
    <template #ja>
      <p>また、<code>multiple</code> 属性もサポートされています。:</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-select-sizing-2 />
    </Example>
    <ExamplesCode
      path="/forms/select/sizing-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>As is the <code>length</code> attribute:</p>
    </template>
    <template #ja>
      <p><code>length</code> 属性もサポートされています。:</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-select-sizing-3 />
    </Example>
    <ExamplesCode
      path="/forms/select/sizing-3.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Disabled
  </h2>
  <Localization>
    <template #en>
      <p>Add the <code>disabled</code> boolean attribute on a select to give it a grayed out appearance and remove pointer events.</p>
    </template>
    <template #ja>
      <p>ブール属性の<code>disabled</code>をセレクトに追加すると、グレーアウトした外観になり、ポインターイベントが削除されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-select-disabled />
    </Example>
    <ExamplesCode
      path="/forms/select/disabled.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="form-select-variables" file="scss/_variables.scss" >}} -->
</template>