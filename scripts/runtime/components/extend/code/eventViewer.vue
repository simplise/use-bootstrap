<template>
 <div class="mt-4 p-4 border">
  {{ raised.name }} : {{ raised.event }} : {{ time }}
 </div>
</template>

<script setup lang="ts">
//
import { ref, type PropType, watch } from '#imports';
//
interface IEventItem {
 name: string;
 event: unknown;
}
//
const props = defineProps({
 raised: {
  type: Object as PropType<IEventItem>,
  default: () => ({
   name: '',
   event: '',
  }),
 },
});
//
const time = ref('');
//
watch(
 () => props.raised,
 () => {
  const now = new Date();
  time.value = now.toLocaleTimeString();
 },
);
</script>
