<template>
  <BForm>
    <Row
      size="lg-auto"
      columuns="lg-auto"
      align-item="center"
      gutter="3"
    >
      <Col col="12">
        <BFormLabel visually-hidden>
          Username
        </BFormLabel>
        <BInputGroup>
          <BInputGroupText>@</BInputGroupText>
          <BFormInput
            id="inlineFormBInputGroupUsername"
            type="text"
            placeholder="Username"
          />
        </BInputGroup>
      </Col>
      <Col col="12">
        <BFormSelect id="inlineFormSelectPref">
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
      <Col col="12">
        <BFormCheck>
          <BFormCheckInput id="inlineFormCheck" />
          <BFormLabel for="inlineFormCheck">
            Remember me
          </BFormLabel>
        </BFormCheck>
      </Col>
      <Col col="12">
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
