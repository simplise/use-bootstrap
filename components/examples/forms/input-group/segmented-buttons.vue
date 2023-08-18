<template>
  <BInputGroup margin="b-3">
    <b-button button="outline-secondary">
      Action
    </b-button>
    <DropdownToggleSplit
      aria-expanded="false"
      button="outline-secondary"
    >
      <b-span visually-hidden>
        Toggle Dropdown
      </b-span>
    </DropdownToggleSplit>
    <DropdownMenu>
      <DropdownItem href="#">
        Action
      </DropdownItem>
      <DropdownItem href="#">
        Another action
      </DropdownItem>
      <DropdownItem href="#">
        Something else here
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem href="#">
        Separated link
      </DropdownItem>
    </DropdownMenu>
    <BFormInput
      type="text"
      aria-label="Text input with segmented dropdown button"
    />
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BFormInput
      type="text"
      aria-label="Text input with segmented dropdown button"
    />
    <b-button button="outline-secondary">
      Action
    </b-button>
    <DropdownToggleSplit
      aria-expanded="false"
      button="outline-secondary"
    >
      <b-span visually-hidden>
        Toggle Dropdown
      </b-span>
    </DropdownToggleSplit>
    <DropdownMenu alignment="end">
      <DropdownItem href="#">
        Action
      </DropdownItem>
      <DropdownItem href="#">
        Another action
      </DropdownItem>
      <DropdownItem href="#">
        Something else here
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem href="#">
        Separated link
      </DropdownItem>
    </DropdownMenu>
  </BInputGroup>
</template>
