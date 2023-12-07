import { watch } from "vue";
import { useDark } from "@vueuse/core";
import { useState } from "#app";
export const useTheme = () => useState("color-mode", () => isDark.value);
const isDark = useDark({
  selector: "body",
  attribute: "data-bs-theme",
  valueDark: "dark",
  valueLight: "light"
});
watch(useTheme, (val) => {
  isDark.value = val.value;
});
