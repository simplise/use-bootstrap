<template>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasRight"
  >
    Toggle right offcanvas
  </b-button>
  <Offcanvas
    id="offcanvasRight"
    placement="end"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>...</OffcanvasBody>
  </Offcanvas>
</template>
