<template>
 <Row :justify-content="justifyContent">
  <Col
   :col="size"
   v-bind="attrs"
  >
   <slot />
  </Col>
 </Row>
</template>

<script setup lang="ts">
import Row from '../../bootstrap/grid/row';
import Col from '../../bootstrap/grid/col';
import { useAttrs } from '#imports';

defineProps({
 size: {
  type: String,
  default: '12',
 },
 justifyContent: {
  type: String,
  default: 'center',
 },
});

const attrs = useAttrs();
</script>
