import {
 Validator,
 type Schema,
 type ValidationResult,
} from '@cfworker/json-schema';
import { trimStart } from '../utils/helpers';
import type { IIntegraionValidationOption } from '../../../module';
import type { IViewStateValidateResult } from './useViewState';
import type { Ref } from '#imports';

export function useViewStateValidate(
 validate: Ref<unknown>,
 schema: unknown | undefined,
 options: IIntegraionValidationOption,
) {
 //
 if (!schema) {
  return undefined;
 }
 //
 const validationFunc = (instance: unknown) => {
  if (!instance) {
   return;
  }
  const validator = new Validator(schema, options.draft, options.shortCircuit);
  const validateResult = validator.validate(instance);
  validate.value = createValidationResult(schema, validateResult);
 };
 //
 return validationFunc;
}
//
function createValidationResult(
 schema: Schema,
 validateResult: ValidationResult,
): IViewStateValidateResult {
 const errors: string[] = [];
 const keywords: string[] = [];
 const location: Record<string, string[]> = {};
 validateResult.errors.forEach((error) => {
  if (error.instanceLocation != '#') {
   const key = trimStart(error.instanceLocation, '#/');
   const locationErrors = location[key] || [];
   if (!locationErrors.includes(error.error)) {
    locationErrors.push(error.error);
   }
   location[key] = locationErrors;
   if (!errors.includes(error.error)) {
    errors.push(error.error);
   }
   if (!keywords.includes(error.keyword)) {
    keywords.push(error.keyword);
   }
  }
 });
 return {
  valid: validateResult.valid,
  location,
  summury: {
   errors,
   keywords,
  },
  schema,
 };
}
