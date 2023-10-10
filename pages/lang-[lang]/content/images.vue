<script setup lang="ts">
definePageMeta({
  'title:en': 'Images',
  'description:en': `Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.`,
  'title:ja': 'イメージ ',
  'description:ja': 'レスポンシブな画像とクラスの適用についての例です。'
})
</script>

<template>
  <h2>Responsive images</h2>
  <Localization>
    <template #en>
      <p>Images in Bootstrap are made responsive with <code>fluid</code> attribute.</p>
    </template>
    <template #ja>
      <p>画像をレスポンシブにするには <code>fluid</code> 属性を使用します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-image-responsive />
    </Example>
    <ExamplesCode
      path="/content/image/responsive.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Image thumbnails</h2>
  <Localization>
    <template #en>
      <p>
        In addition to our <LocalLink to="/utilities/borders">
          border-radius utilities
        </LocalLink>, you can use <code>thumbnail</code> attribute to give an image a rounded 1px border appearance.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/borders">
          border-radius utilities
        </LocalLink> に加えて, <code>thumbnail</code> 属性を適用すると境界線(1ピクセル分)に丸みを持たせることができます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-image-thumbnails />
    </Example>
    <ExamplesCode
      path="/content/image/thumbnails.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <h2>Aligning images</h2>
  <Localization>
    <template #en>
      <p>
        <LocalLink to="/utilities/spacing#horizontal-centering">
          the Horizontal centering margin utility class
        </LocalLink>.
      </p>
      <p>
        Align images with the <LocalLink to="/utilities/float/">
          helper float classes
        </LocalLink> or <LocalLink to="/utilities/text#text-alignment/">
          text alignment classes
        </LocalLink>.
      </p>
      <p>
        <code>block</code> -level images can be centered using <LocalLink to="/utilities/spacing/">
          the Horizontal centering margin utility class
        </LocalLink>.
      </p>
    </template>
    <template #ja>
      <p>
        画像のアライメントは <LocalLink to="/utilities/float/">
          helper float classes
        </LocalLink> と <LocalLink to="/utilities/text#text-alignment/">
          text alignment classes
        </LocalLink> を参考にしてください。
      </p>
      <p><code>block</code> レベルでは画像は真ん中に配置されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-content-image-aligning-1 />
    </Example>
    <ExamplesCode
      path="/content/image/aligning-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-image-aligning-2 />
    </Example>
    <ExamplesCode
      path="/content/image/aligning-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->


  <Snippet>
    <Example>
      <examples-content-image-aligning-3 />
    </Example>
    <ExamplesCode
      path="/content/image/aligning-3.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->

  <!-- <p>
    <code>picture</code> コンポーネントを使用して, 複数の <code>&lt;source&gt;</code> 要素を使用できます。
    <code>picture</code> コンポーネントの属性は, 自動的に追加されるデフォルトの <code>Img</code> 要素に適用されます。
  </p> -->


  <Snippet>
    <Example>
      <examples-content-image-picture-1 />
    </Example>
    <ExamplesCode
      path="/content/image/picture-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
  <Localization>
    <template #en>
      <p>If you set the <code>srcset</code> attribute in the <code>picture</code> component, you can omit the <code>&lt;source&gt;</code> element.</p>
    </template>
    <template #ja>
      <p><code>picture</code> コンポーネントに`<code>srcset</code> 属性を設定することで、<code>&lt;source&gt;</code> 要素を省略できます。</p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-content-image-picture-2 />
    </Example>
    <ExamplesCode
      path="/content/image/picture-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--examplesを書く場所-->
</template>