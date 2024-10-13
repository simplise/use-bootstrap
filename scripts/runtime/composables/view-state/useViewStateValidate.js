import {
  Validator
} from "@cfworker/json-schema";
import { trimStart } from "../utils/helpers.js";
export function useViewStateValidate(validate, schema, options) {
  if (!schema) {
    return void 0;
  }
  const validationFunc = (instance) => {
    if (!instance) {
      return;
    }
    const validator = new Validator(schema, options.draft, options.shortCircuit);
    const validateResult = validator.validate(instance);
    validate.value = createValidationResult(schema, validateResult);
  };
  return validationFunc;
}
function createValidationResult(schema, validateResult) {
  const errors = [];
  const keywords = [];
  const location = {};
  validateResult.errors.forEach((error) => {
    if (error.instanceLocation != "#") {
      const key = trimStart(error.instanceLocation, "#/");
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
      keywords
    },
    schema
  };
}
