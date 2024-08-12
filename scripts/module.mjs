import { defineNuxtModule, createResolver, installModule, addPlugin, addComponentsDir, addComponent, addImportsDir, addServerPlugin } from '@nuxt/kit';
import { defu } from 'defu';

const unoCssConfig = {
  components: false,
  // attributify: {
  //   prefix: `un-`,
  //   prefixedOnly: true,
  // },
  uno: {
    prefix: `un-`
    // Container などを除外するためPrefixが必要
  },
  // https://getbootstrap.jp/docs/5.3/customize/css-variables/
  // https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_theme
  theme: {
    breakpoints: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    },
    colors: {
      // Colors
      "blue": "var(--bs-blue)",
      "blue-100": "var(--bs-blue-100)",
      "blue-200": "var(--bs-blue-200)",
      "blue-300": "var(--bs-blue-300)",
      "blue-400": "var(--bs-blue-400)",
      "blue-500": "var(--bs-blue-500)",
      "blue-600": "var(--bs-blue-600)",
      "blue-700": "var(--bs-blue-700)",
      "blue-800": "var(--bs-blue-800)",
      "blue-900": "var(--bs-blue-900)",
      "contrast-blue": "var(--bs-contrast-blue)",
      "contrast-blue-100": "var(--bs-contrast-blue-100)",
      "contrast-blue-200": "var(--bs-contrast-blue-200)",
      "contrast-blue-300": "var(--bs-contrast-blue-300)",
      "contrast-blue-400": "var(--bs-contrast-blue-400)",
      "contrast-blue-500": "var(--bs-contrast-blue-500)",
      "contrast-blue-600": "var(--bs-contrast-blue-600)",
      "contrast-blue-700": "var(--bs-contrast-blue-700)",
      "contrast-blue-800": "var(--bs-contrast-blue-800)",
      "contrast-blue-900": "var(--bs-contrast-blue-900)",
      "indigo": "var(--bs-indigo)",
      "indigo-100": "var(--bs-indigo-100)",
      "indigo-200": "var(--bs-indigo-200)",
      "indigo-300": "var(--bs-indigo-300)",
      "indigo-400": "var(--bs-indigo-400)",
      "indigo-500": "var(--bs-indigo-500)",
      "indigo-600": "var(--bs-indigo-600)",
      "indigo-700": "var(--bs-indigo-700)",
      "indigo-800": "var(--bs-indigo-800)",
      "indigo-900": "var(--bs-indigo-900)",
      "contrast-indigo": "var(--bs-contrast-indigo)",
      "contrast-indigo-100": "var(--bs-contrast-indigo-100)",
      "contrast-indigo-200": "var(--bs-contrast-indigo-200)",
      "contrast-indigo-300": "var(--bs-contrast-indigo-300)",
      "contrast-indigo-400": "var(--bs-contrast-indigo-400)",
      "contrast-indigo-500": "var(--bs-contrast-indigo-500)",
      "contrast-indigo-600": "var(--bs-contrast-indigo-600)",
      "contrast-indigo-700": "var(--bs-contrast-indigo-700)",
      "contrast-indigo-800": "var(--bs-contrast-indigo-800)",
      "contrast-indigo-900": "var(--bs-contrast-indigo-900)",
      "purple": "var(--bs-purple)",
      "purple-100": "var(--bs-purple-100)",
      "purple-200": "var(--bs-purple-200)",
      "purple-300": "var(--bs-purple-300)",
      "purple-400": "var(--bs-purple-400)",
      "purple-500": "var(--bs-purple-500)",
      "purple-600": "var(--bs-purple-600)",
      "purple-700": "var(--bs-purple-700)",
      "purple-800": "var(--bs-purple-800)",
      "purple-900": "var(--bs-purple-900)",
      "contrast-purple": "var(--bs-contrast-purple)",
      "contrast-purple-100": "var(--bs-contrast-purple-100)",
      "contrast-purple-200": "var(--bs-contrast-purple-200)",
      "contrast-purple-300": "var(--bs-contrast-purple-300)",
      "contrast-purple-400": "var(--bs-contrast-purple-400)",
      "contrast-purple-500": "var(--bs-contrast-purple-500)",
      "contrast-purple-600": "var(--bs-contrast-purple-600)",
      "contrast-purple-700": "var(--bs-contrast-purple-700)",
      "contrast-purple-800": "var(--bs-contrast-purple-800)",
      "contrast-purple-900": "var(--bs-contrast-purple-900)",
      "pink": "var(--bs-pink)",
      "pink-100": "var(--bs-pink-100)",
      "pink-200": "var(--bs-pink-200)",
      "pink-300": "var(--bs-pink-300)",
      "pink-400": "var(--bs-pink-400)",
      "pink-500": "var(--bs-pink-500)",
      "pink-600": "var(--bs-pink-600)",
      "pink-700": "var(--bs-pink-700)",
      "pink-800": "var(--bs-pink-800)",
      "pink-900": "var(--bs-pink-900)",
      "contrast-pink": "var(--bs-contrast-pink)",
      "contrast-pink-100": "var(--bs-contrast-pink-100)",
      "contrast-pink-200": "var(--bs-contrast-pink-200)",
      "contrast-pink-300": "var(--bs-contrast-pink-300)",
      "contrast-pink-400": "var(--bs-contrast-pink-400)",
      "contrast-pink-500": "var(--bs-contrast-pink-500)",
      "contrast-pink-600": "var(--bs-contrast-pink-600)",
      "contrast-pink-700": "var(--bs-contrast-pink-700)",
      "contrast-pink-800": "var(--bs-contrast-pink-800)",
      "contrast-pink-900": "var(--bs-contrast-pink-900)",
      "red": "var(--bs-red)",
      "red-100": "var(--bs-red-100)",
      "red-200": "var(--bs-red-200)",
      "red-300": "var(--bs-red-300)",
      "red-400": "var(--bs-red-400)",
      "red-500": "var(--bs-red-500)",
      "red-600": "var(--bs-red-600)",
      "red-700": "var(--bs-red-700)",
      "red-800": "var(--bs-red-800)",
      "red-900": "var(--bs-red-900)",
      "contrast-red": "var(--bs-contrast-red)",
      "contrast-red-100": "var(--bs-contrast-red-100)",
      "contrast-red-200": "var(--bs-contrast-red-200)",
      "contrast-red-300": "var(--bs-contrast-red-300)",
      "contrast-red-400": "var(--bs-contrast-red-400)",
      "contrast-red-500": "var(--bs-contrast-red-500)",
      "contrast-red-600": "var(--bs-contrast-red-600)",
      "contrast-red-700": "var(--bs-contrast-red-700)",
      "contrast-red-800": "var(--bs-contrast-red-800)",
      "contrast-red-900": "var(--bs-contrast-red-900)",
      "orange": "var(--bs-orange)",
      "orange-100": "var(--bs-orange-100)",
      "orange-200": "var(--bs-orange-200)",
      "orange-300": "var(--bs-orange-300)",
      "orange-400": "var(--bs-orange-400)",
      "orange-500": "var(--bs-orange-500)",
      "orange-600": "var(--bs-orange-600)",
      "orange-700": "var(--bs-orange-700)",
      "orange-800": "var(--bs-orange-800)",
      "orange-900": "var(--bs-orange-900)",
      "contrast-orange": "var(--bs-contrast-orange)",
      "contrast-orange-100": "var(--bs-contrast-orange-100)",
      "contrast-orange-200": "var(--bs-contrast-orange-200)",
      "contrast-orange-300": "var(--bs-contrast-orange-300)",
      "contrast-orange-400": "var(--bs-contrast-orange-400)",
      "contrast-orange-500": "var(--bs-contrast-orange-500)",
      "contrast-orange-600": "var(--bs-contrast-orange-600)",
      "contrast-orange-700": "var(--bs-contrast-orange-700)",
      "contrast-orange-800": "var(--bs-contrast-orange-800)",
      "contrast-orange-900": "var(--bs-contrast-orange-900)",
      "green": "var(--bs-green)",
      "green-100": "var(--bs-green-100)",
      "green-200": "var(--bs-green-200)",
      "green-300": "var(--bs-green-300)",
      "green-400": "var(--bs-green-400)",
      "green-500": "var(--bs-green-500)",
      "green-600": "var(--bs-green-600)",
      "green-700": "var(--bs-green-700)",
      "green-800": "var(--bs-green-800)",
      "green-900": "var(--bs-green-900)",
      "contrast-green": "var(--bs-contrast-green)",
      "contrast-green-100": "var(--bs-contrast-green-100)",
      "contrast-green-200": "var(--bs-contrast-green-200)",
      "contrast-green-300": "var(--bs-contrast-green-300)",
      "contrast-green-400": "var(--bs-contrast-green-400)",
      "contrast-green-500": "var(--bs-contrast-green-500)",
      "contrast-green-600": "var(--bs-contrast-green-600)",
      "contrast-green-700": "var(--bs-contrast-green-700)",
      "contrast-green-800": "var(--bs-contrast-green-800)",
      "contrast-green-900": "var(--bs-contrast-green-900)",
      "yellow": "var(--bs-yellow)",
      "yellow-100": "var(--bs-yellow-100)",
      "yellow-200": "var(--bs-yellow-200)",
      "yellow-300": "var(--bs-yellow-300)",
      "yellow-400": "var(--bs-yellow-400)",
      "yellow-500": "var(--bs-yellow-500)",
      "yellow-600": "var(--bs-yellow-600)",
      "yellow-700": "var(--bs-yellow-700)",
      "yellow-800": "var(--bs-yellow-800)",
      "yellow-900": "var(--bs-yellow-900)",
      "contrast-yellow": "var(--bs-contrast-yellow)",
      "contrast-yellow-100": "var(--bs-contrast-yellow-100)",
      "contrast-yellow-200": "var(--bs-contrast-yellow-200)",
      "contrast-yellow-300": "var(--bs-contrast-yellow-300)",
      "contrast-yellow-400": "var(--bs-contrast-yellow-400)",
      "contrast-yellow-500": "var(--bs-contrast-yellow-500)",
      "contrast-yellow-600": "var(--bs-contrast-yellow-600)",
      "contrast-yellow-700": "var(--bs-contrast-yellow-700)",
      "contrast-yellow-800": "var(--bs-contrast-yellow-800)",
      "contrast-yellow-900": "var(--bs-contrast-yellow-900)",
      "teal": "var(--bs-teal)",
      "teal-100": "var(--bs-teal-100)",
      "teal-200": "var(--bs-teal-200)",
      "teal-300": "var(--bs-teal-300)",
      "teal-400": "var(--bs-teal-400)",
      "teal-500": "var(--bs-teal-500)",
      "teal-600": "var(--bs-teal-600)",
      "teal-700": "var(--bs-teal-700)",
      "teal-800": "var(--bs-teal-800)",
      "teal-900": "var(--bs-teal-900)",
      "contrast-teal": "var(--bs-contrast-teal)",
      "contrast-teal-100": "var(--bs-contrast-teal-100)",
      "contrast-teal-200": "var(--bs-contrast-teal-200)",
      "contrast-teal-300": "var(--bs-contrast-teal-300)",
      "contrast-teal-400": "var(--bs-contrast-teal-400)",
      "contrast-teal-500": "var(--bs-contrast-teal-500)",
      "contrast-teal-600": "var(--bs-contrast-teal-600)",
      "contrast-teal-700": "var(--bs-contrast-teal-700)",
      "contrast-teal-800": "var(--bs-contrast-teal-800)",
      "contrast-teal-900": "var(--bs-contrast-teal-900)",
      "cyan": "var(--bs-cyan)",
      "cyan-100": "var(--bs-cyan-100)",
      "cyan-200": "var(--bs-cyan-200)",
      "cyan-300": "var(--bs-cyan-300)",
      "cyan-400": "var(--bs-cyan-400)",
      "cyan-500": "var(--bs-cyan-500)",
      "cyan-600": "var(--bs-cyan-600)",
      "cyan-700": "var(--bs-cyan-700)",
      "cyan-800": "var(--bs-cyan-800)",
      "cyan-900": "var(--bs-cyan-900)",
      "contrast-cyan": "var(--bs-contrast-cyan)",
      "contrast-cyan-100": "var(--bs-contrast-cyan-100)",
      "contrast-cyan-200": "var(--bs-contrast-cyan-200)",
      "contrast-cyan-300": "var(--bs-contrast-cyan-300)",
      "contrast-cyan-400": "var(--bs-contrast-cyan-400)",
      "contrast-cyan-500": "var(--bs-contrast-cyan-500)",
      "contrast-cyan-600": "var(--bs-contrast-cyan-600)",
      "contrast-cyan-700": "var(--bs-contrast-cyan-700)",
      "contrast-cyan-800": "var(--bs-contrast-cyan-800)",
      "contrast-cyan-900": "var(--bs-contrast-cyan-900)",
      "gray-dark": "var(--bs-gray-dark)",
      "gray": "var(--bs-gray)",
      "gray-100": "var(--bs-gray-100)",
      "gray-200": "var(--bs-gray-200)",
      "gray-300": "var(--bs-gray-300)",
      "gray-400": "var(--bs-gray-400)",
      "gray-500": "var(--bs-gray-500)",
      "gray-600": "var(--bs-gray-600)",
      "gray-700": "var(--bs-gray-700)",
      "gray-800": "var(--bs-gray-800)",
      "gray-900": "var(--bs-gray-900)",
      "gray-light": "var(--bs-gray-300)",
      // Theme
      "primary": "var(--bs-primary)",
      "primary-text-emphasis": "var(--bs-primary-text-emphasis)",
      "primary-border-subtle": "var(--bs-primary-border-subtle)",
      "Primary-bg-subtle": "var(--bs-primary-bg-subtle)",
      "contrast-primary": "var(--bs-contrast-primary)",
      "contrast-primary-subtle": "var(--bs-contrast-primary-subtle)",
      "secondary": "var(--bs-secondary)",
      "secondary-text-emphasis": "var(--bs-secondary-text-emphasis)",
      "secondary-border-subtle": "var(--bs-secondary-border-subtle)",
      "secondary-bg-subtle": "var(--bs-secondary-bg-subtle)",
      "contrast-secondary": "var(--bs-contrast-primary)",
      "contrast-secondary-subtle": "var(--bs-contrast-secondary-subtle)",
      "success": "var(--bs-success)",
      "success-text-emphasis": "var(--bs-success-text-emphasis)",
      "success-border-subtle": "var(--bs-success-border-subtle)",
      "success-bg-subtle": "var(--bs-success-bg-subtle)",
      "contrast-success": "var(--bs-contrast-success)",
      "contrast-success-subtle": "var(--bs-contrast-success-subtle)",
      "info": "var(--bs-info)",
      "info-text-emphasis": "var(--bs-info-text-emphasis)",
      "info-border-subtle": "var(--bs-info-border-subtle)",
      "info-bg-subtle": "var(--bs-info-bg-subtle)",
      "contrast-info": "var(--bs-contrast-info)",
      "contrast-info-subtle": "var(--bs-contrast-info-subtle)",
      "warning": "var(--bs-warning)",
      "warning-text-emphasis": "var(--bs-warning-text-emphasis)",
      "warning-border-subtle": "var(--bs-warning-border-subtle)",
      "warning-bg-subtle": "var(--bs-warning-bg-subtle)",
      "contrast-warning": "var(--bs-contrast-warning)",
      "contrast-warning-subtle": "var(--bs-contrast-warning-subtle)",
      "danger": "var(--bs-danger)",
      "danger-text-emphasis": "var(--bs-danger-text-emphasis)",
      "danger-border-subtle": "var(--bs-danger-border-subtle)",
      "danger-bg-subtle": "var(--bs-danger-bg-subtle)",
      "contrast-danger": "var(--bs-contrast-danger)",
      "contrast-danger-subtle": "var(--bs-contrast-danger-subtle)",
      //
      "light": "var(--bs-light)",
      "light-text-emphasis": "var(--bs-light-text-emphasis)",
      "light-border-subtle": "var(--bs-light-border-subtle)",
      "light-bg-subtle": "var(--bs-light-bg-subtle)",
      "contrast-light": "var(--bs-contrast-light)",
      "contrast-light-subtle": "var(--bs-contrast-light-subtle)",
      "dark": "var(--bs-dark)",
      "dark-text-emphasis": "var(--bs-dark-text-emphasis)",
      "dark-border-subtle": "var(--bs-dark-border-subtle)",
      "dark-bg-subtle": "var(--bs-dark-bg-subtle)",
      "contrast-dark": "var(--bs-contrast-dark)",
      "contrast-dark-subtle": "var(--bs-contrast-dark-subtle)",
      //
      "body-color": "var(--bs-body-color)",
      "body-bg": "var(--bs-body-bg)",
      "emphasis-color": "var(--bs-contrast-color)",
      "secondary-color": "var(--bs- secondary - color)",
      "secondary-bg": "var(--bs-secondary-bg)",
      "tertiary-color": "var(--bs-tertiary-color)",
      "tertiary-bg": "var(--bs-tertiary-bg)",
      "heading-color": "var(--bs-heading-color)",
      "link-color": "var(--bs-link-color)",
      "link-hover-color": "var(--bs-link-hover-color)",
      "code-color": "var(--bs-code-color)",
      "highlight-bg": "var(--bs-highlight-bg)",
      "border-color": "var(--bs-border-color)",
      "form-valid-color": "var(--bs-form-valid-color)",
      "form-invalid-color": "var(--bs-form-invalid-color)",
      "form-invalid-border-color": "var(--bs-form-invalid-border-color)"
    },
    fontFamily: {
      sans: "var(--bs-font-sans)",
      serif: "var(--bs-font-sans-serif)"
    },
    borderRadius: {
      "DEFAULT": "var(--bs-border-radius)",
      "none": "0",
      "sm": "var(--bs-border-radius-sm)",
      "md": "var(--bs-border-radius)",
      "lg": "var(--bs-border-radius-lg)",
      "xl": "var(--bs-border-radius-xl)",
      "2xl": "var(--bs-border-radius-xxl)"
    }
  },
  shortcuts: [
    // dynamic shortcuts
    // [/^un-btn-(.*)$/, ([, c]: [any, string]) => `un-bg-${c} un-text-contrast-${c} `],
  ]
};

const module = defineNuxtModule({
  meta: {
    name: "use-bootstrap",
    configKey: "usebootstrap"
  },
  // Default configuration options of the Nuxt module
  defaults: {
    scss: true,
    bootstrap: {
      prefix: ""
    },
    html: {
      prefix: "B"
    },
    icon: {
      prefix: "B"
    },
    extend: {
      prefix: ""
    },
    unocss: {
      prefix: "un"
    },
    image: true,
    fonts: true,
    sitemap: true,
    robots: true,
    shiki: true,
    leaflet: true,
    mdc: true,
    tiptap: true,
    vueuse: {
      prefix: ""
    },
    dynamicRoute: {
      prefix: "",
      defaults: {
        lang: "en"
      }
    },
    integration: {
      prefix: "",
      protocol: {
        "local-storage": {
          type: "local"
        },
        "session-storage": {
          type: "session"
        },
        "state": {
          type: "state"
        },
        "api": {
          type: "fetch",
          prefix: "/api/",
          lazy: false,
          // set: false,
          sync: {
            method: "put",
            delay: 500,
            maxWait: 1e3
          }
        },
        "query": {
          type: "query"
        },
        "path": {
          type: "path"
        },
        "hash": {
          type: "hash"
        },
        "params": {
          type: "params"
        },
        "route": {
          type: "route"
        },
        "seo-meta": {
          type: "seoMeta"
        },
        "helper": {
          type: "helper"
        },
        "app-config": {
          type: "appConfig"
        },
        "dom-attr": {
          type: "domAttr"
        }
      },
      viewState: true,
      actionState: {
        type: ["fetch", "helper", "api-fetch", "api-fetch-sync"]
      }
    }
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.runtimeConfig.public.usebootstrap = defu(
      nuxt.options.runtimeConfig.public.usebootstrap,
      options
    );
    if (options.icon) {
      await installModule("@nuxt/icon", {
        // size: "1em",
        class: "b-icon"
        // mode: 'svg' 2024/7/12 初回レンダリング時に表示されない
      });
    }
    if (options.image) {
      await installModule("@nuxt/image");
    }
    await installModule("@vueuse/nuxt", {
      ssrHandlers: true,
      autoImports: true
    });
    if (options.fonts) {
      await installModule("@nuxt/fonts");
    }
    if (options.sitemap) {
      await installModule("@nuxtjs/sitemap");
    }
    if (options.robots) {
      await installModule("@nuxtjs/robots");
    }
    if (options.shiki) {
      await installModule("nuxt-shiki", {
        bundledLangs: ["vue", "shellscript"],
        bundledThemes: ["snazzy-light"]
      });
    }
    if (options.leaflet) {
      await installModule("@nuxtjs/leaflet");
    }
    if (options.mdc) {
      await installModule("@nuxtjs/mdc");
    }
    if (options.unocss) {
      await installModule("@unocss/nuxt", unoCssConfig);
    }
    if (options.scss) {
      nuxt.options.css.unshift("usebootstrap/scss/usebootstrap");
    }
    addPlugin(resolver.resolve("./runtime/plugins/bootstrap"));
    addPlugin({
      src: resolver.resolve("./runtime/plugins/scrolltop"),
      mode: "client"
    });
    addPlugin(resolver.resolve("./runtime/plugins/seometa"));
    addPlugin(resolver.resolve("./runtime/plugins/localization"));
    addComponentsDir({
      path: resolver.resolve("./runtime/components/htmlBlock"),
      prefix: options.html?.prefix,
      pathPrefix: false
    });
    addComponentsDir({
      path: resolver.resolve("./runtime/components/htmlInline"),
      prefix: options.html?.prefix,
      pathPrefix: false
    });
    addComponentsDir({
      path: resolver.resolve("./runtime/components/htmlTable"),
      prefix: options.html?.prefix,
      pathPrefix: false
    });
    addComponent({
      name: `${options.html?.prefix}-P`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/paragraph")
    });
    addComponent({
      name: `${options.html?.prefix}-H`,
      filePath: resolver.resolve("./runtime/components/htmlInline/headings")
    });
    addComponent({
      name: `${options.html?.prefix}-A`,
      filePath: resolver.resolve("./runtime/components/htmlInline/anchor")
    });
    addComponent({
      name: `${options.html?.prefix}Span`,
      filePath: resolver.resolve("./runtime/components/htmlInline/inline")
    });
    addComponent({
      name: `${options.html?.prefix}Img`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/image")
    });
    addComponent({
      name: `${options.html?.prefix}Dd`,
      filePath: resolver.resolve(
        "./runtime/components/htmlBlock/definitionDescription"
      )
    });
    addComponent({
      name: `${options.html?.prefix}Dt`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/definitionTerm")
    });
    addComponent({
      name: `${options.html?.prefix}Dl`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/definitionList")
    });
    addComponent({
      name: `${options.html?.prefix}Ul`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/list")
    });
    addComponent({
      name: `${options.html?.prefix}Li`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/listItem")
    });
    addComponentsDir({
      path: resolver.resolve("./runtime/components/bootstrap"),
      prefix: options.bootstrap?.prefix,
      pathPrefix: false
    });
    addComponent({
      name: `${options.bootstrap?.prefix}Vr`,
      filePath: resolver.resolve(
        "./runtime/components/bootstrap/verticalRule/verticalRule"
      )
    });
    addComponent({
      name: `${options.bootstrap?.prefix}List`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/list")
    });
    addComponent({
      name: `${options.bootstrap?.prefix}ListItem`,
      filePath: resolver.resolve("./runtime/components/htmlBlock/listItem")
    });
    addComponent({
      name: `${options.icon?.prefix}Link`,
      filePath: resolver.resolve("./runtime/components/nuxt/bslink")
    });
    addComponent({
      name: `${options.icon?.prefix}Icon`,
      filePath: resolver.resolve("./runtime/components/icon/icon")
    });
    addComponentsDir({
      path: resolver.resolve("./runtime/components/extend"),
      prefix: options.extend?.prefix,
      pathPrefix: false
    });
    addComponent({
      name: "SwiperSlide",
      export: "SwiperSlide",
      filePath: "swiper/vue"
    });
    addImportsDir(resolver.resolve("runtime/composables/public"));
    if (options.vueuse) {
      addPlugin(resolver.resolve("./runtime/plugins/vueuse"));
      addComponentsDir({
        path: resolver.resolve("./runtime/components/vueuse"),
        prefix: options.extend?.prefix,
        pathPrefix: false
      });
    }
    if (options.integration) {
      addComponent({
        name: `${options.integration?.prefix}ViewState`,
        filePath: resolver.resolve("./runtime/components/integration/ViewState")
      });
      addComponent({
        name: `${options.integration?.prefix}ActionState`,
        filePath: resolver.resolve("./runtime/components/integration/ActionState")
      });
    }
    if (options.static) {
      addServerPlugin(resolver.resolve("./runtime/plugins/static"));
    }
  }
});

export { module as default };
