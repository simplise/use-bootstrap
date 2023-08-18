<template>
  <Alert :theme="theme">
    <AlertHeading text-transform="capitalize">
      {{ heading }}
    </AlertHeading>
    A simple primary alert with
    <AlertLink>an example link</AlertLink>
    . Give it a click if you like.
  </Alert>
  <hr>
  <EventViewer :raised="raised" />
  <hr>
  <Dropdown margin="t-2">
    <DropdownToggle button="primary">
      Theme
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem
        v-for="item in themes"
        :key="item"
        @click="changeTheme(item)"
      >
        {{ item }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script setup lang="ts">

// interface IAccordionItem {
//   id: number,
//   title: string,
//   content: string
//   active?: boolean
// }

const themes = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
]

const raised = ref({ name: "", event: "" })

const theme = ref("primary")

const heading = ref("Well done!")

const changeTheme = (item: string) => {
  console.log(item)
  theme.value = item
  heading.value = item
}
</script>