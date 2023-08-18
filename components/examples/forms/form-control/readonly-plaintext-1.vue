<template>
  <Row margin="b-3">
    <BColFormLabel
      for="staticEmail"
      class="col-sm-2"
    >
      Email
    </BColFormLabel>
    <Col col="sm-10">
      <BFormInput
        id="staticEmail"
        type="text"
        readonly="”plaintext”"
        value="email@example.com"
      />
    </Col>
  </Row>
  <Row margin="b-3">
    <BColFormLabel
      for="inputPassword"
      class="col-sm-2 col-form-label"
    >
      Password
    </BColFormLabel>
    <Col col="sm-10">
      <BFormInput
        id="inputPassword"
        type="password"
      />
    </Col>
  </Row>
</template>
