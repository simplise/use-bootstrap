<template>
  <Navbar
    expand="lg"
    sticky="top"
    class="bd-navbar"
  >
    <Container
      type="xxl"
      flex-wrap="wrap lg-nowrap"
      class="bd-gutter"
    >
      <div class="bd-navbar-toggle">
        <NavbarToggler
          target="#bdSidebar"
          icon="bi:list"
          :padding="2"
        />
      </div>
      <NavbarBrand
        to="/"
        :padding="0"
        margin="e-0 e-lg-2"
      >
        use-bootstrap
      </NavbarBrand>

      <b-div flex>
        <NavbarToggler
          icon="bi:three-dots"
          flex
          display="lg-none"
          :order="3"
          :padding="2"
          target="#bdNavbar"
        />
      </b-div>
      <Offcanvas
        id="bdNavbar"
        type="lg"
        placement="end"
        flex-grow="grow-1"
      >
        <OffcanvasHeader padding="x-4 b-0">
          <OffcanvasTitle text-color="white">
            Bootstrap
          </OffcanvasTitle>
          <CloseButton dismiss="offcanvas" />
        </OffcanvasHeader>
        <OffcanvasBody padding="4 t-0 lg-0">
          <hr class="d-lg-none text-white-50">
          <NavbarNavList
            flex-direction="row"
            flex-wrap="wrap"
            class="bd-navbar-nav"
          >
            <NavItem col="6 lg-auto">
              <NavLink
                :to="`/lang-${route.params.lang || 'en'}/`"
                padding="x-0 x-lg-2"
                active
              >
                Docs
              </NavLink>
            </NavItem>
            <NavItem col="6 lg-auto">
              <NavLink
                to="/examples/"
                padding="x-0 x-lg-2"
              >
                Examples
              </NavLink>
            </NavItem>
          </NavbarNavList>
          <hr class="d-lg-none text-white-50">
          <NavbarNavList
            flex-direction="row"
            flex-wrap="wrap"
            margin="s-md-auto"
          >
            <NavItem col="6 lg-auto">
              <NavLink
                pdding="y-2 x-0 x-lg-2"
                to="https://github.com/simplise/use-bootstrap"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  name="bi:github"
                  class="navbar-nav-svg"
                />
              </NavLink>
            </NavItem>
            <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
              <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white" />
              <hr class="d-lg-none my-2 text-white-50">
            </li>
            <NavItemDropdown v-if="route.params.lang">
              <NavItemDropdownToggle text-transform="capitalize">
                {{ route.params.lang }}
              </NavItemDropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  :class="{ active: route.params.lang == 'en' }"
                  @click="changeLocale('en')"
                >
                  En
                </DropdownItem>
                <DropdownItem
                  :class="{ active: route.params.lang == 'ja' }"
                  @click="changeLocale('ja')"
                >
                  Ja
                </DropdownItem>
              </DropdownMenu>
            </NavItemDropdown>
            <NavItemDropdown>
              <NavItemDropdownToggle>
                <Icon
                  class="bi me-2"
                  name="bi:sun-fill"
                  aria-hidden="true"
                />
              </NavItemDropdownToggle>
              <DropdownMenu>
                <DropdownItem @click="changeColorMode(false)">
                  <Icon
                    class="bi me-2"
                    name="bi:sun-fill"
                    aria-hidden="true"
                  />
                  Light
                </DropdownItem>
                <DropdownItem @click="changeColorMode(true)">
                  <Icon
                    class="bi me-2"
                    name="bi:moon-stars-fill"
                    aria-hidden="true"
                  />
                  Dark
                </DropdownItem>
              </DropdownMenu>
            </NavItemDropdown>
            <!-- <li class="nav-item dropdown">
              <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme (light)">
                <svg class="bi my-1 theme-icon-active">
                  <use href="#sun-fill"></use>
                </svg>
                <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                <li>
                  <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="true">
                    <svg class="bi me-2 opacity-50 theme-icon">
                      <use href="#sun-fill"></use>
                    </svg>
                    Light
                    <svg class="bi ms-auto d-none">
                      <use href="#check2"></use>
                    </svg>
                  </button>
                </li>
                <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                    <svg class="bi me-2 opacity-50 theme-icon">
                      <use href="#moon-stars-fill"></use>
                    </svg>
                    Dark
                    <svg class="bi ms-auto d-none">
                      <use href="#check2"></use>
                    </svg>
                  </button>
                </li>
                <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                    <svg class="bi me-2 opacity-50 theme-icon">
                      <use href="#circle-half"></use>
                    </svg>
                    Auto
                    <svg class="bi ms-auto d-none">
                      <use href="#check2"></use>
                    </svg>
                  </button>
                </li>
              </ul>
            </li> -->
          </NavbarNavList>
        </OffcanvasBody>
      </Offcanvas>
    </Container>
  </Navbar>
</template>
<script setup lang="ts">

const route = useRoute()

const isDark = useDark({
    selector: 'html',
    attribute: 'data-bs-theme',
    valueDark: 'dark',
    valueLight: 'light',
  })
const changeLocale = (lang: string) => {
  navigateTo(`/lang-${lang}/`)
}
const changeColorMode = (value: boolean) => {
  isDark.value = value
}
</script>