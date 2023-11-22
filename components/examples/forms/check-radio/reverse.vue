<template>
  <BFormCheck reverse>
    <BFormCheckInput value="" />
    <BFormCheckLabel>Reverse checkbox</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck reverse>
    <BFormCheckInput
      value=""
      disabled
    />
    <BFormCheckLabel>Disabled reverse checkbox</BFormCheckLabel>
  </BFormCheck>
  <BFormCheck
    switch
    reverse
  >
    <BFormCheckInput value="option3" />
    <BFormCheckLabel>Reverse switch checkbox input</BFormCheckLabel>
  </BFormCheck>
</template>
