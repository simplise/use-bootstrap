<template>
  <ToastContainer position="static">
    <Toast show>
      <ToastHeader>
        <b-img
          src="https://dummyimage.com/20x20/007aff/007aff"
          rounded
          margin="e-2"
          alt="Card image cap"
        />
        <strong class="me-auto">Bootstrap</strong>
        <small text-color="muted">just now</small>
        <CloseButton dismiss="toast" />
      </ToastHeader>
      <ToastBody>See? Just like this.</ToastBody>
    </Toast>
    <Toast show>
      <ToastHeader>
        <b-img
          src="https://dummyimage.com/20x20/007aff/007aff"
          rounded
          margin="e-2"
          alt="Card image cap"
        />
        <strong class="me-auto">Bootstrap</strong>
        <small text-color="muted">2 seconds ago</small>
        <CloseButton dismiss="toast" />
      </ToastHeader>
      <ToastBody>Heads up, toasts will stack automatically</ToastBody>
    </Toast>
  </ToastContainer>
</template>
