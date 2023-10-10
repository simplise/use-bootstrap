// import type { Ref } from 'vue'

// https://nuxt.com/docs/getting-started/state-management#using-third-party-libraries




export const useTheme = () => useState<boolean>('color-mode', () => isDark.value)

const isDark = useDark({
  selector: 'body',
  attribute: 'data-bs-theme',
  valueDark: 'dark',
  valueLight: 'light',
})

watch(useTheme, (val) => {
  isDark.value = val.value
})
