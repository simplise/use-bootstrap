<template>
  <b-div
    class="grid-template"
  >
    <slot />
  </b-div>
</template>
<script setup lang="ts">
//
import { useBlock, BlockProps } from "../../../composables/base/useBlock";
import { map, join } from "lodash-es";
//
const props = defineProps({
  ...BlockProps,
    tag: {
      type: String,
      default: "div",
    },
    areas: {
      type: String,
      required: true
    },
    areasMd: {
      type: String,
    },
    areasLg: {
      type: String,
    },
    areasXl: {
      type: String,
    },
    areasXxl: {
      type: String,
    },
    rows: {
      type: String,
      required: true
    },
    rowsLg: {
      type: String
    },
    rowsMd: {
      type: String
    },
    rowsXl: {
      type: String
    },
    rowsXxl: {
      type: String
    },
    columns: {
      type: String,
      required: true
    },
    columnsMd: {
      type: String
    },
    columnsLg: {
      type: String
    },
    columnsXl: {
      type: String
    },
    columnsXxl: {
      type: String
    },
})
//
  const block = useBlock(props);
  //
  const createAreas = (p: string) => {
    const a1 = map(p.split(' '), (n) => join(n, ' '))  // ['t t t', 's c e', 's b e']
    const a2 = map(a1, (n) => `'${n}'`) // ["'t t t'", "'s c e'", "'s b e'"]
    return join(a2, ' ') // 't t t' 's c e' 's b e'  
  }
  //
  const areasDefault = createAreas(props.areas)
  const areasMd = createAreas(props.areasMd || props.areas)
  const areasLg = createAreas(props.areasLg || props.areasMd || props.areas)
  const areasXl = createAreas(props.areasXl || props.areasLg || props.areasMd || props.areas)
  const areasXxl = createAreas(props.areasXxl || props.areasXl ||props.areasLg || props.areasMd || props.areas)
  //
  const rowsDefault = props.rows
  const rowsMd = props.rowsMd || rowsDefault
  const rowsLg = props.rowsLg || rowsMd
  const rowsXl = props.rowsXl || rowsLg
  const rowsXxl = props.rowsXxl || rowsXl
  //
  const columnsDefault = props.columns
  const columnsMd = props.columnsMd || areasDefault
  const columnsLg = props.columnsLg || columnsMd
  const columnsXl = props.columnsXl || columnsLg
  const columnsXxl = props.columnsXxl || columnsXl
  //
</script>
<style scoped>
.grid-template{display:grid;grid-template-areas:v-bind(areasDefault);grid-template-columns:v-bind(columnsDefault);grid-template-rows:v-bind(rowsDefault)}@media (min-width:768px){.grid-template{grid-template-areas:v-bind(areasMd);grid-template-columns:v-bind(columnsMd);grid-template-rows:v-bind(rowsMd)}}@media (min-width:992px){.grid-template{grid-template-areas:v-bind(areasLg);grid-template-columns:v-bind(columnsLg);grid-template-rows:v-bind(rowsLg)}}@media (min-width:1200px){.grid-template{grid-template-areas:v-bind(areasXl);grid-template-columns:v-bind(columnsXl);grid-template-rows:v-bind(rowsXl)}}@media (min-width:1400px){.grid-template{grid-template-areas:v-bind(areasXxl);grid-template-columns:v-bind(columnsXxl);grid-template-rows:v-bind(rowsXxl)}}
</style>