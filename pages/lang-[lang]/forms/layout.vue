<script setup lang="ts">
definePageMeta({
  'title:en': 'Layout',
  'description:en': `Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.`,
  'title:ja': 'レイアウト ',
  'description:ja': 'インラインから水平方向、カスタムグリッドまで、フォームのLayout (レイアウト) でフォームに構造を与えます。'
})
</script>

<template>
  <!--LayoutのLocalLinkが未挿入-->


  <!-- ## Forms

フォームフィールドのすべてのグループは `Form` 要素の中に存在しなければなりません。 `Form` 要素にデフォルトのスタイリングは Bootstrap では提供していませんが、デフォルトで提供されている強力なブラウザ機能があります。
Every group of form fields should reside in a `Form` element. Bootstrap provides no default styling for the `Form` element, but there are some powerful browser features that are provided by default.

- 使用可能な属性の概要と完全なリストについては [MDN フォームのドキュメント](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) を参照してください。 New to browser forms? Consider reviewing [the MDN form docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) for an overview and complete list of available attributes.
- `Form` 内の `Button` のデフォルトは `type="submit"` なので、具体的な表現に努め、必ず `type` を含めるようにしてください。`Button`s within a `Form` default to `type="submit"`, so strive to be specific and always include a `type`.
- `Form` の `disabled` 属性を使えば、フォーム内のすべてのフォーム要素を無効にすることができます。You can disable every form element within a form with the `disabled` attribute on the `Form`.

Bootstrap は `display: block` と `width: 100%` をほぼすべてのフォームコントロールに適用しているので、フォームはデフォルトでは垂直に並びます。追加のクラスを使って、フォームごとにこのレイアウトを変えることができます。
Since Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis. -->

  <h2>Utilities</h2>
  <Localization>
    <template #en>
      <p>
        <LocalLink to="/utilities/spacing">
          Margin utilities
        </LocalLink>are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. We recommend sticking to <code>margin-bottom</code> utilities, and using a single direction throughout the form for consistency.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/utilities/spacing">
          Margin utilities
        </LocalLink>はフォームにいくつかの構造を追加する最も簡単な方法です。labels(ラベル)、controls(コントロール)、optional form text(オプションのフォームテキスト)、form validation messaging(フォーム検証メッセージ) の基本的なグループ化を提供します。一貫性を持たせるために、<code>margin-bottom</code> ユーティリティで、フォーム全体で単一の方向を使用することを推奨します。
      </p>
    </template>
  </Localization>

  <!-- `Fieldset`、`Div`、などの要素を使って自由にフォームを作成してください。
Feel free to build your forms however you like, with `Fieldset`s, `Div`s, or nearly any other element. -->


  <Snippet>
    <Example>
      <examples-forms-layout-utilities />
    </Example>
    <ExamplesCode
      path="/forms/layout/utilities.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Form grid</h2>
  <Localization>
    <template #en>
      <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>
    </template>
    <template #ja>
      <p>複雑なフォームはグリッドクラスを使用して作成することができます。複数のカラム、様々な幅、追加の整列オプションを必要とするフォームレイアウトに使用します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-form-grid />
    </Example>
    <ExamplesCode
      path="/forms/layout/form-grid.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Gutters
  </h2>
  <Localization>
    <template #en>
      <p>
        <LocalLink to="/Layout/gutters">
          gutter modifer classes
        </LocalLink>, you can have control over the gutter width in as well the inline as block direction.
      </p>
    </template>
    <template #ja>
      <p>
        <LocalLink to="/Layout/gutters">
          gutter modifer classes
        </LocalLink>を追加することで、ブロックの方向と同様にインラインでも gutters の幅を制御することができます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-gutters-1 />
    </Example>
    <ExamplesCode
      path="/forms/layout/gutters-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>More complex layouts can also be created with the grid system.</p>
    </template>
    <template #ja>
      <p>グリッドシステムを使用して、より複雑なレイアウトを作成することもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-gutters-2 />
    </Example>
    <ExamplesCode
      path="/forms/layout/gutters-2.vue"
      lang="vue"
    />
  </Snippet>



  <h2 class="mt-3">
    Horizontal form
  </h2>
  <Localization>
    <template #en>
      <p>Create horizontal forms with the grid by adding the <code>Row</code> class to form groups and using the <code>col</code> classes to specify the width of your labels and controls. Be sure to add <code>ColFormLabel</code> to your <code>FormLabel</code>s as well so they're vertically centered with their associated form controls.</p>
      <p>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the <code>padding-top</code> on our stacked radio inputs label to better align the text baseline.</p>
    </template>
    <template #ja>
      <p>グリッドを使って水平なフォームを作成します。フォームグループに <code>Row</code> を追加し、ラベルやコントロールの幅を指定するために <code>Col</code> コンポーネントに対して <code>col</code> 属性を使用します。<code>FormLabel</code> に <code>ColFormLabel</code> 属性を追加して、関連するフォームコントロールと垂直方向の中央に配置することができます。</p>
      <p>必要に応じて、margin や padding のユーティリティを使用して適切な整列を行う必要があります。たとえば、縦に並んだラジオラベルの <code>dding-top</code> を削除して、テキストのベースラインを適切に整列させます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-horizontal-form />
    </Example>
    <ExamplesCode
      path="/forms/layout/horizontal-form.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Horizontal form label sizing</h2>

  <Localization>
    <template #en>
      <p>
        Be sure to use <code>size = "sm"</code> or <code>size = "lg"</code> to your <code>FormLabel</code>s or <code>Legend</code>s to correctly follow the size of <code>size = "lg"</code> and <code>size = "sm"</code>.
      </p>
    </template>
    <template #ja>
      <p>
        <code>size = "sm"</code> または <code>size = "lg"</code> を、 <code>FormLabel</code> または <code>Legend</code>に使用してください。<code>size = "lg"</code> または <code>size = "sm"</code> でサイズを変更できます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-horizontal-sizing />
    </Example>
    <ExamplesCode
      path="/forms/layout/horizontal-sizing.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Column sizing
  </h2>
  <Localization>
    <template #en>
      <p>As shown in the previous examples, our grid system allows you to place any number of <code>Col</code>s within a <code>Row</code>. </p>
      <p>They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining <code>Col</code>s equally split the rest, with specific column classes like <code>col="sm-7"</code>.</p>
    </template>
    <template #ja>
      <p>前の例で示したように、グリッドシステムでは <code>Row</code> の中に任意の数の <code>Col</code> を配置することができます。これらの列は利用可能な幅を等しく分割します。</p>
      <p><code>col="sm-7"</code> のような特定の属性を使って、残りの <code>Col</code> が残りのスペースを均等に分割するように、カラムのサブセットを選択することもできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-column-sizing />
    </Example>
    <ExamplesCode
      path="/forms/layout/column-sizing.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Auto-sizing
  </h2>
  <Localization>
    <template #en>
      <p>The example below uses a flexbox utility to vertically center the contents and changes <code>Col</code>o <code>col="auto"</code> so that your columns only take up as much space as needed. </p>
      <p>Put another way, the column sizes itself based on the contents.</p>
    </template>
    <template #ja>
      <p>以下の例では、flexbox ユーティリティを使用してコンテンツを垂直方向にセンタリングし、<code>Col</code> に <code>col="auto"</code> 属性を追加して、カラムが必要なだけのスペースを占有するようにしています。</p>
      <p>カラムのサイズは内容に基づいて自動的に決定されます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-auto-sizing-1 />
    </Example>
    <ExamplesCode
      path="/forms/layout/auto-sizing-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>You can then remix that once again with size-specific column classes.</p>
    </template>
    <template #ja>
      <p>サイズ固有の列クラスを使用して、これをもう一度リミックスできます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-auto-sizing-2 />
    </Example>
    <ExamplesCode
      path="/forms/layout/auto-sizing-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Inline forms
  </h2>
  <Localization>
    <template #en>
      <p>
        Use the <code>Row</code> classes to create responsive horizontal layouts. By adding <LocalLink to="/layout/gutters">
          gutter modifier classes
        </LocalLink>, we'll have gutters in horizontal and vertical directions. On narrow mobile viewports, the <code>col=12</code> helps stack the form controls and more.
      </p>
      <p>The <code>align="item-center"</code> aligns the form elements to the middle, making the <code>FormCheckInput</code> align properly.</p>
    </template>
    <template #ja>
      <p>
        <code>Row</code> コンポーネントに <code>columns</code> 属性を使って、レスポンシブな水平レイアウトを作成します。<LocalLink to="/layout/gutters">
          gutter modifier classes
        </LocalLink>を追加することで、水平方向と垂直方向にガッターを設けることができます。狭いモバイルのビューポートでは、<code>col=12</code>でフォームコントロールなどを重ねることができます。
      </p>
      <p><code>align="item-center"</code>では、フォーム要素を中央に寄せて、<code>FormCheckInput</code>の位置を適切に合わせます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-forms-layout-inline-forms />
    </Example>
    <ExamplesCode
      path="/forms/layout/inline-forms.vue"
      lang="vue"
    />
  </Snippet>
</template>