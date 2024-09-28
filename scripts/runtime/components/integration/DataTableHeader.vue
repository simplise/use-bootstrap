<script setup lang="ts">
//
import { toPairs } from 'lodash-es';
//
defineProps({
 schema: {
  type: Object,
 },
});
</script>

<template>
 <ViewState
  v-slot="query"
  src="query://"
  :data="{
   page: 1,
  }"
 >
  <b-tr>
   <b-th
    v-for="field in toPairs(schema)"
    :key="field[0]"
    scope="col"
    @click="(event: any) => {
     query.update({
      page: 1,
      filter: 'eq(get(:gender),:female)',
     })
    }"
   >
    {{ field[1].title }}
   </b-th>
  </b-tr>
 </ViewState>
</template>
