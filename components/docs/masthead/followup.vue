<template>
  <Container
    type="xxl"
    class="bd-gutter masthead-followup"
  >
    <b-div class="col-lg-7 mx-auto pb-3 mb-3 mb-md-5 text-md-center">
      <b-div
        class="masthead-followup-icon d-inline-block mb-3"
        style="--bg-rgb: var(--bd-violet-rgb);"
      >
        <BIcon
          icon="mdi:nuxt"
          font-size="1"
        />
      </b-div>
      <b-h2
        margin="b-3"
        font-weight="semibold"
        line-height="sm"
      >
        Get started any way you&nbsp;want
      </b-h2>
      <b-p
        lead
        font-weight="normal"
      >
        Jump right into building with Bootstrap—use the CDN, install it via package manager.
      </b-p>
      <b-p class="d-flex justify-content-md-start justify-content-md-center lead fw-normal">
        <a
          href="/lang-en/"
          class="icon-link icon-link-hover fw-semibold ps-md-4"
        >
          Read installation docs
          <Icon
            name="bi:arrow-right"
            class="bi"
          />
        </a>
      </b-p>
    </b-div>

    <section class="row g-3 g-md-5 mb-5 pb-5 justify-content-center">
      <!-- <b-div class="col-lg-6 py-lg-4 pe-lg-5">
        <svg class="bi mb-2 fs-2 text-body-secondary">
          <use xlink:href="#box-seam"></use>
        </svg>
        <h3 class="fw-semibold">Install via package manager</h3>
        <b-p class="pe-lg-5">
          Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also <a href="https://github.com/twbs/examples/">use any demo from our Examples repo</a> to quickly jumpstart Bootstrap projects.
        </b-p>
        <b-div class="highlight">
          <pre tabindex="0" class="chroma"><code class="language-sh" data-lang="sh"><span class="line"><span class="cl">npm install bootstrap@5.3.1</span></span></code></pre>
        </b-div>
        <b-div class="highlight">
          <pre tabindex="0" class="chroma"><code class="language-sh" data-lang="sh"><span class="line"><span class="cl">gem install bootstrap -v 5.3.1</span></span></code></pre>
        </b-div>
        <p>
          <a href="/docs/5.3/getting-started/download/">Read our installation docs</a> for more info and additional package managers.
        </b-p>
      </b-div>
      <b-div class="col-lg-6 py-lg-4 ps-lg-5 border-lg-start">
        <svg class="bi mb-2 fs-2 text-body-secondary">
          <use xlink:href="#globe2"></use>
        </svg>
        <h3 class="fw-semibold">Include via CDN</h3>
        <b-p class="pe-lg-5">
          When you only need to include Bootstrap’s compiled CSS or JS, you can use <a href="https://www.jsdelivr.com/package/npm/bootstrap">jsDelivr</a>. See it in action with our simple <a href="/docs/5.3/getting-started/introduction/#quick-start">quick start</a>, or <a href="/docs/5.3/examples/">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href="/docs/5.3/getting-started/introduction/#separate">separately</a>.
        </b-p>
        <b-div class="highlight">
          <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css&#34;</span> <span class="na">rel</span><span class="o">=</span><span class="s">&#34;stylesheet&#34;</span> <span class="na">integrity</span><span class="o">=</span><span class="s">&#34;sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9&#34;</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">&#34;anonymous&#34;</span><span class="p">&gt;</span></span></span></code></pre>
        </b-div>
        <b-div class="highlight">
          <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">&#34;https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js&#34;</span> <span class="na">integrity</span><span class="o">=</span><span class="s">&#34;sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm&#34;</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">&#34;anonymous&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span></span></span></code></pre>
        </b-div>
      </b-div> -->

      <!-- <b-div class="col-md-8 mx-auto text-center">
        <h4 class="fw-semibold">Read our getting started guides</h4>
        <p>Get a jump on including Bootstrap's source files in a new project with our official guides.</b-p>
        <b-div class="d-flex flex-wrap align-items-center justify-content-center gap-4 mt-4">
          <a class="d-flex flex-column align-items-center text-decoration-none animate-img" href="/docs/5.3/getting-started/webpack">
            <Icon name="bi:code" class="d-block mb-2 fs-1" />
            <span class="text-body-secondary">Webpack</span>
          </a>
          <a class="d-flex flex-column align-items-center text-decoration-none animate-img" href="/docs/5.3/getting-started/parcel">
            <img class="d-block mb-2" src="/docs/5.3/assets/img/parcel.png" alt="" width="72" height="72" loading="lazy">
            <span class="text-body-secondary">Parcel</span>
          </a>
          <a class="d-flex flex-column align-items-center text-decoration-none animate-img" href="/docs/5.3/getting-started/vite">
            <img class="d-block mb-2" src="/docs/5.3/assets/img/vite.svg" alt="" width="72" height="72" loading="lazy">
            <span class="text-body-secondary">Vite</span>
          </a>
        </b-div>
      </b-div> -->
      <b-div class="col-md-8 mx-auto">
        <Icon
          name="bi:box-seam"
          class="bi fs-2"
        />
        <svg class="bi mb-2 fs-2 text-body-secondary">
          <use xlink:href="#box-seam" />
        </svg>
        <h3 class="fw-semibold">
          Install via package manager
        </h3>
        <b-p class="pe-lg-5">
          Install use-bootstrap’s source Vue Components files via npm. Package managed installs don’t include Bootstrap SCSS files.
          <!-- You can also <a href="https://github.com/twbs/examples/">use any demo from our Examples repo</a> to quickly jumpstart Bootstrap projects. -->
        </b-p>
        <b-div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code
class="language-sh"
                                    data-lang="sh"
          ><span class="line"><span class="cl">npm install usebootstrap</span></span></code></pre>
        </b-div>
        <b-p>
          <a to="/lang-en/">Read our installation docs</a> for more info and additional package managers.
        </b-p>
      </b-div>
    </section>


    <section class="pb-md-5 mb-5">
      <b-div class="col-lg-8 mb-5">
        <b-div
          class="masthead-followup-icon d-inline-block mb-3"
          style="--bg-rgb: var(--bs-warning-rgb);"
        >
          <Icon
            name="mingcute:vue-fill"
            class="bi fs-1"
          />
        </b-div>
        <h2 class="display-5 mb-3 fw-semibold lh-sm">
          Powerful Vue Components
        </h2>
        <b-p class="lead fw-normal">
          Add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much.
          <!-- Add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much. Bootstrap's JavaScript is HTML-first, meaning most plugins are added with <code>data</code> attributes in your HTML. Need more control? Include individual plugins programmatically. -->
        </b-p>
        <b-p class="d-flex justify-content-start lead fw-normal mb-md-0">
          <a
            href="/lang-en/getting-started/concept/"
            class="icon-link icon-link-hover fw-semibold"
          >
            Learn more about use-bootstrap Components
            <svg class="bi">
              <use xlink:href="#arrow-right" />
            </svg>
          </a>
        </b-p>
      </b-div>
      <b-div class="row gx-md-5">
        <b-div class="col-lg-6 mb-3">
          <h3 class="fw-semibold">
            Vue Composition API
          </h3>
          <b-p>Why write more JavaScript when you can write HTML? Nearly all of Bootstrap's JavaScript plugins feature a first-class data API, allowing you to use JavaScript just by adding <code>data</code> attributes.</b-p>


          <Snippet>
            <Example>
              <examples-components-dropdown-masthead />
            </Example>
            <ExamplesCode
              path="/components/dropdown/masthead.vue"
              lang="vue"
            />
          </Snippet>

          <!-- <p>Learn more about <a href="/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module">our JavaScript as modules</a> and <a href="/docs/5.3/getting-started/javascript/#programmatic-api">using the programmatic API</a>.</b-p> -->
        </b-div>
        <b-div class="col-lg-6 mb-3">
          <h3 class="fw-semibold">
            Comprehensive set of plugins
          </h3>
          <b-p>Bootstrap features a dozen plugins that you can drop into any project. Drop them in all at once, or choose just the ones you need.</b-p>
          <hr class="my-4">
          <b-div class="row g-3">
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/alerts/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Alert</h4>
                <small class="text-body-secondary">Show and hide alert messages to your users.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/buttons/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Button</h4>
                <small class="text-body-secondary">Programmatically control the active state for buttons.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/carousel/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Carousel</h4>
                <small class="text-body-secondary">Add slideshows to any page, including support for crossfade.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/collapse/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Collapse</h4>
                <small class="text-body-secondary">Expand and collapse areas of content, or create accordions.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/dropdowns/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Dropdown</h4>
                <small class="text-body-secondary">Create menus of links, actions, forms, and more.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/modal/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Modal</h4>
                <small class="text-body-secondary">Add flexible and responsive dialogs to your project.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/offcanvas/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Offcanvas</h4>
                <small class="text-body-secondary">Build and toggle hidden sidebars into any page.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/popovers/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Popover</h4>
                <small class="text-body-secondary">Create custom overlays. Built on Popper.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/scrollspy/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Scrollspy</h4>
                <small class="text-body-secondary">Automatically update active nav links based on page scroll.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/navs-tabs/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Tab</h4>
                <small class="text-body-secondary">Allow Bootstrap nav components to toggle contents.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/toasts/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Toast</h4>
                <small class="text-body-secondary">Show and hide notifications to your visitors.</small>
              </a>
            </b-div>
            <b-div class="col-sm-6 mb-2">
              <a
                class="d-block pe-lg-4 text-decoration-none lh-sm"
                href="/lang-en/components/tooltips/"
              >
                <h4 class="mb-0 fs-5 fw-semibold">Tooltip</h4>
                <small class="text-body-secondary">Replace browser tooltips with custom ones. Built on Popper.</small>
              </a>
            </b-div>
          </b-div>
        </b-div>
      </b-div>
    </section>

  <!-- <section class="pb-md-5 mb-5">
      <b-div class="col-lg-8 mb-5">
        <b-div class="masthead-followup-icon d-inline-block mb-3 me-2" style="--bg-rgb: var(--bs-danger-rgb);">
          <Icon name="mingcute:vue-fill" class="bi fs-1" />
        </b-div>

        <svg class="bi me-2 fs-2 text-body-secondary">
          <use xlink:href="#plus"></use>
        </svg>
        <b-div class="masthead-followup-icon d-inline-block mb-3" style="--bg-rgb: var(--bs-info-rgb);">
          <svg class="bi fs-1">
            <use xlink:href="#braces-asterisk"></use>
          </svg>
        </b-div>
        <h2 class="display-5 mb-3 fw-semibold lh-sm">Components, meet the Utility&nbsp;API</h2>
        <b-p class="lead fw-normal">
          New in Bootstrap 5, our utilities are now generated by our <a href="/docs/5.3/utilities/api/">Utility API</a>. We built it as a feature-packed Sass map that can be quickly and easily customized. It's never been easier to add, remove, or modify any utility classes. Make utilities responsive, add pseudo-class variants, and give them custom names.
        </b-p>
      </b-div>
      <b-div class="row gx-md-5">
        <b-div class="col-lg-6">
          <h3 class="fw-semibold">Quickly customize components</h3>
          <p>Apply any of our included utility classes to our components to customize their appearance, like the navigation example below. There are hundreds of classes available—from <a href="/docs/5.3/utilities/position/">positioning</a> and <a href="/docs/5.3/utilities/sizing/">sizing</a> to <a href="/docs/5.3/utilities/colors/">colors</a> and <a href="/docs/5.3/utilities/shadows/">effects</a>. Mix them with CSS variable overrides for even more control.</b-p>
          <b-div class="p-4 border rounded-3 mb-4">
            <ul class="nav nav-pills mb-4" id="pillNav" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
              </li>
            </ul>
            <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: rgba(255, 255, 255, .75); --bs-nav-link-hover-color: #fff; --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
              <li class="nav-item" role="presentation">
                <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
              </li>
            </ul>
          </b-div>
          <b-div class="highlight">
            <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;pillNav2&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;tablist&#34;</span> <span class="na">style</span><span class="o">=</span><span class="s">&#34;--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-item&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;presentation&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-link active rounded-5&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;home-tab2&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;tab&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;tab&#34;</span> <span class="na">aria-selected</span><span class="o">=</span><span class="s">&#34;true&#34;</span><span class="p">&gt;</span>Home<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-item&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;presentation&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-link rounded-5&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;profile-tab2&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;tab&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;tab&#34;</span> <span class="na">aria-selected</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>Profile<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-item&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;presentation&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-link rounded-5&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;contact-tab2&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;tab&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;tab&#34;</span> <span class="na">aria-selected</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>Contact<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span></code></pre>
          </b-div>
          <b-p class="d-flex justify-content-start mb-md-0">
            <a href="/docs/5.3/examples#snippets" class="icon-link icon-link-hover fw-semibold">
              Explore customized components
              <svg class="bi">
                <use xlink:href="#arrow-right"></use>
              </svg>
            </a>
          </b-p>
        </b-div>
        <b-div class="col-lg-6">
          <h3 class="fw-semibold">Create and extend utilities</h3>
          <p>Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project. Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.</b-p>
          <b-div class="highlight">
            <pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;bootstrap/scss/bootstrap&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$utilities</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="nv">$utilities</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="p">(</span>
</span></span><span class="line"><span class="cl">    <span class="s2">&#34;cursor&#34;</span><span class="o">:</span> <span class="p">(</span>
</span></span><span class="line"><span class="cl">      <span class="na">property</span><span class="o">:</span> <span class="n">cursor</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">      <span class="na">class</span><span class="o">:</span> <span class="n">cursor</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">      <span class="na">responsive</span><span class="o">:</span> <span class="n">true</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">      <span class="na">values</span><span class="o">:</span> <span class="ni">auto</span> <span class="ni">pointer</span> <span class="ni">grab</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">    <span class="p">)</span>
</span></span><span class="line"><span class="cl">  <span class="p">)</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span></code></pre>
          </b-div>

          <b-p class="d-flex justify-content-start mb-md-0">
            <a href="/docs/5.3/utilities/api/" class="icon-link icon-link-hover fw-semibold mb-3">
              Explore the utility API
              <svg class="bi">
                <use xlink:href="#arrow-right"></use>
              </svg>
            </a>
          </b-p>
        </b-div>
      </b-div>
    </section> -->

  <!-- <section class="col-lg-7 mb-5">
      <b-div class="masthead-followup-icon d-inline-block mb-3" style="--bg-rgb: var(--bs-primary-rgb);">
        <Icon name="mingcute:vue-fill" class="bi fs-1" />
      </b-div>
      <h2 class="display-5 mb-3 fw-semibold lh-sm">Customize everything with&nbsp;Sass</h2>
      <b-p class="lead fw-normal">
        Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.
      </b-p>
      <b-p class="d-flex justify-content-start lead fw-normal">
        <a href="/docs/5.3/customize/overview/" class="icon-link icon-link-hover fw-semibold">
          Learn more about customizing
          <svg class="bi">
            <use xlink:href="#arrow-right"></use>
          </svg>
        </a>
      </b-p>
    </section> -->

  <!-- <section class="row g-md-5 mb-5 pb-md-5">
      <b-div class="col-lg-6">
        <h3>Include all of Bootstrap’s Sass</h3>
        <p>Import one stylesheet and you're off to the races with every feature of our CSS.</b-p>
        <b-div class="highlight">
          <pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Variable overrides first
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$primary</span><span class="o">:</span> <span class="mh">#900</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$enable-shadows</span><span class="o">:</span> <span class="n">true</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$prefix</span><span class="o">:</span> <span class="s2">&#34;mo-&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Then import Bootstrap
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/bootstrap&#34;</span><span class="p">;</span>
</span></span></code></pre>
        </b-div>
        <p>Learn more about our <a href="/docs/5.3/customize/options/">global Sass options</a>.</b-p>
      </b-div>
      <b-div class="col-lg-6">
        <h3>Include what you need</h3>
        <p>The easiest way to customize Bootstrap—include only the CSS you need.</b-p>
        <b-div class="highlight">
          <pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Functions first
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/functions&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Variable overrides second
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$primary</span><span class="o">:</span> <span class="mh">#900</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$enable-shadows</span><span class="o">:</span> <span class="n">true</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$prefix</span><span class="o">:</span> <span class="s2">&#34;mo-&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Required Bootstrap imports
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/variables&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/variables-dark&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/maps&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/mixins&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/root&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Optional components
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/utilities&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/reboot&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/containers&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/grid&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/helpers&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">&#34;../node_modules/bootstrap/scss/utilities/api&#34;</span><span class="p">;</span>
</span></span></code></pre>
        </b-div>
        <p>Learn more about <a href="/docs/5.3/customize/sass/">using Bootstrap with Sass</a>.</b-p>
      </b-div>
    </section> -->

  <!-- <section class="row g-md-5 pb-md-5 mb-5 align-items-center">
      <b-div class="col-lg-8 mb-5">
        <b-div class="masthead-followup-icon d-inline-block mb-3" style="--bg-rgb: var(--bd-pink-rgb);">
          <Icon name="mingcute:vue-fill" class="bi fs-1" />
        </b-div>
        <h2 class="display-5 mb-3 fw-semibold lh-sm">Build and extend in real-time with CSS&nbsp;variables</h2>
        <b-p class="lead fw-normal">
          Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a <code>:root</code> level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.
        </b-p>
        <b-p class="d-flex align-items-start flex-column lead fw-normal mb-0">
          <a href="/docs/5.3/customize/css-variables/" class="icon-link icon-link-hover fw-semibold mb-3">
            Learn more about CSS variables
            <svg class="bi">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </a>
        </b-p>
      </b-div>
      <b-div class="row gx-md-5">
        <b-div class="col-lg-6 mb-3">
          <h3 class="fw-semibold">Using CSS variables</h3>
          <p>Use any of our <a href="/docs/5.3/customize/css-variables/#root-variables">global <code>:root</code> variables</a> to write new styles. CSS variables use the <code>var(--bs-variableName)</code> syntax and can be inherited by children elements.</b-p>
          <b-div class="highlight">
            <pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nc">.component</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-gray-800</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">background-color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-gray-100</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">border</span><span class="o">:</span> <span class="mi">1</span><span class="kt">px</span> <span class="ni">solid</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-gray-200</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-radius</span><span class="o">:</span> <span class="mf">.25</span><span class="kt">rem</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nc">.component-header</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-purple</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span></span></span></code></pre>
          </b-div>
        </b-div>
        <b-div class="col-lg-6 mb-3">
          <h3 class="fw-semibold">Customizing via CSS variables</h3>
          <p>Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.</b-p>
          <b-div class="highlight">
            <pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nt">body</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-font-family</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-font-monospace</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-line-height</span><span class="o">:</span> <span class="mi">1</span><span class="mf">.4</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-bg</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-gray-100</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nc">.table</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-table-color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-gray-600</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-table-bg</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-gray-100</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-table-border-color</span><span class="o">:</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span></span></span></code></pre>
          </b-div>
        </b-div>
      </b-div>
    </section> -->




  <!-- <section class="row g-3 g-md-5 pb-md-5 mb-5 align-items-center">
      <b-div class="col-lg-6">
        <b-div class="masthead-followup-icon d-inline-block mb-3" style="--bg-rgb: var(--bd-teal-rgb);">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" focusable="false" viewBox="0 0 16 16">
            <path d="M0 6a6 6 0 1112 0A6 6 0 010 6z" />
            <path d="M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z" />
          </svg>

        </b-div>
        <h2 class="display-5 mb-3 fw-semibold lh-sm">Personalize it with Bootstrap&nbsp;Icons</h2>
        <b-p class="lead fw-normal">
          <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.
        </b-p>
        <b-p class="d-flex justify-content-start lead fw-normal mb-md-0">
          <a href="https://icons.getbootstrap.com/" class="icon-link icon-link-hover fw-semibold">
            Get Bootstrap Icons
            <svg class="bi">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </a>
        </b-p>
      </b-div>
      <b-div class="col-lg-6">
        <img class="img-fluid mt-3 mx-auto" srcset="/docs/5.3/assets/img/bootstrap-icons.png,
                                                  /docs/5.3/assets/img/bootstrap-icons@2x.png 2x" src="/docs/5.3/assets/img/bootstrap-icons.png" alt="Bootstrap Icons" width="700" height="425" loading="lazy">
      </b-div>
    </section> -->

  <!-- <section class="row g-3 g-md-5 pb-md-5 mb-5 align-items-center">
      <b-div class="col-lg-6">
        <b-div class="masthead-followup-icon d-inline-block mb-3" style="--bg-rgb: var(--bd-violet-rgb);">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" focusable="false" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z" clip-rule="evenodd" />
          </svg>

        </b-div>
        <h2 class="display-5 mb-3 fw-semibold lh-sm">Make it yours with official Bootstrap Themes</h2>
        <b-p class="lead fw-normal">
          Take Bootstrap to the next level with premium themes from the <a href="https://themes.getbootstrap.com/">official Bootstrap Themes marketplace</a>. Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.
        </b-p>
        <b-p class="d-flex justify-content-start lead fw-normal mb-md-0">
          <a href="https://themes.getbootstrap.com/" class="icon-link icon-link-hover fw-semibold">
            Browse Bootstrap Themes
            <svg class="bi">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </a>
        </b-p>
      </b-div>
      <b-div class="col-lg-6">
        <img class="img-fluid mt-3 mx-auto" srcset="/docs/5.3/assets/img/bootstrap-themes.png,
                                                  /docs/5.3/assets/img/bootstrap-themes@2x.png 2x" src="/docs/5.3/assets/img/bootstrap-themes.png" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </b-div>
    </section> -->
  </Container>
</template>