<template>
  <Navbar
    expand="lg"
    theme="light"
    background-color="light"
  >
    <Container type="fluid">
      <NavbarBrand>Navbar</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNav>
          <NavLink active>
            Home
          </NavLink>
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink disabled>
            Disabled
          </NavLink>
        </NavbarNav>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
