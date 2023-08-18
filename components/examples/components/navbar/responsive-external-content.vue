<template>
  <Collapse id="navbarToggleExternalContent">
    <b-div
      background-color="dark"
      padding="4"
    >
      <h5 class="text-white h4">
        Collapsed content
      </h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </b-div>
  </Collapse>
  <Navbar
    theme="dark"
    background-color="dark"
  >
    <Container type="fluid">
      <NavbarToggler target="#navbarToggleExternalContent" />
    </Container>
  </Navbar>
</template>
