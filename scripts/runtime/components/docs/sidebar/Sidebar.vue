<script setup lang="ts">
import { useRoute, onMounted } from "#imports"
const props = defineProps({
 routes: {
  type: Object,
  default: () => { }
 }
})
//
onMounted(() => {
 const route = useRoute();
 const el = document.getElementById(`sl${route.path.replace('/lang-en', '').replace('/lang-jp', '')}`)
 if (el) {
  el.scrollIntoView(true)
 }
})

</script>

<template>
  <aside class="bd-sidebar">
    <Offcanvas
      id="bdSidebar"
      type="lg"
      placement="start"
    >
      <OffcanvasHeader border="bottom">
        <OffcanvasTitle>Browse docs</OffcanvasTitle>
        <CloseButton dismiss="offcanvas" />
      </OffcanvasHeader>
      <OffcanvasBody>
        <nav
          id="bd-docs-nav"
          class="bd-links w-100"
          aria-label="Docs navigation"
        >
          <List
            unstyled
            margin="b-0"
            padding="b-3 b-md-2 e-lg-2"
            class="bd-links-nav"
          >
            <ListItem
              v-for="item in props.routes"
              :key="item.name"
              class="bd-links-group py-2"
            >
              <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
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
                    :id="`sl${secondItem.path}`"
                    :to="secondItem.path"
                    class="bd-links-link d-inline-block rounded"
                    :class="[useLocalization(secondItem.path) == $route.path ? 'active' : '']"
                    aria-current="page"
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
  </aside>
</template>
