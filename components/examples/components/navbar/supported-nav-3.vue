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
            <NavLink>Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Pricing</NavLink>
          </NavItem>
          <NavItemDropdown>
            <NavItemDropdownToggle>Dropdown Link</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
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
