<template>
  <BFormSelect
    v-model="selected"
    aria-label="Default select example"
  >
    <b-option selected>
      Open this select menu
    </b-option>
    <b-option value="1">
      One
    </b-option>
    <b-option value="2">
      Two
    </b-option>
    <b-option value="3">
      Three
    </b-option>
  </BFormSelect>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Selected
    </b-dt>
    <b-dd col="sm-9">
      {{ selected }}
    </b-dd>
  </b-dl>
</template>
<script setup>
 const selected = ref('')
</script>