<template>
  <ButtonGroup aria-label="Button group with nested dropdown">
    <b-button class="btn btn-secondary">
      1
    </b-button>
    <b-button class="btn btn-secondary">
      2
    </b-button>

    <ButtonGroup>
      <DropdownToggle
        id="btnGroupDrop1"
        button="secondary"
      >
        Dropdown
      </DropdownToggle>
      <ul
        class="dropdown-menu"
        aria-labelledby="btnGroupDrop1"
      >
        <li>
          <b-a
            class="dropdown-item"
            href="#"
          >
            Dropdown link
          </b-a>
        </li>
        <li>
          <b-a
            class="dropdown-item"
            href="#"
          >
            Dropdown link
          </b-a>
        </li>
      </ul>
    </ButtonGroup>
  </ButtonGroup>
</template>
