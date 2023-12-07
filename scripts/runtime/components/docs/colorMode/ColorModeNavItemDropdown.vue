<template>
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
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core"

const isDark = useDark({
  selector: 'html',
  attribute: 'data-bs-theme',
  valueDark: 'dark',
  valueLight: 'light',
})
const changeColorMode = (value: boolean) => {
  isDark.value = value
}
</script>