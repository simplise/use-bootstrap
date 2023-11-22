<template>
  <BFormSelect
    v-model="selected"
    length="4"
    multiple
    aria-label="size 3 select example"
  >
    <b-option
      value=""
      selected
    >
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
      {{ JSON.stringify(selected) }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const selected = ref([2, 3])
</script>