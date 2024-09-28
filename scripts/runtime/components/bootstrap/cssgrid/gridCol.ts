import { addClassNames, addProp, hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h, computed } from '#imports';
//
export default defineComponent({
 name: 'BsGridCol',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
  size: {
   type: [Number, String, Array],
   default: undefined,
  },
  colmunStart: {
   type: Number,
   default: undefined,
  },
  row: {
   type: Number,
   default: undefined,
  },
  span: {
   type: Number,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: computed(() => {
    return {
     ...addClassNames(props.size, n => `g-col-${n}`),
     [`g-start-${props.colmunStart}`]: props.colmunStart,
    };
   }),
   style: computed(() => {
    return {
     ...addProp(props.row, 'grid-row', `${props.row}`),
     ...addProp(props.span, 'grid-column', `span ${props.span}`),
    };
   }),
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
