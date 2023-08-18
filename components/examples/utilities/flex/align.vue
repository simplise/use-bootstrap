<template>
  <b-div
    flex
    align-items="start"
    flex-direction="column"
    margin="b-3"
    style="height: 200px"
  >
    <b-div
      margin="b-auto"
      :paddin="2"
    >
      Flex item
    </b-div>
    <b-div :paddin="2">
      Flex item
    </b-div>
    <b-div :paddin="2">
      Flex item
    </b-div>
  </b-div>

  <b-div
    flex
    align-items="end"
    flex-direction="column"
    margin="b-3"
    style="height: 200px"
  >
    <b-div :paddin="2">
      Flex item
    </b-div>
    <b-div :paddin="2">
      Flex item
    </b-div>
    <b-div
      margin="t-auto"
      :paddin="2"
    >
      Flex item
    </b-div>
  </b-div>
</template>
