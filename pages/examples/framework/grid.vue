<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <main class="mt-5">
    <Container>
      <p><br></p>
      <h1>Bootstrap grid examples</h1>
      <b-p class="lead">
        Basic grid layouts to get you familiar with building within the Bootstrap grid system.
      </b-p>
      <b-p>In these examples the <code>.themed-grid-col</code> class is added to the columns to add some theming. This is not a class that is available in Bootstrap by default.</b-p>

      <b-h
        level="2"
        class="mt-4"
      >
        Five grid tiers
      </b-h>
      <b-p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</b-p>

      <b-div class="row mb-3">
        <b-div class="col-4 themed-grid-col">
          .col-4
        </b-div>
        <b-div class="col-4 themed-grid-col">
          .col-4
        </b-div>
        <b-div class="col-4 themed-grid-col">
          .col-4
        </b-div>
      </b-div>

      <b-div class="row mb-3">
        <b-div class="col-sm-4 themed-grid-col">
          .col-sm-4
        </b-div>
        <b-div class="col-sm-4 themed-grid-col">
          .col-sm-4
        </b-div>
        <b-div class="col-sm-4 themed-grid-col">
          .col-sm-4
        </b-div>
      </b-div>

      <b-div class="row mb-3">
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
      </b-div>

      <b-div class="row mb-3">
        <b-div class="col-lg-4 themed-grid-col">
          .col-lg-4
        </b-div>
        <b-div class="col-lg-4 themed-grid-col">
          .col-lg-4
        </b-div>
        <b-div class="col-lg-4 themed-grid-col">
          .col-lg-4
        </b-div>
      </b-div>

      <b-div class="row mb-3">
        <b-div class="col-xl-4 themed-grid-col">
          .col-xl-4
        </b-div>
        <b-div class="col-xl-4 themed-grid-col">
          .col-xl-4
        </b-div>
        <b-div class="col-xl-4 themed-grid-col">
          .col-xl-4
        </b-div>
      </b-div>

      <b-div class="row mb-3">
        <b-div class="col-xxl-4 themed-grid-col">
          .col-xxl-4
        </b-div>
        <b-div class="col-xxl-4 themed-grid-col">
          .col-xxl-4
        </b-div>
        <b-div class="col-xxl-4 themed-grid-col">
          .col-xxl-4
        </b-div>
      </b-div>

      <b-h
        level="2"
        class="mt-4"
      >
        Three equal columns
      </b-h>
      <b-p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</b-p>
      <b-div class="row mb-3">
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
      </b-div>

      <b-h
        level="2"
        class="mt-4"
      >
        Three equal columns alternative
      </b-h>
      <b-p>By using the <code>.row-cols-*</code> classes, you can easily create a grid with equal columns.</b-p>
      <b-div class="row row-cols-md-3 mb-3">
        <b-div class="col themed-grid-col">
          <code>.col</code> child of <code>.row-cols-md-3</code>
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> child of <code>.row-cols-md-3</code>
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> child of <code>.row-cols-md-3</code>
        </b-div>
      </b-div>

      <b-h
        level="2"
        class="mt-4"
      >
        Three unequal columns
      </b-h>
      <b-p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</b-p>
      <b-div class="row mb-3">
        <b-div class="col-md-3 themed-grid-col">
          .col-md-3
        </b-div>
        <b-div class="col-md-6 themed-grid-col">
          .col-md-6
        </b-div>
        <b-div class="col-md-3 themed-grid-col">
          .col-md-3
        </b-div>
      </b-div>

      <b-h
        level="2"
        class="mt-4"
      >
        Two columns
      </b-h>
      <b-p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</b-p>
      <b-div class="row mb-3">
        <b-div class="col-md-8 themed-grid-col">
          .col-md-8
        </b-div>
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
      </b-div>

      <b-h
        level="2"
        class="mt-4"
      >
        Full width, single column
      </b-h>
      <b-p class="text-warning">
        No grid classes are necessary for full-width elements.
      </b-p>

      <hr class="my-4">

      <b-h
        level="2"
        class="mt-4"
      >
        Two columns with two nested columns
      </b-h>
      <b-p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</b-p>
      <b-p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</b-p>
      <b-div class="row mb-3">
        <b-div class="col-md-8 themed-grid-col">
          <b-div class="pb-3">
            .col-md-8
          </b-div>
          <b-div class="row">
            <b-div class="col-md-6 themed-grid-col">
              .col-md-6
            </b-div>
            <b-div class="col-md-6 themed-grid-col">
              .col-md-6
            </b-div>
          </b-div>
        </b-div>
        <b-div class="col-md-4 themed-grid-col">
          .col-md-4
        </b-div>
      </b-div>

      <hr class="my-4">

      <b-h
        level="2"
        class="mt-4"
      >
        Mixed: mobile and desktop
      </b-h>
      <b-p>The Bootstrap v5 grid system has six tiers of classes: xs (extra small, this class infix is not used), sm (small), md (medium), lg (large), xl (x-large), and xxl (xx-large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</b-p>
      <b-p>Each tier of classes scales up, meaning if you plan on setting the same widths for md, lg, xl and xxl, you only need to specify md.</b-p>
      <b-div class="row mb-3">
        <b-div class="col-md-8 themed-grid-col">
          .col-md-8
        </b-div>
        <b-div class="col-6 col-md-4 themed-grid-col">
          .col-6 .col-md-4
        </b-div>
      </b-div>
      <b-div class="row mb-3">
        <b-div class="col-6 col-md-4 themed-grid-col">
          .col-6 .col-md-4
        </b-div>
        <b-div class="col-6 col-md-4 themed-grid-col">
          .col-6 .col-md-4
        </b-div>
        <b-div class="col-6 col-md-4 themed-grid-col">
          .col-6 .col-md-4
        </b-div>
      </b-div>
      <b-div class="row mb-3">
        <b-div class="col-6 themed-grid-col">
          .col-6
        </b-div>
        <b-div class="col-6 themed-grid-col">
          .col-6
        </b-div>
      </b-div>

      <hr class="my-4">

      <b-h
        level="2"
        class="mt-4"
      >
        Mixed: mobile, tablet, and desktop
      </b-h>
      <b-div class="row mb-3">
        <b-div class="col-sm-6 col-lg-8 themed-grid-col">
          .col-sm-6 .col-lg-8
        </b-div>
        <b-div class="col-6 col-lg-4 themed-grid-col">
          .col-6 .col-lg-4
        </b-div>
      </b-div>
      <b-div class="row mb-3">
        <b-div class="col-6 col-sm-4 themed-grid-col">
          .col-6 .col-sm-4
        </b-div>
        <b-div class="col-6 col-sm-4 themed-grid-col">
          .col-6 .col-sm-4
        </b-div>
        <b-div class="col-6 col-sm-4 themed-grid-col">
          .col-6 .col-sm-4
        </b-div>
      </b-div>

      <hr class="my-4">

      <b-h
        level="2"
        class="mt-4"
      >
        Gutters
      </b-h>
      <b-p>With <code>.gx-*</code> classes, the horizontal gutters can be adjusted.</b-p>
      <b-div class="row row-cols-1 row-cols-md-3 gx-4">
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gx-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gx-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gx-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gx-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gx-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gx-4</code> gutters
        </b-div>
      </b-div>
      <b-p class="mt-4">
        Use the <code>.gy-*</code> classes to control the vertical gutters.
      </b-p>
      <b-div class="row row-cols-1 row-cols-md-3 gy-4">
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gy-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gy-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gy-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gy-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gy-4</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.gy-4</code> gutters
        </b-div>
      </b-div>
      <b-p class="mt-4">
        With <code>.g-*</code> classes, the gutters in both directions can be adjusted.
      </b-p>
      <b-div class="row row-cols-1 row-cols-md-3 g-3">
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.g-3</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.g-3</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.g-3</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.g-3</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.g-3</code> gutters
        </b-div>
        <b-div class="col themed-grid-col">
          <code>.col</code> with <code>.g-3</code> gutters
        </b-div>
      </b-div>
    </Container>

    <b-div
      id="containers"
      class="container"
    >
      <hr class="my-4">

      <b-h
        level="2"
        class="mt-4"
      >
        Containers
      </b-h>
      <b-p>Additional classes added in Bootstrap v4.4 allow containers that are 100% wide until a particular breakpoint. v5 adds a new <code>xxl</code> breakpoint.</b-p>
    </b-div>

    <b-div class="container themed-container">
      .container
    </b-div>
    <b-div class="container-sm themed-container">
      .container-sm
    </b-div>
    <b-div class="container-md themed-container">
      .container-md
    </b-div>
    <b-div class="container-lg themed-container">
      .container-lg
    </b-div>
    <b-div class="container-xl themed-container">
      .container-xl
    </b-div>
    <b-div class="container-xxl themed-container">
      .container-xxl
    </b-div>
    <b-div class="container-fluid themed-container">
      .container-fluid
    </b-div>
  </main>
</template>
<!-- <script>
 import './grid.css'
</script> -->

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>