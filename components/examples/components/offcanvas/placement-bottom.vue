<template>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasBottom"
  >
    Toggle bottom offcanvas
  </b-button>
  <Offcanvas
    id="offcanvasBottom"
    placement="bottom"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody small>
      ...
    </OffcanvasBody>
  </Offcanvas>
</template>
