import { h } from "#imports";
export const VisuallyHiddenContentProps = {
  label: {
    type: String
  }
};
export function useVisuallyHiddenContent(props) {
  return {
    render: () => {
      if (props.label) {
        return h("span", { class: { "visually-hidden": true } }, props.label);
      } else {
        return void 0;
      }
    }
  };
}
