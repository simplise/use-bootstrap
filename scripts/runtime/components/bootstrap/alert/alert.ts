import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps, exposeMethods, addProp } from '../../../composables/utils/useProps';
import { useFadeShow, FadeShowProps } from '../../../composables/bootstrap/useFadeShow';
import { defineComponent, h, ref, computed } from '#imports';

//
export default defineComponent({
 name: 'BsAlerts',
 props: {
  ...BlockProps,
  ...FadeShowProps,
  tag: {
   type: String,
   default: 'div',
  },
  color: {
   type: String,
   default: 'primary',
  },
  show: {
   type: Boolean,
   default: true,
  },
  colorGenerate: {
   type: Boolean,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLDivElement>();
  const block = useBlock(props);
  const showFade = useFadeShow(props, context, elementRef, 'alert', {
   enabled: props.dismissible,
  });
  //
  const current = {
   class: computed(() => {
    return {
     'alert': true,
     [`alert-${props.color}`]: props.color,
     'alert-dismissible': props.dismissible,
    };
   }),
   style: computed(() => {
    return {
     ...addProp(props.colorGenerate, '--bs-alert-bg', `var(--bs-${props.color})`),
     ...addProp(props.colorGenerate, '--bs-alert-color', `var(--bs-active-${props.color})`),
     ...addProp(props.colorGenerate, '--bs-alert-border-color', `var(--bs-active-${props.color})`),
     ...addProp(props.colorGenerate, '--bs-alert-link-color', `var(--bs-active-${props.color})`),
    };
   }),
   attr: {
    role: 'alert',
   },
   ref: elementRef,
  };
  //
  exposeMethods(context, showFade);
  //
  return () =>
   h(props.tag, hProps(current, block, showFade), context.slots);
 },
});
