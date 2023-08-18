<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <main class="container mt-5">
    <div class="bg-light p-5 rounded mt-5">
      <b-h level="1">
        Bottom Navbar example
      </b-h>
      <b-p class="lead">
        This example is a quick exercise to illustrate how the bottom navbar works.
      </b-p>
      <!-- <b-a class="btn btn-lg btn-primary" href="{{< docsref "/components/navbar" >}}" role="button">View navbar docs &raquo;</b-a> -->
      <b-a
        class="btn btn-lg btn-primary"
        role="button"
      >
        View navbar docs &raquo;
      </b-a>
    </div>
  </main>
  <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid mt-5">
      <a
        class="navbar-brand"
        href="#"
      >Bottom navbar</a>
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
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
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
          <li class="nav-item dropup">
            <b-a
              id="dropdown10"
              class="nav-link dropdown-toggle"
              href="#"
              toggle="dropdown"
              aria-expanded="false"
            >
              Dropup
            </b-a>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdown10"
            >
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  Action
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  Another action
                </b-a>
              </li>
              <li>
                <b-a
                  class="dropdown-item"
                  href="#"
                >
                  Something else here
                </b-a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>