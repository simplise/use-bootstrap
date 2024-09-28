import { computed } from '#imports';

//
export const ImageProps = {
 fluid: {
  type: Boolean,
 },
 thumbnail: {
  type: Boolean, // top,end,bottom,start,circle,pill
 },
};
//
export interface IImageProps {
 fluid?: boolean;
 thumbnail?: boolean;
 // src: string
}
//
export function useImg<P extends IImageProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    'img-fluid': props.fluid,
    'img-thumbnail': props.thumbnail,
   };
  }),
  attr: {
   loading: 'lazy',
  },
 };
}
