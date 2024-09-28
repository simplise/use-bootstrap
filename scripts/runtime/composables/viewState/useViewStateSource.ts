import { isClient } from '../utils/helpers';
import type { IViewStateSourceProps, IViewStateSourceResult } from './useViewState';
import { useViewStateFetch } from './source/useViewStateFetch';
import { useViewStateStorage } from './source/useViewStateStorage';
import { useViewStateState } from './source/useViewStateState';
import { useViewStateRouteQuery } from './source/useViewStateRouteQuery';
import { useViewStateRoutePath } from './source/useViewStateRoutePath';
import { useViewStateRouteHash } from './source/useViewStateRouteHash';
import { useViewStateRouteParams } from './source/useViewStateRouteParams';
import { useViewStateRouteMeta } from './source/useViewStateRouteMeta';
import { useViewStateSeoMeta } from './source/useViewStateSeoMeta';
import { useViewStateHelper } from './source/useViewStateHelper';
import { useViewStateAppConfig } from './source/useViewStateAppConfig';
import { useViewStateDomAttr } from './source/useViewStateDomAttr';

export function useViewStateSource(prop: IViewStateSourceProps): IViewStateSourceResult {
 switch (prop.type) {
  case 'fetch':
   return useViewStateFetch(prop);
  case 'local':
  case 'session':
   if (isClient) {
    return useViewStateStorage(prop.type, prop.key, prop.default);
   }
   else {
    return useViewStateState(prop);
   }
  case 'query':
   return useViewStateRouteQuery(prop);
  case 'path':
   return useViewStateRoutePath(prop);
  case 'hash':
   return useViewStateRouteHash();
  case 'params':
   return useViewStateRouteParams(prop);
  case 'seoMeta':
   return useViewStateSeoMeta(prop);
  case 'meta':
   return useViewStateRouteMeta(prop);
  case 'helper':
   return useViewStateHelper(prop);
  case 'appConfig':
   return useViewStateAppConfig(prop);
  case 'state':
   return useViewStateState(prop);
  case 'domAttr':
  {
   const keyItems = prop.key.split('/');
   const target = keyItems[0]; // body, html , {id}
   if (!target) {
    throw new Error('DomAttr target is not specified');
   }
   const attr = keyItems[1]; // class
   if (!attr) {
    throw new Error('DomAttr attr is not specified');
   }
   return useViewStateDomAttr(target, attr, prop.default);
  }
  case 'route':
   return useViewStateRouteMeta(prop);
  default:
   throw new Error('ViewState Type Not Defined.');
 }
}
