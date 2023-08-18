<template>
  <BInputGroup margin="b-3">
    <BInputGroupText id="basic-addon1">
      @
    </BInputGroupText>
    <BFormInput
      type="text"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </BInputGroup>
  <BInputGroup margin="b-3">
    <BFormInput
      type="text"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <BInputGroupText id="basic-addon2">
      @example.com
    </BInputGroupText>
  </BInputGroup>
  <BFormLabel for="basic-url">
    Your vanity URL
  </BFormLabel>
  <BInputGroup margin="b-3">
    <BInputGroupText>https://example.com/users/</BInputGroupText>
    <BFormInput
      id="basic-url"
      type="text"
      aria-describedby="basic-addon3"
    />
  </BInputGroup>
  <BInputGroup margin="b-3">
    <BInputGroupText>$</BInputGroupText>
    <BFormInput
      type="text"
      aria-label="Amount (to the nearest dollar)"
    />
    <BInputGroupText>.00</BInputGroupText>
  </BInputGroup>
  <BInputGroup margin="b-3">
    <BFormInput
      type="text"
      placeholder="Username"
      aria-label="Username"
    />
    <BInputGroupText>@</BInputGroupText>
    <BFormInput
      type="text"
      placeholder="Server"
      aria-label="Server"
    />
  </BInputGroup>

  <BInputGroup margin="b-3">
    <BInputGroupText>With textarea</BInputGroupText>
    <BFormTextarea aria-label="With textarea" />
  </BInputGroup>
</template>
