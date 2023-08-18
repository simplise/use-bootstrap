<template>
  <b-div
    aria-live="polite"
    aria-atomic="true"
    background-color="dark"
    flex
    justify-content="center"
    align-items="center"
    relative-width="100"
    style="min-height: 240px"
  >
    <Toast show>
      <ToastHeader>
        <b-img
          src="https://source.unsplash.com/random/20x20"
          rounded="start"
          margin="e-2"
        />
        <strong class="me-auto">Bootstrap</strong>
        <small text-corlor="muted">11 mins ago</small>
      </ToastHeader>
      <ToastBody>Hello, world! This is a toast message.</ToastBody>
    </Toast>
  </b-div>
</template>
