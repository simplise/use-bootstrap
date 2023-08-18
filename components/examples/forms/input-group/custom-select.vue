<template>
  <BInputGroup margin="b-3">
    <BInputGroupText for="BInputGroupSelect01">
      b-options
    </BInputGroupText>
    <BFormSelect id="BInputGroupSelect01">
      <b-option selected>
        Choose...
      </b-option>
      <b-option value="1">
        One
      </b-option>
      <b-option value="2">
        Two
      </b-option>
      <b-option value="3">
        Three
      </b-option>
    </BFormSelect>
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BFormSelect id="BInputGroupSelect02">
      <b-option selected>
        Choose...
      </b-option>
      <b-option value="1">
        One
      </b-option>
      <b-option value="2">
        Two
      </b-option>
      <b-option value="3">
        Three
      </b-option>
    </BFormSelect>
    <BInputGroupText for="BInputGroupSelect02">
      b-options
    </BInputGroupText>
  </BInputGroup>

  <BInputGroup margin="b-3">
    <b-button
      button="outline-secondary"
      type="button"
    >
      Button
    </b-button>
    <BFormSelect
      id="BInputGroupSelect03"
      aria-label="Example select with button addon"
    >
      <b-option selected>
        Choose...
      </b-option>
      <b-option value="1">
        One
      </b-option>
      <b-option value="2">
        Two
      </b-option>
      <b-option value="3">
        Three
      </b-option>
    </BFormSelect>
  </BInputGroup>
  <BInputGroup margin="b-3">
    <BFormSelect
      id="BInputGroupSelect04"
      aria-label="Example select with button addon"
    >
      <b-option selected>
        Choose...
      </b-option>
      <b-option value="1">
        One
      </b-option>
      <b-option value="2">
        Two
      </b-option>
      <b-option value="3">
        Three
      </b-option>
    </BFormSelect>
    <b-button
      button="outline-secondary"
      type="button"
    >
      Button
    </b-button>
  </BInputGroup>
</template>
