<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <div class="mt-5 mb-5">
    <p><br></p>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <b-a
        class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
        href="#"
      >
        Company name
      </b-a>
      <b-button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <b-span class="navbar-toggler-icon" />
      </b-button>
      <BFormInput
        class="form-control form-control-dark w-100 rounded-0 border-0"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <b-div class="navbar-nav">
        <b-div class="nav-item text-nowrap">
          <b-a
            class="nav-link px-3"
            href="#"
          >
            Sign out
          </b-a>
        </b-div>
      </b-div>
    </header>
  </div>
  <b-div class="container-fluid">
    <b-div class="row">
      <Nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <b-div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <b-a
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                <b-span
                  data-feather="home"
                  class="align-text-bottom"
                />
                Dashboard
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file"
                  class="align-text-bottom"
                />
                Orders
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="shopping-cart"
                  class="align-text-bottom"
                />
                Products
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="users"
                  class="align-text-bottom"
                />
                Customers
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="bar-chart-2"
                  class="align-text-bottom"
                />
                Reports
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="layers"
                  class="align-text-bottom"
                />
                Integrations
              </b-a>
            </li>
          </ul>

          <b-h
            level="6"
            class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase"
          >
            <b-span>Saved reports</b-span>
            <b-a
              class="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <b-span
                data-feather="plus-circle"
                class="align-text-bottom"
              />
            </b-a>
          </b-h>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                Current month
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                Last quarter
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                Social engagement
              </b-a>
            </li>
            <li class="nav-item">
              <b-a
                class="nav-link"
                href="#"
              >
                <b-span
                  data-feather="file-text"
                  class="align-text-bottom"
                />
                Year-end sale
              </b-a>
            </li>
          </ul>
        </b-div>
      </Nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <b-div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <b-h
            level="1"
            class="h2"
          >
            Dashboard
          </b-h>
          <b-div class="btn-toolbar mb-2 mb-md-0">
            <b-div class="btn-group me-2">
              <b-button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Share
              </b-button>
              <b-button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Export
              </b-button>
            </b-div>
            <b-button
              type="button"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <b-span
                data-feather="calendar"
                class="align-text-bottom"
              />
              This week
            </b-button>
          </b-div>
        </b-div>

        <canvas
          id="myChart"
          class="my-4 w-100"
          width="900"
          height="380"
        />

        <b-h level="2">
          Section title
        </b-h>
        <b-div class="table-responsive">
          <b-table class="table table-striped table-sm">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  Header
                </b-th>
                <b-th scope="col">
                  Header
                </b-th>
                <b-th scope="col">
                  Header
                </b-th>
                <b-th scope="col">
                  Header
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>1,001</b-td>
                <b-td>random</b-td>
                <b-td>data</b-td>
                <b-td>placeholder</b-td>
                <b-td>text</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,002</b-td>
                <b-td>placeholder</b-td>
                <b-td>irrelevant</b-td>
                <b-td>visual</b-td>
                <b-td>layout</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,003</b-td>
                <b-td>data</b-td>
                <b-td>rich</b-td>
                <b-td>dashboard</b-td>
                <b-td>tabular</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,003</b-td>
                <b-td>information</b-td>
                <b-td>placeholder</b-td>
                <b-td>illustrative</b-td>
                <b-td>data</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,004</b-td>
                <b-td>text</b-td>
                <b-td>random</b-td>
                <b-td>layout</b-td>
                <b-td>dashboard</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,005</b-td>
                <b-td>dashboard</b-td>
                <b-td>irrelevant</b-td>
                <b-td>text</b-td>
                <b-td>placeholder</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,006</b-td>
                <b-td>dashboard</b-td>
                <b-td>illustrative</b-td>
                <b-td>rich</b-td>
                <b-td>data</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,007</b-td>
                <b-td>placeholder</b-td>
                <b-td>tabular</b-td>
                <b-td>information</b-td>
                <b-td>irrelevant</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,008</b-td>
                <b-td>random</b-td>
                <b-td>data</b-td>
                <b-td>placeholder</b-td>
                <b-td>text</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,009</b-td>
                <b-td>placeholder</b-td>
                <b-td>irrelevant</b-td>
                <b-td>visual</b-td>
                <b-td>layout</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,010</b-td>
                <b-td>data</b-td>
                <b-td>rich</b-td>
                <b-td>dashboard</b-td>
                <b-td>tabular</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,011</b-td>
                <b-td>information</b-td>
                <b-td>placeholder</b-td>
                <b-td>illustrative</b-td>
                <b-td>data</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,012</b-td>
                <b-td>text</b-td>
                <b-td>placeholder</b-td>
                <b-td>layout</b-td>
                <b-td>dashboard</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,013</b-td>
                <b-td>dashboard</b-td>
                <b-td>irrelevant</b-td>
                <b-td>text</b-td>
                <b-td>visual</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,014</b-td>
                <b-td>dashboard</b-td>
                <b-td>illustrative</b-td>
                <b-td>rich</b-td>
                <b-td>data</b-td>
              </b-tr>
              <b-tr>
                <b-td>1,015</b-td>
                <b-td>random</b-td>
                <b-td>tabular</b-td>
                <b-td>information</b-td>
                <b-td>text</b-td>
              </b-tr>
            </b-tbody>
          </b-table>
        </b-div>
      </main>
    </b-div>
  </b-div>
</template>

<!-- <script>
 import './dashboard.js'
 import './dashboard.css'
</script>

<style >
.theme-default-content:not(.custom){
 max-width: none;
}
</style> -->