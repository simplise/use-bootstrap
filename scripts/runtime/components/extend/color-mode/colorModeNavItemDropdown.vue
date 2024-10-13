<template>
 <NavItemDropdown>
  <NavItemDropdownToggle>
   <BIcon
    :key="colorModeIcon"
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
import { useDark } from '../../../composables/utils/useDark';
import { computed } from '#imports';
//
const isDark = useDark();
//
const changeColorMode = (value: boolean) => {
 isDark.value = value;
};
const colorModeIcon = computed(() => {
 return isDark.value ? 'bi:moon-stars-fill' : 'bi:sun-fill';
});
</script>
