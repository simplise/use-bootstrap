<script setup lang="ts">
definePageMeta({
  'title:en': 'Concept',
  'description:en': 'use-bootstrap is the front-end framework based on Nuxt3 and Bootstrap5.',
  'title:ja': 'コンセプト',
  'description:ja': 'use-bootstrap は、Nuxt3 と Bootstrap5 をベースにしたフロントエンド フレームワークです。'
})
</script>

<template>
  <h3>Pure Bootstrap5 CSS</h3>
  <Localization>
    <template #en>
      <p>Only Bootstrap5 CSS is being used without the original CSS. Bootstrap5 CSS is not included. </p>
      <p>Using Bootstrap5 SASS source file, customized original Bootstrap5 CSS would be available. It corresponds to RFS.</p>
    </template>
    <template #ja>
      <p>Bootstrap5 CSS のみを利用しています。 独自のCSSを利用していません。 Bootstrap5 CSS をインクルードしていません。 </p>
      <p>Bootstrap5 SASSソースファイルを利用して、カスタマイズされた独自のBootstrap5 CSSを利用可能です。 RFSに対応しています </p>
    </template>
  </Localization>
  <h3>Pure Vue.js Scripts</h3>
  <Localization>
    <template #en>
      <p>It is described by the script used Vue3 Composition API. </p>
      <p>Bootstrap5 JavaScript and Popper.js are not used, and you don't need to include them.</p>
    </template>
    <template #ja>
      <p>Vue3 Composition API を利用したスクリプトで記述されています。</p>
      <p>Bootstrap5 JavaScript や Popper.js は利用しておらず、インクルード不要です。</p>
    </template>
  </Localization>

  <h3>Pure Components</h3>
  <Localization>
    <template #en>
      <p>use-bootstrap consists of properties set in the component, and is different from Bootstrap5 which consists of values set in the Class attribute or the Data attribute.</p>
      <p>The Class attribute can accept any values, it is complicated and low on readability, and we cannot inspect the values.</p>
      <p>The property of components is clear and the value is able to be inspected.</p>
      <p>We are aiming for output to become identical with Bootstrap5.</p>
      <p>SCSS of various Bootstrap5 templates can be used just as it is.</p>
      <p>Clear property definition and parent-child relationship of components will make sense also crucial to an occasion using the dynamic rendering system and the CMS, WYSIWYG component mainly composed of data of JSON.</p>
    </template>
    <template #ja>
      <p>Class属性 や Data属性 に値を設定し構成される Bootstrap5 とは異なり コンポーネントに プロパティを設定することで構成をします。</p>
      <p>Class属性は、あらゆる値を受け入れ可能であるため 煩雑で可読性が低く、値の検証が不可能です。</p>
      <p>コンポーネントのプロパティは明瞭で、値の検証が可能です。</p>
      <p>出力結果は Bootstrap5 と同一になることを目指しています。</p>
      <p>様々なBootstrap5 テンプレートのSCSSをそのまま利用できます。</p>
      <p>コンポーネントの明確なプロパティ定義や親子関係は JSONなどのデータを主体とした動的レンダリング システムや CMS 、WYSIWYG コンポーネントを用いる際にも重要な意味を持つことになります。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <h2>Flexible Property Specification</h2>
      <p>The Property attribute can be designated the value and expression by v-bind, and also the character string. </p>
      <p>The numerical value, array(blank separator), and object(comma separator) can be used as the character string. Designation by the empty attribute is being supported.</p>
    </template>
    <template #ja>
      <h2>柔軟なプロパティ指定</h2>
      <p>プロパティ属性は、v-bindによる値や式の指定の他、文字列での指定が可能です。</p>
      <p>文字列として、数値、配列 (空白区切り)、オブジェクト(カンマ区切り)が可能です。 空属性による指定をサポートしています。</p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <h2>Correspondence to nuxt-link</h2>
      <p>It corresponds to nuxt-link by using the to-attribute.</p>
    </template>
    <template #ja>
      <h2>nuxt-link 対応</h2>
      <p>to属性を利用することで、nuxt-link に対応します。</p>
    </template>
  </Localization>
  <Localization>
    <template #en>
      <h2>Animation support</h2>
      <p>The animation effect is being supported. Check the visual effect of the OS and browser and the setting of the animation effect to confirm the movement. </p>
    </template>
    <template #ja>
      <h2>Animation support</h2>
      <p>アニメーション効果をサポートしています。 動作を確認するために、OSやブラウザの視覚効果、アニメーション効果の設定を確認してください。</p>
    </template>
  </Localization>



  <Localization>
    <template #en>
      <h2>Moderate Abstraction and Automation</h2>
      <p>As the free layout is available like Bootstrap5, a component doesn't need a high level of abstraction; but a moderate level. </p>
      <p>You can omit the ID for component. It is given automatically as necessary.If set manually, it will be able to accept events from non-descendant elements.</p>
      <p>As far as it's possible, the role attribute and the area attribute are given automatically.</p>
    </template>
    <template #ja>
      <h2>適度な抽象化 及び 自動化</h2>
      <p>Bootstrap5 と同様に 自由なレイアウトを可能とするため コンポーネントの高度な抽象化は行いません。 適度な抽象化のみを行っています。</p>
      <p>コンポーネントのIDは省略可能です。必要な場合、自動的に付与されます。 手動で設定した場合は 子孫要素以外からのイベントを受け入れ可能になります。</p>
      <p>role属性や area属性は可能な限り自動的に付与されます。</p>
    </template>
  </Localization>
</template>
