import { defineNuxtModule, createResolver, installModule, addPlugin, addComponentsDir, addComponent, addImportsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "use-bootstrap",
    configKey: "usebootstrap"
  },
  // Default configuration options of the Nuxt module
  defaults: {
    bootstrap: {
      prefix: ""
    },
    html: {
      prefix: "B"
    },
    icon: {
      prefix: "B"
    },
    docs: {
      prefix: ""
    }
  },
  async setup(options) {
    const resolver = createResolver(import.meta.url);
    await installModule("nuxt-icon");
    await installModule("@nuxt/image");
    await installModule("@vueuse/nuxt");
    addPlugin(resolver.resolve("./runtime/plugins/bootstrap"));
    addComponentsDir({ path: resolver.resolve("./runtime/components/htmlBlock"), prefix: options.html?.prefix, pathPrefix: false });
    addComponentsDir({ path: resolver.resolve("./runtime/components/htmlInline"), prefix: options.html?.prefix, pathPrefix: false });
    addComponentsDir({ path: resolver.resolve("./runtime/components/htmlTable"), prefix: options.html?.prefix, pathPrefix: false });
    addComponent({ name: `${options.html?.prefix}-P`, filePath: resolver.resolve("./runtime/components/htmlBlock/paragraph") });
    addComponent({ name: `${options.html?.prefix}-H`, filePath: resolver.resolve("./runtime/components/htmlInline/headings") });
    addComponent({ name: `${options.html?.prefix}-A`, filePath: resolver.resolve("./runtime/components/htmlInline/anchor") });
    addComponent({ name: `${options.html?.prefix}Span`, filePath: resolver.resolve("./runtime/components/htmlInline/inline") });
    addComponent({ name: `${options.html?.prefix}Img`, filePath: resolver.resolve("./runtime/components/htmlBlock/image") });
    addComponent({ name: `${options.html?.prefix}Dd`, filePath: resolver.resolve("./runtime/components/htmlBlock/definitionDescription") });
    addComponent({ name: `${options.html?.prefix}Dt`, filePath: resolver.resolve("./runtime/components/htmlBlock/definitionTerm") });
    addComponent({ name: `${options.html?.prefix}Dl`, filePath: resolver.resolve("./runtime/components/htmlBlock/definitionList") });
    addComponent({ name: `${options.html?.prefix}Ul`, filePath: resolver.resolve("./runtime/components/htmlBlock/list") });
    addComponent({ name: `${options.html?.prefix}Li`, filePath: resolver.resolve("./runtime/components/htmlBlock/listItem") });
    addComponentsDir({ path: resolver.resolve("./runtime/components/bootstrap"), prefix: options.bootstrap?.prefix, pathPrefix: false });
    addComponent({ name: `${options.bootstrap?.prefix}Vr`, filePath: resolver.resolve("./runtime/components/bootstrap/verticalRule/verticalRule") });
    addComponent({ name: `${options.bootstrap?.prefix}List`, filePath: resolver.resolve("./runtime/components/htmlBlock/list") });
    addComponent({ name: `${options.bootstrap?.prefix}ListItem`, filePath: resolver.resolve("./runtime/components/htmlBlock/listItem") });
    addComponent({ name: `${options.icon?.prefix}Link`, filePath: resolver.resolve("./runtime/components/nuxt/bslink") });
    addComponent({ name: `${options.icon?.prefix}Icon`, filePath: resolver.resolve("./runtime/components/icon/icon") });
    addComponentsDir({ path: resolver.resolve("./runtime/components/docs"), prefix: options.docs?.prefix, pathPrefix: false });
    addImportsDir(resolver.resolve("runtime/composables/public"));
  }
});

export { module as default };
