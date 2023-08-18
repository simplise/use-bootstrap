<template>
  <BForm>
    <Row margin="b-3">
      <BColFormLabel
        for="inputEmail3"
        col="sm-2"
      >
        Email
      </BColFormLabel>
      <Col col="sm-10">
        <BFormInput
          id="inputEmail3"
          type="email"
        />
      </Col>
    </Row>
    <Row margin="b-3">
      <BColFormLabel
        for="inputPassword3"
        col="sm-2"
      >
        Password
      </BColFormLabel>
      <Col col="sm-10">
        <BFormInput
          id="inputPassword3"
          type="password"
        />
      </Col>
    </Row>
    <BFieldset>
      <Row margin="b-3">
        <BColFormLegend
          col="sm-2"
          padding="t-0"
        >
          Radios
        </BColFormLegend>
        <Col col="sm-10">
          <BFormCheckInput
            id="gridRadios1"
            type="radio"
            name="gridRadios"
            value="option1"
            checked
          />
          <BFormLabel for="gridRadios1">
            First radio
          </BFormLabel>
          <BFormCheckInput
            id="gridRadios2"
            type="radio"
            name="gridRadios"
            value="option2"
          />
          <BFormLabel for="gridRadios2">
            Second radio
          </BFormLabel>
          <BFormCheckInput
            id="gridRadios3"
            type="radio"
            name="gridRadios"
            value="option3"
            disabled
          />
          <BFormLabel for="gridRadios3">
            Third disabled radio
          </BFormLabel>
        </Col>
      </Row>
    </BFieldset>
    <Row margin="b-3">
      <Col
        col="sm-10"
        offset="sm-2"
      >
        <BFormCheckInput
          id="gridCheck1"
          type="checkbox"
        />
        <BFormLabel for="gridCheck1">
          Example checkbox
        </BFormLabel>
      </Col>
    </Row>
    <b-button
      type="submit"
      button="primary"
    >
      Sign in
    </b-button>
  </BForm>
</template>
