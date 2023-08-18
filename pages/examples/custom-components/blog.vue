<script setup lang="ts">
definePageMeta({
  layout: 'examples',
  title: ``,
  description: ``
})
</script>

<template>
  <Container class="mt-5 mb-5">
    <header class="blog-header lh-1 py-3">
      <b-div class="row flex-nowrap justify-content-between align-items-center">
        <b-div class="col-4 pt-1">
          <b-a
            class="link-secondary"
            href="#"
          >
            Subscribe
          </b-a>
        </b-div>
        <b-div class="col-4 text-center">
          <b-a
            class="blog-header-logo text-dark"
            href="#"
          >
            Large
          </b-a>
        </b-div>
        <b-div class="col-4 d-flex justify-content-end align-items-center">
          <b-a
            class="link-secondary"
            href="#"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="mx-3"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Search</title>
              <circle
                cx="10.5"
                cy="10.5"
                r="7.5"
              />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </b-a>
          <b-a
            class="btn btn-sm btn-outline-secondary"
            href="#"
          >
            Sign up
          </b-a>
        </b-div>
      </b-div>
    </header>

    <b-div class="nav-scroller py-1 mb-2">
      <Nav class="nav d-flex justify-content-between">
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          World
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          U.S.
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Technology
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Design
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Culture
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Business
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Politics
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Opinion
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Science
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Health
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Style
        </b-a>
        <b-a
          class="p-2 link-secondary"
          href="#"
        >
          Travel
        </b-a>
      </Nav>
    </b-div>
  </Container>

  <main class="container">
    <b-div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <b-div class="col-md-6 px-0">
        <b-h
          level="1"
          class="display-4 fst-italic"
        >
          Title of a longer featured blog post
        </b-h>
        <b-p class="lead my-3">
          Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
        </b-p>
        <b-p class="lead mb-0">
          <b-a
            href="#"
            class="text-white fw-bold"
          >
            Continue reading...
          </b-a>
        </b-p>
      </b-div>
    </b-div>

    <b-div class="row mb-2">
      <b-div class="col-md-6">
        <b-div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <b-div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <b-h
              level="3"
              class="mb-0"
            >
              Featured post
            </b-h>
            <b-div class="mb-1 text-muted">
              Nov 12
            </b-div>
            <b-p class="card-text mb-auto">
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </b-p>
            <b-a
              href="#"
              class="stretched-link"
            >
              Continue reading
            </b-a>
          </b-div>
          <b-div class="col-auto d-none d-lg-block">
            <b-div
              width="200"
              height="250"
              background="#55595c"
              color="#eceeef"
              text="Thumbnail"
            />
          </b-div>
        </b-div>
      </b-div>
      <b-div class="col-md-6">
        <b-div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <b-div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <b-h
              level="3"
              class="mb-0"
            >
              Post title
            </b-h>
            <b-div class="mb-1 text-muted">
              Nov 11
            </b-div>
            <b-p class="mb-auto">
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </b-p>
            <b-a
              href="#"
              class="stretched-link"
            >
              Continue reading
            </b-a>
          </b-div>
          <b-div class="col-auto d-none d-lg-block">
            <b-div
              width="200"
              height="250"
              background="#55595c"
              color="#eceeef"
              text="Thumbnail"
            />
          </b-div>
        </b-div>
      </b-div>
    </b-div>

    <b-div class="row g-5">
      <b-div class="col-md-8">
        <b-h
          level="3"
          class="pb-4 mb-4 fst-italic border-bottom"
        >
          From the Firehose
        </b-h>

        <article class="blog-post">
          <b-h
            level="2"
            class="blog-post-title mb-1"
          >
            Sample blog post
          </b-h>
          <b-p class="blog-post-meta">
            January 1, 2021 by <b-a href="#">
              Mark
            </b-a>
          </b-p>

          <b-p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</b-p>
          <hr>
          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <b-h level="2">
            Blockquotes
          </b-h>
          <b-p>This is an example blockquote in action:</b-p>
          <BBlockquote>
            <b-p>Quoted text goes here.</b-p>
          </BBlockquote>
          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <b-h level="3">
            Example lists
          </b-h>
          <b-p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</b-p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <b-p>And this is an ordered list:</b-p>
          <b-ol>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </b-ol>
          <b-p>And this is a definition list:</b-p>
          <b-dl>
            <b-dt>HyperText Markup Language (HTML)</b-dt>
            <b-dd>The language used to describe and define the content of a Web page</b-dd>
            <b-dt>Cascading Style Sheets (CSS)</b-dt>
            <b-dd>Used to describe the appearance of Web content</b-dd>
            <b-dt>JavaScript (JS)</b-dt>
            <b-dd>The programming language used to build advanced Web sites and applications</b-dd>
          </b-dl>
          <b-h level="2">
            Inline HTML elements
          </b-h>
          <b-p>
            HTML defines a long list of available inline tags, a complete list of which can be found on the <b-a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
              Mozilla Developer Network
            </b-a>.
          </b-p>
          <ul>
            <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
            <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
          </ul>
          <b-p>Most of these elements are styled by browsers with few modifications on our part.</b-p>
          <b-h level="2">
            Heading
          </b-h>
          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <b-h level="3">
            Sub-heading
          </b-h>
          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <pre><code>Example code block</code></pre>
          <b-p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</b-p>
        </article>

        <article class="blog-post">
          <b-h
            level="2"
            class="blog-post-title mb-1"
          >
            Another blog post
          </b-h>
          <b-p class="blog-post-meta">
            December 23, 2020 by <b-a href="#">
              Jacob
            </b-a>
          </b-p>

          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <BBlockquote>
            <b-p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</b-p>
          </BBlockquote>
          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <b-h level="3">
            Example table
          </b-h>
          <b-p>And don't forget about tables in these posts:</b-p>
          <b-table class="table">
            <b-thead>
              <b-tr>
                <b-th>Name</b-th>
                <b-th>Upvotes</b-th>
                <b-th>Downvotes</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>Alice</b-td>
                <b-td>10</b-td>
                <b-td>11</b-td>
              </b-tr>
              <b-tr>
                <b-td>Bob</b-td>
                <b-td>4</b-td>
                <b-td>3</b-td>
              </b-tr>
              <b-tr>
                <b-td>Charlie</b-td>
                <b-td>7</b-td>
                <b-td>9</b-td>
              </b-tr>
            </b-tbody>
            <b-tfoot>
              <b-tr>
                <b-td>Totals</b-td>
                <b-td>21</b-td>
                <b-td>23</b-td>
              </b-tr>
            </b-tfoot>
          </b-table>

          <b-p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</b-p>
        </article>

        <article class="blog-post">
          <b-h
            level="2"
            class="blog-post-title mb-1"
          >
            New feature
          </b-h>
          <b-p class="blog-post-meta">
            December 14, 2020 by <b-a href="#">
              Chris
            </b-a>
          </b-p>

          <b-p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</b-p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <b-p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</b-p>
        </article>

        <Nav
          class="blog-pagination"
          aria-label="Pagination"
        >
          <b-a
            class="btn btn-outline-primary rounded-pill"
            href="#"
          >
            Older
          </b-a>
          <b-a class="btn btn-outline-secondary rounded-pill disabled">
            Newer
          </b-a>
        </Nav>
      </b-div>

      <b-div class="col-md-4">
        <b-div
          class="position-sticky"
          style="top: 2rem;"
        >
          <b-div class="p-4 mb-3 bg-light rounded">
            <b-h
              level="4"
              class="fst-italic"
            >
              About
            </b-h>
            <b-p class="mb-0">
              Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
            </b-p>
          </b-div>

          <b-div class="p-4">
            <b-h
              level="4"
              class="fst-italic"
            >
              Archives
            </b-h>
            <b-ol class="list-unstyled mb-0">
              <li>
                <b-a href="#">
                  March 2021
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  February 2021
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  January 2021
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  December 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  November 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  October 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  September 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  August 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  July 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  June 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  May 2020
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  April 2020
                </b-a>
              </li>
            </b-ol>
          </b-div>

          <b-div class="p-4">
            <b-h
              level="4"
              class="fst-italic"
            >
              Elsewhere
            </b-h>
            <b-ol class="list-unstyled">
              <li>
                <b-a href="#">
                  GitHub
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  Twitter
                </b-a>
              </li>
              <li>
                <b-a href="#">
                  Facebook
                </b-a>
              </li>
            </b-ol>
          </b-div>
        </b-div>
      </b-div>
    </b-div>
  </main>

  <footer class="blog-footer">
    <b-p>
      Blog template built for <b-a href="https://getbootstrap.com/">
        Bootstrap
      </b-a> by <b-a href="https://twitter.com/mdo">
        @mdo
      </b-a>.
    </b-p>
    <b-p>
      <b-a href="#">
        Back to top
      </b-a>
    </b-p>
  </footer>
</template>
 <!-- <script>
   import './blog.css'
   import './blog.rtl.css'

 </script> -->
<style scoped>
.theme-default-content:not(.custom) {
  max-width: none;
}
</style>