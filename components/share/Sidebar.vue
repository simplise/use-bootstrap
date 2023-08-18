<script setup lang="ts">

onMounted(() => {
  const route = useRoute();
  const el = document.getElementById(`#${route.path}`)
  if(el)
  {
    el.scrollIntoView(true)
  }
})

const routes = [
  {
    name: 'Getting started',
    icon: 'bi:book-half',
    color: 'indigo',
    children: [
      {
        name: 'Introduction',
        path: '/',
      },
      {
        name: 'Concept',
        path: '/getting-started/concept/',
      }
    ]
  },

  {
    name: 'Components',
    icon: 'bi:menu-button-wide-fill',
    color: 'cyan',
    children: [
      {
        name: 'Accordion',
        path: '/components/accordion/',
      },
      {
        name: 'Alerts',
        path: '/components/alerts/',
      },
      {
        name: 'Badge',
        path: '/components/badge/',
      },
      {
        name: 'Breadcrumb',
        path: '/components/breadcrumb/',
      },
      {
        name: 'Buttons',
        path: '/components/buttons/',
      },
      {
        name: 'Button group',
        path: '/components/button-group/',
      },
      {
        name: 'Card',
        path: '/components/card/',
      },
      {
        name: 'Carousel',
        path: '/components/carousel/',
      },
      {
        name: 'Close button',
        path: '/components/close-button/',
      },
      {
        name: 'Collapse',
        path: '/components/collapse/',
      },
      {
        name: 'Dropdowns',
        path: '/components/dropdowns/',
      },
      {
        name: 'List group',
        path: '/components/list-group/',
      },
      {
        name: 'Modal',
        path: '/components/modal/',
      },
      {
        name: 'Navbar',
        path: '/components/navbar/',
      },
      {
        name: 'Navs & tabs',
        path: '/components/navs-tabs/',
      },
      {
        name: 'Offcanvas',
        path: '/components/offcanvas/',
      },
      {
        name: 'Pagination',
        path: '/components/pagination/',
      },
      {
        name: 'Placeholders',
        path: '/components/placeholders/',
      },
      {
        name: 'Popovers',
        path: '/components/popovers/',
      },
      {
        name: 'Progress',
        path: '/components/progress/',
      },
      {
        name: 'Scrollspy',
        path: '/components/scrollspy/',
      },
      {
        name: 'Spinners',
        path: '/components/spinners/',
      },
      {
        name: 'Toasts',
        path: '/components/toasts/',
      },
      {
        name: 'Tooltips',
        path: '/components/tooltips/',
      }
    ]
  },
  {
    name: 'Forms',
    icon: 'bi:ui-radios',
    color: 'blue',
    children: [
      {
        name: 'Overview',
        path: '/forms/overview/',
      },
      {
        name: 'Form control',
        path: '/forms/form-control/',
      },
      {
        name: 'Select',
        path: '/forms/select/',
      },
      {
        name: 'Checks & radios',
        path: '/forms/checks-radios/',
      },
      {
        name: 'Range',
        path: '/forms/range/',
      },
      {
        name: 'Input group',
        path: '/forms/input-group/',
      },
      {
        name: 'Floating labels',
        path: '/forms/floating-labels/',
      },
      {
        name: 'Layout',
        path: '/forms/layout/',
      },
      {
        name: 'Validation',
        path: '/forms/validation/',
      }
    ]
  },
  {
    name: 'Layout',
    icon: 'bi:grid-fill',
    color: 'teal',
    children: [
      {
        name: 'Containers',
        path: '/layout/containers/',
      },
      {
        name: 'Grid',
        path: '/layout/grid/',
      }
      ,
      {
        name: 'Columns',
        path: '/layout/columns/',
      },
      {
        name: 'Gutters',
        path: '/layout/gutters/'
      },
      {
        name: 'CSS Grid',
        path: '/layout/css-grid/'
      }
    ]
  },
  {
    name: 'Content',
    icon: 'bi:file-earmark-richtext',
    color: 'gray',
    children: [
      {
        name: 'Reboot',
        path: '/content/reboot/',
      },
      {
        name: 'Typography',
        path: '/content/typography/',
      },
      {
        name: 'Images',
        path: '/content/images/',
      },
      {
        name: 'Tables',
        path: '/content/tables/',
      },
      {
        name: 'Figures',
        path: '/content/figures/',
      },
      {
        name: 'Blockquotes',
        path: '/content/blockquotes/',
      }
    ]
  },

  {
    name: 'Helpers',
    icon: 'bi:magic',
    color: 'orange',
    children: [
      {
        name: 'Clearfix',
        path: '/helpers/clearfix/',
      },
      {
        name: 'Color & background',
        path: '/helpers/color-background/',
      },
      {
        name: 'Colored links',
        path: '/helpers/colored-links/',
      },
      {
        name: 'Focus ring',
        path: '/helpers/focus-ring/',
      },
      {
        name: 'Icon link',
        path: '/helpers/icon-link/',
      },
      {
        name: 'Position',
        path: '/helpers/position/',
      },
      {
        name: 'Ratio',
        path: '/helpers/ratio/',
      },
      {
        name: 'Stacks',
        path: '/helpers/stacks/',
      },
      {
        name: 'Stretched link',
        path: '/helpers/stretched-link/',
      },
      {
        name: 'Text truncation',
        path: '/helpers/text-truncation/',
      },
      {
        name: 'Vertical rule',
        path: '/helpers/vertical-rule/',
      },
      {
        name: 'Visually hidden',
        path: '/helpers/visually-hidden/',
      }
    ]
  },
  {
    name: 'Utilities',
    icon: 'bi:braces-asterisk',
    color: 'red',
    children: [
      {
        name: 'Background',
        path: '/utilities/background/',
      },
      {
        name: 'Borders',
        path: '/utilities/borders/',
      },
      {
        name: 'Colors',
        path: '/utilities/colors/',
      },
      {
        name: 'Display',
        path: '/utilities/display/',
      },
      {
        name: 'Flex',
        path: '/utilities/flex/',
      },
      {
        name: 'Float',
        path: '/utilities/float/',
      },
      {
        name: 'Interactions',
        path: '/utilities/interactions/',
      },
      {
        name: 'Link',
        path: '/utilities/link/',
      },
      {
        name: 'Object fit',
        path: '/utilities/object-fit/',
      },
      {
        name: 'Opacity',
        path: '/utilities/opacity/',
      },
      {
        name: 'Overflow',
        path: '/utilities/overflow/',
      },
      {
        name: 'Position',
        path: '/utilities/position/',
      },
      {
        name: 'Shadows',
        path: '/utilities/shadows/',
      },
      {
        name: 'Sizing',
        path: '/utilities/sizing/',
      },
      {
        name: 'Spacing',
        path: '/utilities/spacing/',
      },
      {
        name: 'Text',
        path: '/utilities/text/',
      },
      {
        name: 'Vertical align',
        path: '/utilities/vertical-align/',
      },
      {
        name: 'Visibility',
        path: '/utilities/visibility/',
      },
      {
        name: 'Z-index',
        path: '/utilities/z-index/',
      }
    ]
  },
  {
    name: 'About',
    icon: 'bi:globe2',
    color: 'indigo',
    children: [
      {
        name: 'Overview',
        path: '/about/overview/',
      },
      {
        name: 'Team',
        path: '/about/team/',
      },
      {
        name: 'License',
        path: '/about/license/',
      }
    ]
  }
]
</script>

<template>
  <aside class="bd-sidebar">
    <div
      id="bdSidebar"
      class="offcanvas-lg offcanvas-start"
      tabindex="-1"
      aria-labelledby="bdSidebarOffcanvasLabel"
    >
      <div class="offcanvas-header border-bottom">
        <h5
          id="bdSidebarOffcanvasLabel"
          class="offcanvas-title"
        >
          Browse docs
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          data-bs-target="#bdSidebar"
        />
      </div>
      <div class="offcanvas-body">
        <nav
          id="bd-docs-nav"
          class="bd-links w-100"
          aria-label="Docs navigation"
        >
          <ul class="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
            <li
              v-for="item in routes"
              :key="item.name"
              class="bd-links-group py-2"
            >
              <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                <Icon
                  class="bi me-2"
                  :name="item.icon"
                  aria-hidden="true"
                  :style="{ color: `var(--bs-${item.color})` }"
                />
                {{ item.name }}
              </strong>
              <ul class="list-unstyled fw-normal pb-2 small">
                <li
                  v-for="secondItem in item.children"
                  :key="secondItem.path"
                >
                  <LocalLink
                    :id="secondItem.path"
                    :to="secondItem.path"
                    class="bd-links-link d-inline-block rounded"
                    :class="[useLocalization(secondItem.path) == $route.path ? 'active' : '']"
                    aria-current="page"
                  >
                    {{ secondItem.name }}
                  </LocalLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
