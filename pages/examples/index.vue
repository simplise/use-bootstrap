<script setup lang="ts">
definePageMeta({
 layout: 'single',
 title: 'Examples',
 description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
</script>

<template>
  <!-- <div class="bd-content">
  <h2 id="starters">Starters</h2>
  <p>Functional examples of using Bootstrap in common JS frameworks like Webpack, Parcel, Vite, and more you can edit in StackBlitz.</p>
  <div class="row">

   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/starter/" target="_blank" rel="noopener">
       CDN starter
      </a>
     </h3>
     <p class="text-body-secondary">Instantly include Bootstrap's compiled CSS and JavaScript via the jsDelivr CDN.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/starter?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/sass-js/" target="_blank" rel="noopener">
       Sass & JS
      </a>
     </h3>
     <p class="text-body-secondary">Use npm to import and compile Bootstrap's Sass with Autoprefixer and Stylelint, plus our bundled JavaScript.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/sass-js-esm/" target="_blank" rel="noopener">
       Sass & ESM JS
      </a>
     </h3>
     <p class="text-body-secondary">Import and compile Bootstrap's Sass with Autoprefixer and Stylelint, and compile our source JavaScript with an ESM shim.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/color-modes/" target="_blank" rel="noopener">
       Bootstrap color modes
      </a>
     </h3>
     <p class="text-body-secondary">Import and compile Bootstrap's Sass with Stylelint, and the Bootstrap color modes.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/icons-font/" target="_blank" rel="noopener">
       Bootstrap Icons
      </a>
     </h3>
     <p class="text-body-secondary">Import and compile Bootstrap's Sass with Stylelint, PurgeCSS, and the Bootstrap Icons web font.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/icons-font?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/parcel/" target="_blank" rel="noopener">
       Parcel
      </a>
     </h3>
     <p class="text-body-secondary">Import and bundle Bootstrap's source Sass and JavaScript via Parcel.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=src%2Findex.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/react-nextjs/" target="_blank" rel="noopener">
       React
      </a>
     </h3>
     <p class="text-body-secondary">Import and bundle Bootstrap's source Sass and JavaScript with React, Next.js, and React Bootstrap.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/vite/" target="_blank" rel="noopener">
       Vite
      </a>
     </h3>
     <p class="text-body-secondary">Import and bundle Bootstrap's source Sass and JavaScript with Vite.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/vue/" target="_blank" rel="noopener">
       Vue
      </a>
     </h3>
     <p class="text-body-secondary">Import and bundle Bootstrap's source Sass and JavaScript with Vue and Vite.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/vue?file=index.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>




   <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
    <svg class="bi fs-5 flex-shrink-0 mt-1">
     <use xlink:href="#box-seam"></use>
    </svg>
    <div>
     <h3 class="h5 mb-1">
      <a class="d-block link-offset-1" href="https://github.com/twbs/examples/tree/main/webpack/" target="_blank" rel="noopener">
       Webpack
      </a>
     </h3>
     <p class="text-body-secondary">Import and bundle Bootstrap's source Sass and JavaScript with Webpack.</p>
     <p>
      <a class="icon-link small link-secondary link-offset-1" href="https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=src%2Findex.html" target="_blank" rel="noopener">
       <svg class="bi flex-shrink-0">
        <use xlink:href="#lightning-charge-fill"></use>
       </svg>
       Edit in StackBlitz
      </a>
     </p>
    </div>
   </div>

  </div>
 </div> -->
  <div class="bd-content">
    <h2 id="snippets">
      Snippets
    </h2>
    <p>Common patterns for building sites and apps that build on existing components and utilities with custom CSS and more.</p>
    <div class="row">
      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/headers/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/headers.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/headers@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/headers.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Headers
          </h3>
        </a>
        <p class="text-body-secondary">
          Display your branding, navigation, search, and more with these header components
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/heroes/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/heroes.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/heroes@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/heroes.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Heroes
          </h3>
        </a>
        <p class="text-body-secondary">
          Set the stage on your homepage with heroes that feature clear calls to action.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/features/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/features.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/features@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/features.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Features
          </h3>
        </a>
        <p class="text-body-secondary">
          Explain the features, benefits, or other details in your marketing content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/sidebars/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/sidebars.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/sidebars@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/sidebars.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Sidebars
          </h3>
        </a>
        <p class="text-body-secondary">
          Common navigation patterns ideal for offcanvas or multi-column layouts.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/footers/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/footers.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/footers@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/footers.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Footers
          </h3>
        </a>
        <p class="text-body-secondary">
          Finish every page strong with an awesome footer, big or small.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/dropdowns/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/dropdowns.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/dropdowns@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/dropdowns.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Dropdowns
          </h3>
        </a>
        <p class="text-body-secondary">
          Enhance your dropdowns with filters, icons, custom styles, and more.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/list-groups/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/list-groups.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/list-groups@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/list-groups.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            List groups
          </h3>
        </a>
        <p class="text-body-secondary">
          Extend list groups with utilities and custom styles for any content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/modals/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/modals.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/modals@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/modals.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Modals
          </h3>
        </a>
        <p class="text-body-secondary">
          Transform modals to serve any purpose, from feature tours to dialogs.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/badges/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/badges.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/badges@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/badges.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Badges
          </h3>
        </a>
        <p class="text-body-secondary">
          Make badges work with custom inner HTML and new looks.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/breadcrumbs/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/breadcrumbs.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/breadcrumbs@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/breadcrumbs.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Breadcrumbs
          </h3>
        </a>
        <p class="text-body-secondary">
          Integrate custom icons and create stepper components.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/buttons/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/buttons.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/buttons@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/buttons.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Buttons
          </h3>
        </a>
        <p class="text-body-secondary">
          Create custom buttons for just about any use case with utilities.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/snippets/jumbotrons/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/jumbotrons.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/jumbotrons@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/jumbotrons.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Jumbotrons
          </h3>
        </a>
        <p class="text-body-secondary">
          Create modernized versions of the classic Bootstrap component.
        </p>
      </div>
    </div>
  </div>
  <div class="bd-content">
    <h2 id="custom-components">
      Custom Components
    </h2>
    <p>Brand-new components and templates to help folks quickly get started with Bootstrap and demonstrate best practices for adding onto the framework.</p>
    <div class="row">
      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/album/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/album.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/album@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/album.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Album
          </h3>
        </a>
        <p class="text-body-secondary">
          Simple one-page template for photo galleries, portfolios, and more.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/pricing/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/pricing.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/pricing@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/pricing.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Pricing
          </h3>
        </a>
        <p class="text-body-secondary">
          Example pricing page built with Cards and featuring a custom header and footer.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/checkout/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/checkout.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/checkout@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/checkout.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Checkout
          </h3>
        </a>
        <p class="text-body-secondary">
          Custom checkout form showing our form components and their validation features.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/product/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/product.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/product@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/product.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Product
          </h3>
        </a>
        <p class="text-body-secondary">
          Lean product-focused marketing page with extensive grid and image work.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/cover/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/cover.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/cover@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/cover.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Cover
          </h3>
        </a>
        <p class="text-body-secondary">
          A one-page template for building simple and beautiful home pages.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/carousel/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/carousel.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/carousel@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/carousel.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Carousel
          </h3>
        </a>
        <p class="text-body-secondary">
          Customize the navbar and carousel, then add some new components.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/blog/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/blog.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/blog@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/blog.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Blog
          </h3>
        </a>
        <p class="text-body-secondary">
          Magazine like blog template with header, navigation, featured content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/dashboard/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/dashboard.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/dashboard@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/dashboard.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Dashboard
          </h3>
        </a>
        <p class="text-body-secondary">
          Basic admin dashboard shell with fixed sidebar and navbar.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/sign-in/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/sign-in.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/sign-in@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/sign-in.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Sign-in
          </h3>
        </a>
        <p class="text-body-secondary">
          Custom form layout and design for a simple sign in form.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/sticky-footer/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/sticky-footer.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/sticky-footer@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/sticky-footer.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Sticky footer
          </h3>
        </a>
        <p class="text-body-secondary">
          Attach a footer to the bottom of the viewport when page content is short.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/sticky-footer-navbar/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/sticky-footer-navbar.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/sticky-footer-navbar@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/sticky-footer-navbar.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Sticky footer navbar
          </h3>
        </a>
        <p class="text-body-secondary">
          Attach a footer to the bottom of the viewport with a fixed top navbar.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/custom-components/jumbotron/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/jumbotron.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/jumbotron@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/jumbotron.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Jumbotron
          </h3>
        </a>
        <p class="text-body-secondary">
          Use utilities to recreate and enhance Bootstrap 4's jumbotron.
        </p>
      </div>
    </div>
  </div>
  <div class="bd-content">
    <h2 id="framework">
      Framework
    </h2>
    <p>Examples that focus on implementing uses of built-in components provided by Bootstrap.</p>
    <div class="row">
      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/framework/starter-template/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/starter-template.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/starter-template@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/starter-template.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Starter template
          </h3>
        </a>
        <p class="text-body-secondary">
          Nothing but the basics: compiled CSS and JavaScript.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/framework/grid/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/grid.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/grid@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/grid.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Grid
          </h3>
        </a>
        <p class="text-body-secondary">
          Multiple examples of grid layouts with all four tiers, nesting, and more.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/framework/cheatsheet/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/cheatsheet.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/cheatsheet@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/cheatsheet.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Cheatsheet
          </h3>
        </a>
        <p class="text-body-secondary">
          Kitchen sink of Bootstrap components.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/framework/cheatsheet-rtl/"
          hreflang="ar"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/cheatsheet-rtl.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/cheatsheet-rtl@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/cheatsheet-rtl.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Cheatsheet RTL
          </h3>
        </a>
        <p class="text-body-secondary">
          Kitchen sink of Bootstrap components, RTL.
        </p>
      </div>
    </div>
  </div>
  <div class="bd-content">
    <h2 id="navbars">
      Navbars
    </h2>
    <p>Taking the default navbar component and showing how it can be moved, placed, and extended.</p>
    <div class="row">
      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/navbars/navbars/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/navbars.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/navbars@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/navbars.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Navbars
          </h3>
        </a>
        <p class="text-body-secondary">
          Demonstration of all responsive and container options for the navbar.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/navbars/navbars-offcanvas/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/navbars-offcanvas.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/navbars-offcanvas@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/navbars-offcanvas.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Navbars offcanvas
          </h3>
        </a>
        <p class="text-body-secondary">
          Same as the Navbars example, but with our offcanvas component.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/navbars/navbar-static/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-static.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-static@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-static.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Navbar static
          </h3>
        </a>
        <p class="text-body-secondary">
          Single navbar example of a static top navbar along with some additional content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/navbars/navbar-fixed/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-fixed.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-fixed@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-fixed.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Navbar fixed
          </h3>
        </a>
        <p class="text-body-secondary">
          Single navbar example with a fixed top navbar along with some additional content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/navbars/navbar-bottom/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-bottom.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-bottom@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/navbar-bottom.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Navbar bottom
          </h3>
        </a>
        <p class="text-body-secondary">
          Single navbar example with a bottom navbar along with some additional content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/navbars/offcanvas-navbar/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/offcanvas-navbar.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/offcanvas-navbar@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/offcanvas-navbar.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Offcanvas navbar
          </h3>
        </a>
        <p class="text-body-secondary">
          Turn your expandable navbar into a sliding offcanvas menu (doesn't use our offcanvas component).
        </p>
      </div>
    </div>
  </div>
  <div class="bd-content">
    <h2 id="rtl">
      RTL
    </h2>
    <p>See Bootstrap's RTL version in action with these modified Custom Components examples.</p>
    <div class="bd-callout bd-callout-warning small">
      <p>
        <strong>RTL is still experimental</strong> and will evolve with feedback. Spotted something or have an improvement to suggest?
      </p>
      <p><a href="https://github.com/twbs/bootstrap/issues/new/choose">Please open an issue.</a></p>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/rtl/album-rtl/"
          hreflang="ar"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/album-rtl.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/album-rtl@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/album-rtl.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Album RTL
          </h3>
        </a>
        <p class="text-body-secondary">
          Simple one-page template for photo galleries, portfolios, and more.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/rtl/checkout-rtl/"
          hreflang="ar"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/checkout-rtl.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/checkout-rtl@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/checkout-rtl.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Checkout RTL
          </h3>
        </a>
        <p class="text-body-secondary">
          Custom checkout form showing our form components and their validation features.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/rtl/carousel-rtl/"
          hreflang="ar"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/carousel-rtl.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/carousel-rtl@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/carousel-rtl.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Carousel RTL
          </h3>
        </a>
        <p class="text-body-secondary">
          Customize the navbar and carousel, then add some new components.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/rtl/blog-rtl/"
          hreflang="ar"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/blog-rtl.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/blog-rtl@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/blog-rtl.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Blog RTL
          </h3>
        </a>
        <p class="text-body-secondary">
          Magazine like blog template with header, navigation, featured content.
        </p>
      </div>




      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/rtl/dashboard-rtl/"
          hreflang="ar"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/dashboard-rtl.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/dashboard-rtl@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/dashboard-rtl.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Dashboard RTL
          </h3>
        </a>
        <p class="text-body-secondary">
          Basic admin dashboard shell with fixed sidebar and navbar.
        </p>
      </div>
    </div>
  </div>
  <div class="bd-content">
    <h2 id="integrations">
      Integrations
    </h2>
    <p>Integrations with external libraries.</p>
    <div class="row">
      <div class="col-sm-6 col-md-3 mb-3">
        <a
          class="d-block link-offset-1"
          href="/examples/masonry/"
        >
          <img
            class="img-thumbnail mb-3"
            srcset="https://getbootstrap.com/docs/5.3/assets/img/examples/masonry.png,
                                                    https://getbootstrap.com/docs/5.3/assets/img/examples/masonry@2x.png 2x"
            src="https://getbootstrap.com/docs/5.3/assets/img/examples/masonry.png"
            alt=""
            width="480"
            height="300"
            loading="lazy"
          >
          <h3 class="h5 mb-1">
            Masonry
          </h3>
        </a>
        <p class="text-body-secondary">
          Combine the powers of the Bootstrap grid and the Masonry layout.
        </p>
      </div>
    </div>
  </div>
</template>