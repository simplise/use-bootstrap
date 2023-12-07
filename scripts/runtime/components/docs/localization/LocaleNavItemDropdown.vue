<template>
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
</template>

<script setup lang="ts">
import { useRoute, navigateTo } from "#imports"

const route = useRoute()

const changeLocale = (lang: string) => {
  if (route.path.startsWith('/lang-')) {
    const re = /\/lang-\w+\//;
    const to = route.path.replace(re, `/lang-${lang}/`);
    navigateTo(to)
  }
  else {
    navigateTo(`/lang-${lang}/`)
  }
}

</script>