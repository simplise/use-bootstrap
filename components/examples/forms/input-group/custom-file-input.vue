<template>
  <BInputGroup margin="b-3">
    <BFormLabel for="BInputGroupFile01">
      Upload
    </BFormLabel>
    <BFormFile id="BInputGroupFile01" />
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BFormFile id="BInputGroupFile02" />
    <BFormLabel for="BInputGroupFile02">
      Upload
    </BFormLabel>
  </BInputGroup>

  <BInputGroup margin="b-3">
    <b-button
      id="BInputGroupFileAddon03"
      button="outline-secondary"
    >
      Button
    </b-button>
    <BFormFile
      id="BInputGroupFile03"
      aria-describedby="BInputGroupFileAddon03"
      aria-label="Upload"
    />
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BFormFile
      id="BInputGroupFile04"
      aria-describedby="BInputGroupFileAddon04"
      aria-label="Upload"
    />
    <b-button
      id="BInputGroupFileAddon04"
      button="outline-secondary"
    >
      Button
    </b-button>
  </BInputGroup>
</template>
