<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <div>
    <p><br></p>
    <b-div class="bd-header mt-5 bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      <b-div class="container-fluid d-flex align-items-center">
        <b-h
          level="1"
          class="d-flex align-items-center fs-4 text-white mb-0"
        >
          <img
            width="38"
            height="30"
            class="me-3"
            alt="Bootstrap"
            src="https://dummyimage.com/38x30/000000/fff"
          >
          <!-- <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="me-3" alt="Bootstrap"> -->
          Cheatsheet
        </b-h>
        <b-a
          class="ms-auto link-light"
          hreflang="ar"
        >
          RTL cheatsheet
        </b-a>
        <!-- <b-a href="{{< docsref "/examples/cheatsheet-rtl" >}}" class="ms-auto link-light" hreflang="ar">RTL cheatsheet</b-a> -->
      </b-div>
    </b-div>
  </div>
  <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2 d-flex flex-column flex-shrink-0 p-3 bg-light">
    <b-h
      level="2"
      class="h6 pt-4 pb-3 mb-4 border-bottom"
    >
      On this page
    </b-h>
    <Nav
      id="toc"
      class="small"
    >
      <ul class="list-unstyled">
        <li class="my-2">
          <b-button
            class="btn d-inline-flex align-items-center collapsed border-0"
            toggle="collapse"
            aria-expanded="false"
            data-bs-target="#contents-collapse"
            aria-controls="contents-collapse"
          >
            Contents
          </b-button>
          <ul
            id="contents-collapse"
            class="list-unstyled ps-3 collapse"
          >
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#typography"
              >
                Typography
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#images"
              >
                Images
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#tables"
              >
                Tables
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#figures"
              >
                Figures
              </b-a>
            </li>
          </ul>
        </li>
        <li class="my-2">
          <b-button
            class="btn d-inline-flex align-items-center collapsed border-0"
            toggle="collapse"
            aria-expanded="false"
            data-bs-target="#forms-collapse"
            aria-controls="forms-collapse"
          >
            Forms
          </b-button>
          <ul
            id="forms-collapse"
            class="list-unstyled ps-3 collapse"
          >
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#overview"
              >
                Overview
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#disabled-forms"
              >
                Disabled forms
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#sizing"
              >
                Sizing
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#input-group"
              >
                Input group
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#floating-labels"
              >
                Floating labels
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#validation"
              >
                Validation
              </b-a>
            </li>
          </ul>
        </li>
        <li class="my-2">
          <b-button
            class="btn d-inline-flex align-items-center collapsed border-0"
            toggle="collapse"
            aria-expanded="false"
            data-bs-target="#components-collapse"
            aria-controls="components-collapse"
          >
            Components
          </b-button>
          <ul
            id="components-collapse"
            class="list-unstyled ps-3 collapse"
          >
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#accordion"
              >
                Accordion
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#alerts"
              >
                Alerts
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#badge"
              >
                Badge
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#breadcrumb"
              >
                Breadcrumb
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#buttons"
              >
                Buttons
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#button-group"
              >
                Button group
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#card"
              >
                Card
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#carousel"
              >
                Carousel
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#dropdowns"
              >
                Dropdowns
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#list-group"
              >
                List group
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#modal"
              >
                Modal
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#navs"
              >
                Navs
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#navbar"
              >
                Navbar
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#pagination"
              >
                Pagination
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#popovers"
              >
                Popovers
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#progress"
              >
                Progress
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#scrollspy"
              >
                Scrollspy
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#spinners"
              >
                Spinners
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#toasts"
              >
                Toasts
              </b-a>
            </li>
            <li>
              <b-a
                class="d-inline-flex align-items-center rounded text-decoration-none"
                href="#tooltips"
              >
                Tooltips
              </b-a>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  </aside>
  <b-div class="bd-cheatsheet container-fluid bg-body">
    <section id="content">
      <b-h
        level="2"
        class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3"
      >
        Contents
      </b-h>

      <article
        id="typography"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Typography
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-itepography" >}}">Documentation</b-a> -->
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-p class="display-1">
            Display 1
          </b-p>
          <b-p class="display-2">
            Display 2
          </b-p>
          <b-p class="display-3">
            Display 3
          </b-p>
          <b-p class="display-4">
            Display 4
          </b-p>
          <b-p class="display-5">
            Display 5
          </b-p>
          <b-p class="display-6">
            Display 6
          </b-p>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-p class="h1">
            Heading 1
          </b-p>
          <b-p class="h2">
            Heading 2
          </b-p>
          <b-p class="h3">
            Heading 3
          </b-p>
          <b-p class="h4">
            Heading 4
          </b-p>
          <b-p class="h5">
            Heading 5
          </b-p>
          <b-p class="h6">
            Heading 6
          </b-p>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-p class="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
          </b-p>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-p>You can use the mark tag to <mark>highlight</mark> text.</b-p>
          <b-p><del>This line of text is meant to be treated as deleted text.</del></b-p>
          <b-p><s>This line of text is meant to be treated as no longer accurate.</s></b-p>
          <b-p><ins>This line of text is meant to be treated as an addition to the document.</ins></b-p>
          <b-p><u>This line of text will render as underlined.</u></b-p>
          <b-p><small>This line of text is meant to be treated as fine print.</small></b-p>
          <b-p><strong>This line rendered as bold text.</strong></b-p>
          <b-p><em>This line rendered as italicized text.</em></b-p>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <hr>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <BBlockquote class="blockquote">
            <b-p>A well-known quote, contained in a blockquote element.</b-p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </BBlockquote>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <ul class="list-unstyled">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>However, this style only applies to immediate child elements.</li>
            <li>
              Nested lists:
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <ul class="list-inline">
            <li class="list-inline-item">
              This is a list item.
            </li>
            <li class="list-inline-item">
              And another one.
            </li>
            <li class="list-inline-item">
              But they're displayed inline.
            </li>
          </ul>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="images"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Images
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/content/images" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div
            width="100%"
            height="250"
            class="bd-placeholder-img-lg img-fluid"
            text="Responsive image"
          />
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div
            width="200"
            height="200"
            class="img-thumbnail"
            title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera"
          />
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="tables"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Tables
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/content/tables" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-table class="table table-striped">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  First
                </b-th>
                <b-th scope="col">
                  Last
                </b-th>
                <b-th scope="col">
                  Handle
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  1
                </b-th>
                <b-td>Mark</b-td>
                <b-td>Otto</b-td>
                <b-td>@mdo</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  2
                </b-th>
                <b-td>Jacob</b-td>
                <b-td>Thornton</b-td>
                <b-td>@fat</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  3
                </b-th>
                <b-td colspan="2">
                  Larry the Bird
                </b-td>
                <b-td>@twitter</b-td>
              </b-tr>
            </b-tbody>
          </b-table>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-table class="table table-dark table-borderless">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  First
                </b-th>
                <b-th scope="col">
                  Last
                </b-th>
                <b-th scope="col">
                  Handle
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  1
                </b-th>
                <b-td>Mark</b-td>
                <b-td>Otto</b-td>
                <b-td>@mdo</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  2
                </b-th>
                <b-td>Jacob</b-td>
                <b-td>Thornton</b-td>
                <b-td>@fat</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  3
                </b-th>
                <b-td colspan="2">
                  Larry the Bird
                </b-td>
                <b-td>@twitter</b-td>
              </b-tr>
            </b-tbody>
          </b-table>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-table class="table table-hover">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  Class
                </b-th>
                <b-th scope="col">
                  Heading
                </b-th>
                <b-th scope="col">
                  Heading
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  Default
                </b-th>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
              </b-tr>
              <!-- {{< table.inline >}} -->
              <!-- {{- range (index $.Site.Data "theme-colors") }} -->
              <b-tr class="table-{{ .name }}">
                <!-- <b-th scope="row">{{ .name | title }}</b-th> -->
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
              </b-tr>
              <!-- {{- end -}} -->
              <!-- {{< /table.inline >}} -->
            </b-tbody>
          </b-table>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-table class="table table-sm table-bordered">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  #
                </b-th>
                <b-th scope="col">
                  First
                </b-th>
                <b-th scope="col">
                  Last
                </b-th>
                <b-th scope="col">
                  Handle
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  1
                </b-th>
                <b-td>Mark</b-td>
                <b-td>Otto</b-td>
                <b-td>@mdo</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  2
                </b-th>
                <b-td>Jacob</b-td>
                <b-td>Thornton</b-td>
                <b-td>@fat</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  3
                </b-th>
                <b-td colspan="2">
                  Larry the Bird
                </b-td>
                <b-td>@twitter</b-td>
              </b-tr>
            </b-tbody>
          </b-table>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="figures"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Figures
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/content/figures" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <BFigure class="figure">
            <b-div
              width="400"
              height="300"
              class="figure-img img-fluid rounded"
            />
            <BFigure class="figure-caption">
              A caption for the above image.
            </BFigure>
          </BFigure>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
    </section>

    <section id="forms">
      <b-h
        level="2"
        class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3"
      >
        Forms
      </b-h>

      <article
        id="overview"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Overview
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/forms/overview" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <BForm>
            <b-div class="mb-3">
              <BFormLabel for="exampleInputEmail1">
                Email address
              </BFormLabel>
              <BFormInput
                id="exampleInputEmail1"
                type="email"
                aria-describedby="emailHelp"
              />
              <b-div
                id="emailHelp"
                class="form-text"
              >
                We'll never share your email with anyone else.
              </b-div>
            </b-div>
            <b-div class="mb-3">
              <BFormLabel for="exampleInputPassword1">
                Password
              </BFormLabel>
              <BFormInput
                id="exampleInputPassword1"
                type="password"
              />
            </b-div>
            <b-div class="mb-3 form-check">
              <BFormInput
                id="exampleCheck1"
                type="checkbox"
              />
              <BFormLabel for="exampleCheck1">
                Check me out
              </BFormLabel>
            </b-div>
            <BFieldset class="mb-3">
              <legend>Radios buttons</legend>
              <b-div class="form-check">
                <BFormInput
                  id="exampleRadio1"
                  type="radio"
                  name="radios"
                />
                <BFormLabel for="exampleRadio1">
                  Default radio
                </BFormLabel>
              </b-div>
              <b-div class="mb-3 form-check">
                <BFormInput
                  id="exampleRadio2"
                  type="radio"
                  name="radios"
                />
                <BFormLabel for="exampleRadio2">
                  Another radio
                </BFormLabel>
              </b-div>
            </BFieldset>
            <b-div class="mb-3">
              <BFormLabel for="customFile">
                Upload
              </BFormLabel>
              <BFormInput
                id="customFile"
                type="file"
              />
            </b-div>
            <b-div class="mb-3 form-check form-switch">
              <BFormInput
                id="flexSwitchCheckChecked"
                type="checkbox"
                role="switch"
                checked
              />
              <BFormLabel for="flexSwitchCheckChecked">
                Checked switch checkbox input
              </BFormLabel>
            </b-div>
            <b-div class="mb-3">
              <BFormLabel for="customRange3">
                Example range
              </BFormLabel>
              <BFormInput
                id="customRange3"
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
              />
            </b-div>
            <b-button
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </b-button>
          </BForm>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="disabled-forms"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Disabled forms
          </b-h>
          <b-a
            class="d-flex align-items-center"
            disabled-forms
          >
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/forms/overview" >}}#disabled-forms">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <BForm>
            <BFieldset
              disabled
              aria-label="Disabled fieldset example"
            >
              <b-div class="mb-3">
                <label for="disabledTextInput">Disabled input</label>
                <input
                  id="disabledTextInput"
                  type="text"
                  placeholder="Disabled input"
                >
              </b-div>
              <b-div class="mb-3">
                <label for="disabledSelect">Disabled select menu</label>
                <select
                  id="disabledSelect"
                  class="form-select"
                >
                  <option>Disabled select</option>
                </select>
              </b-div>
              <b-div class="mb-3">
                <b-div class="form-check">
                  <input
                    id="disabledFieldsetCheck"
                    type="checkbox"
                    disabled
                  >
                  <label for="disabledFieldsetCheck">
                    Can't check this
                  </label>
                </b-div>
              </b-div>
              <BFieldset class="mb-3">
                <legend>Disabled radios buttons</legend>
                <b-div class="form-check">
                  <input
                    id="disabledRadio1"
                    type="radio"
                    name="radios"
                    disabled
                  >
                  <label for="disabledRadio1">Disabled radio</label>
                </b-div>
                <b-div class="mb-3 form-check">
                  <input
                    id="disabledRadio2"
                    type="radio"
                    name="radios"
                    disabled
                  >
                  <label for="disabledRadio2">Another radio</label>
                </b-div>
              </BFieldset>
              <b-div class="mb-3">
                <label for="disabledCustomFile">Upload</label>
                <input
                  id="disabledCustomFile"
                  type="file"
                  disabled
                >
              </b-div>
              <b-div class="mb-3 form-check form-switch">
                <input
                  id="disabledSwitchCheckChecked"
                  type="checkbox"
                  role="switch"
                  checked
                  disabled
                >
                <label for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
              </b-div>
              <b-div class="mb-3">
                <label for="disabledRange">Disabled range</label>
                <input
                  id="disabledRange"
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  step="0.5"
                >
              </b-div>
              <b-button
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </b-button>
            </BFieldset>
          </BForm>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="sizing"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Sizing
          </b-h>
          <b-a class="d-flex align-items-center">
            }}#sizing">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/forms/form-control" >}}#sizing">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div class="mb-3">
            <BFormInput
              class="form-control-lg"
              type="text"
              placeholder=".form-control-lg"
              aria-label=".form-control-lg example"
            />
          </b-div>
          <b-div class="mb-3">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>
                Open this select menu
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </b-div>
          <b-div class="mb-3">
            <input
              type="file"
              class="form-control form-control-lg"
              aria-label="Large file input example"
            >
          </b-div>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div class="mb-3">
            <BFormInput
              class="form-control form-control-sm"
              type="text"
              placeholder=".form-control-sm"
              aria-label=".form-control-sm example"
            />
          </b-div>
          <b-div class="mb-3">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>
                Open this select menu
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </b-div>
          <b-div class="mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              aria-label="Small file input example"
            >
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="input-group"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Input group
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/forms/input-group" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div class="input-group mb-3">
            <b-span
              id="basic-addon1"
              class="input-group-text"
            >
              @
            </b-span>
            <input
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            >
          </b-div>
          <b-div class="input-group mb-3">
            <input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            >
            <b-span
              id="basic-addon2"
              class="input-group-text"
            >
              @example.com
            </b-span>
          </b-div>
          <label for="basic-url">Your vanity URL</label>
          <b-div class="input-group mb-3">
            <b-span
              id="basic-addon3"
              class="input-group-text"
            >
              https://example.com/users/
            </b-span>
            <input
              id="basic-url"
              type="text"
              aria-describedby="basic-addon3"
            >
          </b-div>
          <b-div class="input-group mb-3">
            <b-span class="input-group-text">
              $
            </b-span>
            <input
              type="text"
              aria-label="Amount (to the nearest dollar)"
            >
            <b-span class="input-group-text">
              .00
            </b-span>
          </b-div>
          <b-div class="input-group">
            <b-span class="input-group-text">
              With textarea
            </b-span>
            <textarea aria-label="With textarea" />
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="floating-labels"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Floating labels
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/forms/floating-labels" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <BForm>
            <b-div class="form-floating mb-3">
              <input
                id="floatingInput"
                type="email"
                placeholder="name@example.com"
              >
              <label for="floatingInput">Email address</label>
            </b-div>
            <b-div class="form-floating">
              <input
                id="floatingPassword"
                type="password"
                placeholder="Password"
              >
              <label for="floatingPassword">Password</label>
            </b-div>
          </BForm>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="validation"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Validation
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/forms/validation" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <BForm class="row g-3">
            <b-div class="col-md-4">
              <label for="validationServer01">First name</label>
              <input
                id="validationServer01"
                type="text"
                class="form-control is-valid"
                value="Mark"
                required
              >
              <b-div class="valid-feedback">
                Looks good!
              </b-div>
            </b-div>
            <b-div class="col-md-4">
              <label for="validationServer02">Last name</label>
              <input
                id="validationServer02"
                type="text"
                class="form-control is-valid"
                value="Otto"
                required
              >
              <b-div class="valid-feedback">
                Looks good!
              </b-div>
            </b-div>
            <b-div class="col-md-4">
              <label for="validationServerUsername">Username</label>
              <b-div class="input-group has-validation">
                <b-span
                  id="BInputGroupPrepend3"
                  class="input-group-text"
                >
                  @
                </b-span>
                <input
                  id="validationServerUsername"
                  type="text"
                  class="form-control is-invalid"
                  aria-describedby="BInputGroupPrepend3"
                  required
                >
                <b-div class="invalid-feedback">
                  Please choose a username.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col-md-6">
              <label for="validationServer03">City</label>
              <input
                id="validationServer03"
                type="text"
                class="form-control is-invalid"
                required
              >
              <b-div class="invalid-feedback">
                Please provide a valid city.
              </b-div>
            </b-div>
            <b-div class="col-md-3">
              <label for="validationServer04">State</label>
              <select
                id="validationServer04"
                class="form-select is-invalid"
                required
              >
                <option
                  selected
                  disabled
                  value=""
                >
                  Choose...
                </option>
                <option>...</option>
              </select>
              <b-div class="invalid-feedback">
                Please select a valid state.
              </b-div>
            </b-div>
            <b-div class="col-md-3">
              <label for="validationServer05">Zip</label>
              <input
                id="validationServer05"
                type="text"
                class="form-control is-invalid"
                required
              >
              <b-div class="invalid-feedback">
                Please provide a valid zip.
              </b-div>
            </b-div>
            <b-div class="col-12">
              <b-div class="form-check">
                <input
                  id="invalidCheck3"
                  class="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  required
                >
                <label for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <b-div class="invalid-feedback">
                  You must agree before submitting.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col-12">
              <b-button
                class="btn btn-primary"
                type="submit"
              >
                Submit form
              </b-button>
            </b-div>
          </BForm>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
    </section>

    <section id="components">
      <b-h
        level="2"
        class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3"
      >
        Components
      </b-h>

      <article
        id="accordion"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Accordion
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/accordion" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div
            id="accordionExample"
            class="accordion"
          >
            <b-div class="accordion-item">
              <b-h
                id="headingOne"
                level="4"
                class="accordion-header"
              >
                <b-button
                  class="accordion-button"
                  type="button"
                  toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </b-button>
              </b-h>
              <b-div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <b-div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="accordion-item">
              <b-h
                id="headingTwo"
                level="4"
                class="accordion-header"
              >
                <b-button
                  class="accordion-button collapsed"
                  type="button"
                  toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </b-button>
              </b-h>
              <b-div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <b-div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </b-div>
              </b-div>
            </b-div>
            <b-div class="accordion-item">
              <b-h
                id="headingThree"
                level="4"
                class="accordion-header"
              >
                <b-button
                  class="accordion-button collapsed"
                  type="button"
                  toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </b-button>
              </b-h>
              <b-div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <b-div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="alerts"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Alerts
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/alerts" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div
            class="alert alert- alert-dismissible fade show"
            role="alert"
          >
            A simple alert with <b-a
              href="#"
              class="alert-link"
            >
              an example link
            </b-a>. Give it a click if you like.
            <b-button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </b-div>
          <!-- {{< alerts.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-div class="alert alert-{{ .name }} alert-dismissible fade show" role="alert">
            A simple {{ .name }} alert with <b-a href="#" class="alert-link">an example link</b-a>. Give it a click if you like.
            <b-button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></b-button>
          </b-div>{{ end -}}
          {{< /alerts.inline >}} -->
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div
            class="alert alert-success"
            role="alert"
          >
            <b-h
              level="4"
              class="alert-heading"
            >
              Well done!
            </b-h>
            <b-p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</b-p>
            <hr>
            <b-p class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </b-p>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="badge"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Badge
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/badge" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-p class="h1">
            Example heading <b-span class="badge bg-primary">
              New
            </b-span>
          </b-p>
          <b-p class="h2">
            Example heading <b-span class="badge bg-secondary">
              New
            </b-span>
          </b-p>
          <b-p class="h3">
            Example heading <b-span class="badge bg-success">
              New
            </b-span>
          </b-p>
          <b-p class="h4">
            Example heading <b-span class="badge bg-danger">
              New
            </b-span>
          </b-p>
          <b-p class="h5">
            Example heading <b-span class="badge bg-warning text-dark">
              New
            </b-span>
          </b-p>
          <b-p class="h6">
            Example heading <b-span class="badge bg-info text-dark">
              New
            </b-span>
          </b-p>
          <b-p class="h6">
            Example heading <b-span class="badge bg-light text-dark">
              New
            </b-span>
          </b-p>
          <b-p class="h6">
            Example heading <b-span class="badge bg-dark">
              New
            </b-span>
          </b-p>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-span class="badge rounded-pill bg-" />
          <!-- {{< badge.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-span class="badge rounded-pill bg-{{ .name }}{{ if or (eq .name "light") (eq .name "warning") (eq .name "info") }} text-dark{{ end }}">{{ .name | title }}</b-span>{{- end -}}
          {{< /badge.inline >}} -->
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="breadcrumb"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Breadcrumb
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <Nav aria-label="breadcrumb">
            <ListGroupList class="breadcrumb">
              <ListGroupItem class="breadcrumb-item">
                <b-a href="#">
                  Home
                </b-a>
              </ListGroupItem>
              <ListGroupItem class="breadcrumb-item">
                <b-a href="#">
                  Library
                </b-a>
              </ListGroupItem>
              <ListGroupItem
                class="breadcrumb-item active"
                aria-current="page"
              >
                Data
              </ListGroupItem>
            </ListGroupList>
          </Nav>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="buttons"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Buttons
          </b-h>
          <b-a class="d-flex align-items-center">
            }}">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/buttons" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-button
            type="button"
            class="btn btn-"
          />

          <b-button
            type="button"
            class="btn btn-link"
          >
            Link
          </b-button>
          <!-- {{< buttons.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</b-button>
          {{- end -}}
          {{< /buttons.inline >}}
  
          <b-button type="button" class="btn btn-link">Link</b-button> -->
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-button
            type="button"
            class="btn btn-outline-"
          />
          <!-- {{< buttons.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</b-button>
          {{- end -}}
          {{< /buttons.inline >}} -->
          <!-- {{< buttons.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</b-button>
          {{- end -}}
          {{< /buttons.inline >}} -->
          <!-- {{< buttons.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</b-button>
          {{- end -}}
          {{< /buttons.inline >}} -->
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-button
            type="button"
            class="btn btn-primary btn-sm"
          >
            Small button
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            Standard button
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary btn-lg"
          >
            Large button
          </b-button>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="button-group"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Button group
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/button-group" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <b-div
              class="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                1
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                2
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                3
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                4
              </b-button>
            </b-div>
            <b-div
              class="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                5
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                6
              </b-button>
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                7
              </b-button>
            </b-div>
            <b-div
              class="btn-group"
              role="group"
              aria-label="Third group"
            >
              <b-button
                type="button"
                class="btn btn-secondary"
              >
                8
              </b-button>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="card"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Card
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/card" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div class="row  row-cols-1 row-cols-md-2 g-4">
            <b-div class="col">
              <b-div class="card">
                <b-div
                  width="100%"
                  height="180"
                  class="card-img-top"
                  text="Image cap"
                />
                <b-div class="card-body">
                  <b-h
                    level="5"
                    class="card-title"
                  >
                    Card title
                  </b-h>
                  <b-p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </b-p>
                  <b-a
                    href="#"
                    class="btn btn-primary"
                  >
                    Go somewhere
                  </b-a>
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col">
              <b-div class="card">
                <b-div class="card-header">
                  Featured
                </b-div>
                <b-div class="card-body">
                  <b-h
                    level="5"
                    class="card-title"
                  >
                    Card title
                  </b-h>
                  <b-p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </b-p>
                  <b-a
                    href="#"
                    class="btn btn-primary"
                  >
                    Go somewhere
                  </b-a>
                </b-div>
                <b-div class="card-footer text-muted">
                  2 days ago
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col">
              <b-div class="card">
                <b-div class="card-body">
                  <b-h
                    level="5"
                    class="card-title"
                  >
                    Card title
                  </b-h>
                  <b-p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </b-p>
                </b-div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    An item
                  </li>
                  <li class="list-group-item">
                    A second item
                  </li>
                  <li class="list-group-item">
                    A third item
                  </li>
                </ul>
                <b-div class="card-body">
                  <b-a
                    href="#"
                    class="card-link"
                  >
                    Card link
                  </b-a>
                  <b-a
                    href="#"
                    class="card-link"
                  >
                    Another link
                  </b-a>
                </b-div>
              </b-div>
            </b-div>
            <b-div class="col">
              <b-div class="card">
                <b-div class="row g-0">
                  <b-div class="col-md-4">
                    <b-div
                      width="100%"
                      height="250"
                      text="Image"
                    />
                  </b-div>
                  <b-div class="col-md-8">
                    <b-div class="card-body">
                      <b-h
                        level="5"
                        class="card-title"
                      >
                        Card title
                      </b-h>
                      <b-p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </b-p>
                      <b-p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </b-p>
                    </b-div>
                  </b-div>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="carousel"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Carousel
          </b-h>
          <b-a class="d-flex align-items-center">
            }}">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/carousel" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <b-div class="carousel-indicators">
              <b-button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <b-button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <b-button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </b-div>
            <b-div class="carousel-inner">
              <b-div class="carousel-item active">
                <b-div
                  width="800"
                  height="400"
                  class="bd-placeholder-img-lg d-block w-100"
                  color="#555"
                  background="#777"
                  text="First slide"
                />
                <b-div class="carousel-caption d-none d-md-block">
                  <b-h level="5">
                    First slide label
                  </b-h>
                  <b-p>Some representative placeholder content for the first slide.</b-p>
                </b-div>
              </b-div>
              <b-div class="carousel-item">
                <b-div
                  width="800"
                  height="400"
                  class="bd-placeholder-img-lg d-block w-100"
                  color="#444"
                  background="#666"
                  text="Second slide"
                />
                <b-div class="carousel-caption d-none d-md-block">
                  <b-h level="5">
                    Second slide label
                  </b-h>
                  <b-p>Some representative placeholder content for the second slide.</b-p>
                </b-div>
              </b-div>
              <b-div class="carousel-item">
                <b-div
                  width="800"
                  height="400"
                  class="bd-placeholder-img-lg d-block w-100"
                  color="#333"
                  background="#555"
                  text="Third slide"
                />
                <b-div class="carousel-caption d-none d-md-block">
                  <b-h level="5">
                    Third slide label
                  </b-h>
                  <b-p>Some representative placeholder content for the third slide.</b-p>
                </b-div>
              </b-div>
            </b-div>
            <b-button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <b-span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <b-span class="visually-hidden">
                Previous
              </b-span>
            </b-button>
            <b-button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <b-span
                class="carousel-control-next-icon"
                aria-hidden="true"
              />
              <b-span class="visually-hidden">
                Next
              </b-span>
            </b-button>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="dropdowns"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Dropdowns
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/dropdowns" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
            <b-div class="dropdown">
              <b-button
                id="dropdownMenuButtonSM"
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButtonSM"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropdown">
              <b-button
                id="dropdownMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropdown">
              <b-button
                id="dropdownMenuButtonLG"
                class="btn btn-secondary btn-lg dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButtonLG"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-primary"
            >
              Primary
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                Toggle Dropdown
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
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
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-secondary"
            >
              Secondary
            </b-button>
            <b-button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                Toggle Dropdown
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
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
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-success"
            >
              Success
            </b-button>
            <b-button
              type="button"
              class="btn btn-success dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                Toggle Dropdown
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
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
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-info"
            >
              Info
            </b-button>
            <b-button
              type="button"
              class="btn btn-info dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                Toggle Dropdown
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
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
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-warning"
            >
              Warning
            </b-button>
            <b-button
              type="button"
              class="btn btn-warning dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                Toggle Dropdown
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
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
          </b-div><!-- /btn-group -->
          <b-div class="btn-group">
            <b-button
              type="button"
              class="btn btn-danger"
            >
              Danger
            </b-button>
            <b-button
              type="button"
              class="btn btn-danger dropdown-toggle dropdown-toggle-split"
              toggle="dropdown"
              aria-expanded="false"
            >
              <b-span class="visually-hidden">
                Toggle Dropdown
              </b-span>
            </b-button>
            <ul class="dropdown-menu">
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
          </b-div><!-- /btn-group -->
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
            <b-div class="dropend">
              <b-button
                id="dropendMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropend button
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropendMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropup">
              <b-button
                id="dropupMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropup button
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropupMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
            <b-div class="dropstart">
              <b-button
                id="dropstartMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                Dropstart button
              </b-button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropstartMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                <li>
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div class="btn-group">
            <b-div class="dropdown">
              <b-button
                id="dropdownRightMenuButton"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                toggle="dropdown"
                aria-expanded="false"
              >
                End-aligned menu
              </b-button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownRightMenuButton"
              >
                <li>
                  <b-h
                    level="6"
                    class="dropdown-header"
                  >
                    Dropdown header
                  </b-h>
                </li>
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
                  <hr class="dropdown-b-divider">
                </li>
                <li>
                  <b-a
                    class="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </b-a>
                </li>
              </ul>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="list-group"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            List group
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/list-group" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <ul class="list-group">
            <li
              class="list-group-item disabled"
              aria-disabled="true"
            >
              A disabled item
            </li>
            <li class="list-group-item">
              A second item
            </li>
            <li class="list-group-item">
              A third item
            </li>
            <li class="list-group-item">
              A fourth item
            </li>
            <li class="list-group-item">
              And a fifth one
            </li>
          </ul>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              An item
            </li>
            <li class="list-group-item">
              A second item
            </li>
            <li class="list-group-item">
              A third item
            </li>
            <li class="list-group-item">
              A fourth item
            </li>
            <li class="list-group-item">
              And a fifth one
            </li>
          </ul>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div class="list-group">
            <b-a
              href="#"
              class="list-group-item list-group-item-action"
            >
              A simple default list group item
            </b-a>
            <b-a
              href="#"
              class="list-group-item list-group-item-action list-group-item"
            >
              A simple list group item
            </b-a>
          </b-div>
          <!-- <b-div class="list-group">
            <b-a href="#" class="list-group-item list-group-item-action">A simple default list group item</b-a>
            {{< list.inline >}}
            {{- range (index $.Site.Data "theme-colors") }}
            <b-a href="#" class="list-group-item list-group-item-action list-group-item-{{ .name }}">A simple {{ .name }} list group item</b-a>
            {{- end -}}
            {{< /list.inline >}}
          </b-div> -->
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="modal"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Modal
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/modal" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div class="d-flex justify-content-between flex-wrap">
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#exampleModalDefault"
            >
              Launch demo modal
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#staticBackdropLive"
            >
              Launch static backdrop modal
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#exampleModalCenteredScrollable"
            >
              Vertically centered scrollable modal
            </b-button>
            <b-button
              type="button"
              class="btn btn-primary"
              toggle="modal"
              data-bs-target="#exampleModalFullscreen"
            >
              Full screen
            </b-button>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="navs"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Navs
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/navs-tabs" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <Nav class="nav">
            <b-a
              class="nav-link active"
              aria-current="page"
              href="#"
            >
              Active
            </b-a>
            <b-a
              class="nav-link"
              href="#"
            >
              Link
            </b-a>
            <b-a
              class="nav-link"
              href="#"
            >
              Link
            </b-a>
            <b-a class="nav-link disabled">
              Disabled
            </b-a>
          </Nav>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <Nav>
            <b-div
              id="nav-tab"
              class="nav nav-tabs mb-3"
              role="tablist"
            >
              <b-button
                id="nav-home-tab"
                class="nav-link active"
                toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Home
              </b-button>
              <b-button
                id="nav-profile-tab"
                class="nav-link"
                toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Profile
              </b-button>
              <b-button
                id="nav-contact-tab"
                class="nav-link"
                toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Contact
              </b-button>
            </b-div>
          </Nav>
          <b-div
            id="nav-tabContent"
            class="tab-content"
          >
            <b-div
              id="nav-home"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <b-p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</b-p>
            </b-div>
            <b-div
              id="nav-profile"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <b-p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</b-p>
            </b-div>
            <b-div
              id="nav-contact"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <b-p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</b-p>
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <ul class="nav nav-pills">
            <li class="nav-item">
              <b-a
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Active
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
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="navbar"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Navbar
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/navbar" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <Nav class="navbar navbar-expand-lg bg-light">
            <b-div class="container-fluid">
              <b-a
                class="navbar-brand"
                href="#"
              >
                <img
                  width="38"
                  height="30"
                  class="d-inline-block align-top"
                  alt="Bootstrap"
                  loading="lazy"
                  style="filter: invert(1) grayscale(100%) brightness(200%);"
                />
                <!-- <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy"
                     style="filter: invert(1) grayscale(100%) brightness(200%);"> -->
              </b-a>
              <b-button
                class="navbar-toggler"
                type="button"
                toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <b-span class="navbar-toggler-icon" />
              </b-button>
              <b-div
                id="navbarSupportedContent"
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
                  <li class="nav-item dropdown">
                    <b-a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </b-a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
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
                        <hr class="dropdown-b-divider">
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
                  <li class="nav-item">
                    <b-a class="nav-link disabled">
                      Disabled
                    </b-a>
                  </li>
                </ul>
                <BForm
                  display="flex"
                  role="search"
                >
                  <BFormInput
                    margin="e-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <b-button
                    class="btn btn-outline-dark"
                    type="submit"
                  >
                    Search
                  </b-button>
                </BForm>
              </b-div>
            </b-div>
          </Nav>

          <Nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
            <b-div class="container-fluid">
              <b-a
                class="navbar-brand"
                href="#"
              >
                <img
                  width="38"
                  height="30"
                  class="d-inline-block align-top"
                  alt="Bootstrap"
                  loading="lazy"
                />
                <!-- <img src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy"> -->
              </b-a>
              <b-button
                class="navbar-toggler"
                type="button"
                toggle="collapse"
                data-bs-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <b-span class="navbar-toggler-icon" />
              </b-button>
              <b-div
                id="navbarSupportedContent2"
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
                  <li class="nav-item dropdown">
                    <b-a
                      id="navbarDropdown2"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </b-a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown2"
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
                        <hr class="dropdown-b-divider">
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
                  <li class="nav-item">
                    <b-a class="nav-link disabled">
                      Disabled
                    </b-a>
                  </li>
                </ul>
                <BForm
                  display="flex"
                  role="search"
                >
                  <BFormInput
                    margin="e-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <b-button
                    class="btn btn-outline-light"
                    type="submit"
                  >
                    Search
                  </b-button>
                </BForm>
              </b-div>
            </b-div>
          </Nav>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="pagination"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Pagination
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/pagination" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <Nav aria-label="Pagination example">
            <ul class="pagination pagination-sm">
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  1
                </b-a>
              </li>
              <li
                class="page-item active"
                aria-current="page"
              >
                <b-a
                  class="page-link"
                  href="#"
                >
                  2
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  3
                </b-a>
              </li>
            </ul>
          </Nav>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <Nav aria-label="Standard pagination example">
            <ul class="pagination">
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                >
                  <b-span aria-hidden="true">
                    &laquo;
                  </b-span>
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  1
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  2
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  3
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                >
                  <b-span aria-hidden="true">
                    &raquo;
                  </b-span>
                </b-a>
              </li>
            </ul>
          </Nav>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <Nav aria-label="Another pagination example">
            <ul class="pagination pagination-lg flex-wrap">
              <li class="page-item disabled">
                <b-a class="page-link">
                  Previous
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  1
                </b-a>
              </li>
              <li
                class="page-item active"
                aria-current="page"
              >
                <b-a
                  class="page-link"
                  href="#"
                >
                  2
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  3
                </b-a>
              </li>
              <li class="page-item">
                <b-a
                  class="page-link"
                  href="#"
                >
                  Next
                </b-a>
              </li>
            </ul>
          </Nav>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="popovers"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Popovers
          </b-h>
          <b-a class="d-flex align-items-center">
            }}">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/popovers" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-button
            type="button"
            class="btn btn-lg btn-danger"
            toggle="popover"
            title="Popover title"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
          >
            Click to toggle popover
          </b-button>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="top"
            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on top
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="right"
            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on end
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="bottom"
            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on bottom
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-container="body"
            toggle="popover"
            data-bs-placement="left"
            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on start
          </b-button>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="progress"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Progress
          </b-h>
          <b-a class="d-flex align-items-center">
            }}">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/progress" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </b-div>
          </b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar bg-success w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </b-div>
          </b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar bg-info text-dark w-50"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </b-div>
          </b-div>
          <b-div class="progress mb-3">
            <b-div
              class="progress-bar bg-warning text-dark w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </b-div>
          </b-div>
          <b-div class="progress">
            <b-div
              class="progress-bar bg-danger w-100"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div class="progress">
            <b-div
              class="progress-bar"
              role="progressbar"
              style="width: 15%"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <b-div
              class="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="scrollspy"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Scrollspy
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/scrollspy" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <b-div class="bd-example">
            <Nav
              id="navbar-example2"
              class="navbar bg-light px-3"
            >
              <b-a
                class="navbar-brand"
                href="#"
              >
                Navbar
              </b-a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <b-a
                    class="nav-link active"
                    href="#scrollspyHeading1"
                  >
                    First
                  </b-a>
                </li>
                <li class="nav-item">
                  <b-a
                    class="nav-link"
                    href="#scrollspyHeading2"
                  >
                    Second
                  </b-a>
                </li>
                <li class="nav-item dropdown">
                  <b-a
                    class="nav-link dropdown-toggle"
                    toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Dropdown
                  </b-a>
                  <ul class="dropdown-menu">
                    <li>
                      <b-a
                        class="dropdown-item"
                        href="#scrollspyHeading3"
                      >
                        Third
                      </b-a>
                    </li>
                    <li>
                      <b-a
                        class="dropdown-item"
                        href="#scrollspyHeading4"
                      >
                        Fourth
                      </b-a>
                    </li>
                    <li>
                      <hr class="dropdown-b-divider">
                    </li>
                    <li>
                      <b-a
                        class="dropdown-item"
                        href="#scrollspyHeading5"
                      >
                        Fifth
                      </b-a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Nav>
            <b-div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              class="scrollspy-example position-relative mt-2 overflow-auto"
              tabindex="0"
            >
              <b-h
                id="scrollspyHeading1"
                level="4"
              >
                First heading
              </b-h>
              <b-p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</b-p>
              <b-h
                id="scrollspyHeading2"
                level="4"
              >
                Second heading
              </b-h>
              <b-p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</b-p>
              <b-h
                id="scrollspyHeading3"
                level="4"
              >
                Third heading
              </b-h>
              <b-p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</b-p>
              <b-h
                id="scrollspyHeading4"
                level="4"
              >
                Fourth heading
              </b-h>
              <b-p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</b-p>
              <b-h
                id="scrollspyHeading5"
                level="4"
              >
                Fifth heading
              </b-h>
              <b-p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</b-p>
            </b-div>
          </b-div>
        </b-div>
      </article>
      <article
        id="spinners"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Spinners
          </b-h>
          <b-a class="d-flex align-items-center">
            }}">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/spinners" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" >}} -->
          <b-div
            class="spinner-border text"
            role="status"
          >
            <b-span class="visually-hidden">
              Loading...
            </b-span>
          </b-div>
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <b-div
            class="spinner-grow text"
            role="status"
          >
            <b-span class="visually-hidden">
              Loading...
            </b-span>
          </b-div>
          <!-- {{< spinner.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-div class="spinner-border text-{{ .name }}" role="status">
            <b-span class="visually-hidden">Loading...</b-span>
          </b-div>
          {{- end -}}
          {{< /spinner.inline >}}-->
          <!-- {{< /example >}} -->

          <!-- {{< example show_markup="false" >}} -->
          <!-- {{< spinner.inline >}}
          {{- range (index $.Site.Data "theme-colors") }}
          <b-div class="spinner-grow text-{{ .name }}" role="status">
            <b-span class="visually-hidden">Loading...</b-span>
          </b-div>
          {{- end -}}
          {{< /spinner.inline >}} -->
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="toasts"
        class="my-3"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Toasts
          </b-h>
          <b-a class="d-flex align-items-center">
            Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/toasts" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" class="bg-dark p-5 align-items-center" >}} -->
          <b-div
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <b-div class="toast-header">
              <b-div
                width="20"
                height="20"
                background="#007aff"
                class="rounded me-2"
                text="false"
                title="false"
              />
              <strong class="me-auto">Bootstrap</strong>
              <small class="text-muted">11 mins ago</small>
              <b-button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </b-div>
            <b-div class="toast-body">
              Hello, world! This is a toast message.
            </b-div>
          </b-div>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
      <article
        id="tooltips"
        class="mt-3 mb-5 pb-5"
      >
        <b-div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <b-h level="3">
            Tooltips
          </b-h>
          <b-a class="d-flex align-items-center">
            }}">Documentation
          </b-a>
          <!-- <b-a class="d-flex align-items-center" href="{{< docsref "/components/tooltips" >}}">Documentation</b-a> -->
        </b-div>

        <b-div>
          <!-- {{< example show_markup="false" class="tooltip-demo" >}} -->
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            Tooltip on top
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="right"
            title="Tooltip on end"
          >
            Tooltip on end
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="bottom"
            title="Tooltip on bottom"
          >
            Tooltip on bottom
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-placement="left"
            title="Tooltip on start"
          >
            Tooltip on start
          </b-button>
          <b-button
            type="button"
            class="btn btn-secondary"
            toggle="tooltip"
            data-bs-html="true"
            title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
          >
            Tooltip with HTML
          </b-button>
          <!-- {{< /example >}} -->
        </b-div>
      </article>
    </section>
  </b-div>

  <b-div
    id="exampleModalDefault"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <b-div class="modal-dialog">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="exampleModalLabel"
            level="5"
            class="modal-title"
          >
            Modal title
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </b-div>
        <b-div class="modal-body">
          ...
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
  <b-div
    id="staticBackdropLive"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLiveLabel"
    aria-hidden="true"
  >
    <b-div class="modal-dialog">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="staticBackdropLiveLabel"
            level="5"
            class="modal-title"
          >
            Modal title
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </b-div>
        <b-div class="modal-body">
          <b-p>I will not close if you click outside me. Don't even try to press escape key.</b-p>
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            Understood
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
  <b-div
    id="exampleModalCenteredScrollable"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalCenteredScrollableTitle"
    aria-hidden="true"
  >
    <b-div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="exampleModalCenteredScrollableTitle"
            level="5"
            class="modal-title"
          >
            Modal title
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </b-div>
        <b-div class="modal-body">
          <b-p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</b-p>
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <b-p>This content should appear at the bottom after you scroll.</b-p>
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </b-button>
          <b-button
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
  <b-div
    id="exampleModalFullscreen"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
  >
    <b-div class="modal-dialog modal-fullscreen">
      <b-div class="modal-content">
        <b-div class="modal-header">
          <b-h
            id="exampleModalFullscreenLabel"
            level="5"
            class="modal-title h4"
          >
            Full screen modal
          </b-h>
          <b-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </b-div>
        <b-div class="modal-body">
          ...
        </b-div>
        <b-div class="modal-footer">
          <b-button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </b-button>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
</template>
 
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>
 
  <!-- <script>
    import './cheatsheet.css'
    import './cheatsheet.js'
  </script> -->