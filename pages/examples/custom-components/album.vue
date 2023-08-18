<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <header>
    <b-div
      id="navbarHeader"
      class="collapse bg-dark"
    >
      <Container>
        <b-div class="row">
          <b-div class="col-sm-8 col-md-7 py-4">
            <b-h
              level="4"
              class="text-white"
            >
              About
            </b-h>
            <b-p class="text-muted">
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </b-p>
          </b-div>
          <b-div class="col-sm-4 offset-md-1 py-4">
            <b-h
              level="4"
              class="text-white"
            >
              Contact
            </b-h>
            <ul class="list-unstyled">
              <li>
                <b-a
                  href="#"
                  class="text-white"
                >
                  Follow on Twitter
                </b-a>
              </li>
              <li>
                <b-a
                  href="#"
                  class="text-white"
                >
                  Like on Facebook
                </b-a>
              </li>
              <li>
                <b-a
                  href="#"
                  class="text-white"
                >
                  Email me
                </b-a>
              </li>
            </ul>
          </b-div>
        </b-div>
      </Container>
    </b-div>
    <b-div class="navbar navbar-dark bg-dark shadow-sm">
      <Container>
        <b-a
          href="#"
          class="navbar-brand d-flex align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            aria-hidden="true"
            class="me-2"
            viewBox="0 0 24 24"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle
              cx="12"
              cy="13"
              r="4"
            />
          </svg>
          <strong>Album</strong>
        </b-a>
        <b-button
          class="navbar-toggler"
          type="button"
          toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <b-span class="navbar-toggler-icon" />
        </b-button>
      </Container>
    </b-div>
  </header>

  <main>
    <section class="py-5 text-center container">
      <b-div class="row py-lg-5">
        <b-div class="col-lg-6 col-md-8 mx-auto">
          <b-h
            level="1"
            class="fw-light"
          >
            Album example
          </b-h>
          <b-p class="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </b-p>
          <b-p>
            <b-a
              href="#"
              class="btn btn-primary my-2"
            >
              Main call to action
            </b-a>
            <b-a
              href="#"
              class="btn btn-secondary my-2"
            >
              Secondary action
            </b-a>
          </b-p>
        </b-div>
      </b-div>
    </section>

    <b-div class="album py-5 bg-light">
      <Container>
        <b-div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>

          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>

          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
          <b-div class="col">
            <b-div class="card shadow-sm">
              <b-div
                width="100%"
                height="225"
                background="#55595c"
                color="#eceeef"
                class="card-img-top"
                text="Thumbnail"
              />
              <b-div class="card-body">
                <b-p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-p>
                <b-div class="d-flex justify-content-between align-items-center">
                  <b-div class="btn-group">
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </b-button>
                    <b-button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </b-button>
                  </b-div>
                  <small class="text-muted">9 mins</small>
                </b-div>
              </b-div>
            </b-div>
          </b-div>
        </b-div>
      </Container>
    </b-div>
  </main>

  <footer class="text-muted py-5">
    <Container>
      <b-p class="float-end mb-1">
        <b-a href="#">
          Back to top
        </b-a>
      </b-p>
      <b-p class="mb-1">
        Album example is &copy; Bootstrap, but please download and customize it
        for yourself!
      </b-p>
      <!-- <b-p class="mb-0">New to Bootstrap? <b-a href="/">Visit the homepage</b-a> or read our <b-a href="{{< docsref '/getting-started/introduction' >}}">getting started guide</b-a>.</b-p> -->
      <b-p class="mb-0">
        New to Bootstrap?
        <b-a href="/">
          Visit the homepage
        </b-a>
        or read our getting started guide.
      </b-p>
    </Container>
  </footer>
</template>

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>
