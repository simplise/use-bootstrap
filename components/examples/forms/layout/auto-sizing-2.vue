<template>
  <BForm>
    <Row
      gutter="x-3 y-2"
      align-items="center"
    >
      <Col col="sm-3">
        <BFormLabel for="specificcolInputName">
          Name
        </BFormLabel>
        <BFormInput
          id="specificcolInputName"
          type="text"
          placeholder="Jane Doe"
        />
      </Col>
      <Col col="sm-3">
        <BFormLabel for="specificcolInputName">
          Username
        </BFormLabel>
        <BFormInput
          id="specificcolInputName"
          type="text"
          placeholder="Username"
        />
      </Col>
      <Col col="sm-3">
        <BFormLabel for="specificcolBInputGroupUsername">
          Preference
        </BFormLabel>
        <BFormSelect id="specificcolSelect">
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
      </Col>
      <Col col="sm-3">
        <BFormCheck>
          <BFormCheckInput />
          <BFormLabel>Remember me</BFormLabel>
        </BFormCheck>
      </Col>
      <Col col="auto">
        <b-button
          type="submit"
          button="primary"
        >
          Submit
        </b-button>
      </Col>
    </Row>
  </BForm>
</template>
