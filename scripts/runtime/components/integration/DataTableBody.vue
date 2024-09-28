<script setup lang="ts">
//
import { get, toPairs } from 'lodash-es';
//
defineProps({
 data: {
  type: Array,
 },
 schema: {
  type: Object,
 },
});
</script>

<template>
 <tr
  v-for="item in data"
  :key="item"
 >
  <td
   v-for="field in toPairs(schema)"
   :key="field[0]"
  >
   {{ get(item, field[0]) }}
  </td>
 </tr>
</template>
