<template>
  <BForm>
    <b-div margin="b-3">
      <b-label for="selectToastPlacement">
        Toast placement
      </b-label>
      <BFormSelect id="selectToastPlacement">
        <b-option
          value
          selected
        >
          Select a position...
        </b-option>
        <b-option value="top-0 start-0">
          Top left
        </b-option>
        <b-option value="top-0 start-50 translate-middle-x">
          Top center
        </b-option>
        <b-option value="top-0 end-0">
          Top right
        </b-option>
        <b-option value="top-50 start-0 translate-middle-y">
          Middle left
        </b-option>
        <b-option value="top-50 start-50 translate-middle">
          Middle center
        </b-option>
        <b-option value="top-50 end-0 translate-middle-y">
          Middle right
        </b-option>
        <b-option value="bottom-0 start-0">
          Bottom left
        </b-option>
        <b-option value="bottom-0 start-50 translate-middle-x">
          Bottom center
        </b-option>
        <b-option value="bottom-0 end-0">
          Bottom right
        </b-option>
      </BFormSelect>
    </b-div>
  </BForm>
  <b-div
    aria-live="polite"
    aria-atomic="true"
    background-color="body-secondary"
    position="relative"
    class="bd-example-toasts"
  >
    <ToastContainer padding="3">
      <Toast show>
        <ToastHeader>
          <b-img
            src="https://source.unsplash.com/random/20x20"
            rounded="start"
            margin="e-2"
          />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </ToastHeader>
        <ToastBody>Hello, world! This is a toast message.</ToastBody>
      </Toast>
    </ToastContainer>
  </b-div>
</template>
