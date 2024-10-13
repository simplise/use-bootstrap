<template>
 <NavItemDropdown v-if="route.params.lang">
  <NavItemDropdownToggle text-transform="capitalize">
   {{ route.params.lang }}
  </NavItemDropdownToggle>
  <DropdownMenu>
   <DropdownItem
    v-for="item in locales"
    :key="item"
    :class="{ active: route.params.lang == item }"
    @click="changeLocale(item)"
   >
    {{ item }}
   </DropdownItem>
  </DropdownMenu>
 </NavItemDropdown>
</template>

<script setup lang="ts">
import { useRoute, navigateTo } from '#imports';
//
defineProps({
 locales: {
  type: Array,
  default: () => [],
 },
 textColor: {
  type: String,
 },
});
//
const route = useRoute();
//
const changeLocale = (lang: string) => {
 const langF = lang.toLowerCase();
 if (route.path.startsWith('/lang-')) {
  const re = /\/lang-\w+/;
  const to = route.path.replace(re, `/lang-${langF}`);
  navigateTo(to);
 }
 else {
  navigateTo(`/lang-${langF}`);
 }
};
</script>
