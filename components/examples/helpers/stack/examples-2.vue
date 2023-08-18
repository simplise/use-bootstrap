<template>
  <b-div
    hstack
    gap="3"
    margin="x-auto"
  >
    <b-input
      margin="e-auto"
      type="text"
      placeholder="Add your item here..."
      aria-label="Add your item here..."
    />
    <b-button button="secondary">
      Submit
    </b-button>
    <Vr />
    <b-button button="outline-danger">
      Reset
    </b-button>
  </b-div>
</template>
