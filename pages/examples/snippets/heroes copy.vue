<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <b-div>
    <b-h
      level="1"
      visually-hidden
    >
      Heroes examples
    </b-h>

    <!-- Example hero 1 start -->
    <b-div
      padding="x-4 y-5"
      margin="y-5"
      text-alignment="center"
    >
      <b-img
        src="https://dummyimage.com/900x400/000000/fff&text=v"
        alt=""
        width="72"
        height="57"
        display="block"
        margin="x-auto b-4"
      />
      <b-h
        level="1"
        display-headings="5"
        font-weight="bold"
        visually-hidden
      />
      <b-h
        level="1"
        display-headings="5"
        font-weight="bold"
      >
        Centered hero
      </b-h>
      <b-div
        col="lg-6"
        margin="x-auto"
      >
        <b-p
          margin="b-4"
          lead
        >
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
        </b-p>
        <b-div
          display="grid sm-flex"
          :gap="2"
          justify-content="sm-center"
        >
          <b-button
            type="button"
            button="primary"
            size="lg"
            :gap="3"
            padding="x-4"
          >
            Primary button
          </b-button>
          <b-button
            type="button"
            button="outline-secondary"
            size="lg"
            padding="x-4"
          >
            Secondary
          </b-button>
        </b-div>
      </b-div>
    </b-div>
    <!-- Example hero 1 end -->

    <b-div class="b-example-b-divider" />
  </b-div>
  <div>
    <main>
      <b-h
        level="1"
        class="visually-hidden"
      >
        Heroes examples
      </b-h>
      <b-div class="b-example-b-divider" />
      <!--example2start-->
      <b-div
        padding="x-4 t-5"
        margin="y-5"
        text-alignment="center"
      >
        <b-h
          level="1"
          display="4"
          font-weight="bold"
        >
          Centered screenshot
        </b-h>
        <b-div
          col="lg-6"
          margin="x-auto"
        >
          <b-p
            lead
            margin="b-4"
          >
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
          </b-p>
          <b-div
            display="grid sm-flex"
            gap="2"
            justify-content="sm-center"
            margin="5"
          >
            <b-button
              type="button"
              button="primary"
              size="lg"
              padding="x-4"
              margin="e-sm-3"
            >
              Primary button
            </b-button>
            <b-button
              type="button"
              button="outline-secondary"
              size="lg"
              padding="x-4"
            >
              Secondary
            </b-button>
          </b-div>
        </b-div>
        <b-div overflow="hidden">
          <Container
            padding="x-5"
            text-alignment="center"
          >
            <b-img
              src="https://dummyimage.com/900x400/000000/fff"
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </Container>
        </b-div>
      </b-div>
      <!--example2end-->
      <b-div class="b-example-divider" />
      <!--example3start-->
      <Container
        col="xxl-8"
        padding="x-4 y-5"
      >
        <Row
          align-items="center"
          gap="5"
          padding="y-5"
        >
          <Col
            col="10 sm-8 lg-6"
            text-alignment="center"
          >
            <b-img
              src="https://dummyimage.com/1400x1000/000000/fff"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </Col>
          <Col col="lg-6">
            <b-h
              level="1"
              display="5"
              font-weight="bold"
              line-height="1"
              margin="b-3"
            >
              Responsive left-aligned hero with image
            </b-h>
            <b-p lead>
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </b-p>
            <b-div
              display="grid md-flex"
              gap="2"
              justify-content="md-start"
            >
              <b-button
                type="button"
                butoon="primary"
                size="lg"
                padding="x-4"
                margin="e-md-2"
              >
                Primary
              </b-button>
              <b-button
                type="button"
                button="outline-secondary"
                size="lg"
                padding="x-4"
              >
                Default
              </b-button>
            </b-div>
          </Col>
        </Row>
      </Container>
      <!--example3end-->
      <b-div class="b-example-b-divider" />
      <!--example4start-->
      <Container
        col="xl-10 xxl-8"
        paddong="x-4 y-5"
      >
        <Row
          align-items="center"
          gutter="lg-5"
          padding="y-5"
        >
          <b-div
            col="lg-7"
            text-align="center lg-start"
          >
            <b-h
              level="1"
              display="4"
              font-weight="bold"
              line-height="1"
              margin="b-3"
            >
              Vertically centered hero sign-up form
            </b-h>
            <b-p
              col="lg-10"
              font-size="4"
            >
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
            </b-p>
          </b-div>
          <b-div
            col="md-10 lg-5"
            margin="x-auto"
          >
            <BForm
              padding="4 md-5"
              border
              rounded-size="3"
              background-color="light"
            >
              <b-div margin="b-3">
                <BFormControl>
                  <BFormInput
                    type="e-mail"
                    placeholder="name@example.com"
                  />
                  <BFormLabel>Email address</BFormLabel>
                </BFormControl>
              </b-div>
              <b-div margin="b-3">
                <BFormControl>
                  <BFormInput
                    type="password"
                    placeholder="Password"
                  />
                  <BFormLabel>Password</BFormLabel>
                </BFormControl>
              </b-div>
              <b-div margin="b-3">
                <BFormLabel>
                  <BFormCheckInput />
                  <BFormCheckLabel> Remenber me </BFormCheckLabel>
                </BFormLabel>
              </b-div>
              <b-button
                type="submit"
                button="primary"
                size="lg"
                relative-width="100"
              >
                Sign up
              </b-button>
              <hr margin="y-4">
              <b-p text-color="muted">
                By clicking Sign up, you agree to the terms of use.
              </b-p>
            </BForm>
          </b-div>
        </Row>
      </Container>
      <!--example4end-->
      <b-div class="b-example-b-divider" />
      <!--example5start-->
      <Container margin="y-5">
        <Row
          padding="4 b-0 e-lg-0 t-lg-5"
          align-items="center"
          rounded="3"
          border
          shadow="lg"
        >
          <b-div
            col="lg-7"
            padding="3 lg-5 t-lg-3"
          >
            <b-h
              level="1"
              display="4"
              font-weight="bold"
              line-height="1"
            >
              Border hero with cropped image and shadows
            </b-h>
            <b-p lead>
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </b-p>
            <b-div
              display="grid md-flex"
              gap="2"
              justify-content="md-start"
              margin="b-4 b-lg-3"
            >
              <b-button
                type="button"
                button="primary"
                button-size="lg"
                padding="x-4"
                margin="e-md-2"
                font-weight="bold"
              >
                Primary
              </b-button>
              <b-button
                type="button"
                button="outline-secondary"
                button-size="lg"
                padding="x-4"
              >
                Default
              </b-button>
            </b-div>
          </b-div>
          <b-div
            col="lg-4"
            offset="lg-1"
            padding="0"
            shadow="lg"
            overflow="hidden"
            text-alignment="center"
          >
            <b-img
              src="https://dummyimage.com/1400x1000/000000/fff"
              alt=""
              width="720"
              fluid
              rounded="lg-3"
            />
          </b-div>
        </Row>
      </Container>
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
            <b-div
              display="grid md-flex"
              gap="2"
              justify-content="md-start"
              margin="b-4 b-lg-3"
            >
              <b-button
                type="button"
                button="primary"
                size="lg"
                padding="x-4"
                margin="e-md-2"
                font-weight="bold"
              >
                Primary
              </b-button>
              <b-button
                type="button"
                button="outline-secondary"
                size="lg"
                padding="x-4"
              >
                Default
              </b-button>
            </b-div>
          </b-div>
          <b-div
            col="lg-4"
            offset="lg-1"
            padding="0"
            overflow="hidden"
            shadow="lg"
            text-alignment="center"
          >
            <b-img
              src="https://dummyimage.com/1400x1000/000000/fff"
              alt=""
              width="720"
              fluid
              rounded="lg-3"
            />
          </b-div>
          <!-- <b-img class="rounded-lg-3" src="./bootstrap-docs.png" alt="" width="720" /> -->
        </b-div>
      </b-div>
      <!--example5end-->
      <b-div class="b-example-b-divider" />
      <!--example6start-->
      <b-div
        background-color="dark"
        text-color="secondary"
        padding="x-4 y-5"
        text-alignment="center"
      >
        <b-div padding="y-5">
          <b-h
            level="1"
            display="5"
            font-weight="bold"
            text-color="white"
          >
            Dark mode hero
          </b-h>
          <b-div
            col="lg-6"
            margin="x-auto"
          >
            <b-p
              font-size="5"
              margin="b-4"
            >
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </b-p>
            <b-div
              display="grid sm-flex"
              gap="2"
              justify-content="sm-center"
            >
              <b-button
                type="button"
                button="outline-info"
                button-size="lg"
                padding="x-4"
                margin="e-md-2"
                font-weight="bold"
              >
                Custom button
              </b-button>
              <b-button
                type="button"
                button="outline-light"
                button-size="lg"
                padding="x-4"
              >
                Secondary
              </b-button>
            </b-div>
          </b-div>
        </b-div>
      </b-div>
      <!--example6end-->
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