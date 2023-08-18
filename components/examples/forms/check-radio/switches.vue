<template>
  <BFormCheck switch>
    <BFormCheckInput />
    <BFormCheckLabel>Default switch checkbox input</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck switch>
    <BFormCheckInput checked />
    <BFormCheckLabel>Checked switch checkbox input</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck switch>
    <BFormCheckInput disabled />
    <BFormCheckLabel>Disabled switch checkbox input</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck switch>
    <BFormCheckInput
      checked
      disabled
    />
    <BFormCheckLabel>Disabled checked switch checkbox input</BFormCheckLabel>
  </BFormCheck>
</template>
