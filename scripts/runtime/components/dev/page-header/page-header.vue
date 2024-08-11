<script setup lang="ts">
import { useDynamicRouteParam } from '../../../composables/extend/dynamicRoute/useDynamicRouteParam';
import { useRoute, computed } from '#imports';

const lang = useDynamicRouteParam('lang');
const route = useRoute();
const title = computed(() => (route.meta[`title:${lang.value}`] || route.meta.title) as string);
const description = computed(() => (route.meta[`description:${lang.value}`] || route.meta.description) as string);
const breadcrumbs = computed(() => (route.meta[`breadcrumbs:${lang.value}`] || route.meta.breadcrumbs) as []);
const links = computed(() => (route.meta[`links:${lang.value}`] || route.meta.links) as []);
const navLinks = computed(() => (route.meta[`nav-links:${lang.value}`] || route.meta.navLinks) as []);
//
const props = defineProps({
 reset: {
  type: Boolean,
  default: false,
 },
});

//
const classObject = computed(() => {
 return {
  'page-header': true,
  'page-header-reset': props.reset,
 };
});
</script>

<template>
 <b-div :class="classObject">
  <div class="row align-items-center">
   <div class="col-sm mb-2 mb-sm-0">
    <BBreadcrumb v-if="breadcrumbs">
     <BBreadcrumbItem
      v-for="item in breadcrumbs"
      :key="item.to"
     >
      <b-a :to="item.to">
       {{ item.title }}
      </b-a>
     </BBreadcrumbItem>
    </BBreadcrumb>
    <h1 class="page-header-title">
     {{ title }}
    </h1>
    <p
     v-if="description"
     class="page-header-text"
    >
     {{ description }}
    </p>
    <BList
     v-if="links"
     unstyled
     margin="t-2"
    >
     <ListItem
      v-for="item in links"
      :key="item.to"
     >
      <icon-link
       :to="item.to"
       target="_blank"
       icon="bi:box-arrow-up-right"
       icon-end
      >
       {{ item.title }}
      </icon-link>
     </ListItem>
    </BList>
   </div>
   <div class="col-sm-auto">
    <!-- Nav -->
    <BNav
     v-if="navLinks"
     segment
    >
     <li
      v-for="item in navLinks"
      :key="item.to"
      class="nav-item"
     >
      <b-a
       class="nav-link"
       :to="item.to"
      >
       {{ item.title }}
      </b-a>
     </li>
    </BNav>
    <!-- End Nav -->
    <slot name="nav" />
   </div>
  </div>
  <slot />
 </b-div>
</template>
