import { useIDItem, uniqueId } from "../attributes/useID.js";
import { useFor } from "../attributes/useFor.js";
import { provide } from "#imports";
export function provideFormLabel() {
  provide("id.formLabel", uniqueId());
}
export function useFormLabel(props) {
  return useFor(props, { name: "formLabel" });
}
export function useFormItem(props) {
  return useIDItem(props, { name: "formLabel" });
}
