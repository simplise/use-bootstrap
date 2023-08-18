<template>
  <BForm>
    <Row gutter="3">
      <Col col="md-6">
        <BFormLabel for="inputEmail4">
          Email
        </BFormLabel>
        <BFormInput
          id="inputEmail4"
          type="email"
        />
      </Col>
      <Col col="md-6">
        <BFormLabel for="inputPassword4">
          Password
        </BFormLabel>
        <BFormInput
          id="inputPassword4"
          type="password"
        />
      </Col>
      <Col col="12">
        <BFormLabel for="inputAddress">
          Address
        </BFormLabel>
        <BFormInput
          id="inputAddress"
          type="text"
          placeholder="1234 Main St"
        />
      </Col>
      <Col col="12">
        <BFormLabel for="inputAddress2">
          Address 2
        </BFormLabel>
        <BFormInput
          id="inputAddress2"
          type="text"
          placeholder="Apartment, studio, or floor"
        />
      </Col>
      <Col col="md-6">
        <BFormLabel for="inputCity">
          City
        </BFormLabel>
        <BFormInput
          id="inputCity"
          type="text"
        />
      </Col>
      <Col col="md-4">
        <BFormLabel for="inputState">
          State
        </BFormLabel>
        <BFormSelect id="inputState">
          <b-option selected>
            Choose...
          </b-option>
          <b-option>...</b-option>
        </BFormSelect>
      </Col>
      <Col col="md-2">
        <BFormLabel for="inputZip">
          Zip
        </BFormLabel>
        <BFormInput
          id="inputZip"
          type="text"
        />
      </Col>
      <Col col="12">
        <Col>
          <BFormCheckInput
            id="gridCheck"
            type="checkbox"
          />
          <BFormLabel for="gridCheck">
            Check me out
          </BFormLabel>
        </Col>
      </Col>
      <Col col="12">
        <b-button
          type="submit"
          button="primary"
        >
          Sign in
        </b-button>
      </Col>
    </Row>
  </BForm>
</template>
