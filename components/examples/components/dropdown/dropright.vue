<template>
  <ButtonGroup placement="dropend">
    <DropdownToggle button="secondary">
      Dropup
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>Separated link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
  <ButtonGroup placement="dropend">
    <b-button button="secondary">
      Split dropup
    </b-button>
    <DropdownToggleSplit button="secondary" />
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>Separated link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</template>
