<template>
  <BInputGroup
    size="sm"
    margin="b-3"
  >
    <BInputGroupText id="BInputGroup-sizing-sm">
      Small
    </BInputGroupText>
    <BFormInput
      type="text"
      aria-label="Sizing example input"
      aria-describedby="BInputGroup-sizing-sm"
    />
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BInputGroupText id="BInputGroup-sizing-default">
      Default
    </BInputGroupText>
    <BFormInput
      type="text"
      aria-label="Sizing example input"
      aria-describedby="BInputGroup-sizing-default"
    />
  </BInputGroup>

  <BInputGroup
    size="lg"
    margin="b-3"
  >
    <BInputGroupText id="BInputGroup-sizing-lg">
      Large
    </BInputGroupText>
    <BFormInput
      type="text"
      aria-label="Sizing example input"
      aria-describedby="BInputGroup-sizing-lg"
    />
  </BInputGroup>
</template>
<style src="./example_input-group.scss" scoped></style>
