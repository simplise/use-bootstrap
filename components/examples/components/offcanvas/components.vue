<template>
  <Offcanvas
    placement="start"
    show
    :backdrop="false"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Offcanvas</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      Content for the offcanvas goes here. You can place just about any
      Bootstrap component or custom elements here.
    </OffcanvasBody>
  </Offcanvas>
</template>
