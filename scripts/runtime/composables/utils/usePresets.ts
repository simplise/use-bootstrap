import type { ModuleOptions } from '../../../module';
import { useRuntimeConfig } from '#app';
import { isString } from './helpers';

export function includesPresets(name: string, value: string | boolean | [] | undefined): boolean {
 if (!isString(value)) {
  return false
 }
 const uboptions = useRuntimeConfig().public.usebootstrap as ModuleOptions;
 const presets = uboptions.bootstrap?.presets;
 if(!presets) {
  return false;
 } 
 const params = presets[name];
 if(!params){
  return false
 }
 return params?.includes(value);

}