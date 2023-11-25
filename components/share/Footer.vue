<template>
  <b-footer
    padding="y-4 y-md-5"
    margin="t-5"
    background-color="body-tertiary"
    class="bd-footer"
  >
    <Container
      padding="y-4 y-md-5 x-4 x-md-3"
      text-color="body-secondary"
    >
      <Row>
        <Col
          col="lg-3"
          margin="b-3"
        >
          <b-a
            display="inline-flex"
            margin="b-2"
            text-color="body-emphasis"
            text-decoration="none"
            href="/"
            aria-label="use-bootstrap"
          >
            <img
              src="~/assets/img/logo/logo1.svg"
              alt="use-bootstrap"
              height="30"
            >
          </b-a>
          <b-ul
            unstyled
            small
          >
            <b-li margin="b-2">
              Designed and built with all the love in the world by the Simplise Inc. team with the help of our contributors.
            </b-li>
            <b-li margin="b-2">
              Code licensed MIT docs CC BY 3.0.
            </b-li>
          </b-ul>
        </Col>
        <Col
          col="6 lg-2"
          offset="lg-1"
          margin="b-3"
        >
          <h5>Links</h5>
          <b-ul unstyled>
            <b-li margin="b-2">
              <a href="/">Home</a>
            </b-li>
            <b-li margin="b-2">
              <a href="/">Docs</a>
            </b-li>
            <b-li margin="b-2">
              <b-a to="/examples/">
                Examples
              </b-a>
            </b-li>
          </b-ul>
        </Col>
        <Col
          col="6 lg-2"
          margin="b-3"
        >
          <h5>Guides</h5>
          <b-ul unstyled>
            <b-li margin="b-2">
              <a href="/">Getting started</a>
            </b-li>
          </b-ul>
        </Col>
        <Col
          col="6 lg-2"
          margin="b-3"
        >
          <h5>Projects</h5>
          <b-ul unstyled>
            <b-li margin="b-2">
              <a href="/">use-bootstrap</a>
            </b-li>
          </b-ul>
        </Col>
        <Col
          col="6 lg-2"
          margin="b-3"
        >
          <h5>Community</h5>
          <b-ul unstyled>
          <!-- <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
      <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
      <li class="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
      <li class="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
      <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li> -->
          </b-ul>
        </Col>
      </Row>
    </Container>
  </b-footer>
  <b-div
    position="fixed"
    aria-hidden="true"
  >
    <input
      type="text"
      tabindex="-1"
    >
  </b-div>
</template>