<template>
  <NavList nav="pills">
    <NavItem>
      <NavLink active>
        Active
      </NavLink>
    </NavItem>
    <NavItemDropdown>
      <NavItemDropdownToggle>Dropdown button</NavItemDropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">
          Action
        </DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </NavItemDropdown>
    <NavItem>
      <NavLink>Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled>
        Disabled
      </NavLink>
    </NavItem>
  </NavList>
</template>
