import { computed } from "#imports";
export const ImageProps = {
  fluid: {
    type: Boolean
  },
  thumbnail: {
    type: Boolean
    // top,end,bottom,start,circle,pill
  }
};
export function useImg(props) {
  return {
    class: computed(() => {
      return {
        "img-fluid": props.fluid,
        "img-thumbnail": props.thumbnail
      };
    }),
    attr: {
      loading: "lazy"
    }
  };
}
