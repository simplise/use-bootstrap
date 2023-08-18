<template>
  <BForm>
    <BFieldset disabled>
      <BLegend>Disabled fieldset example</BLegend>
      <BFormControl margin="b-3">
        <BFormLabel>Disabled input</BFormLabel>
        <BFormInput
          type="text"
          placeholder="Disabled input"
        />
      </BFormControl>
      <BFormControl margin="b-3">
        <BFormLabel>Disabled select menu</BFormLabel>
        <BFormSelect>
          <option>Disabled select</option>
        </BFormSelect>
      </BFormControl>
      <BFormControl margin="b-3">
        <BFormCheck>
          <BFormCheckInput
            type="checkbox"
            disabled
          />
          <BFormCheckLabel>Can't check this</BFormCheckLabel>
        </BFormCheck>
      </BFormControl>
      <b-button
        type="submit"
        button="primary"
      >
        Submit
      </b-button>
    </BFieldset>
  </BForm>
</template>
