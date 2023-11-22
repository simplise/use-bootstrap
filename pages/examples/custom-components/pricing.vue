<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="display: none;"
  >
    <symbol
      id="check"
      viewBox="0 0 16 16"
    >
      <title>Check</title>
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </symbol>
  </svg>

  <b-div class="container py-3">
    <header>
      <b-div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <b-a
          href="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            class="me-2"
            viewBox="0 0 118 94"
            role="img"
          >
            <title>Bootstrap</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
              fill="currentColor"
            />
          </svg>
          <b-span class="fs-4">
            Pricing example
          </b-span>
        </b-a>

        <Nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <b-a
            class="me-3 py-2 text-dark text-decoration-none"
            href="#"
          >
            Features
          </b-a>
          <b-a
            class="me-3 py-2 text-dark text-decoration-none"
            href="#"
          >
            Enterprise
          </b-a>
          <b-a
            class="me-3 py-2 text-dark text-decoration-none"
            href="#"
          >
            Support
          </b-a>
          <b-a
            class="py-2 text-dark text-decoration-none"
            href="#"
          >
            Pricing
          </b-a>
        </Nav>
      </b-div>

      <b-div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <b-h
          level="1"
          class="display-4 fw-normal"
        >
          Pricing
        </b-h>
        <b-p class="fs-5 text-muted">
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
        </b-p>
      </b-div>
    </header>

    <main>
      <b-div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <b-div class="col">
          <b-div class="card mb-4 rounded-3 shadow-sm">
            <b-div class="card-header py-3">
              <b-h
                level="4"
                class="my-0 fw-normal"
              >
                Free
              </b-h>
            </b-div>
            <b-div class="card-body">
              <b-h
                level="1"
                class="card-title pricing-card-title"
              >
                $0<small class="text-muted fw-light">/mo</small>
              </b-h>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <b-button
                type="button"
                class="w-100 btn btn-lg btn-outline-primary"
              >
                Sign up for free
              </b-button>
            </b-div>
          </b-div>
        </b-div>
        <b-div class="col">
          <b-div class="card mb-4 rounded-3 shadow-sm">
            <b-div class="card-header py-3">
              <b-h
                level="4"
                class="my-0 fw-normal"
              >
                Pro
              </b-h>
            </b-div>
            <b-div class="card-body">
              <b-h
                level="1"
                class="card-title pricing-card-title"
              >
                $15<small class="text-muted fw-light">/mo</small>
              </b-h>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <b-button
                type="button"
                class="w-100 btn btn-lg btn-primary"
              >
                Get started
              </b-button>
            </b-div>
          </b-div>
        </b-div>
        <b-div class="col">
          <b-div class="card mb-4 rounded-3 shadow-sm border-primary">
            <b-div class="card-header py-3 text-white bg-primary border-primary">
              <b-h
                level="4"
                class="my-0 fw-normal"
              >
                Enterprise
              </b-h>
            </b-div>
            <b-div class="card-body">
              <b-h
                level="1"
                class="card-title pricing-card-title"
              >
                $29<small class="text-muted fw-light">/mo</small>
              </b-h>
              <ul class="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <b-button
                type="button"
                class="w-100 btn btn-lg btn-primary"
              >
                Contact us
              </b-button>
            </b-div>
          </b-div>
        </b-div>
      </b-div>

      <b-h
        level="2"
        class="display-6 text-center mb-4"
      >
        Compare plans
      </b-h>

      <b-div class="table-responsive">
        <b-table class="table text-center">
          <b-thead>
            <b-tr>
              <b-th style="width: 34%;" />
              <b-th style="width: 22%;">
                Free
              </b-th>
              <b-th style="width: 22%;">
                Pro
              </b-th>
              <b-th style="width: 22%;">
                Enterprise
              </b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th
                scope="row"
                class="text-start"
              >
                Public
              </b-th>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
            </b-tr>
            <b-tr>
              <b-th
                scope="row"
                class="text-start"
              >
                Private
              </b-th>
              <b-td />
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
            </b-tr>
          </b-tbody>

          <b-tbody>
            <b-tr>
              <b-th
                scope="row"
                class="text-start"
              >
                Permissions
              </b-th>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
            </b-tr>
            <b-tr>
              <b-th
                scope="row"
                class="text-start"
              >
                Sharing
              </b-th>
              <b-td />
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
            </b-tr>
            <b-tr>
              <b-th
                scope="row"
                class="text-start"
              >
                Unlimited members
              </b-th>
              <b-td />
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
            </b-tr>
            <b-tr>
              <b-th
                scope="row"
                class="text-start"
              >
                Extra security
              </b-th>
              <b-td />
              <b-td />
              <b-td>
                <svg
                  class="bi"
                  width="24"
                  height="24"
                >
                  <use xlink:href="#check" />
                </svg>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table>
      </b-div>
    </main>

    <footer class="pt-4 my-md-5 pt-md-5 border-top">
      <b-div class="row">
        <b-div class="col-12 col-md">
          <img
            class="mb-2"
            alt=""
            width="24"
            height="19"
          />
          <!-- <b-img class="mb-2" src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"> -->
          <!-- <small class="d-block mb-3 text-muted">&copy; 2017–{{< year >}}</small> -->
          <small class="d-block mb-3 text-muted">&copy; 2017–</small>
        </b-div>
        <b-div class="col-6 col-md">
          <b-h level="5">
            Features
          </b-h>
          <ul class="list-unstyled text-small">
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Cool stuff
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Random feature
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Team feature
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Stuff for developers
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Another one
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
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
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Resource
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Resource name
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Another resource
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Final resource
              </b-a>
            </li>
          </ul>
        </b-div>
        <b-div class="col-6 col-md">
          <b-h level="5">
            About
          </b-h>
          <ul class="list-unstyled text-small">
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Team
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Locations
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Privacy
              </b-a>
            </li>
            <li class="mb-1">
              <b-a
                class="link-secondary text-decoration-none"
                href="#"
              >
                Terms
              </b-a>
            </li>
          </ul>
        </b-div>
      </b-div>
    </footer>
  </b-div>
</template>
<!-- <script>
 import './pricing.css'
</script> -->

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>