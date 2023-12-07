<template>
  <div
    class="bd-example m-0 border-0"
    :class="cls"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
//
const props = defineProps({
  row: Boolean,
  rowFlexCols: Boolean,
  cols: Boolean,
  cssgrid: Boolean,
  ratios: Boolean,
  ratiosBreakpoint: Boolean,
  flex: Boolean,
  offcanvas: Boolean,
  zIndexLevels: Boolean,
  toasts: Boolean,
  indeterminate: Boolean
})
//
const cls = {
  "bd-example-row": props.row,
  "bd-example-row-flex-cols": props.rowFlexCols,
  "bd-example-cols": props.cols,
  "bd-example-cssgrid": props.cssgrid,
  "bd-example-ratios": props.ratios,
  "bd-example-ratios-breakpoint": props.ratiosBreakpoint,
  "bd-example-flex": props.flex,
  "bd-example-offcanvas": props.offcanvas,
  "p-0": props.offcanvas,
  "bg-body-tertiary" : props.offcanvas,
  "overflow-hidden": props.offcanvas,
  "bd-example-zindex-levels": props.zIndexLevels,
  "bd-example-toasts": props.toasts,
  "bd-example-indeterminate": props.indeterminate,
}
</script>