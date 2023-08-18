<template>
  <b-div
    aria-live="polite"
    aria-atomic="true"
    background-color="dark"
    position="relative"
    style="min-height: 240px"
  >
    <ToastContainer
      padding="3"
      position="absolute"
      top="0"
      end="0"
    >
      <Toast show>
        <ToastHeader>
          <b-img
            src="https://source.unsplash.com/random/20x20"
            rounded="start"
            margin="e-2"
          />
          <strong class="me-auto">Bootstrap</strong>
          <small text-corlor="muted">just now</small>
        </ToastHeader>
        <ToastBody>See? Just like this.</ToastBody>
      </Toast>
      <Toast show>
        <ToastHeader>
          <b-img
            src="https://source.unsplash.com/random/20x20"
            rounded="start"
            margin="e-2"
          />
          <strong class="me-auto">Bootstrap</strong>
          <small text-corlor="muted">2 seconds ago</small>
        </ToastHeader>
        <ToastBody>Heads up, toasts will stack automatically</ToastBody>
      </Toast>
    </ToastContainer>
  </b-div>
</template>
