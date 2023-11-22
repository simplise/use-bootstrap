<template>
  <BFormCheck>
    <BFormCheckInput
      v-model="radioValue"
      value="one"
      type="radio"
    />
    <BFormCheckLabel>Default radio</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck>
    <BFormCheckInput
      v-model="radioValue"
      value="two"
      type="radio"
    />
    <BFormCheckLabel>Default checked radio</BFormCheckLabel>
  </BFormCheck>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Selected Value
    </b-dt>
    <b-dd col="sm-9">
      {{ radioValue }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const radioValue = ref('two')
</script>
