<script setup lang="ts">
//
import { uniqueId, withoutTrailingSlash } from '../../../composables/utils/helpers';
import { useRoute, onMounted } from '#imports';
//
defineProps({
 data: {
  type: Object,
 },
 src: {
  type: String,
 },
});
//
defineOptions({
 inheritAttrs: false,
});
//
const route = useRoute();
//
onMounted(() => {
 const el = document.getElementById(`sl${withoutTrailingSlash(route.path)}`);
 if (el) {
  el.scrollIntoView(true);
 }
});
</script>

<template>
 <ViewState
  v-slot="routes"
  :key="src || uniqueId()"
  :src="src"
  :data="data"
 >
  <Offcanvas
   v-bind="$attrs"
   type="lg"
   placement="start"
  >
   <OffcanvasHeader border="bottom">
    <OffcanvasTitle>Browse docs</OffcanvasTitle>
    <CloseButton dismiss="offcanvas" />
   </OffcanvasHeader>
   <OffcanvasBody>
    <nav
     class="w-100"
     aria-label="Docs navigation"
    >
     <List
      unstyled
      margin="b-0"
      padding="b-3 b-md-2 e-lg-2"
     >
      <ListItem
       v-for="item in routes.data"
       :key="item.name"
       class="py-2 g-col-6 g-col-lg-12"
      >
       <strong class="d-flex w-100 align-items-center fw-semibold mb-2">
        <Icon
         class="bi me-2"
         :name="item.icon"
         aria-hidden="true"
         :style="{ color: `var(--bs-${item.color})` }"
        />
        {{ item.name }}
       </strong>
       <List
        unstyled
        font-weight="normal"
        padding="b-2"
        small
       >
        <ListItem
         v-for="secondItem in item.children"
         :key="secondItem.path"
        >
         <LocalLink
          v-bootstrap
          id-prefix="sl"
          :to="withoutTrailingSlash(secondItem.path)"
          active-class="active"
          aria-current="page"
          text-decoration="none"
          class="btn btn-sm text-start w-100"
         >
          {{ secondItem.name }}
         </LocalLink>
        </ListItem>
       </List>
      </ListItem>
     </List>
    </nav>
   </OffcanvasBody>
  </Offcanvas>
 </ViewState>
</template>
