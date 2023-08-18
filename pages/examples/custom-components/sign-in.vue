<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <main class="mt-5 mb-5 form-signin w-100 m-auto">
    <BForm>
      <!-- <b-img class="mb-4" src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <img
        class="mt-5 mb-4"
        alt=""
        width="72"
        height="57"
        src="https://dummyimage.com/72x53/000000/fff"
      >
      <b-h
        level="1"
        class="h3 mb-3 fw-normal"
      >
        Please sign in
      </b-h>

      <b-div class="form-floating">
        <input
          id="floatingInput"
          type="email"
          class="form-control"
          placeholder="name@example.com"
        >
        <label for="floatingInput">Email address</label>
      </b-div>
      <b-div class="form-floating">
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
        Sign in
      </b-button>
      <!-- <b-p class="mt-5 mb-3 text-muted">&copy; 2017–{{< year >}}</b-p> -->
      <b-p class="mt-5 mb-3 text-muted">
        &copy; 2017–
      </b-p>
    </BForm>
  </main>
</template>
<!-- <script>
 import './signin.css'
</script> -->

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>