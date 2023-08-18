<template>
  <b-button
    button="primary"
    toggle="toast"
    target="#liveToast"
  >
    Show live toast
  </b-button>

  <div
    class="position-fixed bottom-0 end-0 p-3"
    style="z-index: 11"
  >
    <Toast id="liveToast">
      <ToastHeader>
        <b-img
          src="https://dummyimage.com/20x20/007aff/007aff"
          rounded
          margin="e-2"
          alt="Card image cap"
        />
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <CloseButton dismiss="toast" />
      </ToastHeader>
      <ToastBody>Hello, world! This is a toast message.</ToastBody>
    </Toast>
  </div>
</template>
