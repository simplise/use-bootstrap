<template>
  <BFormFloating>
    <BFormSelect
      id="floatingSelect"
      aria-label="Floating label select example"
    >
      <b-option selected>
        Open this select menu
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
    <BFormLabel for="floatingSelect">
      Works with selects
    </BFormLabel>
  </BFormFloating>
</template>
