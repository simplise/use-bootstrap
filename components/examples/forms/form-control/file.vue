<template>
  <Row margin="b-3">
    <BFormLabel for="formFile">
      Default file input example
    </BFormLabel>
    <BFormFile id="formFile" />
  </Row>
  <Row margin="b-3">
    <BFormLabel for="formFileMultiple">
      Multiple files input example
    </BFormLabel>
    <BFormFile
      id="formFileMultiple"
      multiple
    />
  </Row>
  <Row margin="b-3">
    <BFormLabel for="formFileDisabled">
      Disabled file input example
    </BFormLabel>
    <BFormFile
      id="formFileDisabled"
      disabled
    />
  </Row>
  <Row margin="b-3">
    <BFormLabel for="formFileSm">
      Small file input example
    </BFormLabel>
    <BFormFile
      id="formFileSm"
      size="sm"
    />
  </Row>
  <Row>
    <BFormLabel for="formFileLg">
      Large file input example
    </BFormLabel>
    <BFormFile
      id="formFileLg"
      size="lg"
    />
  </Row>
</template>
