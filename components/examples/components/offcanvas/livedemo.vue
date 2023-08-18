<template>
  <b-button
    button="primary"
    toggle="offcanvas"
    target="#offcanvasExample"
  >
    Launch demo modal
  </b-button>
  <Offcanvas
    id="offcanvasExample"
    placement="start"
  >
    <OffcanvasHeader>
      <OffcanvasTitle>Colored with scrolling</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <div>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </div>
      <Dropdown margin="t-3">
        <DropdownToggle button="secondary">
          Droppdown button
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </OffcanvasBody>
  </Offcanvas>
</template>
