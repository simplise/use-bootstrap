<template>
  <Navbar
    expand="lg"
    theme="light"
    background-color="light"
    position="fixed-top"
  >
    <Container type="fluid">
      <NavbarBrand>Offcanvas navbar</NavbarBrand>
      <NavbarToggler />
      <Offcanvas
        id="offcanvasRight"
        placement="end"
      >
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
          <CloseButton dismiss="navbar" />
        </OffcanvasHeader>
        <OffcanvasBody>
          <NavbarNavList>
            <NavItem>
              <NavLink active>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled>
                Disabled
              </NavLink>
            </NavItem>
          </NavbarNavList>
        </OffcanvasBody>
      </Offcanvas>
    </Container>
  </Navbar>
  <nav class="navbar navbar-light navbar-expand-lg bg-light fixed-top">
    <a
      class="navbar-brand"
      href="#"
    >Offcanvas navbar</a>
    <b-button
      class="navbar-toggler"
      type="button"
      toggle="offcanvas"
      data-bs-target="#navbarOffcanvasLg"
      aria-controls="navbarOffcanvasLg"
    >
      <span class="navbar-toggler-icon" />
    </b-button>
    <div
      id="navbarOffcanvasLg"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      aria-labelledby="navbarOffcanvasLgLabel"
    >
      ...
    </div>
  </nav>
</template>
