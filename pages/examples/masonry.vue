<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <main class="container py-5">
    <b-h level="1">
      Bootstrap and Masonry
    </b-h>
    <b-p class="lead">
      Integrate <b-a href="https://masonry.desandro.com/">
        Masonry
      </b-a> with the Bootstrap grid system and cards component.
    </b-p>

    <b-p>Masonry is not included in Bootstrap. Add it by including the JavaScript plugin manually, or using a CDN like so:</b-p>

    <pre><code>
 &lt;script src=&quot;https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js&quot; integrity=&quot;sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D&quot; crossorigin=&quot;anonymous&quot; async&gt;&lt;/script&gt;
   </code></pre>

    <b-p>By adding <code>data-masonry='{"percentPosition": true }'</code> to the <code>.row</code> wrapper, we can combine the powers of Bootstrap's responsive grid and Masonry's positioning.</b-p>

    <hr class="my-5">

    <b-div
      class="row"
      data-masonry="{&quot;percentPosition&quot;: true }"
    >
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card">
          <b-div
            width="100%"
            height="200"
            class="card-img-top"
            text="Image cap"
          />
          <b-div class="card-body">
            <b-h
              level="5"
              class="card-title"
            >
              Card title that wraps to a new line
            </b-h>
            <b-p class="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </b-p>
          </b-div>
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card p-3">
          <BFigure class="p-3 mb-0">
            <BBlockquote>
              <b-p>A well-known quote, contained in a blockquote element.</b-p>
            </BBlockquote>
            <b-figcaption class="blockquote-footer mb-0 text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </b-figcaption>
          </BFigure>
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card">
          <b-div
            width="100%"
            height="200"
            class="card-img-top"
            text="Image cap"
          />
          <b-div class="card-body">
            <b-h
              level="5"
              class="card-title"
            >
              Card title
            </b-h>
            <b-p class="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </b-p>
            <b-p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </b-p>
          </b-div>
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card bg-primary text-white text-center p-3">
          <BFigure class="mb-0">
            <BBlockquote class="blockquote">
              <b-p>A well-known quote, contained in a blockquote element.</b-p>
            </BBlockquote>
            <b-figcaption class="blockquote-footer mb-0 text-white">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </b-figcaption>
          </BFigure>
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card text-center">
          <b-div class="card-body">
            <b-h
              level="5"
              class="card-title"
            >
              Card title
            </b-h>
            <b-p class="card-text">
              This card has a regular title and short paragraph of text below it.
            </b-p>
            <b-p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </b-p>
          </b-div>
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card">
          <b-div
            width="100%"
            height="260"
            class="card-img"
            text="Card image"
          />
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card p-3 text-end">
          <BFigure class="mb-0">
            <BBlockquote>
              <b-p>A well-known quote, contained in a blockquote element.</b-p>
            </BBlockquote>
            <b-figcaption class="blockquote-footer mb-0 text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </b-figcaption>
          </BFigure>
        </b-div>
      </b-div>
      <b-div class="col-sm-6 col-lg-4 mb-4">
        <b-div class="card">
          <b-div class="card-body">
            <b-h
              level="5"
              class="card-title"
            >
              Card title
            </b-h>
            <b-p class="card-text">
              This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.
            </b-p>
            <b-p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </b-p>
          </b-div>
        </b-div>
      </b-div>
    </b-div>
  </main>
</template>


<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>