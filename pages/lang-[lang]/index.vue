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
    npm init nuxt-app project-name
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
    npm i --save bootstrap usebootstrap
  </BashSnippet>

  <Localization>
    <template #en>
      <p> Install additional dependency. </p>
    </template>
    <template #ja>
      <p>依存関係のインストール</p>
    </template>
  </Localization>
  <BashSnippet>
    npm i --save-dev @vueuse/nuxt sass nuxt-icon
  </BashSnippet>

  <Localization>
    <template #en>
      <h2>Import of Bootstrap5 CSS and Setting use-bootstrap</h2>
      <p> We use Bootstrap5 CSS in VueUseBootstrap. Customize <a href="https://getbootstrap.jp/docs/5.0/customize/overview/">SCSS Customize</a> first and import Bootstrap5 CSS as necessary. </p>
      <p> Import UseBootstrap and register component. The component name of the prefix can be specified. </p>
    </template>
    <template #ja>
      <h2>Bootstrap5 CSS のインポート および use-bootstrap の設定</h2>
      <p> UseBootstrap ではBootstrap5のCSSを利用します。 カスタマイズが必要な場合は、<a href="https://getbootstrap.jp/docs/5.0/customize/overview/">SCSSのカスタマイズ</a>SCSSのカスタマイズ を行ってからBootstrap5 CSSをインポートします。 </p>
      <p> UseBootstrap のインポートを行い、コンポーネント登録を行います。 コンポーネント名のプリフィックスを指定できます。</p>
    </template>
  </Localization>
  <BashSnippet>
    <pre>
export default defineNuxtConfig({
  modules: ['usebootstrap'],
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
