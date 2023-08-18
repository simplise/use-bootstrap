<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>
<template>
  <div class="mt-5">
    <p><br></p>
    <nav
      class="navbar navbar-dark bg-dark"
      aria-label="First navbar example"
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >Never expand</a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <div
          id="navbarsExample01"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown01"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown01"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </div>
      </div>
    </nav>

    <Nav
      class="navbar navbar-expand navbar-dark bg-dark"
      aria-label="Second navbar example"
    >
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Always expand
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample02"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto">
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
          </ul>
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <Nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Expand at sm
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample03"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown03"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown03"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <Nav
      class="navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Fourth navbar example"
    >
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Expand at md
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample04"
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown04"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown04"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <Nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Expand at lg
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample05"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown05"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown05"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <Nav
      class="navbar navbar-expand-xl navbar-dark bg-dark"
      aria-label="Sixth navbar example"
    >
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Expand at xl
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample06"
          aria-controls="navbarsExample06"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample06"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-xl-0">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown06"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown06"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <Nav
      class="navbar navbar-expand-xxl navbar-dark bg-dark"
      aria-label="Seventh navbar example"
    >
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Expand at xxl
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExampleXxl"
          aria-controls="navbarsExampleXxl"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExampleXxl"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-xl-0">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdownXxl"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownXxl"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <Nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Eighth navbar example"
    >
      <Container>
        <b-a
          class="navbar-brand"
          href="#"
        >
          Container
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample07"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown07"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown07"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </Container>
    </Nav>

    <Nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Ninth navbar example"
    >
      <b-div class="container-xl">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Container XL
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample07XL"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown07XL"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown07XL"
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
          <BForm role="search">
            <BFormInput
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </BForm>
        </b-div>
      </b-div>
    </Nav>

    <b-div class="container-xl mb-4">
      <b-p>Matching .container-xl...</b-p>
    </b-div>

    <Nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Tenth navbar example"
    >
      <b-div class="container-fluid">
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>

        <b-div
          id="navbarsExample08"
          class="collapse navbar-collapse justify-content-md-center"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <b-a
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Centered nav only
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
            <li class="nav-item dropdown">
              <b-a
                id="dropdown08"
                class="nav-link dropdown-toggle"
                href="#"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </b-a>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown08"
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
        </b-div>
      </b-div>
    </Nav>

    <Container>
      <Nav
        class="navbar navbar-expand-lg bg-light rounded"
        aria-label="Eleventh navbar example"
      >
        <b-div class="container-fluid">
          <b-a
            class="navbar-brand"
            href="#"
          >
            Navbar
          </b-a>
          <b-button
            class="navbar-toggler"
            type="button"
            toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <b-span class="navbar-toggler-icon" />
          </b-button>

          <b-div
            id="navbarsExample09"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              <li class="nav-item dropdown">
                <b-a
                  id="dropdown09"
                  class="nav-link dropdown-toggle"
                  href="#"
                  toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </b-a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdown09"
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
            <BForm role="search">
              <BFormInput
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </BForm>
          </b-div>
        </b-div>
      </Nav>

      <Nav
        class="navbar navbar-expand-lg bg-light rounded"
        aria-label="Twelfth navbar example"
      >
        <b-div class="container-fluid">
          <b-button
            class="navbar-toggler"
            type="button"
            toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <b-span class="navbar-toggler-icon" />
          </b-button>

          <b-div
            id="navbarsExample10"
            class="collapse navbar-collapse justify-content-md-center"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <b-a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Centered nav only
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
              <li class="nav-item dropdown">
                <b-a
                  id="dropdown10"
                  class="nav-link dropdown-toggle"
                  href="#"
                  toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
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
          </b-div>
        </b-div>
      </Nav>

      <b-div>
        <b-div class="bg-light p-5 rounded">
          <b-div class="col-sm-8 mx-auto">
            <b-h level="1">
              Navbar examples
            </b-h>
            <b-p>This example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the <b-a>top</b-a> and <b-a>fixed top</b-a> examples.</b-p>
            <!-- <b-p>This example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the <b-a href="{{< docsref "/examples/navbar-static" >}}">top</b-a> and <b-a href="{{< docsref "/examples/navbar-fixed" >}}">fixed top</b-a> examples.</b-p> -->
            <b-p>At the smallest breakpoint, the collapse plugin is used to hide the links and show a menu button to toggle the collapsed content.</b-p>
            <b-p>
              <b-a
                class="btn btn-primary"
                role="button"
              >
                View navbar docs &raquo;
              </b-a>
              <!-- <b-a class="btn btn-primary" href="{{< docsref "/components/navbar" >}}" role="button">View navbar docs &raquo;</b-a> -->
            </b-p>
          </b-div>
        </b-div>
      </b-div>
    </Container>
  </div>
</template>
<!-- <script>
import './navbar.css'
</script> -->


<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>