<template>
 <component
  :is="schema.type"
  v-for="(schema, index) in typeSchema"
  :key="index"
  :value="data[schema.state]"
  v-bind="schema"
  :data="currentData"
  @input="updateData(schema.state, $event)"
 />
</template>

<script setup lang="ts">
// 
interface ISchema {
 type: string;
 state: string;
}
const props = defineProps({
 typeSchema: {
  type: Array as PropType<Array<ISchema>>,
  default: () => [],
 },
 data: {
  type: Object as PropType<Record<string, unknown>>,
  default: () => { },
  required: true,
 },
});
const currentData = ref(props.data);
defineEmits(['input']);
const updateData = (state: string, value: unknown) => {
 const c = currentData.value;
 c[state] = value;
 currentData.value = c;
};
</script>
