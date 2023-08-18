<template>
  <BForm>
    <Row
      gutter="gy-2 gx-3"
      align-items="center"
    >
      <Col col="auto">
        <!-- <label class="visually-hidden" for="autoSizingInput">Name</label> -->
        <BFormLabel
          visually="hidden"
          for="autoSizingInput"
        >
          Name
        </BFormLabel>
        <BFormInput
          id="autoSizingInput"
          type="text"
          placeholder="Jane Doe"
        />
      </Col>
      <Col col="auto">
        <BFormLabel
          visually="hidden"
          for="autoSizingBInputGroup"
        >
          Name
        </BFormLabel>
        <div class="input-group">
          <div class="input-group-text">
            @
          </div>
          <input
            id="autoSizingBInputGroup"
            type="text"
            class="form-control"
            placeholder="Username"
          >
        </div>
      </Col>
      <Col col="auto">
        <BFormLabel
          visually="hidden"
          for="autoSizingSelect"
        >
          Name
        </BFormLabel>
        <!-- <label class="visually-hidden" for="autoSizingSelect">Preference</label> -->
        <select
          id="autoSizingSelect"
          class="form-select"
        >
          <option selected>
            Choose...
          </option>
          <option value="1">
            One
          </option>
          <option value="2">
            Two
          </option>
          <option value="3">
            Three
          </option>
        </select>
      </Col>
      <Col col="auto">
        <b-button
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </b-button>
      </Col>
    </Row>
  </BForm>
</template>
