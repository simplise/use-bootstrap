<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <header class="site-header sticky-top py-1">
    <Nav class="container d-flex flex-column flex-md-row justify-content-between">
      <b-a
        class="py-2"
        href="#"
        aria-label="Product"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="d-block mx-auto"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Product</title>
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </svg>
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Tour
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Product
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Features
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Enterprise
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Support
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Pricing
      </b-a>
      <b-a
        class="py-2 d-none d-md-inline-block"
        href="#"
      >
        Cart
      </b-a>
    </Nav>
  </header>

  <main class="mt-5 mb-5">
    <b-div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <b-div class="col-md-5 p-lg-5 mx-auto my-5">
        <b-h
          level="1"
          class="display-4 fw-normal"
        >
          Punny headline
        </b-h>
        <b-p class="lead fw-normal">
          And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.
        </b-p>
        <b-a
          class="btn btn-outline-secondary"
          href="#"
        >
          Coming soon
        </b-a>
      </b-div>
      <b-div class="product-device shadow-sm d-none d-md-block" />
      <b-div class="product-device product-device-2 shadow-sm d-none d-md-block" />
    </b-div>

    <b-div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <b-div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <b-div class="my-3 py-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-light shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
      <b-div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <b-div class="my-3 p-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-dark shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
    </b-div>

    <b-div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <b-div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <b-div class="my-3 p-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-dark shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
      <b-div class="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <b-div class="my-3 py-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-light shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
    </b-div>

    <b-div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <b-div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <b-div class="my-3 p-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
      <b-div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <b-div class="my-3 py-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
    </b-div>

    <b-div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <b-div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <b-div class="my-3 p-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
      <b-div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <b-div class="my-3 py-3">
          <b-h
            level="2"
            class="display-5"
          >
            Another headline
          </b-h>
          <b-p class="lead">
            And an even wittier subheading.
          </b-p>
        </b-div>
        <b-div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        />
      </b-div>
    </b-div>
  </main>

  <footer class="container py-5">
    <b-div class="row">
      <b-div class="col-12 col-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="d-block mb-2"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Product</title>
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </svg>
        <!-- <small class="d-block mb-3 text-muted">&copy; 2017–{{< year >}}</small> -->
        <small class="d-block mb-3 text-muted">&copy; 2017–</small>
      </b-div>
      <b-div class="col-6 col-md">
        <b-h level="5">
          Features
        </b-h>
        <ul class="list-unstyled text-small">
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Cool stuff
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Random feature
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Team feature
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Stuff for developers
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Another one
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Last time
            </b-a>
          </li>
        </ul>
      </b-div>
      <b-div class="col-6 col-md">
        <b-h level="5">
          Resources
        </b-h>
        <ul class="list-unstyled text-small">
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Resource name
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Resource
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Another resource
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Final resource
            </b-a>
          </li>
        </ul>
      </b-div>
      <b-div class="col-6 col-md">
        <b-h level="5">
          Resources
        </b-h>
        <ul class="list-unstyled text-small">
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Business
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Education
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Government
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Gaming
            </b-a>
          </li>
        </ul>
      </b-div>
      <b-div class="col-6 col-md">
        <b-h level="5">
          About
        </b-h>
        <ul class="list-unstyled text-small">
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Team
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Locations
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Privacy
            </b-a>
          </li>
          <li>
            <b-a
              class="link-secondary"
              href="#"
            >
              Terms
            </b-a>
          </li>
        </ul>
      </b-div>
    </b-div>
  </footer>
</template>
<!-- <script>
 import './product.css'
</script> -->

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>