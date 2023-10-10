
<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <b-h
    level="1"
    visually-hidden
  >
    Headers examples
  </b-h>
  <!-- example header 1 start -->
  <b-div class="ExampleHeader1">
    <Navbar>
      <Container
        flex
        margin="b-4"
        border="bottom"
        border-color="secondary"
      >
        <NavbarBrand
          href="#"
          flex
          padding="y-2"
          align-items="center"
        >
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            width="30"
            height="26"
            vertical-align="text-top"
            display="inline-block"
            margin="e-2"
          />
          <b-span font-size="4">
            Simple header
          </b-span>
        </NavbarBrand>

        <NavList
          nav="pills"
          justify-content="end"
          padding="y-2"
        >
          <NavItem>
            <NavLink active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Features
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              FAQs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              About
            </NavLink>
          </NavItem>
        </NavList>
      </Container>
    </Navbar>
  </b-div>
  <!-- example header 1 end -->

  <b-div class="b-example-divider" />

  <!-- example header 2 start -->
  <b-div class="ExampleHeader2">
    <Container
      flex
      justify-content="center"
      padding="y-3"
    >
      <NavList nav="pills">
        <NavItem>
          <NavLink active>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            Pricing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            FAQs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            About
          </NavLink>
        </NavItem>
      </NavList>
    </Container>
  </b-div>
  <!-- example header 2 end -->

  <b-div class="b-example-divider" />

  <!-- example header 3 start -->
  <b-div class="ExampleHeader3">
    <Container
      flex
      margin="b-4"
      border="bottom"
      border-color="secondary"
    >
      <NavbarBrand
        href="#"
        padding="y-3"
        col="md-3"
        align-items="center"
      >
        <b-img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
          width="26"
          height="22"
        />
      </NavbarBrand>

      <NavList
        justify-content="center"
        padding="y-3"
        margin="e-auto b-2 b-lg-0"
        col="md-auto"
      >
        <NavItem>
          <NavLink link="secondary">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink link="dark">
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink link="dark">
            Pricing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink link="dark">
            FAQs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink link="dark">
            About
          </NavLink>
        </NavItem>
      </NavList>

      <b-div
        col="md-3"
        padding="y-3"
        text-end
      >
        <b-button
          type="button"
          button="outline-primary"
          margin="e-2"
        >
          Login
        </b-button>
        <b-button
          type="button"
          button="primary"
        >
          Sign-up
        </b-button>
      </b-div>
    </Container>
  </b-div>
  <!-- example header 3 end -->

  <b-div class="b-example-divider" />

  <!-- example header 4 start -->
  <b-div
    class="ExampleHeader4"
    background-color="dark"
    text-color="white"
  >
    <Container>
      <b-div
        flex
        align-items="center"
        justify-content="center"
        margin="b-2 b-lg-0"
      >
        <NavbarBrand
          href="#"
          flex
          align-items="center"
          margin="b-2 b-lg-0"
        >
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            width="26"
            height="22"
          />
        </NavbarBrand>

        <NavList
          justify-content="center"
          padding="y-3"
          margin="e-lg-auto b-2 b-md-0"
          col="12 lg-auto"
        >
          <NavItem>
            <NavLink
              link="secondary"
              padding="x-2"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              link="light"
              padding="x-2"
            >
              Features
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              link="light"
              padding="x-2"
            >
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              link="light"
              padding="x-2"
            >
              FAQs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              link="light"
              padding="x-2"
            >
              About
            </NavLink>
          </NavItem>
        </NavList>

        <BForm
          flex
          role="search"
          margin="b-3 b-lg-0 e-lg-3"
          col="12 lg-auto"
        >
          <BFormInput
            margin="e-2"
            type="search"
            placeholder="Search"
          />
        </BForm>

        <b-div class="text-end">
          <b-button
            button="outline-light"
            margin="e-2"
          >
            Login
          </b-button>
          <b-button button="warning">
            Sign-up
          </b-button>
        </b-div>
      </b-div>
    </Container>
  </b-div>
  <!-- example header 4 end -->

  <b-div class="b-example-divider" />

  <!-- example header 5 start -->
  <b-div
    class="ExampleHeader5"
    padding="3"
    margin="b-3"
    border="bottom"
    border-color="secondary"
  >
    <Container>
      <b-div
        flex
        align-items="center"
        justify-content="lg-start center"
      >
        <NavbarBrand
          href="#"
          flex
          align-items="center"
          margin="b-2 b-lg-0"
        >
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            width="26"
            height="22"
          />
        </NavbarBrand>

        <NavList>
          <NavItem>
            <NavLink
              padding="x-2"
              link="secondary"
            >
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              padding="x-2"
              link="dark"
            >
              Inventory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              padding="x-2"
              link="dark"
            >
              Customers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              padding="x-2"
              link="dark"
            >
              Products
            </NavLink>
          </NavItem>
        </NavList>

        <BForm
          flex
          role="search"
          margin="b-3 b-lg-0 e-lg-3"
          col="12 lg-auto"
          justify-content="lg-end center"
        >
          <BFormInput
            margin="e-2"
            type="search"
            placeholder="Search..."
          />
        </BForm>

        <Dropdown>
          <DropdownToggle class="d-block link-body-emphasis text-decoration-none">
            <b-img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              rounded="circle"
            />
          </DropdownToggle>
          <DropdownMenu text="small">
            <DropdownItem href="#">
              New project...
            </DropdownItem>
            <DropdownItem href="#">
              Setings
            </DropdownItem>
            <DropdownItem href="#">
              Profile
            </DropdownItem>
            <DropdownItemDivider />
            <DropdownItem href="#">
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </b-div>
    </Container>
  </b-div>
  <!-- example header 5 end -->

  <b-div class="b-example-divider" />

  <b-div
    class="ExampleHeader6"
    padding="y-3"
    margin="b-3"
    border="bottom"
  >
    <Container
      type="fluid"
      display="grid"
      :gap="3"
      align-items="center"
      style="grid-template-columns: 1fr 2fr;"
    >
      <Dropdown>
        <DropdownToggle
          flex
          align-items="center"
          col="lg-4"
          margin="b-2 b-lg-0"
          link="dark"
        >
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            alt="mdo"
            width="26"
            height="22"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            href="#"
            active
          >
            Overview
          </DropdownItem>
          <DropdownItem href="#">
            Inventory
          </DropdownItem>
          <DropdownItem href="#">
            Customers
          </DropdownItem>
          <DropdownItem href="#">
            Products
          </DropdownItem>
          <DropdownItem href="#">
            Reports
          </DropdownItem>
          <DropdownItem href="#">
            Analytics
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <b-div
        flex
        align-items="center"
      >
        <BForm
          flex
          role="search"
          margin="e-3"
          relative-width="100"
        >
          <BFormInput
            margin="e-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </BForm>

        <Dropdown flex-grow="shrink-1">
          <DropdownToggle>
            <b-img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              rounded="circle"
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">
              New Project...
            </DropdownItem>
            <DropdownItem href="#">
              Settings
            </DropdownItem>
            <DropdownItem href="#">
              Profile
            </DropdownItem>
            <DropdownItemDivider />
            <DropdownItem href="#">
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </b-div>
    </Container>
  </b-div>
  <!-- example header 6 end -->


  <b-div class="container-fluid pb-3">
    <b-div
      class="d-grid gap-3"
      style="grid-template-columns: 1fr 2fr;"
    >
      <b-div class="bg-light border rounded-3">
        <br><br><br><br><br><br><br><br><br><br>
      </b-div>
      <b-div class="bg-light border rounded-3">
        <br><br><br><br><br><br><br><br><br><br>
      </b-div>
    </b-div>
  </b-div>

  <b-div class="b-example-divider" />

  <!-- example header 7 start -->
  <Navbar
    padding="y-2"
    theme="light"
    background-color="light"
    border="bottom"
    border-color="secondary"
  >
    <Container flex>
      <NavList margin="e-auto">
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            Pricing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            FAQs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            About
          </NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            link="dark"
            padding="x-2"
          >
            Sign up
          </NavLink>
        </NavItem>
      </NavList>
    </Container>
  </Navbar>
  <b-div
    padding="y-3"
    margin="b-4"
    border="bottom"
    border-color="secondary"
  >
    <Container>
      <b-div
        flex
        justify-content="center"
        align-items="center"
      >
        <NavbarBrand
          href="#"
          flex
          align-items="center"
          margin="b-3 b-lg-0 e-lg-auto"
          text-color="dark"
          text-decoration="none"
        >
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            width="30"
            height="26"
            vertical-align="text-top"
            display="inline-block"
            margin="e-2"
          />
          <b-span font-size="4">
            Double header
          </b-span>
        </NavbarBrand>
        <BForm
          role="search"
          margin="b-3 b-lg-0"
          col="12 lg-auto"
        >
          <BFormInput
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </BForm>
      </b-div>
    </Container>
  </b-div>
  <!-- exapmle header 7 end -->

  <b-div class="b-example-divider" />

  <!-- example header 8 start -->
  <b-div
    padding="x-3 y-2"
    background-color="dark"
    text-color="white"
  >
    <Container>
      <b-div
        flex
        align-items="center"
        justify-content="center lg-start"
      >
        <NavbarBrand
          href="#"
          flex
          margin="y-2 y-lg-0 e-lg-auto"
          align-items="center"
        >
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            width="30"
            height="26"
            vertical-align="text-top"
            display="inline-block"
            margin="e-2"
          />
        </NavbarBrand>
        <NavList
          col="12 lg-auto"
          margin="y-2 y-md-auto"
          justify-content="center"
        >
          <NavItem>
            <NavLink
              href="#"
              text-color="secondary"
            >
              <b-img
                src="https://api.iconify.design/material-symbols/home-outline.svg?color=white"
                width="24"
                height="24"
                display="block"
                margin="x-auto b-1"
              />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              text-color="white"
            >
              <b-img
                src="https://api.iconify.design/carbon/meter-alt.svg?color=white"
                width="24"
                height="24"
                display="block"
                margin="x-auto b-1"
              />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              text-color="white"
            >
              <b-img
                src="https://api.iconify.design/bi/table.svg?color=white"
                width="24"
                height="24"
                display="block"
                margin="x-auto b-1"
              />
              Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              text-color="white"
            >
              <b-img
                src="https://api.iconify.design/ion/grid-outline.svg?color=white"
                width="24"
                height="24"
                display="block"
                margin="x-auto b-1"
              />
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              text-color="white"
            >
              <b-img
                src="https://api.iconify.design/bi/people-circle.svg?color=white"
                width="24"
                height="24"
                display="block"
                margin="x-auto b-1"
              />
              Customers
            </NavLink>
          </NavItem>
        </NavList>
      </b-div>
    </Container>
  </b-div>
  <b-div
    padding="x-3 y-2"
    margin="e-2"
    border="bottom"
    border-color="secondary"
  >
    <Container
      flex
      jusutify-content="center"
    >
      <BForm
        role="search"
        margin="b-2 b-lg-0 e-lg-auto"
        col="12 lg-auto"
      >
        <BFormInput
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </BForm>
      <b-div class="text-end">
        <b-button
          type="button"
          button="light"
          trext-color="dark"
          margin="e-2"
        >
          Login
        </b-button>
        <b-button
          type="button"
          button="primary"
        >
          Sign-up
        </b-button>
      </b-div>
    </Container>
  </b-div>
  <!-- exapmle header 8 end -->

  <b-div class="b-example-divider" />
</template>
<!-- <script>
  import './headers.css'
</script> -->
