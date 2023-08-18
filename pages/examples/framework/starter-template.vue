<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <header>
    <!-- Fixed navbar -->
    <Nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Fixed navbar
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
  </header>
  <p><br></p>

  <!-- Begin page content -->
  <main class="flex-shrink-0 mt-5">
    <Container class="mt-5">
      <b-h
        level="1"
        class="mt-5"
      >
        Sticky footer with fixed navbar
      </b-h>
      <b-p class="lead">
        Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code class="small">padding-top: 60px;</code> on the <code class="small">main &gt; .container</code>.
      </b-p>
      <b-p>Back to <b-a>the default sticky footer</b-a> minus the navbar.</b-p>
      <!-- <b-p>Back to <b-a href="{{< docsref "/examples/sticky-footer" >}}">the default sticky footer</b-a> minus the navbar.</b-p> -->
    </Container>
  </main>

  <footer class="footer mt-auto py-3 bg-light">
    <Container>
      <b-span class="text-muted">
        Place sticky footer content here.
      </b-span>
    </Container>
  </footer>
</template>
<!-- <script>
 import './sticky-footer-navbar.css'
</script> -->

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>