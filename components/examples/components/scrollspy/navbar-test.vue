<template>
  <Navbar
    id="test"
    padding="x-3"
    theme="light"
    background-color="light"
  >
    <NavbarBrand>Navbar</NavbarBrand>
    <NavList
      nav="pills"
      spy="#navbar-target2"
      @current-changed="(n) => callback(n, $el, 'currentChanged')"
    >
      <NavItem>
        <NavLink href="#scrollspyHeading1">
          First
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#scrollspyHeading2">
          Link
        </NavLink>
      </NavItem>
      <NavItemDropdown>
        <NavItemDropdownToggle>Dropdown</NavItemDropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#scrollspyHeading3">
            Third
          </DropdownItem>
          <DropdownItem href="#scrollspyHeading4">
            Fourth
          </DropdownItem>
          <DropdownItemDivider />
          <DropdownItem href="#scrollspyHeading5">
            Fifth
          </DropdownItem>
        </DropdownMenu>
      </NavItemDropdown>
    </NavList>
  </Navbar>
  <b-div
    id="navbar-target2"
    style="height: 200px; margin-top: 0.5rem; overflow: auto"
  >
    <h4 id="scrollspyHeading1">
      First heading
    </h4>
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting.
    </p>
    <h4 id="scrollspyHeading2">
      Second heading
    </h4>
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting.
    </p>
    <h4 id="scrollspyHeading3">
      Third heading
    </h4>
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting.
    </p>
    <h4 id="scrollspyHeading4">
      Fourth heading
    </h4>
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting.
    </p>
    <h4 id="scrollspyHeading5">
      Fifth heading
    </h4>
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting.
    </p>
  </b-div>
  <div>{{ items }}</div>
</template>
<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core'

const items = ref({})
const callback = (event: any, element: HTMLElement, name: String) => {
  const time = useDateFormat(useNow(), 'HH:mm:ss')
  items.value = { event, id: element.id, name, time }
}

</script>