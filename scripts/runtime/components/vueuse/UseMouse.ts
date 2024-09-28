import type { UseMouseOptions } from '@vueuse/core';
import { useMouse } from '../../composables/utils/helpers';
import { defineComponent, reactive } from '#imports';

export default defineComponent<UseMouseOptions>({
 name: 'UseMouse',
 props: ['touch', 'resetOnTouchEnds', 'initialValue'] as unknown as undefined,
 setup(props, { slots }) {
  const data = reactive(useMouse(props));

  return () => {
   if (slots.default)
    return slots.default(data);
  };
 },
});
