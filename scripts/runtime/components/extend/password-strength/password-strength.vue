<script setup lang="ts">
import { zxcvbnAsync, debounce, type ZxcvbnResult } from '@zxcvbn-ts/core';
import { watch, ref } from '#imports';
//
const props = defineProps({
 password: {
  type: String,
 },
});
//
const result = ref<ZxcvbnResult>();
result.value = await zxcvbnAsync(props.password || '');
//
const useZxcvbn = async () => {
 result.value = await zxcvbnAsync(props.password || '');
};
//
const zxcvbnDebounce = debounce(useZxcvbn, 200, false);
watch(props, zxcvbnDebounce);
</script>

<template>
 <slot
  v-bind="result"
 />
</template>
