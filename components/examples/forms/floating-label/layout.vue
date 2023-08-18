<template>
  <Row gutter="2">
    <Col col="md">
      <BFormFloating>
        <BFormInput
          id="floatingInputGrid"
          type="email"
          placeholder="name@example.com"
          value="test@example.com"
        />
        <BFormLabel for="floatingInputGrid">
          Email address
        </BFormLabel>
      </BFormFloating>
    </Col>

    <!-- <div class="col-md"> -->
    <Col col="md">
      <BFormFloating>
        <BFormSelect
          id="floatingSelectGrid"
          aria-label="Floating label select example"
        >
          <b-option selected>
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
        <BFormLabel for="floatingSelectGrid">
          Works with selects
        </BFormLabel>
      </BFormFloating>
    </Col>
  </Row>
</template>
