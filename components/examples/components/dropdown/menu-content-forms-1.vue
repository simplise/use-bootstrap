<template>
  <DropdownMenu>
    <BForm>
      <BFormControl padding="x-4 y-3">
        <BFormLabel>Email address</BFormLabel>
        <BFormInput
          type="email"
          placeholder="email@example.com"
        />
      </BFormControl>
      <BFormControl margin="b-3">
        <BFormLabel>Password</BFormLabel>
        <BFormInput
          type="password"
          placeholder="Password"
        />
      </BFormControl>
      <BFormCheck margin="b-3">
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
    <DropdownItem divider />
    <DropdownItem>New around here? Sign up</DropdownItem>
    <DropdownItem>Forgot password?</DropdownItem>
  </DropdownMenu>
</template>
