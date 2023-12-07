import { computed } from "vue";
export const HeadingsProps = {
  level: {
    type: [Number, String]
  },
  displayHeadings: {
    type: [Number, String]
    // 1～6
  }
};
export function useHeadings(props) {
  const opt = {
    level: 3,
    ...props
  };
  return {
    class: computed(() => {
      return {
        [`display-${opt.displayHeadings}`]: opt.displayHeadings
      };
    }),
    tag: props.tag ? props.tag : `h${opt.level}`
  };
}
