<template>
  <Card text-alignment="center">
    <CardHeader>
      <Nav card="header-tabs">
        <NavItem>
          <NavLink
            active
            href="#"
          >
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            disabled
            href="#"
          >
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </CardHeader>
    <CardBody>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <b-a
        href="#"
        button="primary"
      >
        Go somewhere
      </b-a>
    </CardBody>
  </Card>
</template>
