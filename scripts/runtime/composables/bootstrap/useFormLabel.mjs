import { provide } from "vue";
import { useIDItem, uniqueId } from "../attributes/useID.mjs";
import { useFor } from "../attributes/useFor.mjs";
export function provideFormLabel() {
  provide("id.formLabel", uniqueId("labeled_"));
}
export function useFormLabel(props) {
  return useFor(props, { name: "formLabel" });
}
export function useFormItem(props) {
  return useIDItem(props, { name: "formLabel" });
}
