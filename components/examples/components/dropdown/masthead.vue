<template>
  <Dropdown>
    <DropdownToggle button="primary">
      Droppdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem
        v-for="item in [1,2,3]"
        :key="item"
      >
        DropdownItem
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>
