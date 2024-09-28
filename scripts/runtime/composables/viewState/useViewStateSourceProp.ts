import { trimEnd, uniqueId, parseURL, stringifyParsedURL } from '../utils/helpers';
import type { ModuleOptions } from '../../../module';
import type { IViewStateProps, IViewStateSourceProps } from './useViewState';
import { useRuntimeConfig } from '#app';

export function useViewStateSourceProp(props: IViewStateProps): IViewStateSourceProps {
 const uboptions = useRuntimeConfig().public.usebootstrap as ModuleOptions;
 //
 const protocols = uboptions.integration?.protocol;
 if (!protocols) {
  throw new Error('Integration Protocol Not Defined.');
 }
 //
 const src = props.src;
 if (!src) {
  if (!props.data) {
   throw new Error('ViewState Src Not Defined.');
  }
  return createDataPassthrough(props);
 }
 //
 const parsed = parseURL(src);
 const protocol = trimEnd(parsed.protocol, ':');
 parsed.protocol = '';
 const key = stringifyParsedURL(parsed);
 const option = protocols[protocol];
 if (!option) {
  throw new Error('ViewState Protocol Not Defined.');
 }
 // const transform = option.transform || undefined;
 const defaultValue = option.default || props.data || undefined;
 const url = `${option.prefix}${key}`;
 const stateKey = `_viewstate_base_${src}`; // ${transform ?? ''}
 const updateStateKey = `_viewstate_updated_${src}`; // ${transform ?? ''}
 const fetchedStateKey = `_viewstate_fetched_${src}`;// ${transform ?? ''}
 const statusStateKey = `_viewstate_status_${src}`;// ${transform ?? ''}
 const srcPath = parsed.pathname.split('/');
 const lazy = option.lazy === undefined ? false : option.lazy;
 const server = option.server === undefined ? true : option.server;
 const immediate = option.immediate === undefined ? true : option.immediate;
 if (option.interval && option.interval < 1000) {
  throw new Error('The interval for the protocol needs to be 1000 or greater.');
 }
 const interval = option.interval || 0;
 //
 return {
  src,
  key,
  option,
  type: option.type,
  path: props.path,
  default: defaultValue,
  // transform,
  validationOptions: option.validate,
  url,
  stateKey,
  updateStateKey,
  fetchedStateKey,
  statusStateKey,
  srcPath,
  lazy,
  server,
  immediate,
  interval,
 };
}

function createDataPassthrough(props: IViewStateProps): IViewStateSourceProps {
 const key = uniqueId();
 return {
  src: 'pass-through://',
  key,
  option: {
   type: 'state',
  },
  type: 'state',
  path: '',
  default: props.data,
  validationOptions: undefined,
  url: '',
  stateKey: `_viewstate_base_pass_${key}`,
  updateStateKey: `_viewstate_update_pass_${key}`,
  fetchedStateKey: `_viewstate_fetched_pass_${key}`,
  statusStateKey: `_viewstate_base_status_${key}`,
  srcPath: [],
  lazy: false,
  server: true,
  immediate: true,
  interval: 0,
 };
}
