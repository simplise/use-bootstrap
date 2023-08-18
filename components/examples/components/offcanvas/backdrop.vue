<template>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasScrolling"
  >
    Enable body scrolling
  </b-button>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasWithBackdrop"
  >
    Enable backdrop (default)
  </b-button>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasScrolling"
  >
    Enable both scrolling & backdrop
  </b-button>
  <Offcanvas
    id="offcanvasScrolling"
    placement="start"
    scroll
    backdrop="false"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </OffcanvasBody>
  </Offcanvas>
  <Offcanvas
    id="offcanvasWithBackdrop"
    placement="start"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </OffcanvasBody>
  </Offcanvas>
  <Offcanvas
    id="offcanvasWithBothOptions"
    placement="start"
    scroll
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </OffcanvasBody>
  </Offcanvas>
</template>
