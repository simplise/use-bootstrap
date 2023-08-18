<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <b-div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mb-5 mt-5">
    <header class="mb-auto">
      <b-div>
        <b-h
          level="3"
          class="float-md-start mb-0"
        >
          Cover
        </b-h>
        <Nav class="nav nav-masthead justify-content-center float-md-end">
          <b-a
            class="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            href="#"
          >
            Home
          </b-a>
          <b-a
            class="nav-link fw-bold py-1 px-0"
            href="#"
          >
            Features
          </b-a>
          <b-a
            class="nav-link fw-bold py-1 px-0"
            href="#"
          >
            Contact
          </b-a>
        </Nav>
      </b-div>
    </header>

    <main class="px-3">
      <b-h level="1">
        Cover your page.
      </b-h>
      <b-p class="lead">
        Cover is a one-page template for building simple and beautiful home pages. Download, edit the
        text, and add your own fullscreen background photo to make it your own.
      </b-p>
      <b-p class="lead">
        <b-a
          href="#"
          class="btn btn-lg btn-secondary fw-bold border-white bg-white"
        >
          Learn more
        </b-a>
      </b-p>
    </main>

    <footer class="mt-auto text-white-50">
      <b-p>
        Cover template for <b-a
          href="https://getbootstrap.com/"
          class="text-white"
        >
          Bootstrap
        </b-a>, by <b-a
          href="https://twitter.com/mdo"
          class="text-white"
        >
          @mdo
        </b-a>.
      </b-p>
    </footer>
  </b-div>
</template>
<!-- <script>
 import './cover.css'
</script> -->
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>