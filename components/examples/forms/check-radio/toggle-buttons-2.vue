<template>
  <CheckboxToggleButton v-model="checkbox1">
    Single toggle 1
  </CheckboxToggleButton>
  <CheckboxToggleButton v-model="checkbox2">
    Single toggle 2
  </CheckboxToggleButton>
  <CheckboxToggleButton
    disabled
  >
    Disabled
  </CheckboxToggleButton>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Toggle 1
    </b-dt>
    <b-dd col="sm-9">
      {{ checkbox1 }}
    </b-dd>
    <b-dt col="sm-3">
      Toggle 2
    </b-dt>
    <b-dd col="sm-9">
      {{ checkbox2 }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const checkbox1 = ref(false)
const checkbox2 = ref(true)
</script>
