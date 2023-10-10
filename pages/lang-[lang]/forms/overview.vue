
<script setup lang="ts">
definePageMeta({
  'title:en': 'Forms',
  'description:en': `Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.`,
  'title:ja': 'フォーム',
  'description:ja': 'さまざまな Forms (フォーム) を作成するための control styles (フォームコントロールスタイル)、layout options (レイアウトオプション)、custom components (カスタムコンポーネント) の例と使用ガイドラインです。'
})
</script>

<template>
  <h2>Overview</h2>

  <Localization>
    <template #en>
      <p>Be sure to use an appropriate <code>type</code> attribute on all inputs (e.g., <code>email</code> for email address or <code>number</code> for numerical information) to take advantage of newer input controls like email verification, number selection, and more.</p>
      <p>Here's a quick example to demonstrate Bootstrap's form styles. Keep reading for documentation on required classes, form layout, and more.</p>
    </template>
    <template #ja>
      <p>電子メールの検証や数値選択などの新しい入力コントロールを利用するには、すべての入力に適切な <code>type</code> 属性を使用するようにしてください (例: 電子メールのアドレスには <code>email</code>、数値情報には <code>number</code>)。</p>
      <p>フォームスタイルの簡単な例です。 必要に応じて、適切なクラス、フォームレイアウトなどのドキュメントを読んでください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-form-overview />
    </Example>
    <ExamplesCode
      path="/forms/form/overview.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Form text</h2>
  <Localization>
    <template #en>
      <p>Block-level or inline-level form text can be created using <code>FormText</code>.</p>
    </template>
    <template #ja>
      <p>Block-level(ブロックレベル) や inline-level(インラインレベル) のフォームテキストは <code>FormText</code> コンポーネントを用いて作成することができます。</p>
    </template>
  </Localization>

  <!-- ::: warning
##### Associating form text with form controls

フォームテキストは `aria-describedby` 属性を使って、関連するフォームコントロールに明示的に関連付けます。これにより、ユーザーがコントロールにフォーカスを合わせたり入力したりしたときに、スクリーンリーダなどの支援技術がこのフォームテキストをアナウンスすることを確実にします。
Form text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.
::: -->

  <Localization>
    <template #en>
      <p>Form text below inputs can be styled with <code>FormText</code>. </p>
      <p>If a block-level element will be used, a top margin is added for easy spacing from the inputs above.</p>
    </template>
    <template #ja>
      <p>入力の下にあるフォームテキストは <code>FormText</code> コンポーネントでスタイルを整えることができます。</p>
      <p>ブロックレベルの要素を使用する場合は、上の入力項目との間隔が取りやすいように上の余白が追加されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-form-text-1 />
    </Example>
    <ExamplesCode
      path="/forms/form/text-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Inline text can use any typical inline HTML element (be it a <code>&lt;span&gt;</code>, <code>&lt;small&gt;</code>, or something else) with nothing more than the <code>.form-text</code> class.</p>
    </template>
    <template #ja>
      <p>インラインテキストは、典型的なインライン HTML 要素（<code>&lt;span&gt;</code>や<code>&lt;small&gt;</code>など）を使用し、<code>.form-text</code>クラス以外は使用しません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-form-text-2 />
    </Example>
    <ExamplesCode
      path="/forms/form/text-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Disabled forms</h2>
  <Localization>
    <template #en>
      <p>Add the <code>disabled</code> attribute on an input to prevent user interactions and make it appear lighter.</p>
    </template>
    <template #ja>
      <p>入力に <code>disabled</code> 属性を追加することができます。下記の例をご覧ください。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-form-disabled />
    </Example>
    <ExamplesCode
      path="/forms/form/disabled.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Add the <code>disabled</code> attribute to a <code>&lt;fieldset&gt;</code> to disable all the controls within. </p>
      <p>Browsers treat all native form controls (<code>FormInput</code>, <code>FormSelect</code>, and <code>Button</code> elements) inside a` <code>&lt;fieldset disabled&gt;</code>as disabled, preventing both keyboard and mouse interactions on them.</p>
      <p>However, if your form also includes custom button-like elements such as <code>&lt;a class="btn btn-*"&gt;&lt;/a&gt;</code>, these will only be given a style of <code>pointer-events: none</code>, meaning they are still focusable and operable using the keyboard. </p>
      <p>In this case, you must manually modify these controls by adding <code>tabindex="-1"</code> to prevent them from receiving focus and <code>aria-disabled="disabled"</code> to signal their state to assistive technologies.</p>
    </template>
    <template #ja>
      <p><code>disabled</code>属性を<code>&lt;fieldset&gt;</code>に追加して、その中のすべてのコントロールを無効にします。 </p>
      <p>ブラウザは、<code>&lt;fieldset disabled&gt;</code>内のすべてのネイティブフォームコントロール（ <code>FormInput</code>、 <code>FormSelect</code>、および <code>Button</code> コンポーネント）を無効として扱い、キーボードとマウスの両方のインタラクションを防ぎます。</p>
      <p>ただし、フォームに<code>&lt;a class="btn btn-*"&gt;&lt;/a&gt;</code> などのカスタムボタンのような要素も含まれている場合、これらには<code>pointer-events: none</code> の属性のみが与えられます。 </p>
      <p>つまり、キーボードを使用してフォーカス可能で操作可能です。 この場合、これらのコントロールを手動で変更するには、 <code>tabindex="-1"</code> を追加してフォーカスを受け取らないようにし、<code>aria-disabled="disabled"</code> 属性を追加して状態を支援技術に通知する必要があります。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-form-disabled-fieldset />
    </Example>
    <ExamplesCode
      path="/forms/form/disabled-fieldset.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Accessibility

すべてのフォームコントロールに適切なアクセシブルな名前を付けて、支援技術のユーザーにその目的を伝えることができるようにします。これを実現する最も簡単な方法は、 `FormLabel`コンポーネントを使用するか、ボタンの場合は、 `<Button>` ... `</b-button>`コンテンツの一部として十分に説明的なテキストを含めることです。
Ensure that all form controls have an appropriate accessible name so that their purpose can be conveyed to users of assistive technologies. The simplest way to achieve this is to use a `FormLabel` element, or—in the case of buttons—to include sufficiently descriptive text as part of the `<Button>`...`</b-button>` content.

表示可能な `FormLabel`または適切なテキストコンテンツを含めることができない状況では、次のようなアクセシブルな名前を提供する別の方法があります。:
For situations where it's not possible to include a visible `FormLabel` or appropriate text content, there are alternative ways of still providing an accessible name, such as:

- `visually-hidden`属性を使用して非表示にされた `FormLabel`要素`FormLabel` elements hidden using the `visually-hidden` class
- `aria-labelledby`を使用してラベルとして機能できる既存の要素を指す Pointing to an existing element that can act as a label using `aria-labelledby`
- `title`属性を提供する Providing a `title` attribute
- `aria-label`を使用して要素にアクセス可能な名前を明示的に設定する Explicitly setting the accessible name on an element using `aria-label`

これらのいずれも存在しない場合は, 支援技術は、 `FormInput`および `FormTextarea`要素のアクセス可能な名前のフォールバックとして `placeholder`属性を使用するできます。このセクションの例は、いくつかの提案された、ケース固有のアプローチを提供します。
If none of these are present, assistive technologies may resort to using the `placeholder` attribute as a fallback for the accessible name on `FormInput` and `FormTextarea` elements. The examples in this section provide a few suggested, case-specific approaches.

視覚的に隠されたコンテンツ（ `visually-hidden`、 `aria-label`、さらにはフォームフィールドにコンテンツが含まれると消える `placeholder`コンテンツ）を使用することは支援技術ユーザーに利益をもたらしますが、目に見えるラベルテキストの欠如は特定のユーザーにとって問題があります。アクセシビリティと使いやすさの両方の観点から、一般的に、何らかの形式の可視ラベルが最善のアプローチです。
While using visually hidden content (`visually-hidden`, `aria-label`, and even `placeholder` content, which disappears once a form field has content) will benefit assistive technology users, a lack of visible label text may still be problematic for certain users. Some form of visible label is generally the best approach, both for accessibility and usability. -->

  <!-- ## Sass

多くのフォーム変数は一般的なレベルで設定され、個々のフォームコンポーネントで再利用や拡張が可能です。これらは `$btn-input-*` や `$input-*` という変数としてよく使います。
Many form variables are set at a general level to be re-used and extended by individual form components. You'll see these most often as `$btn-input-*` and `$input-*` variables.

### Variables

$btn-input-*変数は、ボタンとフォームコンポーネントの間で共有されるグローバル変数です。これらの変数は、他のコンポーネント固有の変数の値として頻繁に再割り当てされています。
`$btn-input-*` variables are shared global variables between our [buttons](/components/buttons) and our form components. You'll find these frequently reassigned as values to other component-specific variables. -->

  <!-- {{< scss-docs name="input-btn-variables" file="scss/_variables.scss" >}} -->
</template>