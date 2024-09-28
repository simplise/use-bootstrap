import { type IIDProps, useIDItem, uniqueId } from '../attributes/useID';
import { useFor, type IForProps } from '../attributes/useFor';
import { provide } from '#imports';

export function provideFormLabel() {
 provide('id.formLabel', uniqueId());
}

export function useFormLabel<P extends IForProps>(props: P) {
 //
 return useFor(props, { name: 'formLabel' });
}

export function useFormItem<P extends IIDProps>(props: P) {
 return useIDItem(props, { name: 'formLabel' });
}
