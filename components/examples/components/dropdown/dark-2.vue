<template>
  <Navbar
    expand="lg"
    theme="dark"
    background-color="dark"
  >
    <Container type="fluid">
      <NavbarBrand>Navbar</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList>
          <NavItemDropdown>
            <NavItemDropdownToggle>Dropdown</NavItemDropdownToggle>
            <DropdownMenu dark>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
