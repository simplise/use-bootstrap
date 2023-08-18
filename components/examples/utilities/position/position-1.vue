<template>
  <b-button
    button="primary"
    position="relative"
  >
    Mails
    <b-span
      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
      positon="absolute"
      top="0"
      start="100"
      badge
      rounded="pill"
      background-color="secondary"
    >
      +99
      <b-span
        class="visually-hidden"
        visually-hidden
      >
        unread messages
      </b-span>
    </b-span>
  </b-button>

  <b-button
    button="dark"
    position="relative"
  >
    Marker
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill"
      fill="#212529"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  </b-button>

  <b-button
    button="primary"
    position="relative"
  >
    Alerts
    <b-span
      class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"
      positon="absolute"
      top="0"
      start="100"
      badge
      border
      border-color="light"
      rounded="circle"
      background-color="danger"
      padding="2"
    >
      <b-span
        class="visually-hidden"
        visually-hidden
      >
        unread messages
      </b-span>
    </b-span>
  </b-button>
</template>
