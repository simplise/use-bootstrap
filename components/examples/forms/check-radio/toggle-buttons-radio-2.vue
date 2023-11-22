<template>
  <RadioToggleButton
    v-model="radio1"
    value="one"
    checked
  >
    Checked
  </RadioToggleButton>
  <RadioToggleButton
    v-model="radio1"
    value="two"
  >
    Radio
  </RadioToggleButton>
  <RadioToggleButton
    v-model="radio1"
    value="three"
    disabled
  >
    Disabled
  </RadioToggleButton>
  <RadioToggleButton
    v-model="radio1"
    value="four"
  >
    Radio
  </RadioToggleButton>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Toggle 1
    </b-dt>
    <b-dd col="sm-9">
      {{ radio1 }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const radio1 = ref('one')
</script>
