<template>
  <Row
    gutter="3"
    align-items="center"
  >
    <Col col="auto">
      <BColFormLabel for="inputPassword6">
        Password
      </BColFormLabel>
    </Col>
    <Col col="auto">
      <BFormInput
        id="inputPassword6"
        type="password"
        aria-describedby="passwordHelpInline"
      />
    </Col>
    <Col col="auto">
      <b-span>
        <BFormText>be 8-20 characters long.</BFormText>
      </b-span>
    </Col>
  </Row>
</template>
