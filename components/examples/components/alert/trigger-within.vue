<template>
  <Alert
    theme="warning"
    dismissible
    fade
  >
    <b-button
      button="primary"
      dismiss="alert"
    >
      Close
    </b-button>
    <strong>Holy guacamole!</strong>
    You should check in on some of those fields below.
    <CloseButton dismiss="alert" />
  </Alert>
</template>
