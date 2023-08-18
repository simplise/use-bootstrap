<template>
  <Navbar
    expand="lg"
    theme="light"
    background-color="light"
    position="fixed-top"
  >
    <Container type="fluid">
      <NavbarBrand>Navbar</NavbarBrand>
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
          <BForm
            flex
            role="search"
          >
            <BFormInput
              margin="e-2"
              type="search"
              placeholder="Search"
            />
            <b-button
              button="outline-success"
              type="submit"
            >
              Search
            </b-button>
          </BForm>
        </OffcanvasBody>
      </Offcanvas>
    </Container>
  </Navbar>
</template>
