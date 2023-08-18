<template>
  <Toast show>
    <ToastBody>
      Hello, world! This is a toast message.
      <b-div
        margin="t-2"
        padding="t-2"
        border="top"
      >
        <b-button
          button="primary"
          size="sm"
        >
          Take action
        </b-button>
        <b-button
          button="secondary"
          size="sm"
          dismiss="toast"
        >
          Close
        </b-button>
      </b-div>
    </ToastBody>
  </Toast>
</template>
