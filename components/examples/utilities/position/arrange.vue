<template>
  <div class="bd-example-position-utils">
    <b-div position="relative">
      <b-div
        position="absolute"
        :top="0"
        :start="0"
      />
      <b-div
        position="absolute"
        :top="0"
        :end="0"
      />
      <b-div
        position="absolute"
        :top="50"
        :start="50"
      />
      <b-div
        position="absolute"
        :bottom="50"
        :end="50"
      />
      <b-div
        position="absolute"
        :bottom="0"
        :start="0"
      />
      <b-div
        position="absolute"
        :bottom="0"
        :end="0"
      />
    </b-div>
  </div>
</template>
<style src="./example_position.scss" scoped></style>
