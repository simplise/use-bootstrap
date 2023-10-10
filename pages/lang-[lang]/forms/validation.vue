<script setup lang="ts">
definePageMeta({
  'title:en': 'Validation',
  'description:en': `Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.`,
  'title:ja': 'バリデーション',
  'description:ja': 'ブラウザのデフォルトの動作、カスタムスタイルと JavaScript、HTML5 フォーム検証などを使用して、実用的なフィードバックをユーザーに提供します。'
})
</script>

<template>
  <!---
title: バリデーション Validation
description: ブラウザのデフォルトの動作、カスタムスタイルと JavaScript、HTML5 フォーム検証などを使用して、実用的なフィードバックをユーザーに提供します。 Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.
--->

  <!-- ::: warning
現在、クライアントサイドのカスタム検証スタイルとツールチップは、支援技術に公開されていないため、アクセスできないことを認識しています。解決策を検討している間は、サーバーサイドのオプションを使用するか、ブラウザのデフォルトの検証方法を使用することをお勧めします。
We are aware that currently the client-side custom validation styles and tooltips are not accessible, since they are not exposed to assistive technologies. While we work on a solution, we'd recommend either using the server-side option or the default browser validation method.
::: -->

  <!-- ## How it works

フォーム検証がどのように機能するかを次に示します。
Here's how form validation works with Bootstrap:

- HTML フォームの検証は、CSS の 2 つの疑似クラス `：invalid`と`：valid`を介して適用されます。 これは、 `FormInput`、 `FormSelect`、および `FormTextarea`要素に適用されます。HTML form validation is applied via CSS's two pseudo-classes, `:invalid` and `:valid`. It applies to `FormInput`, `FormSelect`, and `FormTextarea` elements.
- ブートストラップは、`：invalid` および `：valid` スタイルのスコープを親の `needs-validation` 属性にスコープ指定し、通常は `Form`に適用されます。それ以外の場合、値のない必須フィールドはページの読み込み時に無効として表示されます。 このようにして、いつアクティブ化するかを選択できます（通常はフォームの送信が試行された後）。Bootstrap scopes the `:invalid` and `:valid` styles to parent `needs-validation` class, usually applied to the `Form`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
- フォームの外観をリセットするには（たとえば、AJAX を使用した動的フォーム送信の場合）、送信後に `Form`から `needs-validation` 属性を削除します。To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `needs-validation` class from the `Form` again after submission.
- フォールバックとして、[server-side validation](#server-side) の疑似クラスの代わりに、 `.is-invalid` と `.is-valid` を使用できます。needs-validation親クラスは必要ありません。As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server-side validation](#server-side). They do not require a `needs-validation` parent class.
- CSS の動作には制約があるため、（現在のところ）カスタム JavaScript を使用しないと、DOM のフォームコントロールの前にある `InputLabel`にスタイルを適用できません。Due to constraints in how CSS works, we cannot (at present) apply styles to a `InputLabel` that comes before a form control in the DOM without the help of custom JavaScript.
- モダンブラウザでは constraint validation API をサポートしています。フォームコントロールを検証するための一連の JavaScript メソッドです。All modern browsers support the [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- フィードバックメッセージは、browser defaults (ブラウザごとに異なり、CSS でスタイル設定できない) または追加の HTML と CSS を使用したカスタムフィードバックスタイルを利用できます。Feedback messages may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- JavaScript では、 `setCustomValidity`を使用してカスタムの有効性メッセージを提供できます。You may provide custom validity messages with `setCustomValidity` in JavaScript.

カスタムフォーム検証スタイル、オプションのサーバー側クラス、およびブラウザーのデフォルトについて、以下のデモを検討してください。
With that in mind, consider the following demos for our custom form validation styles, optional server-side classes, and browser defaults. -->

  <h2>Custom styles</h2>
  <Localization>
    <template #en>
      <p>
        For custom Bootstrap form validation messages, you'll need to add the <code>novalidate</code> boolean attribute to your <code>Form</code> . This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the <code>:invalid</code> and <code>:valid</code> styles applied to your form controls.
      </p>
      <p>
        Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for <code>FormSelect</code>s are only available with <code>FormSelect</code>, and not <code>FormControl</code>.
      </p>
    </template>
    <template #ja>
      <p>フォーム検証メッセージの場合、 <code>novalidate</code> ブール属性を<code>Form</code> に追加する必要があります。これにより、ブラウザのデフォルトのフィードバックツールチップが無効になりますが、JavaScript の form validation APIs へのアクセスは引き続き提供されます。 以下のフォームを送信してみてください。 JavaScript が送信ボタンをインターセプトし、フィードバックを中継します。 送信しようとすると、フォームコントロールに適用された <code>：invalid</code>および<code>：valid</code>スタイルが表示されます。</p>
      <p>
        カスタムフィードバックスタイルは、フィードバックをより良く伝えるために、カスタムカラー、ボーダー、フォーカススタイル、アイコンを適用します。<code>FormSelect</code> のアイコンは <code>FormSelect</code> でのみ利用可能であり、<code>FormControl</code> では利用できません。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-validation-custom-styles />
    </Example>
    <ExamplesCode
      path="/forms/validation/custom-styles.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/validation/custom-styles.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/validation/custom-styles.html)
:::
:::: -->



  <h2>Browser defaults</h2>
  <Localization>
    <template #en>
      <p>
        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.
      </p>
      <p>
        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.
      </p>
    </template>
    <template #ja>
      <p>
        カスタムバリデーションのフィードバックメッセージや、フォームの動作を変更するための JavaScript の記述はブラウザのデフォルト設定を使用することができます。下記のフォームを送信してみてください。お使いのブラウザや OS によって、フィードバックのスタイルが若干異なります。
      </p>
      <p>
        これらのフィードバックスタイルは CSS ではスタイリングできませんが、JavaScript を使ってフィードバックテキストをカスタマイズすることができます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-validation-browser-defaults />
    </Example>
    <ExamplesCode
      path="/forms/validation/browser-defaults.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/validation/browser-defaults.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/validation/browser-defaults.html)
:::
:::: -->

  <h2 class="mt-3">
    Server side
  </h2>
  <Localization>
    <template #en>
      <p>
        We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these classes.
      </p>
      <p>
        For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using <code>aria-describedby</code> (noting that this attribute allows more than one <code>id</code> to be referenced, in case the field already points to additional form text).
      </p>
      <p>
        To fix <a href="https://github.com/twbs/bootstrap/issues/25110">issues with border radius</a>, input groups require an additional <code>.has-validation</code> class.
      </p>
    </template>
    <template #ja>
      <p>
        クライアントサイドのバリデーションを使用することを推奨しますが、サーバーサイドのバリデーションが必要な場合には、<code>.is-invalid</code>と<code>.is-valid</code>を使用して、無効なフォームフィールドと有効なフォームフィールドを示すことができます。これらのクラスでは .<code>invalid-feedback</code> もサポートされていることに注意してください。
      </p>
      <p>
        無効なフィールドに対しては、無効なフィードバック/エラーメッセージが <code>aria-describedby</code> を使用して関連するフォームフィールドに関連付けられていることを確認してください (フィールドが既に追加のフォームテキストを指している場合には、この属性で複数の <code>id</code> を参照することができることに注意してください)。
      </p>
      <p>
        <a href="https://github.com/twbs/bootstrap/issues/25110">issues with border radius</a>を修正するために、入力グループは追加の .has-validation クラスを必要とします。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-forms-validation-server-side />
    </Example>
    <ExamplesCode
      path="/forms/validation/server-side.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/validation/server-side.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/validation/server-side.html)
:::
:::: -->

  <h2 class="mt-3">
    Supported elements
  </h2>
  <Localization>
    <template #en>
      <p>
        Validation styles are available for the following form controls and components:
      </p>
      <ul>
        <li><code><input></code> s and <code>&lt;textarea&gt;</code>s with <code>.form-control</code> (including up to one <code>.form-control</code> in input groups)</li>
        <li><code>&lt;Select&gt;</code>s with <code>.form-select</code></li>
        <li> <code>.form-check</code>s </li>
      </ul>
    </template>

    <template #ja>
      <p>
        バリデーションスタイルは、以下のフォームコントロールとコンポーネントで利用できます。
      </p>
      <ul>
        <li>.form-controlを使用した<code><input></code>および<code>&lt;textarea&gt;</code>（入力グループ内に 1 つまでの.form-controlを含む</li>
        <li><code>&lt;Select&gt;</code>の .form-select との併用</li>
        <li> <code>.form-check</code>s </li>
      </ul>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-validation-supported />
    </Example>
    <ExamplesCode
      path="/forms/validation/supported.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/validation/supported.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/validation/supported.html)
:::
:::: -->

  <h2>Tooltips</h2>
  <Localization>
    <template #en>
      <p class="mt-3">
        If your form layout allows it, you can swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.
      </p>
    </template>
    <template #ja>
      <p>
        フォームレイアウトが許すのであれば、<code>.{valid|invalid}-feedback</code> を <code>.{valid|invalid}-tooltip</code> と入れ替えて、スタイル付きのツールチップにバリデーションのフィードバックを表示させることができます。ツールチップの位置を決めるためには、 <code>position: relative</code> を持つ親を持つようにしてください。下の例では、カラムクラスはすでにこれを持っていますが、あなたのプロジェクトでは別の設定が必要になるかもしれません。
      </p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-forms-validation-tooltips />
    </Example>
    <ExamplesCode
      path="/forms/validation/tooltips.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/forms/validation/tooltips.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/forms/validation/tooltips.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="form-feedback-variables" file="scss/_variables.scss" >}} -->

  <!-- ### Mixins

2 つの mixin を[loop](#loop)を介して組み合わせ、フォーム検証のフィードバックスタイルを生成しています。
Two mixins are combined together, through our [loop](#loop), to generate our form validation feedback styles. -->

  <!-- {{< scss-docs name="form-validation-mixins" file="scss/mixins/_forms.scss" >}} -->

  <!-- ### Map

これは、`_variables.scss`の検証用 Sass マップです。これを上書きしたり拡張したりして、異なる状態や追加の状態を生成することができます。
This is the validation Sass map from `_variables.scss`. Override or extend this to generate different or additional states. -->

  <!-- {{< scss-docs name="form-validation-states" file="scss/_variables.scss" >}} -->

  <!-- `$form-validation-states`のマップには、ツールチップやフォーカススタイルをオーバーライドするための 3 つのオプションパラメータを含めることができます。
Maps of `$form-validation-states` can contain three optional parameters to override tooltips and focus styles. -->

  <!-- ### Loop

検証スタイルを生成するために、`$form-validation-states`マップの値を繰り返し処理するために使用します。上記の Sass マップに変更があった場合は、このループを介してコンパイルされた CSS に反映されます。
Used to iterate over `$form-validation-states` map values to generate our validation styles. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop. -->

  <!-- {{< scss-docs name="form-validation-states-loop" file="scss/forms/_validation.scss" >}} -->

  <!-- ### Customizing

バリデーションの状態は、Sass の `$form-validation-states` マップを使ってカスタマイズすることができます。この Sass マップは `_variables.scss` ファイルにあり、デフォルトの `valid` / `invalid` の検証状態を生成します。このマップには、各状態の色、アイコン、ツールチップの色、フォーカスシャドウをカスタマイズするためのネストされたマップが含まれています。ブラウザでは他の状態はサポートされていませんが、カスタムスタイルを使用することで、より複雑なフォームフィードバックを簡単に追加することができます。
Validation states can be customized via Sass with the `$form-validation-states` map. Located in our `_variables.scss` file, this Sass map is how we generate the default `valid`/`invalid` validation states. Included is a nested map for customizing each state's color, icon, tooltip color, and focus shadow. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.

なお、`$form-validation-states` の値をカスタマイズする際には、`form-validation-state mixin` を変更しないことをお勧めします。
Please note that **we do not recommend customizing `$form-validation-states` values without also modifying the `form-validation-state` mixin**. -->
</template>