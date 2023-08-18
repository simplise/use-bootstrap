<template>
  <ButtonGroup>
    <DropdownToggle
      button="secondary"
      size="lg"
    >
      Large button
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Separated link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
  <ButtonGroup>
    <b-button
      button="secondary"
      size="lg"
    >
      Large split button
    </b-button>
    <DropdownToggleSplit
      button="secondary"
      size="lg"
    />
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Separated link</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</template>
