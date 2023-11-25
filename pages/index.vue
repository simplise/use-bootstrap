<script setup lang="ts">
definePageMeta({
  'title': 'use-bootstrap',
  'description': 'use-bootstrap is the front-end framework based on Nuxt3 and Bootstrap5.',
  layout: 'masthead'
})
</script>

<template>
  <b-div
    id="content"
    margin="b-3"
    class="bd-masthead"
  >
    <DocsMastheadMain />
  </b-div>
  <DocsMastheadFollowup />
</template>
