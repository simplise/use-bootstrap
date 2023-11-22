<template>
  <BFormLabel for="customRange2">
    Example range
  </BFormLabel>
  <BFormRange
    id="customRange2"
    v-model="rangeValue"
    min="0"
    max="6"
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
 const rangeValue = ref(3)
</script>