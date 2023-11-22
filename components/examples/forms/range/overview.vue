<template>
  <BFormLabel for="customRange1">
    Example range
  </BFormLabel>
  <BFormRange
    id="customRange1"
    v-model="rangeValue"
  />
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      RangeValue
    </b-dt>
    <b-dd col="sm-9">
      {{ rangeValue }}
    </b-dd>
  </b-dl>
</template>
<script setup>
 const rangeValue = ref(30)
</script>