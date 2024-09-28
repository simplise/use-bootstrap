import { addProp, hProps } from '../../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import {
 ButtonProps,
 useButton,
} from '../../../composables/html/useButton';
import {
 InputModelProps,
 InputModelEmits,
 useInputModel,
} from '../../../composables/base/useInputModel';
import { useID, IDProps, useIDRef } from '../../../composables/attributes/useID';
import { defineComponent, h, ref, computed } from '#imports';
//
export default defineComponent({
 name: 'BsCheckboxToggleButton',
 props: {
  ...BlockProps,
  ...ButtonProps,
  ...IDProps,
  ...InputModelProps,
  button: {
   type: [String, Boolean],
   default: true,
  },
 },
 emits: [
  ...InputModelEmits,
 ],
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const button = useButton(props);
  const id = useID(props, 'checkbox-toggle-button');
  const inputModel = useInputModel(props, context.emit, elementRef);
  //
  const eid = useIDRef(props, elementRef);
  //
  const checkbox = {
   ref: elementRef,
   class: {
    [`btn-check`]: true,
   },
   attr: {
    type: 'checkbox',
    autocomplete: 'off',
    ...addProp(props.disabled, 'disabled', 'disabled'),
   },
  };
  const label = {
   attr: computed(() => {
    return {
     for: eid.value,
    };
   }),
  };
  //
  return () => [
   h(
    'input',
    {
     ...context.attrs,
     ...hProps(checkbox, id, inputModel),
    },
   ),
   h('label', hProps(label, button, block), context.slots),
  ];
 },
});
