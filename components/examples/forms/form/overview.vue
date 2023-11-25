<template>
  <BForm>
    <BFormControl margin="b-3">
      <BFormLabel>Email address</BFormLabel>
      <BFormInput
        v-model="email"
        type="email"
      />
      <BFormText>We'll never share your email with anyone else.</BFormText>
    </BFormControl>
    <BFormControl margin="b-3">
      <BFormLabel>Password</BFormLabel>
      <BFormInput
        v-model="password"
        type="password"
      />
    </BFormControl>
    <input v-model="password">
    <BFormCheck>
      <BFormCheckInput v-model="checked" />
      <BFormCheckLabel>Check me out</BFormCheckLabel>
    </BFormCheck>
    <b-button
      type="submit"
      button="primary"
    >
      Submit
    </b-button>
  </BForm>
  <b-dl margin="t-5">
    <b-dt col="sm-3">
      Email
    </b-dt>
    <b-dd col="sm-9">
      {{ email }}
    </b-dd>
    <b-dt col="sm-3">
      Password
    </b-dt>
    <b-dd col="sm-9">
      <span>{{ password }}</span>
    </b-dd>
    <b-dt col="sm-3">
      Checked
    </b-dt>
    <b-dd col="sm-9">
      {{ checked }}
    </b-dd>
  </b-dl>
</template>
<script setup>
const email = ref('email')
const password = ref('')
const checked = ref(false)
</script>
