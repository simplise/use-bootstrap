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
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
