<script setup lang="ts">
//
import { toNumber } from 'lodash-es';

defineProps({
 total: {
  type: Number,
 },
 data: {
  type: Array,
 },
});
//
</script>

<template>
 <ViewState
  v-slot="query"
  src="query://"
  :data="{
   page: 1,
  }"
 >
  <b-div flex>
   <b-div flex-grow="grow-1">
    <nav aria-label="Page navigation">
     <Pagination>
      <PageItem>
       <PageLink
        aria-label="Previous"
        @click="query.set('page', 1)"
       >
        <span aria-hidden="true">&laquo;</span>
       </PageLink>
      </PageItem>
      <PageItem>
       <PageLink
        aria-label="Previous"
        @click="query.set('page', toNumber(query.data.page || 1) - 1)"
       >
        <span aria-hidden="true">&laquo;</span>
       </PageLink>
      </PageItem>
      <PageItem>
       <PageLink
        aria-label="Next"
        @click="query.set('page', toNumber(query.data.page || 1) + 1)"
       >
        <span aria-hidden="true">&raquo;</span>
       </PageLink>
      </PageItem>
      <PageItem>
       <PageLink
        aria-label="Next"
        @click="query.set('page', toNumber(query.data.page || 1) + 1)"
       >
        <span aria-hidden="true">&raquo;</span>
       </PageLink>
      </PageItem>
     </Pagination>
    </nav>
   </b-div>
   <b-div :paddin="2">
    {{ total }}
   </b-div>
  </b-div>
 </ViewState>
</template>
