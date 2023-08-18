<template>
  <Navbar
    expand="lg"
    theme="light"
    background-color="light"
  >
    <Container type="fluid">
      <NavbarToggler />
      <NavbarBrand>Navbar</NavbarBrand>
      <NavbarCollapse>
        <NavbarNavList margin="e-auto b-2 b-lg-0">
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
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
