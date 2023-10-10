<template>
  <BInputGroup margin="b-3">
    <Dropdown>
      <DropdownToggle button="outline-secondary">
        Dropdown
      </DropdownToggle>
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
        <DropdownItemDivider />
        <DropdownItem href="#">
          Separated link
        </DropdownItem>
      </DropdownMenu>
      <BFormInput
        type="text"
        aria-label="Text input with dropdown button"
      />
    </Dropdown>
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BFormInput
      type="text"
      aria-label="Text input with dropdown button"
    />
    <Dropdown>
      <DropdownToggle button="outline-secondary">
        Dropdown
      </DropdownToggle>
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
        <DropdownItemDivider />
        <DropdownItem href="#">
          Separated link
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </BInputGroup>

  <BInputGroup margin="b-3">
    <Dropdown>
      <DropdownToggle
        aria-expanded="false"
        button="outline-secondary"
      >
        Dropdown
      </DropdownToggle>
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
        <DropdownItemDivider />
        <DropdownItem href="#">
          Separated link
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <BFormInput
      type="text"
      aria-label="Text input with 2 dropdown buttons"
    />
    <Dropdown>
      <DropdownToggle
        aria-expanded="false"
        button="outline-secondary"
      >
        Dropdown
      </DropdownToggle>
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
        <DropdownItemDivider />
        <DropdownItem href="#">
          Separated link
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </BInputGroup>
</template>
