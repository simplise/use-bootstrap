import type { Ref } from 'vue';
import type { IHPropsModel } from '../../composables/utils/useProps';
import { unrefElement } from '../utils/helpers';
import { provide, ref, inject, computed, onMounted, useId } from '#imports';

export const IDProps = {
 id: {
  type: String,
  default: undefined,
 },
};
export interface IIDProps {
 id?: string;
}

export const TemplateProps = {
 template: {
  type: String,
 },
};
export interface ITemplateProps {
 template?: string;
}

//
export function useID<P extends IIDProps>(
 props: P,
 name: string = 'component',
): IHPropsModel {
 const id = props.id || uniqueId();
 provide(`id.${name}`, id);

 return {
  attr: computed(() => {
   return {
    id,
   };
  }),
 };
}

export function useIDRef(props: IIDProps, elementRef: Ref<HTMLElement | undefined>) {
 const id = ref(props.id);
 onMounted(() => {
  const element = unrefElement(elementRef);
  id.value = element?.id;
 });
 return id;
}

export interface InjectIDOptions {
 name?: string; // prefix
 defaultValue?: string; // for inject
}

export function injectID(options: InjectIDOptions = {}) {
 const { name = 'component', defaultValue = uniqueId() } = options;
 return inject<string>(`id.${name}`, defaultValue);
}

export function useIDItem<P extends IIDProps>(
 props: P,
 options: InjectIDOptions = {},
) {
 return {
  attr: {
   id: props.id || injectID(options),
  },
 };
}

export function uniqueId() {
 // const instance = getCurrentInstance()
 // const uid = instance?.uid
 // return `${prefix}${uid}`
 return useId().replace('$', '');
}
