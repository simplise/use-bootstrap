<script setup lang="ts">
  //
  import { useRoute, onMounted, useAppConfig, computed } from "#imports"
  import { withoutTrailingSlash } from "ufo"
  //
  const route = useRoute()
  const config = useAppConfig()
  //
  const navigation = computed(() => {
    if (config.usebootstrap?.navigations) {
      return config.usebootstrap.navigations[(route.meta?.navigation || 'default')]
    }
    return []
  })
  //
  onMounted(() => {
    const el = document.getElementById(`sl${withoutTrailingSlash(route.path)}`)
    if (el) {
      el.scrollIntoView(true)
    }
  })
</script>

<template>
  <Offcanvas type="lg" placement="start">
    <OffcanvasHeader border="bottom">
      <OffcanvasTitle>Browse docs</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <nav class="w-100" aria-label="Docs navigation">
        <List unstyled margin="b-0" padding="b-3 b-md-2 e-lg-2">
          <ListItem v-for="item in navigation" :key="item.name" class="py-2 g-col-6 g-col-lg-12">
            <strong class="d-flex w-100 align-items-center fw-semibold mb-2">
              <Icon class="bi me-2" :name="item.icon" aria-hidden="true" :style="{ color: `var(--bs-${item.color})` }" />
              {{ item.name }}
            </strong>
            <List unstyled font-weight="normal" padding="b-2" small>
              <ListItem v-for="secondItem in item.children" :key="secondItem.path">
                <LocalLink id-prefix="sl" :to="withoutTrailingSlash(secondItem.path)" active-class="active" aria-current="page" v-bootstrap text-decoration="none" class="btn btn-sm text-start w-100">
                  {{ secondItem.name }}
                </LocalLink>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </nav>
    </OffcanvasBody>
  </Offcanvas>
</template>
