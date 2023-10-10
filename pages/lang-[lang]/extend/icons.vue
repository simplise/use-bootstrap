<script setup lang="ts">
definePageMeta({
  'title:en': 'Icons',
  'description:en': `Guidance and suggestions for using external icon libraries with Bootstrap.`,
  'title:ja': 'Icons',
  'description:ja': 'Bootstrapで外部アイコンライブラリを使用するためのガイダンスと提案'
})
</script>
 
<template>
  <div>
    <NuxtLink
      to="https://icon-sets.iconify.design/"
      target="_new"
    >
      Brouse Iconfy icon sets
    </NuxtLink>
  </div>
  <div>
    <NuxtLink
      to="https://nuxt.com/modules/icon"
      target="_new"
    >
      Nuxt Icon Docs
    </NuxtLink>
  </div>
  <h2>Basic examples</h2>
  <Snippet>
    <Example>
      <examples-extend-icons-example />
    </Example>
    <ExamplesCode
      path="/extend/icons/example.vue"
      lang="vue"
    />
  </Snippet>
</template>