import { trimEnd, parseURL, stringifyParsedURL } from '../utils/helpers';
import type { ModuleOptions } from '../../../module';
import type { IActionProp, IActionStateProps } from './useActionState';
import { useRuntimeConfig } from '#app';

export function useActionProp(props: IActionStateProps): IActionProp {
 const uboptions = useRuntimeConfig().public.usebootstrap as ModuleOptions;
 //
 const protocols = uboptions.integration?.protocol;
 if (!protocols) {
  throw new Error('Integraion Protocols Not Defined.');
 }
 //
 const src = props.src;
 if (!src) {
  throw new Error('ActionState Src Not Defined.');
 }
 //
 const parsed = parseURL(src);
 const protocol = trimEnd(parsed.protocol, ':');
 parsed.protocol = '';
 const key = stringifyParsedURL(parsed);
 //
 const option = protocols[protocol];
 if (!option) {
  throw new Error('ActionState Protocol Not Defined.');
 }
 if (!uboptions.integration?.actionState?.type?.includes(option.type)) {
  throw new Error('Protocol Type Action Not Supported.');
 }
 //
 const url = `${option.prefix}${key}`;
 const srcPath = parsed.pathname.split('/');
 //
 return {
  src,
  key,
  option,
  type: option.type,
  url,
  srcPath,
 };
}
