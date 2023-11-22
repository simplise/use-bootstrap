<template>
  <BFormCheck switch>
    <BFormCheckInput v-model="checkbox1" />
    <BFormCheckLabel>Default switch checkbox input</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck switch>
    <BFormCheckInput v-model="checkbox2" />
    <BFormCheckLabel>Checked switch checkbox input</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck switch>
    <BFormCheckInput
      v-model="checkbox3"
      :disabled="checkbox1 != checkbox2"
    />
    <BFormCheckLabel>Disabled switch checkbox input</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck switch>
    <BFormCheckInput
      checked
      disabled
    />
    <BFormCheckLabel>Disabled checked switch checkbox input</BFormCheckLabel>
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
    <b-dt col="sm-3">
      Checkbox 3
    </b-dt>
    <b-dd col="sm-9">
      {{ checkbox3 }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const checkbox1 = ref(false)
const checkbox2 = ref(true)
const checkbox3 = ref(false)
</script>
