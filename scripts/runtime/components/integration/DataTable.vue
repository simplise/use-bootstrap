<script setup lang="ts">
//
import DataTableHeader from './DataTableHeader.vue';
import DataTableBody from './DataTableBody.vue';
import DataTableFooter from './DataTableFooter.vue';
//
defineProps({
 data: {
  type: Object,
 },
 src: {
  type: String,
 },
 schemaData: {
  type: Object,
 },
 schemaSrc: {
  type: String,
 },
 selectSrc: {
  type: String,
 },
});
//
defineOptions({
 inheritAttrs: false,
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
  <ViewState
   v-slot="persons"
   :src="src"
  >
   <ViewState
    v-slot="schema"
    :src="schemaSrc"
   >
    <ArrayQuery
     v-slot="filterd"
     :key="query.data"
     :data="persons.data.data"
     :page="query.data.page || 1"
     :page-size="20"
     :filter="query.data.filter"
    >
     <b-table responsive>
      <b-thead background-color="body-tertiary">
       <DataTableHeader :schema="schema.data.properties" />
      </b-thead>
      <b-tbody>
       <DataTableBody
        :data="filterd.data"
        :schema="schema.data.properties"
       />
      </b-tbody>
     </b-table>
     <DataTableFooter
      :total="persons.data.total"
      :data="filterd.data"
     />
    </ArrayQuery>
   </ViewState>
  </ViewState>
 </ViewState>
</template>
