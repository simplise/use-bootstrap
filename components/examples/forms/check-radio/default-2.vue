<template>
  <BFormCheck>
    <BFormCheckInput
      type="radio"
      name="exampleRadios"
      value="option1"
      checked
    />
    <BFormCheckLabel>Default radio</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck>
    <BFormCheckInput
      type="radio"
      name="exampleRadios"
      value="option2"
    />
    <BFormLabel>Second default radio</BFormLabel>
  </BFormCheck>
  <BFormCheck>
    <BFormCheckInput
      type="radio"
      name="exampleRadios"
      value="option3"
      disabled
    />
    <BFormCheckLabel>Disabled radio</BFormCheckLabel>
  </BFormCheck>
</template>
