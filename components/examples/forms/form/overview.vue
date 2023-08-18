<template>
  <BForm>
    <BFormControl margin="b-3">
      <BFormLabel>Email address</BFormLabel>
      <BFormInput type="email" />
      <BFormText>We'll never share your email with anyone else.</BFormText>
    </BFormControl>
    <BFormControl margin="b-3">
      <BFormLabel>Password</BFormLabel>
      <BFormInput type="password" />
    </BFormControl>
    <BFormCheck>
      <BFormCheckInput />
      <BFormCheckLabel>Check me out</BFormCheckLabel>
    </BFormCheck>
    <b-button
      type="submit"
      button="primary"
    >
      Submit
    </b-button>
  </BForm>
</template>
