<template>
  <BForm class="was-validated">
    <b-div margin="b-3">
      <BFormLabel for="validationTextarea">
        Textarea
      </BFormLabel>
      <BFormTextarea
        id="validationTextarea"
        placeholder="Required example textarea"
        required
      />
      <BValidFeedback>Please enter a message in the textarea.</BValidFeedback>
    </b-div>
    <BFormCheck margin="b-3">
      <BFormCheckInput required />
      <BFormCheckLabel>Default checkbox</BFormCheckLabel>
      <BValidFeedback>Example invalid feedback text</BValidFeedback>
    </BFormCheck>
    <BFormCheck>
      <BFormCheckInput
        type="radio"
        name="radio-stacked"
        value="option1"
        required
      />
      <BFormCheckLabel>Toggle this radio</BFormCheckLabel>
    </BFormCheck>
    <BFormCheck margin="b-3">
      <BFormCheckInput
        type="radio"
        name="radio-stacked"
        value="option2"
        required
      />
      <BFormLabel>Or toggle this other radio</BFormLabel>
      <BValidFeedback>Example invalid feedback text</BValidFeedback>
    </BFormCheck>
    <b-div margin="b-3">
      <BFormSelect required>
        <b-option value>
          Open this select menu
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
      <BValidFeedback>Example invalid select feedback</BValidFeedback>
    </b-div>
    <b-div margin="b-3">
      <BFormFile required />
      <BValidFeedback>Example invalid select feedback</BValidFeedback>
    </b-div>
    <b-div margin="b-3">
      <b-button
        type="submit"
        button="primary"
        disabled
      >
        Submit form
      </b-button>
    </b-div>
  </BForm>
</template>
