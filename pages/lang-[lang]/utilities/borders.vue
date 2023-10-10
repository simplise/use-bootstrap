<script setup lang="ts">
definePageMeta({
  'title:en': 'Borders',
  'description:en': `Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.`,
  'title:ja': 'ボーダー',
  'description:ja': 'ボーダーを使って要素のボーダーと角丸を素早く適用します。画像、ボタン、その他の要素に最適です。'
})
</script>
 
<template>
  <h2>ボーダー Boder</h2>
  <Localization>
    <template #en>
      <p>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>
    </template>
    <template #ja>
      <p>ボーダーを使って要素のボーダーと角丸を素早く適用します。画像、ボタン、その他の要素に最適です。</p>
    </template>
  </Localization>
  <h3>Border</h3>
  <Localization>
    <template #en>
      <p>Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.</p>
    </template>
    <template #ja>
      <p>Borders を使って、要素の線を追加・削除します。すべての境界線を一回の指定で適用できます。</p>
    </template>
  </Localization>
  <h3>Additive</h3>
  <Snippet>
    <Example>
      <examples-utilities-border-additive />
    </Example>
    <ExamplesCode
      path="/utilities/border/additive.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Subtractive</h3>

  <Snippet>
    <Example>
      <examples-utilities-border-subtractive />
    </Example>
    <ExamplesCode
      path="/utilities/border/subtractive.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Border color</h3>
  <Localization>
    <template #en>
      <p>Change the border color using utilities built on our theme colors.</p>
    </template>
    <template #ja>
      <p>ビルドインされたテーマカラーを Border 色に指定できます。</p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-utilities-border-color />
    </Example>
    <ExamplesCode
      path="/utilities/border/color.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Border-width</h3>

  <Snippet>
    <Example>
      <examples-utilities-border-width />
    </Example>
    <ExamplesCode
      path="/utilities/border/width.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Border-radius</h3>
  <Localization> 
    <template #en>
      <p>
        Add classes to an element to easily round its corners.
      </p>
    </template>
    <template #ja>
      <p>
        要素にクラスを追加して、簡単に角を丸めることができます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-border-radius />
    </Example>
    <ExamplesCode
      path="/utilities/border/radius.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Sizes</h3>

  <Snippet>
    <Example>
      <examples-utilities-border-radius-size />
    </Example>
    <ExamplesCode
      path="/utilities/border/radius-size.vue"
      lang="vue"
    />
  </Snippet>
</template>