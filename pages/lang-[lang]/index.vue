<script setup lang="ts">
definePageMeta({
  'title:en': 'Quick start',
  'description:en': 'use-bootstrap is the front-end framework based on Nuxt3 and Bootstrap5.',
  'title:ja': 'はじめる',
  'description:ja': 'use-bootstrap は、Nuxt3 と Bootstrap5 をベースにしたフロントエンド フレームワークです。'
})
</script>

<template>
  <Localization>
    <template #en>
      <h2>Installation</h2>
    </template>
    <template #ja>
      <h2>インストール</h2>
    </template>
  </Localization>
  <Localization>
    <template #en>
      <p> Create nuxt-app </p>
    </template>
    <template #ja>
      <p>Nuxtプロジェクトの作成</p>
    </template>
  </Localization>
  <BashSnippet>
    npx nuxi@latest init project-name
  </BashSnippet>

  <Localization>
    <template #en>
      <p> Installation of Bootstrap5 and use-bootstrap NPM Package </p>
    </template>
    <template #ja>
      <p>Bootstrap5 NPMパッケージのインストール</p>
    </template>
  </Localization>
  <BashSnippet>
    npm i usebootstrap
  </BashSnippet>

  <Localization>
    <template #en>
      <p> Add a usebootstrap section in your nuxt.config. </p>
    </template>
    <template #ja>
      <p> nuxt.config の modules セクションに usebootstrap を追加します。</p>
    </template>
  </Localization>
  <BashSnippet>
    <pre>
export default defineNuxtConfig({
  modules: [
    'usebootstrap'
    ],
})
</pre>
  </BashSnippet>

  <Localization>
    <template #en>
      <h2>Configuration</h2>
      <p> We use Bootstrap5 SCSS in use-bootstrap. </p>
      <p> Customize <a href="https://getbootstrap.jp/docs/5.0/customize/overview/">SCSS Customize</a> first and import Bootstrap5 CSS as necessary. </p>
      <p> In use-bootstrap, there are two types of components, HTML components and Bootstrap components, each of which can be prefixed with a component name. </p>
    </template>
    <template #ja>
      <h2>設定</h2>
      <p> use-bootstrap ではBootstrap5のSCSSを利用します。</p>
      <p> カスタマイズが必要な場合は、<a href="https://getbootstrap.jp/docs/5.0/customize/overview/">SCSSのカスタマイズ</a>SCSSのカスタマイズ を行ってからBootstrap5 CSSをインポートします。 </p>
      <p> use-bootstrap では HTMLコンポーネントとBootstrapコンポーネントの二種類があり それぞれコンポーネント名のプリフィックスを指定できます。</p>
    </template>
  </Localization>
  <BashSnippet>
    <pre>
export default defineNuxtConfig({
  modules: [
    'usebootstrap'
    ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    "bootstrap/scss/bootstrap.scss"
  ]
})
</pre>
  </BashSnippet>
</template>
