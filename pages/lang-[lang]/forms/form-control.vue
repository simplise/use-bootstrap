<script setup lang="ts">
definePageMeta({
  'title:en': 'Form controls',
  'description:en': `Give textual form controls like <input>s and <textareas> an upgrade with custom styles, sizing, focus states, and more.`,
  'title:ja': 'フォームコントロール',
  'description:ja': 'カスタムスタイル、サイジング、フォーカスステートなどで、<input>や<textarea>などのテキストフォームコントロールをアップグレードしましょう。'
})
</script>

<template>
  <h2>Example</h2>
  <Localization>
    <template #en>
      <p>
        Form controls are styled with a mix of Sass and CSS variables, allowing them to adapt to color modes and support any customization method.
      </p>
    </template>
    <template #ja>
      <p>
        フォーム・コントロールはSassとCSS変数を組み合わせてスタイリングされ、カラーモードに適応し、あらゆるカスタマイズ方法をサポートします。
      </p>
    </template>
  </Localization>

  <div class="mb-3">
    <label
      for="exampleFormControlInput1"
      class="form-label"
    >Email address</label>
    <input
      id="exampleFormControlInput1"
      type="email"
      class="form-control"
      placeholder="name@example.com"
    >
  </div>
  <div class="mb-3">
    <label
      for="exampleFormControlTextarea1"
      class="form-label"
    >Example textarea</label>
    <textarea
      id="exampleFormControlTextarea1"
      class="form-control"
      rows="3"
    />
  </div>

  <h2>Sizing</h2>
  <Localization>
    <template #en>
      <p>
        Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.
      </p>
    </template>
    <template #ja>
      <p>
        <code>form-control-lg</code>や<code>form-control-sm</code>などのクラスを使って高さを設定します。
      </p>
    </template>
  </Localization>
  <input
    class="form-control form-control-lg"
    type="text"
    placeholder=".form-control-lg"
    aria-label=".form-control-lg example"
  >
  <input
    class="form-control"
    type="text"
    placeholder="Default input"
    aria-label="default input example"
  >
  <input
    class="form-control form-control-sm"
    type="text"
    placeholder=".form-control-sm"
    aria-label=".form-control-sm example"
  >


  <h2>Form text</h2>
  <Localization>
    <template #en>
      <p>
        Block-level or inline-level form text can be created using <code>.form-text</code>.
      </p>
    </template>
    <template #ja>
      <p>
        ブロックレベルまたはインラインレベルのフォームテキストは、<code>.form-text</code>を使って作成できます。
      </p>
    </template>
  </Localization>

  <h2>woring</h2>
  <Localization>
    <template #en>
      <p>
        Form text should be explicitly associated with the form control it relates to using the <code>aria-describedby</code> attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.
      </p>
      <p>
        Form text below inputs can be styled with <code>.form-text</code>. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.
      </p>
    </template>
    <template #ja>
      <p>
        フォーム・テキストは、<code>aria-describedby</code>属性を使って、関連するフォーム・コントロールと明示的に関連づけられるべきです。こうすることで、スクリーン・リーダーなどの支援技術が、ユーザがコントロールに焦点を合わせたり入力したりするときに、このフォーム・テキストをアナウンスするようになります。
      </p>
      <p>
        入力の下のフォーム・テキストは、<code>.form-text</code>でスタイルできます。ブロック-レベル要素が使用される場合、上の入力との間隔を取りやすくするために上マージンが追加されます。
      </p>
    </template>
  </Localization>

  <label
    for="inputPassword5"
    class="form-label"
  >Password</label>
  <input
    id="inputPassword5"
    type="password"
    class="form-control"
    aria-describedby="passwordHelpBlock"
  >
  <div
    id="passwordHelpBlock"
    class="form-text"
  >
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  </div>
  <Localization>
    <template #en>
      <p>
        Inline text can use any typical inline HTML element (be it a <code>&lt;span&gt;</code>, <code>&lt;small&gt;</code>, or something else) with nothing more than the <code>.form-text</code> class.
      </p>
    </template>
    <template #ja>
      <p>
        インラインテキストは、典型的なインラインHTML要素（span smallであれ、それ以外のものであれ）であれば、<code>.form-text</code>クラス以外何も使わずに使うことができます。
      </p>
    </template>
  </Localization>
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label
        for="inputPassword6"
        class="col-form-label"
      >Password</label>
    </div>
    <div class="col-auto">
      <input
        id="inputPassword6"
        type="password"
        class="form-control"
        aria-describedby="passwordHelpInline"
      >
    </div>
    <div class="col-auto">
      <span
        id="passwordHelpInline"
        class="form-text"
      >
        Must be 8-20 characters long.
      </span>
    </div>
  </div>


  <h2>Disabled</h2>
  <Localization>
    <template #en>
      <p>
        Add the
        <b>disabled</b> boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.
      </p>
    </template>
    <template #ja>
      <p>
        <b>disabled</b>ブーリアン属性を入力に追加して、グレーアウトした外観を与え、ポインタ・イベントを削除し、フォーカスを妨げます。
      </p>
    </template>
  </Localization>
  <input
    class="form-control"
    type="text"
    placeholder="Disabled input"
    aria-label="Disabled input example"
    disabled
  >
  <input
    class="form-control"
    type="text"
    value="Disabled readonly input"
    aria-label="Disabled input example"
    disabled
    readonly
  >


  <h2>Readonly</h2>
  <Localization>
    <template #en>
      <p>
        Add the <code>readonly</code> boolean attribute on an input to prevent modification of the input's value. <code>readonly</code> inputs can still be focused and selected, while <code>disabled</code> inputs cannot.
      </p>
    </template>
    <template #ja>
      <p>
        入力に<code>readonly</code> boolean属性を追加すると、入力値の変更を防ぐことができます。<code>readonly</code>入力はまだフォーカスしたり選択することができますが、<code>disabled</code>入力はできません。
      </p>
    </template>
  </Localization>
  <input
    class="form-control"
    type="text"
    value="Readonly input here..."
    aria-label="readonly input example"
    readonly
  >

  <h2>Readonly plain text</h2>
  <Localization>
    <template #en>
      <p>
        If you want to have <code><input readonly></code> elements in your form styled as plain text, replace <code>.form-control</code> with <code>.form-control-plaintext</code> to remove the default form field styling and preserve the correct <code>margin</code> and <code>padding</code>.
      </p>
    </template>
    <template #ja>
      <p>
        フォームの <code><input readonly></code>要素をプレーン・テキストとしてスタイルしたい場合は、<code>.form-control</code>を<code>.form-control-plaintext</code>に置き換えることで、デフォルトのフォーム・フィールド・スタイルが削除され、正しいマージンとパディングが維持されます。
      </p>
    </template>
  </Localization>
  <div class="mb-3 row">
    <label
      for="staticEmail"
      class="col-sm-2 col-form-label"
    >Email</label>
    <div class="col-sm-10">
      <input
        id="staticEmail"
        type="text"
        readonly
        class="form-control-plaintext"
        value="email@example.com"
      >
    </div>
  </div>
  <div class="mb-3 row">
    <label
      for="inputPassword"
      class="col-sm-2 col-form-label"
    >Password</label>
    <div class="col-sm-10">
      <input
        id="inputPassword"
        type="password"
        class="form-control"
      >
    </div>
  </div>



  <form class="row g-3">
    <div class="col-auto">
      <label
        for="staticEmail2"
        class="visually-hidden"
      >Email</label>
      <input
        id="staticEmail2"
        type="text"
        readonly
        class="form-control-plaintext"
        value="email@example.com"
      >
    </div>
    <div class="col-auto">
      <label
        for="inputPassword2"
        class="visually-hidden"
      >Password</label>
      <input
        id="inputPassword2"
        type="password"
        class="form-control"
        placeholder="Password"
      >
    </div>
    <div class="col-auto">
      <button
        type="submit"
        class="btn btn-primary mb-3"
      >
        Confirm identity
      </button>
    </div>
  </form>


  <h2>File input</h2>

  <div class="mb-3">
    <label
      for="formFile"
      class="form-label"
    >Default file input example</label>
    <input
      id="formFile"
      class="form-control"
      type="file"
    >
  </div>
  <div class="mb-3">
    <label
      for="formFileMultiple"
      class="form-label"
    >Multiple files input example</label>
    <input
      id="formFileMultiple"
      class="form-control"
      type="file"
      multiple
    >
  </div>
  <div class="mb-3">
    <label
      for="formFileDisabled"
      class="form-label"
    >Disabled file input example</label>
    <input
      id="formFileDisabled"
      class="form-control"
      type="file"
      disabled
    >
  </div>
  <div class="mb-3">
    <label
      for="formFileSm"
      class="form-label"
    >Small file input example</label>
    <input
      id="formFileSm"
      class="form-control form-control-sm"
      type="file"
    >
  </div>
  <div>
    <label
      for="formFileLg"
      class="form-label"
    >Large file input example</label>
    <input
      id="formFileLg"
      class="form-control form-control-lg"
      type="file"
    >
  </div>

  <h2>Color</h2>
  <Localization>
    <template #en>
      <p>
        Set the <code>type="color"</code> and add <code>.form-control-color</code> to the <code><input></code>. We use the modifier class to set fixed <code>height</code>s and override some inconsistencies between browsers.
      </p>
    </template>
    <template #ja>
      <p>
        <code>type="color"</code>を設定し、 <code><input></code> に<code>.form-control-color</code>を追加します。 モディファイア・クラスを使って高さを固定にし、ブラウザ間の矛盾をオーバーライドします。
      </p>
    </template>
  </Localization>
  <label
    for="exampleColorInput"
    class="form-label"
  >Color picker</label>
  <input
    id="exampleColorInput"
    type="color"
    class="form-control form-control-color"
    value="#563d7c"
    title="Choose your color"
  >


  <h2>Datalists</h2>
  <Localization>
    <template #en>
      <p>
        Datalists allow you to create a group of <code>&lt;option&gt;</code>s that can be accessed (and autocompleted) from within an <code>&lt;input&gt;</code>. These are similar to <code>&lt;select&gt;</code> elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for <code>&lt;datalist&gt;</code> elements, their styling is inconsistent at best.
      </p>
      <p>
        Learn more about <a href="https://caniuse.com/datalist">support for datalist elements</a>.
      </p>
    </template>
    <template #ja>
      <p>
        データリストは、入力の中からアクセスできる（そしてオートコンプリートできる）<code>&lt;option&gt;</code>のグループを作成することができます。 これらは<code>&lt;select&gt;</code>要素に似ていますが、より多くのメニュースタイルの制限と違いがあります。ほとんどのブラウザやオペレーティングシステムは<code>&lt;datalist&gt;</code>要素をある程度サポートしていますが、そのスタイリングには一貫性がありません。
      </p>
      <p>
        <a href="https://caniuse.com/datalist">datalist要素のサポート</a> についての詳細はこちら。
      </p>
    </template>
  </Localization>
  <!--
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions" />
  <option value="San Francisco" />
  <option value="New York" />
  <option value="Seattle" />
  <option value="Los Angeles" />
  <option value="Chicago" />
</datalist>
{{< /example >}}
-->

  <h2>CSS</h2>

  <h3>Sass variables</h3>
  <Localization>
    <template #en>
      <p>
        <code>$input-*</code> are shared across most of our form controls (and not buttons).
      </p>
    </template>
    <template #ja>
      <p>
        <code>$input-*</code>は、ほとんどのフォームコントロールで共有されています（ボタンではありません）。
      </p>
    </template>
  </Localization>
</template>