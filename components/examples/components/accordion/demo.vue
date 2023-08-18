<template>
  <Accordion
    :parent="parent"
    :flush="flush"
    :current="current"
    @current-changed="OnCurrentChanged"
  >
    <AccordionItem
      v-for="item in accordionItems"
      :id="`item_${item.id}`"
      :key="item.id"
      :active="item.active"
    >
      <AccordionHeader level="2">
        <AccordionButton>{{ item.title }}</AccordionButton>
      </AccordionHeader>
      <AccordionCollapse>
        <AccordionBody>
          {{ item.content }}
        </AccordionBody>
      </AccordionCollapse>
    </AccordionItem>
  </Accordion>
  <hr>
  <EventViewer :raised="raised" />
  <hr>
  <b-button
    type="button"
    button="primary"
    @click="addItem"
  >
    Add Item
  </b-button>

  <Dropdown margin="t-2">
    <DropdownToggle button="primary">
      Collapse
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem
        v-for="item in accordionItems"
        :key="item.id"
        toggle="collapse"
        :target="`#item_${item.id}`"
      >
        {{ item.title }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>

  <Dropdown margin="t-2">
    <DropdownToggle button="primary">
      Active
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem
        v-for="item in accordionItems"
        :key="item.id"
        @click="changeCurrent(item.id)"
      >
        {{ item.title }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  <b-button
    margin="t-2"
    type="button"
    button="primary"
    @click="toggleParent"
  >
    Toggle Parent
  </b-button>
  <b-div v-if="!parent">
    Always open
  </b-div>
  <b-button
    margin="t-2"
    type="button"
    button="primary"
    @click="toggleFlush"
  >
    Toggle Flush
  </b-button>
</template>

<script setup lang="ts">

interface IAccordionItem {
  id: number,
  title: string,
  content: string
  active?: boolean
}

const accordionItems = ref<IAccordionItem[]>([])
accordionItems.value.push({ id: 1, title: "Accordion Item #1", content: "#1", active: true })
accordionItems.value.push({ id: 2, title: "Accordion Item #2", content: "#2" })
accordionItems.value.push({ id: 3, title: "Accordion Item #3", content: "#3" })

const raised = ref({ name: "", event: "" })
const parent = ref(true)
const flush = ref(false)


const maxID = computed(() =>
  Math.max(...accordionItems.value.map((item) => item.id))
)

const OnCurrentChanged = (event: any) => {
  raised.value = { name: "CurrentChanged", event }
}
const addItem = () => {
  const id = maxID.value + 1
  accordionItems.value.push({ id: id, title: `Accordion Item #${id}`, content: `#${id}` })
}

const current = ref("")
const changeCurrent = (id: number) => {
  current.value = `item_${id}`
}
const toggleParent = () => {
  parent.value = !parent.value
}
const toggleFlush = () => {
  flush.value = !flush.value
}
</script>