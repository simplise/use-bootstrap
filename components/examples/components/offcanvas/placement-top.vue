<template>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasTop"
  >
    Launch demo modal
  </b-button>
  <Offcanvas
    id="offcanvasTop"
    placement="top"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>...</OffcanvasBody>
  </Offcanvas>
</template>
