<template>
  <ButtonGroup>
    <DropdownToggle
      button="secondary"
      size="sm"
    >
      Small button
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
      size="sm"
    >
      Small split button
    </b-button>
    <DropdownToggleSplit
      button="secondary"
      size="sm"
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
