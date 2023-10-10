<template>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasResponsive"
    display="lg-none"
  >
    Toggle offcanvas
  </b-button>
  <Alert
    theme="info"
    display="none lg-block"
  >
    Resize your browser to show the responsive offcanvas toggle.
  </Alert>

  <Offcanvas
    id="offcanvasResponsive"
    placement="end"
    type="lg"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Responsive offcanvas</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <b-p margin="b-0">
        This is content within an <code>.offcanvas-lg</code>.
      </b-p>
    </OffcanvasBody>
  </Offcanvas>
</template>
