
import type { ModuleOptions } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['usebootstrap']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['usebootstrap']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['usebootstrap']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['usebootstrap']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module'
