<template>
  <ButtonGroup flex-direction="column">
    <b-button button="dark">
      Button
    </b-button>
    <b-button button="dark">
      Button
    </b-button>
    <b-button button="dark">
      Button
    </b-button>
    <b-button button="dark">
      Button
    </b-button>
    <b-button button="dark">
      Button
    </b-button>
    <b-button button="dark">
      Button
    </b-button>
  </ButtonGroup>

  <ButtonGroup flex-direction="column">
    <b-button button="primary">
      Button
    </b-button>
    <b-button button="primary">
      Button
    </b-button>
    <ButtonGroup>
      <DropdownToggle button="primary">
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
    <b-button button="primary">
      Button
    </b-button>
    <b-button button="primary">
      Button
    </b-button>
    <ButtonGroup>
      <DropdownToggle button="primary">
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
    <ButtonGroup>
      <DropdownToggle button="primary">
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
    <ButtonGroup>
      <DropdownToggle button="primary">
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
        <DropdownItem href="#">
          Dropdown link
        </DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
  </ButtonGroup>

  <ButtonGroup
    flex-direction="column"
    aria-label="Basic checkbox toggle button group"
  >
    <RadioToggleButton
      name="btnradio"
      button="outline-danger"
      checked
    >
      Radio 1
    </RadioToggleButton>
    <RadioToggleButton
      name="btnradio"
      button="outline-danger"
    >
      Radio 1
    </RadioToggleButton>
    <RadioToggleButton
      name="btnradio"
      button="outline-danger"
    >
      Radio 1
    </RadioToggleButton>
  </ButtonGroup>
</template>
