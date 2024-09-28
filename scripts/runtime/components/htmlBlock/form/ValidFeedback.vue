<template>
 <div
  v-if="$slots.valid && !props.invalid"
  v-bind="bind"
  class="valid-feedback"
 >
  <slot name="valid" />
 </div>
 <div
  v-bind="bind"
  class="invalid-feedback"
 >
  <slot />
 </div>
</template>

<script setup lang="ts">
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';

const props = defineProps({
 ...BlockProps,
});
const block = useBlock(props);
const bind = hProps(block);
const hasValidateion = inject<Ref<boolean> | undefined>(
 'hasValidation',
 undefined,
);
if (hasValidateion) {
 hasValidateion.value = true;
}
</script>
