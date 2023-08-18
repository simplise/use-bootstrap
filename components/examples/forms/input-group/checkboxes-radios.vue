<template>
  <BInputGroup margin="b-3">
    <BInputGroupText>
      <BFormCheckInput
        margin="t-0"
        type="checkbox"
        value
        aria-label="Checkbox for following text input"
      />
    </BInputGroupText>
    <BFormInput
      type="text"
      placeholder="Username"
      aria-label="Text input with checkbox"
    />
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BInputGroupText>
      <BFormCheckInput
        margin="t-0"
        type="radio"
        value
        aria-label="Radio button for following text input"
      />
    </BInputGroupText>
    <BFormInput
      type="text"
      placeholder="Username"
      aria-label="Text input with radio button"
    />
  </BInputGroup>
</template>
