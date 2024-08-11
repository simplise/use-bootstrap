import { hProps, exposeMethods, addProp } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { defineComponent, h, computed } from "#imports";
import { Icon } from "#components";
import "./avatar.scss";
export default defineComponent({
  name: "Avatar",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: ""
    },
    imgAlt: {
      type: String,
      default: ""
    },
    initials: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    status: {
      type: [Boolean, String],
      default: false
    },
    statusColor: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    divider: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    exposeMethods(context, block);
    const current = {
      class: {
        avatar: true
      },
      style: computed(() => {
        return {
          ...addProp(props.size, "width", `calc(var(--bs-font-size-${props.size}) * 3)`),
          ...addProp(props.size, "height", `calc(var(--bs-font-size-${props.size}) * 3)`),
          ...addProp(props.color, "background-color", `var(--bs-${props.color})`),
          ...addProp(!props.textColor && props.color, "color", `var(--bs-contrast-${props.color})`),
          ...addProp(props.circle, "border-radius", `var(--bs-border-radius-pill)`)
        };
      })
    };
    const container = {
      class: computed(() => {
        return {
          "avatar-container": !props.divider,
          "avatar-divider": props.divider
        };
      }),
      style: computed(() => {
        return {
          "--avatar-base-size": `var(--bs-font-size-${props.size || "base"})`
        };
      })
    };
    return () => h(
      "div",
      hProps(container),
      // avatar dividerので横幅いっぱいの線を引くために追加したが、現在未使用
      [
        h(
          props.tag,
          hProps(block, current),
          [
            ...props.imgSrc ? [h("img", {
              class: { "avatar-img": true },
              style: {
                ...addProp(props.circle, "border-radius", `var(--bs-border-radius-pill)`)
              },
              src: props.imgSrc,
              alt: props.imgAlt
            })] : [],
            ...props.icon ? [h(Icon, {
              class: {
                "avatar-icon": true,
                "align-middle": true
              },
              style: {
                ...addProp(props.size, "width", `calc(var(--bs-font-size-${props.size}) * 1.5)`),
                ...addProp(props.size, "height", `calc(var(--bs-font-size-${props.size}) * 3)`)
              },
              name: props.icon
            })] : [],
            ...props.initials ? [h("span", {
              class: { "avatar-initials": true },
              style: {
                ...addProp(props.size, "width", `calc(var(--bs-font-size-${props.size}) * 3)`),
                ...addProp(props.size, "height", `calc(var(--bs-font-size-${props.size}) * 3)`),
                ...addProp(props.size, "font-size", `var(--bs-font-size-${props.size})`)
              }
            }, props.initials)] : [],
            ...props.status ? [h("span", {
              class: { "avatar-status": true },
              style: {
                ...addProp(props.status == "sm", "bottom", `calc(var(--bs-font-size-${props.status}) / -2)`),
                ...addProp(props.status == "sm", "right", `calc(var(--bs-font-size-${props.status}) / -2)`),
                ...addProp(props.status == "sm", "width", `var(--bs-font-size-${props.status})`),
                ...addProp(props.status == "sm", "height", `var(--bs-font-size-${props.status})`),
                "border-color": `var(--bs-white)`,
                "background-color": `var(--bs-${props.statusColor})`
              }
            })] : []
          ]
        )
      ]
    );
  }
});
