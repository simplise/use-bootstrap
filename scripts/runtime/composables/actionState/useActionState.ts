import { useActionProp } from '../actionState/useActionProp';
import type { IIntegrationProtocolOption } from '../../../module';
import { helperAction } from '../actionState/helperAction';
import { fetchAction } from '../actionState/fetchAction';
import { ref, type Ref } from '#imports';
// public にして一般のスクリプトから利用できるようにしたかったが
// setup関数内でしか動作しないことを考慮すると、public にするメリットはないと判断 2024/8/5
//
export const ActionStateProps = {
 src: {
  type: String,
  requird: true,
 },
};
//
export interface IActionStateProps {
 src?: string;
}
//
export interface IActionState {
 data: Ref<unknown>; //
 status: Ref<number>; //
 action: ActionFunction;
 executing: Ref<boolean>; //
}
//
export type ActionFunction = (
 method: string,
 params: unknown,
 status: Ref<number>,
 data: Ref<unknown>
) => Promise<void>;
//
export interface IActionProp {
 src: string; //
 key: string; //
 option: IIntegrationProtocolOption; //
 type: string; //
 url: string; //
 srcPath: string[]; //
}
export interface IActionStateHelperProps {
 method: string;
 params: unknown;
 status: Ref<number>;
 data: Ref<unknown>;
}

//
export function useActionState<P extends IActionStateProps>(
 props: P,
): IActionState {
 //
 const data = ref(undefined);
 const status = ref(0);
 const executing = ref(false);
 const actionProp = useActionProp(props);
 //
 const action = async (method: string, params: unknown) => {
  executing.value = true;
  status.value = 102;
  switch (actionProp.type) {
   case 'fetch':
    switch (method) {
     case 'get':
     case 'post':
     case 'put':
     case 'delete':
     case 'patch':
     case 'head':
      await fetchAction(method, params, actionProp, status, data);
      break;
     default:
      throw new Error('Not supported FetchAction method');
    }
    break;
   case 'helper':
    await helperAction(method, params, actionProp, status, data);
    break;
   default:
    throw new Error('Not supported ActionState Type');
  }
  if (status.value == 102) {
   status.value = 0;
  }
  executing.value = false;
 };
 //
 return {
  data,
  status,
  executing,
  action,
 };
}
