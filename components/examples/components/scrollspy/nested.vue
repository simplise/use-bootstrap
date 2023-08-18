<template>
  <Row>
    <Col col="4">
      <Navbar
        padding="3"
        theme="light"
        background-color="light"
        align-items="stretch"
      >
        <NavbarBrand href="#">
          Navbar
        </NavbarBrand>
        <Nav
          nav="pills"
          flex-direction="column"
          spy="#navbar-target3"
        >
          <NavLink href="#item-1">
            Item 1
          </NavLink>
          <Nav
            nav="pills"
            flex-direction="column"
            :parent="false"
          >
            <NavLink
              margin="s-3 y-1"
              href="#item-1-1"
            >
              Item 1-1
            </NavLink>
            <NavLink
              margin="s-3 y-1"
              href="#item-1-2"
            >
              Item 1-2
            </NavLink>
          </Nav>
          <NavLink href="#item-2">
            Item 2
          </NavLink>
          <NavLink href="#item-3">
            Item 3
          </NavLink>
          <Nav
            nav="pills"
            flex-direction="column"
            :parent="false"
          >
            <NavLink
              margin="s-3 y-1"
              href="#item-3-1"
            >
              Item 3-1
            </NavLink>
            <NavLink
              margin="s-3 y-1"
              href="#item-3-2"
            >
              Item 3-2
            </NavLink>
          </Nav>
        </Nav>
      </Navbar>
    </Col>
    <Col col="8">
      <b-div
        id="navbar-target3"
        style="height: 350px; margin-top: 0.5rem; overflow: auto"
      >
        <h4 id="item-1">
          Item 1
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="item-1-1">
          Item 1-1
        </h5>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="item-1-2">
          Item 1-2
        </h5>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="item-2">
          Item 2
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="item-3">
          Item 3
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="item-3-1">
          Item 3-1
        </h5>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h5 id="item-3-2">
          Item 3-2
        </h5>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
      </b-div>
    </Col>
  </Row>
</template>
