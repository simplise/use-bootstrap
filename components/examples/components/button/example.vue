<template>
  <b-button
    button="primary"
    @click="clicked"
  >
    Primary
  </b-button>
  <b-button
    button="secondary"
    @click="clicked"
  >
    Secondary
  </b-button>
  <b-button
    button="success"
    @click="clicked"
  >
    Success
  </b-button>
  <b-button
    button="danger"
    @click="clicked"
  >
    Danger
  </b-button>
  <b-button
    button="warning"
    @click="clicked"
  >
    Warning
  </b-button>
  <b-button
    button="info"
    @click="clicked"
  >
    Info
  </b-button>
  <b-button
    button="light"
    @click="clicked"
  >
    Light
  </b-button>
  <b-button
    button="dark"
    @click="clicked"
  >
    Dark
  </b-button>
  <b-button
    button="link"
    @click="clicked"
  >
    Link
  </b-button>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Last clicked button
    </b-dt>
    <b-dd col="sm-9">
      {{ lastClicked }}
    </b-dd>
  </b-dl>
</template>
<script setup>
 const lastClicked = ref('')
 const clicked = (event) => {
  lastClicked.value = event.srcElement.className
 }
</script>
