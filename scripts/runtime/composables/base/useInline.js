import {
  addClassNames,
  addProp,
  hasValue,
  spacing
} from "../../composables/utils/useProps.js";
import { isNumber, isString, toString } from "../utils/helpers.js";
import { computed } from "#imports";
import { includesPresets } from "../../composables/utils/usePresets.js";
export const ElementProps = {
  tag: {
    type: String
  }
};
export const InlineProps = {
  ...ElementProps,
  fontSize: {
    type: [String, Number]
    // 1～6
  },
  fontWeight: {
    type: String
    // bold,bolder,normal,light,lighter
  },
  fontStyle: {
    type: String
    // italic,normal
  },
  lineHeight: {
    type: String
    // l,sm,base,lg
  },
  fontMonospace: {
    type: Boolean
  },
  fontFamily: {
    type: String
    // https://nuxt.com/modules/fonts
  },
  textReset: {
    type: Boolean
  },
  textDecoration: {
    type: String
    // underline,line-through,none
  },
  textTruncate: {
    type: Boolean
  },
  textOpacity: {
    type: [String, Number]
    //
  },
  textTransform: {
    type: String
    // lowercase,uppercase,capitalize
  },
  textBackground: {
    type: String
    //
  },
  headings: {
    type: [String, Number]
    // 1～6
  },
  displayHeadings: {
    type: [Number, String]
    // 1～6
  },
  lead: {
    type: Boolean
  },
  mark: {
    type: Boolean
  },
  small: {
    type: Boolean
  },
  textColor: {
    type: String
  },
  padding: {
    type: [String, Number, Array]
  },
  margin: {
    type: [String, Number, Array]
  },
  display: {
    type: [String, Array]
    // Flexはflex属性を使用
  },
  gap: {
    type: [String, Number, Array]
  },
  visuallyHidden: {
    type: [Boolean, String]
    // focusable
  },
  verticalAlign: {
    type: String
    // baseline, top, middle, bottom , text-top, text-bottom
  },
  invisible: {
    type: Boolean
  },
  userSelect: {
    type: String
    // all, auto, none
  },
  pointerEvents: {
    type: String
    // none, auto
  },
  backgroundColor: {
    type: String
    // as PropType<ThemeColors>,
  },
  backgroundGradient: {
    type: Boolean
  },
  backgroundImage: {
    type: String
  },
  backgroundOpacity: {
    type: [String, Number]
  },
  opacity: {
    type: [String, Number]
  },
  relativeWidth: {
    // w-25 w-50 w-75 w-100 w-auto
    type: [String, Number]
    // 25 50 75 100 auto
  },
  relativeHeight: {
    // h-25 h-50 h-75 h-100 h-auto
    type: [String, Number]
    // 25 50 75 100 auto
  },
  maxWidth: {
    // mw-100
    type: Boolean
  },
  maxHeight: {
    // mh-100
    type: Boolean
  },
  viewportWidth: {
    // vw-100
    type: Boolean
  },
  viewportHeight: {
    // vh-100
    type: Boolean
  },
  minViewportWidth: {
    // min-vw-100
    type: Boolean
  },
  minViewportHeight: {
    // min-vh-100
    type: Boolean
  },
  placeholder: {
    type: [Boolean, String]
    // input tagで競合
  },
  placeholderSize: {
    type: String
    // input tagで競合
  },
  col: {
    type: [Number, String, Array, Boolean]
    // auto
  },
  position: {
    type: String
    // static, relative absolute fixed sticky
  },
  top: {
    type: [Number, String]
  },
  start: {
    type: [Number, String]
  },
  end: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  translate: {
    type: String
  },
  initialism: {
    type: [Boolean]
  },
  focusRing: {
    type: [Boolean]
  },
  border: {
    type: [Boolean, String, Number]
    // true, top,end,bottom,start,0,top-0,end-0,bottom-0,start-0
  },
  borderColor: {
    type: String
    // as PropType<ThemeColors>,
  },
  borderWidth: {
    type: [String, Number]
    // 1,2,3,4,5
  },
  borderSubtractive: {
    type: [Boolean, String]
  },
  rounded: {
    type: [Boolean, String]
  },
  roundedSize: {
    type: [Number, String]
    // 0 - 5
  },
  linkOpacity: {
    type: [String, Number]
  },
  linkUnderline: {
    type: [String]
  },
  linkOffset: {
    type: [String, Number]
  },
  theme: {
    type: String
  }
  // card: {
  //       type: Boolean,
  // },
  // cardHeader: {
  //       type: Boolean,
  // },
  // cardBody: {
  //       type: Boolean,
  // },
  // cardFooter: {
  //       type: Boolean,
  // },
};
export function useInline(props) {
  const bgIncludePreset = computed(() => includesPresets("background-color", props.backgroundColor));
  const textColorIncludePreset = computed(() => includesPresets("text-color", props.textColor));
  const borderColorIncludePreset = computed(() => includesPresets("border-color", props.borderColor));
  const textBgIncludePreset = computed(() => includesPresets("text-bg-color", props.textBackground));
  return {
    class: computed(() => {
      return {
        [`fs-${props.fontSize}`]: props.fontSize,
        [`fw-${props.fontWeight}`]: props.fontWeight,
        [`fst-${props.fontStyle}`]: props.fontStyle,
        [`lh-${props.lineHeight}`]: props.lineHeight,
        "font-monospace": props.fontMonospace,
        "text-reset": props.textReset,
        [`text-decoration-${props.textDecoration}`]: props.textDecoration,
        "text-truncate": props.textTruncate,
        [`text-${props.textTransform}`]: props.textTransform,
        [`text-bg-${props.textBackground}`]: props.textBackground && textBgIncludePreset.value,
        [`h${props.headings}`]: props.headings,
        [`display-${props.displayHeadings}`]: props.displayHeadings,
        "lead": props.lead,
        "mark": props.mark,
        "small": props.small,
        [`text-${props.textColor}`]: props.textColor && textColorIncludePreset.value,
        ...addClassNames(props.padding, (n) => spacing(n, "p")),
        ...addClassNames(props.margin, (n) => spacing(n, "m")),
        ...addClassNames(props.gap, (n) => `gap-${n}`),
        [`visually-hidden${hasValue(props.visuallyHidden) ? `-${props.visuallyHidden}` : ""}`]: props.visuallyHidden,
        [`align-${props.verticalAlign}`]: props.verticalAlign,
        "invisible": props.invisible,
        [`user-select-${props.userSelect}`]: props.userSelect,
        [`pe-${props.pointerEvents}`]: props.pointerEvents,
        [`bg-${props.backgroundColor}`]: props.backgroundColor && bgIncludePreset.value,
        [`bg-gradient`]: props.backgroundGradient,
        [`bg-opacity-${props.backgroundOpacity}`]: isString(props.backgroundOpacity),
        [`w-${props.relativeWidth}`]: props.relativeWidth,
        [`h-${props.relativeHeight}`]: props.relativeHeight,
        "mw-100": props.maxWidth,
        "mh-100": props.maxHeight,
        "vw-100": props.viewportWidth,
        "vh-100": props.viewportHeight,
        "min-vw-100": props.minViewportWidth,
        "min-vh-100": props.minViewportHeight,
        ...addClassNames(props.display, (n) => `d-${n}`),
        [`opacity-${props.opacity}`]: props.opacity,
        [`placeholder${hasValue(props.placeholder) ? `-${props.placeholder}` : ""}`]: (props.placeholder || props.placeholderSize) && !["input", "textarea"].includes(props.tag || ""),
        [`placeholder-${props.placeholderSize}`]: props.placeholderSize && !["input", "textarea"].includes(props.tag || ""),
        "col": props.col && !hasValue(props.col),
        ...addClassNames(hasValue(props.col), (n) => `col-${n}`),
        [`position-${props.position}`]: props.position,
        [`top-${props.top}`]: props.top,
        [`start-${props.start}`]: props.start,
        [`end-${props.end}`]: props.end,
        [`bottom-${props.bottom}`]: props.bottom,
        [`translate-${props.translate}`]: props.translate,
        "initialism": props.initialism,
        "focus-ring": props.focusRing,
        "border": props.border && !hasValue(props.border),
        // && (props.borderColor || props.borderWidth || props.borderSubtractive) && !(props.card || props.cardHeader || props.cardBody || props.cardFooter),
        ...addClassNames(hasValue(props.border), (n) => `border-${n}`),
        [`border-${props.borderColor}`]: props.borderColor && borderColorIncludePreset.value,
        [`border-${props.borderWidth}`]: props.borderWidth,
        [`border-${hasValue(props.borderSubtractive) ? `${props.borderSubtractive}-` : ""}0`]: props.borderSubtractive,
        [`rounded${hasValue(props.rounded) ? `-${props.rounded}` : ""}`]: props.rounded,
        [`rounded-${props.roundedSize}`]: props.roundedSize,
        [`link-opacity-${props.linkOpacity}`]: props.linkOpacity,
        [`link-underline`]: props.linkUnderline,
        ...addClassNames(hasValue(props.linkUnderline), (n) => `link-underline-opacity-${n}`),
        ...addClassNames(hasValue(props.linkOffset), (n) => `link-offset-${n}`)
        // [`card`]: props.card, // for border
        // [`card-header`]: props.cardHeader, // for border
        // [`card-body`]: props.cardBody, // for border
        // [`card-footer`]: props.cardFooter, // for border
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.backgroundImage, "background-image", `url(${props.backgroundImage})`),
        ...addProp(props.fontFamily, "font-family", props.fontFamily),
        // https://github.com/nuxt/fonts
        ...addProp(isNumber(props.backgroundOpacity), "--bs-bg-opacity", `${props.backgroundOpacity}`),
        ...addProp(props.backgroundColor && !bgIncludePreset.value, "background-color", `var(--bs-${props.backgroundColor})`),
        ...addProp(props.textColor && !textColorIncludePreset.value, "color", `var(--bs-${props.textColor})`),
        ...addProp(props.borderColor && !borderColorIncludePreset.value, "border-color", `rgba(from var(--bs-${props.borderColor}) r g b / var(--bs-border-opacity)) !important`),
        ...addProp(!props.backgroundColor && props.textBackground && !textBgIncludePreset.value, "background-color", `var(--bs-${props.textBackground})`),
        ...addProp(!props.textColor && props.textBackground && !textBgIncludePreset.value, "color", `var(--bs-contrast-${props.textBackground})`)
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.tag != "input" && props.placeholder, "aria-hidden", "true"),
        ...addProp(props.tag == "input" && props.placeholder && isString(props.placeholder), "placeholder", toString(props.placeholder)),
        ...addProp(props.theme, "data-bs-theme", props.theme)
      };
    })
  };
}
