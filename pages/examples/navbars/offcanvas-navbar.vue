<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <!--<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Offcanvas navbar</a>
     <b-button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
       <b-span class="navbar-toggler-icon"></b-span>
     </b-button>
 
     <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <b-a class="nav-link active" aria-current="page" href="#">Dashboard</b-a>
         </li> 
         <li class="nav-item">
           <b-a class="nav-link" href="#">Notifications</b-a>
        </li> 
         <li class="nav-item">
           <b-a class="nav-link" href="#">Profile</b-a>
         </li> 
         <li class="nav-item">
           <a class="nav-link" href="#">Switch account</a>
         </li> 
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="dropdown01" toggle="dropdown" aria-expanded="false">Settings</a>
           <ul class="dropdown-menu" aria-labelledby="dropdown01">
             <li><b-a class="dropdown-item" href="#">Action</b-a></li> 
             <li><b-a class="dropdown-item" href="#">Another action</b-a></li> 
             <li><b-a class="dropdown-item" href="#">Something else here</b-a></li> 
           </ul>
          </li> 
        </ul>
       <BForm class="d-flex" role="search">
         <BFormInput class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         <b-button class="btn btn-outline-success" type="submit">Search</b-button>
       </BForm>
     </div>
   </div>
  </nav> -->

  <b-div class="nav-scroller bg-body shadow-sm">
    <Nav
      class="nav"
      aria-label="Secondary navigation"
    >
      <b-a
        class="nav-link active"
        aria-current="page"
        href="#"
      >
        Dashboard
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Friends
        <b-span class="badge bg-light text-dark rounded-pill align-text-bottom">
          27
        </b-span>
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Explore
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Suggestions
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Link
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Link
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Link
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Link
      </b-a>
      <b-a
        class="nav-link"
        href="#"
      >
        Link
      </b-a>
    </Nav>
  </b-div>

  <main class="container">
    <b-div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
      <b-img
        class="me-3"
        alt=""
        width="48"
        height="38"
      />
      <!-- <b-img class="me-3" src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38" /> -->
      <b-div class="lh-1">
        <b-h
          level="1"
          class="h6 mb-0 text-white lh-1"
        >
          Bootstrap
        </b-h>
        <small>Since 2011</small>
      </b-div>
    </b-div>

    <b-div class="my-3 p-3 bg-body rounded shadow-sm">
      <b-h
        level="6"
        class="border-bottom pb-2 mb-0"
      >
        Recent updates
      </b-h>
      <b-div class="d-flex text-muted pt-3">
        <b-div
          width="32"
          height="32"
          background="#007bff"
          color="#007bff"
          class="flex-shrink-0 me-2 rounded"
        />
        <b-p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@username</strong>
          Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
        </b-p>
      </b-div>
      <b-div class="d-flex text-muted pt-3">
        <b-div
          width="32"
          height="32"
          background="#e83e8c"
          color="#e83e8c"
          class="flex-shrink-0 me-2 rounded"
        />
        <b-p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@username</strong>
          Some more representative placeholder content, related to this other user. Another status update, perhaps.
        </b-p>
      </b-div>
      <b-div class="d-flex text-muted pt-3">
        <b-div
          width="32"
          height="32"
          background="#6f42c1"
          color="#6f42c1"
          class="flex-shrink-0 me-2 rounded"
        />
        <b-p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@username</strong>
          This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
        </b-p>
      </b-div>
      <small class="d-block text-end mt-3">
        <b-a href="#">All updates</b-a>
      </small>
    </b-div>

    <b-div class="my-3 p-3 bg-body rounded shadow-sm">
      <b-h
        level="6"
        class="border-bottom pb-2 mb-0"
      >
        Suggestions
      </b-h>
      <b-div class="d-flex text-muted pt-3">
        <b-div
          width="32"
          height="32"
          background="#007bff"
          color="#007bff"
          class="flex-shrink-0 me-2 rounded"
        />
        <b-div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <b-div class="d-flex justify-content-between">
            <strong class="text-gray-dark">Full Name</strong>
            <b-a href="#">
              Follow
            </b-a>
          </b-div>
          <b-span class="d-block">
            @username
          </b-span>
        </b-div>
      </b-div>
      <b-div class="d-flex text-muted pt-3">
        <b-div
          width="32"
          height="32"
          background="#007bff"
          color="#007bff"
          class="flex-shrink-0 me-2 rounded"
        />
        <b-div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <b-div class="d-flex justify-content-between">
            <strong class="text-gray-dark">Full Name</strong>
            <b-a href="#">
              Follow
            </b-a>
          </b-div>
          <b-span class="d-block">
            @username
          </b-span>
        </b-div>
      </b-div>
      <b-div class="d-flex text-muted pt-3">
        <b-div
          width="32"
          height="32"
          background="#007bff"
          color="#007bff"
          class="flex-shrink-0 me-2 rounded"
        />
        <b-div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <b-div class="d-flex justify-content-between">
            <strong class="text-gray-dark">Full Name</strong>
            <b-a href="#">
              Follow
            </b-a>
          </b-div>
          <b-span class="d-block">
            @username
          </b-span>
        </b-div>
      </b-div>
      <small class="d-block text-end mt-3">
        <b-a href="#">All suggestions</b-a>
      </small>
    </b-div>
  </main>
</template>

<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>

<!-- <script>
 import './offcanvas.css'
 import './offcanvas.js'
</script> -->