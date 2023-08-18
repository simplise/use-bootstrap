<template>
  <b-p>
    <b-a
      href="#"
      pointer-events="none"
      tabindex="-1"
      aria-disabled="true"
    >
      This link
    </b-a>
    can not be clicked.
  </b-p>
  <b-p>
    <b-a
      href="#"
      pointer-events="auto"
    >
      This link
    </b-a>
    can be clicked (this is default behavior).
  </b-p>
  <b-p pointer-events="none">
    <b-a
      href="#"
      tabindex="-1"
      aria-disabled="true"
    >
      This link
    </b-a>
    can not be clicked because the
    <code>pointer-events</code>
    property is inherited from its parent. However,
    <b-a
      href="#"
      pointer-events="auto"
    >
      this link
    </b-a>
    has a
    <code>pe-auto</code>
    class and can be clicked.
  </b-p>
</template>
