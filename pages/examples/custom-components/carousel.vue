<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <header>
    <Nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <b-div class="container-fluid">
        <b-a
          class="navbar-brand"
          href="#"
        >
          Carousel
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

  <main class="mt-5 md-5">
    <b-div
      id="myCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <b-div class="carousel-indicators">
        <b-button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <b-button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <b-button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </b-div>
      <b-div class="carousel-inner">
        <b-div class="carousel-item active">
          <b-div
            width="100%"
            height="100%"
            background="#777"
            color="#777"
            text="false"
            title="false"
          />
          <Container>
            <b-div class="carousel-caption text-start">
              <b-h level="1">
                Example headline.
              </b-h>
              <b-p>Some representative placeholder content for the first slide of the carousel.</b-p>
              <b-p>
                <b-a
                  class="btn btn-lg btn-primary"
                  href="#"
                >
                  Sign up today
                </b-a>
              </b-p>
            </b-div>
          </Container>
        </b-div>
        <b-div class="carousel-item">
          <b-div
            width="100%"
            height="100%"
            background="#777"
            color="#777"
            text="false"
            title="false"
          />
          <Container>
            <b-div class="carousel-caption">
              <b-h level="1">
                Another example headline.
              </b-h>
              <b-p>Some representative placeholder content for the second slide of the carousel.</b-p>
              <b-p>
                <b-a
                  class="btn btn-lg btn-primary"
                  href="#"
                >
                  Learn more
                </b-a>
              </b-p>
            </b-div>
          </Container>
        </b-div>
        <b-div class="carousel-item">
          <b-div
            width="100%"
            height="100%"
            background="#777"
            color="#777"
            text="false"
            title="false"
          />
          <Container>
            <b-div class="carousel-caption text-end">
              <b-h level="1">
                One more for good measure.
              </b-h>
              <b-p>Some representative placeholder content for the third slide of this carousel.</b-p>
              <b-p>
                <b-a
                  class="btn btn-lg btn-primary"
                  href="#"
                >
                  Browse gallery
                </b-a>
              </b-p>
            </b-div>
          </Container>
        </b-div>
      </b-div>
      <b-button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
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
        data-bs-target="#myCarousel"
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


    <!-- Marketing messaging and featurettes
   ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <b-div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <b-div class="row">
        <b-div class="col-lg-4 mt-5">
          <b-div
            width="140"
            height="140"
            background="#777"
            color="#777"
            class="rounded-circle"
          />
          <b-h
            level="2"
            class="fw-normal"
          >
            Heading
          </b-h>
          <b-p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</b-p>
          <b-p>
            <b-a
              class="btn btn-secondary"
              href="#"
            >
              View details &raquo;
            </b-a>
          </b-p>
        </b-div><!-- /.col-lg-4 -->
        <b-div class="col-lg-4">
          <b-div
            width="140"
            height="140"
            background="#777"
            color="#777"
            class="rounded-circle"
          />
          <b-h
            level="2"
            class="fw-normal"
          >
            Heading
          </b-h>
          <b-p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</b-p>
          <b-p>
            <b-a
              class="btn btn-secondary"
              href="#"
            >
              View details &raquo;
            </b-a>
          </b-p>
        </b-div><!-- /.col-lg-4 -->
        <b-div class="col-lg-4">
          <b-div
            width="140"
            height="140"
            background="#777"
            color="#777"
            class="rounded-circle"
          />
          <b-h
            level="2"
            class="fw-normal"
          >
            Heading
          </b-h>
          <b-p>And lastly this, the third column of representative placeholder content.</b-p>
          <b-p>
            <b-a
              class="btn btn-secondary"
              href="#"
            >
              View details &raquo;
            </b-a>
          </b-p>
        </b-div><!-- /.col-lg-4 -->
      </b-div><!-- /.row -->


      <!-- START THE FEATURETTES -->

      <hr class="featurette-b-divider">

      <b-div class="row featurette">
        <b-div class="col-md-7">
          <b-h
            level="2"
            class="featurette-heading fw-normal lh-1"
          >
            First featurette heading. <b-span class="text-muted">
              It’ll blow your mind.
            </b-span>
          </b-h>
          <b-p class="lead">
            Some great placeholder content for the first featurette here. Imagine some exciting prose here.
          </b-p>
        </b-div>
        <b-div class="col-md-5">
          <b-div
            width="500"
            height="500"
            background="#eee"
            color="#aaa"
            class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </b-div>
      </b-div>

      <hr class="featurette-b-divider">

      <b-div class="row featurette">
        <b-div class="col-md-7 order-md-2">
          <b-h
            level="2"
            class="featurette-heading fw-normal lh-1"
          >
            Oh yeah, it’s that good. <b-span class="text-muted">
              See for yourself.
            </b-span>
          </b-h>
          <b-p class="lead">
            Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.
          </b-p>
        </b-div>
        <b-div class="col-md-5 order-md-1">
          <b-div
            width="500"
            height="500"
            background="#eee"
            color="#aaa"
            class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </b-div>
      </b-div>

      <hr class="featurette-b-divider">

      <b-div class="row featurette">
        <b-div class="col-md-7">
          <b-h
            level="2"
            class="featurette-heading fw-normal lh-1"
          >
            And lastly, this one. <b-span class="text-muted">
              Checkmate.
            </b-span>
          </b-h>
          <b-p class="lead">
            And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.
          </b-p>
        </b-div>
        <b-div class="col-md-5">
          <b-div
            width="500"
            height="500"
            background="#eee"
            color="#aaa"
            class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          />
        </b-div>
      </b-div>

      <hr class="featurette-b-divider">

      <!-- /END THE FEATURETTES -->
    </b-div><!-- /.container -->


    <!-- FOOTER -->
    <footer class="container">
      <b-p class="float-end">
        <b-a href="#">
          Back to top
        </b-a>
      </b-p>
      <!-- <b-p>&copy; 2017–{{< year >}} Company, Inc. &middot; <b-a href="#">Privacy</b-a> &middot; <b-a href="#">Terms</b-a></b-p> -->
      <b-p>
        &copy; 2017 Company, Inc. &middot; <b-a href="#">
          Privacy
        </b-a> &middot; <b-a href="#">
          Terms
        </b-a>
      </b-p>
    </footer>
  </main>
</template>
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>

<!-- <script>
import './carousel.css'
import './carousel.rtl.css'

</script> -->


