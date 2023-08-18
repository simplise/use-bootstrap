<template>
  <BForm>
    <Row gutter="3">
      <Col col="auto">
        <b-label
          for="staticEmail2"
          visually-hidden
        >
          Email
        </b-label>
        <BFormInput
          id="staticEmail2"
          type="text"
          readonly="”plaintext”"
          value="email@example.com"
        />
      </Col>
      <Col col="auto">
        <b-label
          for="inputPassword2"
          visually-hidden
        >
          Password
        </b-label>
        <BFormInput
          id="inputPassword2"
          type="password"
          placeholder="Password"
        />
      </Col>
      <Col col="auto">
        <b-button
          type="submit"
          button="primary"
          margin="b-3"
        >
          Confirm identity
        </b-button>
      </Col>
    </Row>
  </BForm>
</template>
