<template>
  <ButtonGroup>
    <DropdownToggle button="secondary">
      Default dropdown
    </DropdownToggle>
    <DropdownMenu auto-close="true">
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
  <ButtonGroup>
    <DropdownToggle button="secondary">
      Clickable inside
    </DropdownToggle>
    <DropdownMenu auto-close="inside">
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
  <ButtonGroup>
    <DropdownToggle button="secondary">
      Clickable outside
    </DropdownToggle>
    <DropdownMenu auto-close="outside">
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
  <ButtonGroup>
    <DropdownToggle button="secondary">
      Manual close
    </DropdownToggle>
    <DropdownMenu auto-close="false">
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
      <DropdownItem>Menu item</DropdownItem>
    </DropdownMenu>
  </ButtonGroup>
</template>
