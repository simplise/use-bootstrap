<template>
  <BFormCheck>
    <BFormCheckInput
      v-model="checkbox1"
      true-value="ok"
      false-value="ng"
    />
    <BFormCheckLabel>Default checkbox</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck>
    <BFormCheckInput
      v-model="checkbox2"
      true-value="ok"
      false-value="ng"
    />
    <BFormCheckLabel>Checked checkbox</BFormCheckLabel>
  </BFormCheck>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Checkbox 1
    </b-dt>
    <b-dd col="sm-9">
      {{ checkbox1 }}
    </b-dd>
    <b-dt col="sm-3">
      Checkbox 2
    </b-dt>
    <b-dd col="sm-9">
      {{ checkbox2 }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const checkbox1 = ref('ng')
const checkbox2 = ref('ok')
</script>
