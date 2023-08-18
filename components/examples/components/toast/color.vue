<template>
  <Toast
    show
    text-color="white"
    background-color="primary"
    border="0"
  >
    <b-div flex>
      <ToastBody>Hello, world! This is a toast message.</ToastBody>
      <CloseButton
        dismiss="toast"
        margin="e-2 auto"
      />
    </b-div>
  </Toast>
</template>
