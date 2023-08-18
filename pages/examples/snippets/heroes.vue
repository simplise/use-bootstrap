<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <div>
    <main>
      <b-h
        level="1"
        class="visually-hidden"
      >
        Heroes examples
      </b-h>

      <b-div class="px-4 py-5 my-5 text-center">
        <!-- <b-img class="d-block mx-auto mb-4" src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
        <Img
          class="d-block mx-auto mb-4"
          alt=""
          width="72"
          height="57"
          src="https://dummyimage.com/900x400/000000/fff&text=v"
        />
        <b-h
          level="1"
          class="display-5 fw-bold"
        >
          Centered hero
        </b-h>
        <b-div class="col-lg-6 mx-auto">
          <b-p class="lead mb-4">
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
          </b-p>
          <b-div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <b-button
              type="button"
              class="btn btn-primary btn-lg px-4 gap-3"
            >
              Primary button
            </b-button>
            <b-button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </b-button>
          </b-div>
        </b-div>
      </b-div>

      <b-div class="b-example-b-divider" />

      <div class="px-4 pt-5 my-5 text-center ">
        <b-h
          level="1"
          class="display-4 fw-bold"
        >
          Centered screenshot
        </b-h>
        <b-div class="col-lg-6 mx-auto">
          <b-p class="lead mb-4">
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
          </b-p>
          <b-div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <b-button
              type="button"
              class="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Primary button
            </b-button>
            <b-button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </b-button>
          </b-div>
        </b-div>
        <b-div
          class="overflow-hidden"
          style="max-height: 30vh;"
        >
          <b-div
            class="container px-5"
            text-alignment="center"
          >
            <!-- <b-img src="./bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" /> -->
            <Img
              src="https://dummyimage.com/900x400/000000/fff"
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </b-div>
        </b-div>
      </div>

      <div class="b-example-b-divider" />

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div
            class="col-10 col-sm-8 col-lg-6"
            text-alignment="center"
          >
            <!-- <b-img src="./bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> -->
            <img
              src="https://dummyimage.com/1400x1000/000000/fff"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            >
          </div>
          <div class="col-lg-6">
            <b-h
              level="1"
              class="display-5 fw-bold lh-1 mb-3"
            >
              Responsive left-aligned hero with image
            </b-h>
            <b-p class="lead">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </b-p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <b-button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </b-button>
              <b-button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </b-button>
            </div>
          </div>
        </div>
      </div>

      <b-div class="b-example-b-divider" />

      <b-div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <b-div class="row align-items-center g-lg-5 py-5">
          <b-div class="col-lg-7 text-center text-lg-start">
            <b-h
              level="1"
              class="display-4 fw-bold lh-1 mb-3"
            >
              Vertically centered hero sign-up form
            </b-h>
            <b-p class="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
            </b-p>
          </b-div>
          <b-div class="col-md-10 mx-auto col-lg-5">
            <BForm class="p-4 p-md-5 border rounded-3 bg-light">
              <b-div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                >
                <label for="floatingInput">Email address</label>
              </b-div>
              <b-div class="form-floating mb-3">
                <input
                  id="floatingPassword"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                >
                <label for="floatingPassword">Password</label>
              </b-div>
              <b-div class="checkbox mb-3">
                <label>
                  <input
                    type="checkbox"
                    value="remember-me"
                  > Remember me
                </label>
              </b-div>
              <b-button
                class="w-100 btn btn-lg btn-primary"
                type="submit"
              >
                Sign up
              </b-button>
              <hr class="my-4">
              <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </BForm>
          </b-div>
        </b-div>
      </b-div>

      <b-div class="b-example-b-divider" />

      <b-div class="container my-5">
        <b-div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <b-div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <b-h
              level="1"
              class="display-4 fw-bold lh-1"
            >
              Border hero with cropped image and shadows
            </b-h>
            <b-p class="lead">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </b-p>
            <b-div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <b-button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </b-button>
              <b-button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </b-button>
            </b-div>
          </b-div>
          <b-div
            class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"
            text-alignment="center"
          >
            <b-img
              class="rounded-lg-3"
              src="https://dummyimage.com/1400x1000/000000/fff"
              alt=""
              width="720"
              fluid
            />
            <!-- <b-img class="rounded-lg-3" src="./bootstrap-docs.png" alt="" width="720" /> -->
          </b-div>
        </b-div>
      </b-div>

      <b-div class="b-example-b-divider" />

      <b-div class="bg-dark text-secondary px-4 py-5 text-center">
        <b-div class="py-5">
          <b-h
            level="1"
            class="display-5 fw-bold text-white"
          >
            Dark mode hero
          </b-h>
          <b-div class="col-lg-6 mx-auto">
            <b-p class="fs-5 mb-4">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </b-p>
            <b-div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <b-button
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Custom button
              </b-button>
              <b-button
                type="button"
                class="btn btn-outline-light btn-lg px-4"
              >
                Secondary
              </b-button>
            </b-div>
          </b-div>
        </b-div>
      </b-div>

      <b-div class="b-example-b-divider mb-0" />
    </main>
  </div>
</template>
 <!-- <script>
   import './heroes.css'
 </script> -->
 
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>