<template>
  <Alert
    id="my-alert"
    theme="warning"
    dismissible
    fade
  >
    <strong>Holy guacamole!</strong>
    You should check in on some of those fields below.
  </Alert>
  <b-button
    button="primary"
    dismiss="alert"
    target="#my-alert"
  >
    Close
  </b-button>
</template>
