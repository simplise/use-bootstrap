<template>
  <BForm validation>
    <Row gutter="3">
      <Col col="md-4">
        <BFormLabel for="validationCustom01">
          First name
        </BFormLabel>
        <BFormInput
          id="validationCustom01"
          type="text"
          value="Mark"
          required
        />
        <BValidFeedback valid>
          Looks good!
        </BValidFeedback>
      </Col>
      <Col col="md-4">
        <BFormLabel for="validationCustom02">
          Last name
        </BFormLabel>
        <BFormInput
          id="validationCustom02"
          type="text"
          value="Otto"
          required
        />
        <BValidFeedback valid>
          Looks good!
        </BValidFeedback>
      </Col>
      <Col col="md-4">
        <BFormLabel for="validationCustomUsername">
          Username
        </BFormLabel>
        <BInputGroup>
          <BInputGroupText id="BInputGroupPrepend">
            @
          </BInputGroupText>
          <BFormInput
            id="validationCustomUsername"
            type="text"
            aria-describedby="BInputGroupPrepend"
            required
          />
          <BValidFeedback>Please choose a username.</BValidFeedback>
        </BInputGroup>
      </Col>
      <Col col="md-6">
        <BFormLabel for="validationCustom03">
          City
        </BFormLabel>
        <BFormInput
          id="validationCustom03"
          type="text"
          required
        />
        <BValidFeedback>Please provide a valid city.</BValidFeedback>
      </Col>
      <Col col="md-3">
        <BFormLabel for="validationCustom04">
          State
        </BFormLabel>
        <BFormSelect required>
          <b-option
            selected
            disabled
            value=""
          >
            Choose...
          </b-option>
          <b-option>...</b-option>
        </BFormSelect>
        <BValidFeedback>Please select a valid state.</BValidFeedback>
      </Col>
      <Col col="md-3">
        <BFormLabel for="validationCustom05">
          Zip
        </BFormLabel>
        <BFormInput
          id="validationCustom05"
          type="text"
          required
        />
        <BValidFeedback>Please provide a valid zip.</BValidFeedback>
      </Col>
      <Col col="12">
        <BFormCheckInput
          id="invalidCheck"
          required
        />
        <BFormLabel for="invalidCheck">
          Agree to terms and conditions
        </BFormLabel>
        <BValidFeedback>You must agree before submitting.</BValidFeedback>
      </Col>
      <Col col="12">
        <b-button
          type="submit"
          button="primary"
        >
          Submit form
        </b-button>
      </Col>
    </Row>
  </BForm>
</template>
