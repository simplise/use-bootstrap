<template>
  <BForm>
    <BFieldset>
      <BLegend>Example legend</BLegend>
      <b-p>
        <BFormLabel for="input">
          Example input
        </BFormLabel>
        <BFormInput
          id="input"
          type="text"
          placeholder="Example input"
        />
      </b-p>
      <b-p>
        <BFormLabel for="email">
          Example email
        </BFormLabel>
        <BFormInput
          id="email"
          type="email"
          placeholder="test@example.com"
        />
      </b-p>
      <b-p>
        <BFormLabel for="tel">
          Example telephone
        </BFormLabel>
        <BFormInput
          id="tel"
          type="tel"
        />
      </b-p>
      <b-p>
        <BFormLabel for="url">
          Example url
        </BFormLabel>
        <BFormInput
          id="url"
          type="url"
        />
      </b-p>
      <b-p>
        <BFormLabel for="number">
          Example number
        </BFormLabel>
        <BFormInput
          id="number"
          type="number"
        />
      </b-p>
      <b-p>
        <BFormLabel for="search">
          Example search
        </BFormLabel>
        <BFormInput
          id="search"
          type="search"
        />
      </b-p>
      <b-p>
        <BFormLabel for="range">
          Example range
        </BFormLabel>
        <BFormInput
          id="range"
          type="range"
        />
      </b-p>
      <b-p>
        <BFormLabel for="file">
          Example file input
        </BFormLabel>
        <BFormInput
          id="file"
          type="file"
        />
      </b-p>
      <b-p>
        <BFormLabel for="select">
          Example file input
        </BFormLabel>
        <BFormSelect>
          <b-option value="">
            Choose...
          </b-option>
          <optgroup label="Option group 1">
            <b-option value="">
              Option 1
            </b-option>
            <b-option value="">
              Option 2
            </b-option>
            <b-option value="">
              Option 3
            </b-option>
          </optgroup>
          <optgroup label="Option group 2">
            <b-option value="">
              Option 4
            </b-option>
            <b-option value="">
              Option 5
            </b-option>
            <b-option value="">
              Option 6
            </b-option>
          </optgroup>
        </BFormSelect>
      </b-p>
      <b-p>
        <BFormLabel>
          <input
            type="checkbox"
            value=""
          >
          Check this checkbox
        </BFormLabel>
      </b-p>
      <b-p>
        <BFormCheck>
          <BFormCheckInput
            id="optionsRadios1"
            type="radio"
            name="optionsRadios"
            value="option1"
            checked
          />
          <BFormCheckLabel>Option one is this and that</BFormCheckLabel>
        </BFormCheck>
        <BFormLabel>
          <BFormCheckInput
            id="optionsRadios2"
            type="radio"
            name="optionsRadios"
            value="option2"
          />
          <BFormCheckLabel>
            Option two is something else that's also super long to demonstrate
            the wrapping of these fancy form controls.
          </BFormCheckLabel>
        </BFormLabel>
        <BFormLabel>
          <BFormCheckInput
            id="optionsRadios3"
            type="radio"
            name="optionsRadios"
            value="option3"
            disabled
          />
          <BFormCheckLabel>Option three is disabled</BFormCheckLabel>
        </BFormLabel>
      </b-p>
      <b-p>
        <BFormLabel for="textarea">
          Example textarea
        </BFormLabel>
        <BFormTextarea
          id="textarea"
          rows="3"
        />
      </b-p>
      <b-p>
        <BFormLabel for="date">
          Example date
        </BFormLabel>
        <BFormInput
          id="date"
          type="date"
        />
      </b-p>
      <b-p>
        <BFormLabel for="time">
          Example time
        </BFormLabel>
        <BFormInput
          id="time"
          type="time"
        />
      </b-p>
      <b-p>
        <BFormLabel for="password">
          Example password
        </BFormLabel>
        <BFormInput
          id="password"
          type="password"
        />
      </b-p>
      <b-p>
        <BFormLabel for="datetime-local">
          Example datetime-local
        </BFormLabel>
        <BFormInput
          id="datetime-local"
          type="datetime-local"
        />
      </b-p>
      <b-p>
        <BFormLabel for="week">
          Example week
        </BFormLabel>
        <BFormInput
          id="week"
          type="week"
        />
      </b-p>
      <b-p>
        <BFormLabel for="month">
          Example month
        </BFormLabel>
        <BFormInput
          id="month"
          type="month"
        />
      </b-p>
      <b-p>
        <BFormLabel for="color">
          Example color
        </BFormLabel>
        <BFormInput
          id="color"
          type="color"
        />
      </b-p>
      <b-p>
        <BFormLabel for="output">
          Example week
        </BFormLabel>
        <output
          id="output"
          name="result"
        >100</output>
      </b-p>
      <b-p>
        <b-button type="submit">
          Button submit
        </b-button>
        <BFormInput
          type="submit"
          value="Input submit button"
        />
        <BFormInput
          type="reset"
          value="Input reset button"
        />
        <BFormInput
          type="button"
          value="Input button"
        />
      </b-p>
      <b-p>
        <b-button
          type="submit"
          disabled
        >
          Button submit
        </b-button>
        <BFormInput
          type="submit"
          value="Input submit button"
          disabled
        />
        <BFormInput
          type="reset"
          value="Input reset button"
          disabled
        />
        <BFormInput
          type="button"
          value="Input button"
          disabled
        />
      </b-p>
    </BFieldset>
  </BForm>
</template>
<style lang="scss" scoped>
.form-control {
  width: initial;
}

label {
  display: inline-block;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>
