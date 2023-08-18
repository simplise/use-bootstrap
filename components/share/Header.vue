<template>
  <Navbar expand="lg" theme="light" sticky class="bd-navbar">
    <Container type="fluid">
      <NavbarBrand to="/">use-bootstrap</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList margin="e-auto b-2 b-lg-0">
          <NavItem>
            <NavLink :to="`/lang-${route.params.lang || 'en'}/`" active>
              Docs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/examples/">
              Examples
            </NavLink>
          </NavItem>

          <NavItemDropdown v-if="route.params.lang">
            <NavItemDropdownToggle text-transform="capitalize">
              {{ route.params.lang }}
            </NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem :class="{ active: route.params.lang == 'en' }" @click="changeLocale('en')">
                En
              </DropdownItem>
              <DropdownItem :class="{ active: route.params.lang == 'ja' }" @click="changeLocale('ja')">
                Ja
              </DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
<script setup lang="ts">
const route = useRoute()
const changeLocale = (lang: string) => {
  navigateTo(`/lang-${lang}/`)
}
</script>