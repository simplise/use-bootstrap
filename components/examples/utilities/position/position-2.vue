<template>
  <b-div
    position="relative"
    margin="4"
  >
    <Progress style="height: 1px">
      <ProgressBar
        style="width: 50%"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </Progress>
    <b-button
      position="absolute"
      :top="0"
      :start="0"
      translate="middle"
      button="primary"
      size="sm"
      rounded="pill"
      style="width: 2rem; height: 2rem"
    >
      1
    </b-button>
    <b-button
      position="absolute"
      :top="0"
      :start="50"
      translate="middle"
      button="primary"
      size="sm"
      rounded="pill"
      style="width: 2rem; height: 2rem"
    >
      2
    </b-button>
    <b-button
      position="absolute"
      :top="0"
      :start="100"
      translate="middle"
      button="secondary"
      size="sm"
      rounded="pill"
      style="width: 2rem; height: 2rem"
    >
      3
    </b-button>
  </b-div>
</template>
