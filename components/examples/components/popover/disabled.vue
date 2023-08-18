<template>
  <b-button
    button="danger"
    size="lg"
    toggle="popover"
    trigger="hover focus"
    content="Disabled popover"
  >
    Click to toggle popover
  </b-button>

  <span
    class="d-inline-block"
    tabindex="0"
    toggle="popover"
    data-b-s-trigger="hover focus"
    data-bs-content="Disabled popover"
  >
    <b-button
      class="btn btn-primary"
      type="button"
      disabled
    >
      Disabled button
    </b-button>
  </span>
</template>
