<template>
  <b-div rounded />
  <b-div rounded="top" />
  <b-div rounded="end" />
  <b-div rounded="bottom" />
  <b-div rounded="start" />
  <b-div rounded="circle" />
  <b-div rounded="pill" />
</template>

<style lang="scss" scoped>
div {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin: 0.25rem;
  background-color: #f5f5f5;
}

.rounded-pill {
  width: 7rem;
}
</style>
