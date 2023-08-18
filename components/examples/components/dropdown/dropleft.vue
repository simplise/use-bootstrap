<template>
  <ButtonGroup placement="dropstart">
    <DropdownToggle button="secondary">
      Dropup
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Separated link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
  <ButtonGroup placement="dropstart">
    <DropdownToggleSplit button="secondary" />
    <b-button button="secondary">
      Split dropup
    </b-button>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Separated link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</template>
