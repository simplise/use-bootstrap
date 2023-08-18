<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <Nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <b-div class="container-fluid">
      <b-a
        class="navbar-brand"
        href="#"
      >
        Top navbar
      </b-a>
      <b-button
        class="navbar-toggler"
        type="button"
        toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <b-span class="navbar-toggler-icon" />
      </b-button>
      <b-div
        id="navbarCollapse"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <b-a
              class="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </b-a>
          </li>
          <li class="nav-item">
            <b-a
              class="nav-link"
              href="#"
            >
              Link
            </b-a>
          </li>
          <li class="nav-item">
            <b-a class="nav-link disabled">
              Disabled
            </b-a>
          </li>
        </ul>
        <BForm
          class="d-flex"
          role="search"
        >
          <BFormInput
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <b-button
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </b-button>
        </BForm>
      </b-div>
    </b-div>
  </Nav>

  <main class="container">
    <b-div class="bg-light p-5 rounded">
      <b-h level="1">
        Navbar example
      </b-h>
      <b-p class="lead">
        This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.
      </b-p>
      <!-- <b-a class="btn btn-lg btn-primary" href="{{< docsref "/components/navbar" >}}" role="button">View navbar docs &raquo;</b-a> -->
      <b-a
        class="btn btn-lg btn-primary"
        role="button"
      >
        View navbar docs &raquo;
      </b-a>
    </b-div>
  </main>
</template>
<!-- <script>
 import './navbar-top.css'
</script> -->

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>