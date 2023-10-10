<script setup lang="ts">
definePageMeta({
  'title:en': 'Sizing',
  'description:en': `Easily make an element as wide or as tall with our width and height utilities.`,
  'title:ja': 'サイジング ',
  'description:ja': 'width と height のユーティリティを使用して、要素のサイズを簡単に設定できます。'
})
</script>

<template>
  <h2>Relative to the parent</h2>

  <Localization>
    <template #en>
      <p>Width and height utilities are generated from the utility API in <code>_utilities.scss</code>. Includes support for <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and <code>auto</code> by default. Modify those values as you need to generate different utilities here.</p>
    </template>
    <template #ja>
      <p>width と height のユーティリティは <code>_utilities.scss</code> から生成されます。デフォルトでは <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, <code>auto</code> がサポートされています。カスタムしたい場合は、これらの値を変更してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example flex>
      <examples-utilities-sizing-relative-1 />
    </Example>
    <ExamplesCode
      path="/utilities/sizing/relative-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example flex>
      <examples-utilities-sizing-relative-2 />
    </Example>
    <ExamplesCode
      path="/utilities/sizing/relative-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>You can also use <code>max-width: 100%;</code> and <code>max-height: 100%;</code> utilities as needed.</p>
    </template>
    <template #ja>
      <p>頻繁に使う <code>max-width: 100%;</code> と <code>max-height: 100%;</code> を使うことができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example flex>
      <examples-utilities-sizing-relative-3 />
    </Example>
    <ExamplesCode
      path="/utilities/sizing/relative-3.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example flex>
      <examples-utilities-sizing-relative-4 />
    </Example>
    <ExamplesCode
      path="/utilities/sizing/relative-4.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Relative to the viewport</h2>
  <Localization>
    <template #en>
      <p>You can also use utilities to set the width and height relative to the viewport.</p>
    </template>
    <template #ja>
      <p>Viewport 単位の width や height を指定できます。</p>
    </template>
  </Localization>

  <!-- ## Sass

### Utilities API

Sizing utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Sizing utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-sizing" file="scss/_utilities.scss" >}} -->

  <!-- :::: code-group

::: code-group-item useBootstrap
@[code](@examples/example_sizing_utilities.scss)
:::
:::: -->
</template>