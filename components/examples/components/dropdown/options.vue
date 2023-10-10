<template>
  <b-div flex>
    <Dropdown margin="e-1">
      <DropdownToggle button="secondary">
        Droppdown button
      </DropdownToggle>
      <DropdownMenu offset="10,20">
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <ButtonGroup>
      <b-button button="secondary">
        Reference
      </b-button>
      <DropdownToggleSplit button="secondary" />
      <DropdownMenu reference="parent">
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>Separated link</DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
  </b-div>
</template>
