<template>
  <Toast
    show
    autohide="false"
  >
    <ToastHeader>
      <b-img
        src="https://source.unsplash.com/random/20x20"
        rounded="start"
        margin="e-2"
      />
      <strong class="me-auto">Bootstrap</strong>
      <small text-corlor="muted">11 mins ago</small>
      <CloseButton dismiss="toast" />
    </ToastHeader>
    <ToastBody>Hello, world! This is a toast message.</ToastBody>
  </Toast>
</template>
