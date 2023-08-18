
<script setup lang="ts">
definePageMeta({
  'title:en': 'Button group',
  'description:en': `Group a series of buttons together on a single line or stack them in a vertical column.`,
  'title:ja': 'ボタングループ',
  'description:ja': 'ボタングループは複数のボタンを1行にまとめます。ボタングループの使い方の例を示します。'
})
</script>

<template>
  <h2>Basic example</h2>
  <Localization>
    <template #en>
      <p>Wrap a series of buttons with <code>Button</code> component in <code>ButtonGroup</code> component.</p>
    </template>
    <template #ja>
      <p><code>ButtonGroup</code> コンポーネントで <code>Button</code> コンポーネントを含む一連のボタンを囲みます</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-group-basic-example />
    </Example>
    <ExamplesCode
      path="/components/button-group/basic-example.vue"
      lang="vue"
    />
  </Snippet>


  <h5 class="mt-3">
    warning
  </h5>
  <h5> Ensure correct <code>role</code> and provide a label</h5>
  <p>
    In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate <code>role</code> attribute needs to be provided. For button groups, this would be <code>role="group"</code>, while toolbars should have a <code>role="toolbar"</code>.
  </p>
  <p>
    In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use <code>aria-label</code>, but alternatives such as <code>aria-labelledby</code> can also be used.
  </p>
  <p>
    These classes can also be added to groups of links, as an alternative to the <LocalLink to="/components/navs-tabs">
      nav navigation components
    </LocalLink>.
  </p>
  <Snippet>
    <Example>
      <examples-components-button-group-basic-example-2 />
    </Example>
    <ExamplesCode
      path="/components/button-group/basic-example-2.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Mixed styles
  </h2>
  <Snippet>
    <Example>
      <examples-components-button-group-mixed-styles />
    </Example>
    <ExamplesCode
      path="/components/button-group/mixed-styles.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Outlined styles
  </h2>
  <Snippet>
    <Example>
      <examples-components-button-group-outlined-styles />
    </Example>
    <ExamplesCode
      path="/components/button-group/outlined-styles.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-3">
    Checkbox and radio button groups
  </h2>
  <Localization>
    <template #en>
      <p>
        Combine button-like checkbox and radio <LocalLink to="/forms/checks-radios">
          toggle buttons
        </LocalLink> into a seamless looking button group.
      </p>
    </template>
    <template #ja>
      <p>
        チェックボックスやラジオボタンのような <LocalLink to="/forms/checks-radios">
          toggle buttons
        </LocalLink> を組み合わせてシームレスなボタングループにできます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-group-checkbox-radio />
    </Example>
    <ExamplesCode
      path="/components/button-group/checkbox-radio.vue"
      lang="vue"
    />
  </Snippet>


  <Snippet>
    <Example>
      <examples-components-button-group-checkbox-radio-2 />
    </Example>
    <ExamplesCode
      path="/components/button-group/checkbox-radio-2.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Button toolbar
  </h2>
  <Localization>
    <template #en>
      <p>Combine sets of button groups into button toolbars for more complex components. Use utility attributes as needed to space out groups, buttons, and more.</p>
    </template>
    <template #ja>
      <p>ボタングループのセットをツールバーに組み合わせて、複雑なコンポーネントを作成できます。必要に応じてユーティリティ属性を使用して、グループやボタンなど配置します。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-group-button-toolbar />
    </Example>
    <ExamplesCode
      path="/components/button-group/button-toolbar.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you'll likely need some attributes though to space things properly.</p>
    </template>
    <template #ja>
      <p>入力グループとツールバーのボタングループを自由に組み合わせてください。 適切に配置するには属性が必要です。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-group-button-toolbar-2 />
    </Example>
    <ExamplesCode
      path="/components/button-group/button-toolbar-2.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Sizing</h2>
  <p>
    Instead of applying button sizing classes to every button in a group, just add <code>.btn-group-*</code> to each <code>.btn-group</code>, including each one when nesting multiple groups.
  </p>
  <Snippet>
    <Example>
      <examples-components-button-group-sizing />
    </Example>
    <ExamplesCode
      path="/components/button-group/sizing.vue"
      lang="vue"
    />
  </Snippet>


  <h2 class="mt-3">
    Nesting
  </h2>

  <!-- ボタンのサイジングクラスをグループ内のボタンに適用するのではなく, グループに `.btn-group` と `.btn-group-*` を適用します。
Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons. -->
  <!-- <p>
    <code>ButtonGroup</code> コンポーネントをネストして表記することで表示させます。
  </p> -->
  <Snippet>
    <Example>
      <examples-components-button-group-nesting />
    </Example>
    <ExamplesCode
      path="/components/button-group/nesting.vue"
      lang="vue"
    />
  </Snippet>



  <h2 class="mt-3">
    Vertical variation
  </h2>
  <Localization>
    <template #en>
      <p>Make a set of buttons appear vertically stacked rather than horizontally. <b>Split button dropdowns are not supported here.</b></p>
    </template>
    <template #ja>
      <p>ボタンを水平ではなく縦に積み重ねて表示させます。スプリットボタンのドロップダウンはここではサポートされていません。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-button-group-vertical-variation />
    </Example>
    <ExamplesCode
      path="/components/button-group/vertical-variation.vue"
      lang="vue"
    />
  </Snippet>
</template>