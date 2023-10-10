<script setup lang="ts">
definePageMeta({
  'title:en': 'Checks and radios',
  'description:en': `Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.`,
  'title:ja': 'チェックとラジオ',
  'description:ja': '完全に書き換えられたチェックコンポーネントを使用して、クロスブラウザとクロスデバイスの一貫性のあるチェックボックスとラジオを作成します。'
})
</script>

<template>
  <h2>Approach</h2>
  <Localization>
    <template #en>
      <p>Browser default checkboxes and radios are replaced with the help of <code>FormCheck</code>, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. </p>
      <p>Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</p>
      <p>Structurally, our <code>FormCheckInput</code>s and <code>FormCheckLabel</code>s are sibling elements as opposed to an <code>FormCheckInput</code> within a <code>FormCheckLabel</code>.</p>
      <p>This is slightly more verbose as you must specify <code>id</code> and <code>for</code> attributes to relate the <code>FormCheckInput</code> and <code>FormCheckLabel</code>.</p>
      <p>We use the sibling selector (<code>~</code>) for all our <code>FormCheckInput</code> states, like <code>:checked</code> or <code>:disabled</code>.</p>
      <p>When combined with the <code>.form-check-label</code> class, we can easily style the text for each item based on the <code>FormCheckInput</code>'s state.</p>
      <p>Our checks use custom Bootstrap icons to indicate checked or indeterminate states.</p>
    </template>
    <template #ja>
      <p>HTML 要素のレイアウトと動作を改善するために、ブラウザのデフォルトのチェックボックスとラジオは <code>FormCheck</code> コンポーネントで置き換えられます。多くのカスタマイズとブラウザ間の一貫性を提供します。</p>
      <p>チェックボックスはリストから 1 つまたは複数のオプションを選択するためのもので、ラジオは多数のオプションから 1 つを選択するためのものです。</p>
      <p>構造的に、 <code>FormCheckInput</code>と <code>FormCheckLabel</code> は、 <code>FormCheckLabel</code>内の <code>FormCheckInput</code>とは対照的に兄弟要素です。</p>
      <p><code>FormCheckInput</code>と <code>FormCheckLabel</code> を関連付けるには id 属性と for 属性を指定する必要があるため、これは少し冗長になります。</p>
      <p><code>checked</code> 属性や <code>disabled</code> 属性など、すべての <code>FormCheckInput</code> コンポーネントに兄弟セレクター（~）を使用します。</p>
      <p><code>.form-check-label</code>クラスと組み合わせると、<code>FormCheckInput</code> の状態に基づいて各アイテムのテキストのスタイルを簡単に設定できます。</p>
      <p>チェックでは、チェック済みまたは不確定の状態を示します。</p>
    </template>
  </Localization>

  <h2>Checks</h2>

  <Snippet>
    <Example>
      <examples-forms-check-radio-checks />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/checks.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Indeterminate
  </h2>
  <Localization>
    <template #en>
      <p>Checkboxes can utilize the <code>indeterminate</code> attributes when manually set.</p>
    </template>
    <template #ja>
      <p>チェックボックスは、<code>indeterminate</code> 属性を利用することができます。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-forms-check-radio-checks-indeterminate />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/checks-indeterminate.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Disabled
  </h2>
  <Localization>
    <template #en>
      <p>Add the <code>disabled</code> attribute and the associated <code>FormCheckLabel</code>s are automatically styled to match with a lighter color to help indicate the input's state.</p>
    </template>
    <template #ja>
      <p><code>disabled</code> 属性を追加すると、関連付けられた <code>FormCheckLabel</code> は、入力の状態を示すように自動的にスタイル設定されます。下記の例を参考にしてください。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-forms-check-radio-checks-disabled />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/checks-disabled.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Radios
  </h2>

  <Snippet>
    <Example>
      <examples-forms-check-radio-radios />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/radios.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Disabled
  </H2>
  <Localization>
    <template #en>
      <p>Add the <code>disabled</code> attribute and the associated <code>FormCheckLabel</code>s are automatically styled to match with a lighter color to help indicate the input's state.</p>
    </template>
    <template #ja>
      <p>disabled 属性を追加すると、関連付けられた <code>FormCheckLabel</code> は、入力の状態を示すように自動的にスタイル設定されます。下記の例を参考にしてください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-check-radio-radios-disabled />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/radios-disabled.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-2">
    Switches
  </h2>
  <Localization>
    <template #en>
      <p>A switch has the markup of a custom checkbox but uses the <code>switch</code> class to render a toggle switch. Consider using <code>role="switch"</code> to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the <code>disabled</code> attribute.</p>
    </template>
    <template #ja>
      <p>スイッチにはカスタムチェックボックスのマークアップがあります。<code>switch</code> 属性を使用してトグルスイッチをレンダリングします。 スイッチは、<code>disabled</code> 属性もサポートします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-check-radio-switches />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/switches.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Default (stacked)</h2>
  <Localization>
    <template #en>
      <p>By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <code>FormCheck</code>.</p>
    </template>
    <template #ja>
      <p>デフォルトでは、チェックボックスとラジオは、任意の数だけ縦に積み上げられ、適切な間隔で <code>FormCheck</code> が配置されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-check-radio-default-1 />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/default-1.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-forms-check-radio-default-2 />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/default-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Inline</h2>
  <Localization>
    <template #en>
      <p>Group checkboxes or radios on the same horizontal row by adding <code>inline</code> to any <code>FormCheck</code>.</p>
    </template>
    <template #ja>
      <p>任意の <code>FormCheck</code> に <code>inline</code> 属性を追加することで、同じ水平行にあるチェックボックスやラジオをグループ化することができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-check-radio-inline />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/inline.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Without labels</h2>
  <Localization>
    <template #en>
      <p>Omit the wrapping <code>FormCheck</code> for checkboxes and radios that have no label text. </p>
      <p>Remember to still provide some form of accessible name for assistive technologies (for instance, using <code>aria-label</code>). </p>
    </template>
    <template #ja>
      <p>ラベルテキストがない場合は <code>FormCheck</code> を省略します。 </p>
      <p>支援技術（たとえば、<code>aria-label</code>の使用）には、何らかの形式のラベルを提供することを忘れないでください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-check-radio-without-labels />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/without-labels.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Toggle buttons
  </h2>
  <Localization>
    <template #en>
      <p>Create button-like checkboxes and radio buttons by using <code>.btn</code> styles rather than <code>.form-check-label</code> on the <code>FormCheckLabel,</code>elements. </p>
      <p>These toggle buttons can further be grouped in a <code to="/components/button-group"> button group </code> if needed.</p>
    </template>
    <template #ja>
      <p>ボタンのようなチェックボックスやラジオボタンを作成するには、<code>FormCheckLabel</code> コンポーネントに <code>.form-check-label</code> ではなく <code>.btn,</code> スタイルを使用します。</p>
      <p>これらのトグルボタンは必要に応じて[button group](/components/button-group) でグループ化することができます。</p>
    </template>
  </Localization>


  <h2>Checkbox toggle buttons</h2>
  <Snippet>
    <Example>
      <examples-forms-check-radio-toggle-buttons-1 />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/toggle-buttons-1.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-forms-check-radio-toggle-buttons-2 />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/toggle-buttons-2.vue"
      lang="vue"
    />
  </Snippet>

  <Snippet>
    <Example>
      <examples-forms-check-radio-toggle-buttons-3 />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/toggle-buttons-3.vue"
      lang="vue"
    />
  </Snippet>

  <!-- {{< callout info >}}
視覚的には、これらのチェックボックス・トグル・ボタンは、button plugin toggle buttonsと同じです。チェックボックスのトグルボタンはスクリーンリーダーによって “checked”/“not checked” と表示されるのに対し（見た目に反して基本的にはチェックボックスであるため）、ボタンプラグインのトグルボタンは “button”/“button pressed” と表示されます。これらの 2 つのアプローチのどちらを選択するかは、あなたが作成しようとしているトグルのタイプと、そのトグルがチェックボックスとして発表されたときと実際のボタンとして発表されたときのどちらがユーザーにとって意味を持つかによります。
Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons](/components/buttons#button-plugin). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}} -->

  <h2>Radio toggle buttons</h2>


  <Snippet>
    <Example>
      <examples-forms-check-radio-toggle-buttons />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/radio-toggle-buttons.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Outlined styles</h2>


  <Localization>
    <template #en>
      <p>
        Different variants of <code>.btn</code>, such at the various outlined styles, are supported.
      </p>
    </template>
    <template #ja>
      <p>
        .btn のさまざまなバリエーションがサポートされています。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-check-radio-outlined-styles />
    </Example>
    <ExamplesCode
      path="/forms/check-radio/outlined-styles.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="form-check-variables" file="scss/_variables.scss" >}} -->
</template>