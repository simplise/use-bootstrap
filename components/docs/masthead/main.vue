<template>
  <Container
    type="xxl"
    class="bd-gutter"
  >
    <b-img
      fluid
      margin="x-auto b-3"
      src="/img/logo/main1.svg"
      alt="use-bootstrap"
    />
    <Row>
      <Col
        col="md-8"
        margin="x-auto"
        text-alignment="center"
      >
        <b-h1
          margin="b-3"
          font-weight="semibold"
          line-height="1"
        >
          Build fast, responsive sites with&nbsp;Nuxt and Bootstrap
        </b-h1>
        <b-p
          lead
          margin="b-4"
        >
          Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful Vue scripts.
        </b-p>
        <b-div class="d-flex flex-column flex-lg-row align-items-md-stretch justify-content-md-center gap-3 mb-4">
          <b-div class="d-inline-block v-align-middle fs-5">
            <b-div class="highlight">
              <pre
                tabindex="0"
                class="chroma"
              ><code
class="language-sh"
                                        data-lang="sh"
              ><span class="line"><span class="cl">npm i usebootstrap</span></span></code></pre>
            </b-div>
          </b-div>
          <b-a
            button="bd-primary"
            size="lg"
            display="flex"
            to="/lang-en/"
            align-items="center"
            justify-content="center"
            font-weight="semibold"
            class="bd-btn-lg"
          >
            <BIcon
              icon="uil:github"
              margin="e-2"
            />
            Read the docs
          </b-a>
        </b-div>
      </Col>
    </Row>
  </Container>
</template>