<script setup lang="ts">
definePageMeta({
  'title:en': 'Floating labels',
  'description:en': `Create beautifully simple form labels that float over your input fields.`,
  'title:ja': 'フローティングラベル ',
  'description:ja': '入力フィールドの上に浮かんでいる美しいシンプルなフォームラベルを作成します。'
})
</script>

<template>
  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>Wrap a pair of <code>FormFloating</code> elements in <code>.form-floating</code> to enable floating labels with Bootstrap's textual form fields. </p>
      <p>A <code>placeholder</code> is required on each <code>FormInput</code> as our method of CSS-only floating labels uses the <code>:placeholder-shown</code> pseudo-element. </p>
      <p>Also note that the <code>FormInput</code> must come first so we can utilize a sibling selector (e.g., <code>~</code>.</p>
    </template>
    <template #ja>
      <p><code>FormFloating</code> コンポーネントを使って、Bootstrap のテキストフォームフィールドでフローティングラベルを有効にします。</p>
      <p>CSS だけのフローティング・ラベルのメソッドは、 <code>:placeholder-shown</code> 疑似要素を利用しているので、それぞれの <code>FormInput</code> にプレースホルダーが必要です。</p>
      <p>また、兄弟セレクタ(例: ~)を利用できるように、 <code>FormInput</code> が最初に来なければならないことにも注意してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-example-1 />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/example-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>When there's a <code>value</code> already defined, <code>FormLabel</code>s will automatically adjust to their floated position.</p>
    </template>
    <template #ja>
      <p>すでに定義されている <code>value</code> がある場合、<code>FormLabel</code> は自動的に浮いた位置に調整されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-example-2 />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/example-2.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Form validation styles also work as expected.</p>
    </template>
    <template #ja>
      <p>フォームのバリデーションスタイルも期待通りに動作します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-example-3 />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/example-3.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Textareas
  </h2>
  <Localization>
    <template #en>
      <p>By default, <code>FormTextarea</code>s will be the same height as <code>FormInput</code>s.</p>
    </template>
    <template #ja>
      <p>デフォルトでは、 <code>FormTextarea</code> は <code>FormInput</code> と同じ高さになります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-textareas-1 />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/textareas-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>To set a custom height on your <code>FormTextarea</code>, do not use the <code>rows</code> attribute. </p>
      <p>Instead, set an explicit <code>height</code> (either inline or via custom CSS).</p>
    </template>
    <template #ja>
      <p><code>FormTextarea</code>にカスタムの高さを設定するために、<code>rows</code> 属性を使用しないでください。</p>
      <p>その代わりに、明示的な <code>height</code> を設定します (インラインまたはカスタム CSS を使用して)。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-textareas-2 />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/textareas-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Selects
  </h2>
  <Localization>
    <template #en>
      <p>Other than <code>FormControl</code>, floating labels are only available on <code>FormSelect</code>s. </p>
      <p>They work in the same way, but unlike <code>FormInput</code>s, they'll always show the <code>FormLabel</code> in its floated state. </p>
      <p><b>Selects with <code>size</code> and <code>multiple</code> are not supported.</b></p>
    </template>
    <template #ja>
      <p><code>FormControl</code> 以外では、フローティングラベルは <code>FormSelect</code> でのみ利用できます。</p>
      <p>これらは同じように動作しますが、<code>FormInput</code>とは異なり、常に<code>FormLabel</code>をフローティング状態で表示します。</p>
      <p><b>sizeやmultipleを使った選択はサポートされていません。</b></p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-selects />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/selects.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Layout
  </h2>
  <Localization>
    <template #en>
      <p>When working with the Bootstrap grid system, be sure to place form elements within column classes.</p>
    </template>
    <template #ja>
      <p>グリッドシステムで作業する場合、フォーム要素をカラムクラス内に配置することを確認してください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-floating-label-layout />
    </Example>
    <ExamplesCode
      path="/forms/floating-label/layout.vue"
      lang="vue"
    />
  </Snippet>
</template>