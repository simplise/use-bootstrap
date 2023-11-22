<template>
  <RadioToggleButton
    v-model="radio1"
    value="one"
    button="secondary"
    checked
  >
    Checked
  </RadioToggleButton>
  <RadioToggleButton
    v-model="radio1"
    value="two"
    button="secondary"
  >
    Radio
  </RadioToggleButton>
  <RadioToggleButton
    v-model="radio1"
    value="three"
    button="secondary"
    disabled
  >
    Disabled
  </RadioToggleButton>
  <RadioToggleButton
    v-model="radio1"
    value="four"
    button="secondary"
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
