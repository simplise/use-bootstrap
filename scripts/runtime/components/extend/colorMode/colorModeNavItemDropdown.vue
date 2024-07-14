<template>
  <NavItemDropdown>
    <NavItemDropdownToggle>
      <BIcon
        margin="e-2"
        :icon="colorModeIcon"
        aria-hidden="true"
      />
    </NavItemDropdownToggle>
    <DropdownMenu>
      <DropdownItem @click="changeColorMode(false)">
        <BIcon
          margin="e-2"
          icon="bi:sun-fill"
          aria-hidden="true"
        />
        Light
      </DropdownItem>
      <DropdownItem @click="changeColorMode(true)">
        <BIcon
        margin="e-2"
          icon="bi:moon-stars-fill"
          aria-hidden="true"
        />
        Dark
      </DropdownItem>
    </DropdownMenu>
  </NavItemDropdown>
</template>

<script setup lang="ts">
//
import { useDark } from "@vueuse/core"
import { computed,watch } from "#imports"
import { defaultDocument } from "../../../utils/helpers"
//
const isDark = useDark({
  selector: 'html',
  attribute: 'data-bs-theme',
  valueDark: 'dark',
  valueLight: 'light',
})
//
const changeColorMode = (value: boolean) => {
  isDark.value = value
}
const colorModeIcon = computed(() => {
  return isDark.value ? "bi:moon-stars-fill" : "bi:sun-fill"
})
// for UnoCSS
// useDark を二回使うとブラウザでエラーが発生したため
watch(isDark, () => {
  if (isDark)
  defaultDocument.documentElement.classList.add('dark')
  else
  defaultDocument.documentElement.classList.add('light')
})

</script>