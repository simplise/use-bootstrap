<script setup lang="ts">
const tocs = useToc('#bd-content')
</script>
<template>
  <client-only>
    <b-div
      margin="t-3 b-5 y-lg-0 b-lg-5"
      padding="x-sm-1"
      text-color="body-secondary"
      class="bd-toc"
    >
      <b-button
        class="bd-toc-toggle"
        button="link"
        margin="b-2 b-md-0"
        padding="md-0"
        display="md-none"
        text-decoration="none"
        toggle="collapse"
        target="#tocContents"
      >
        <Localization>
          <template #en>
            On this page
          </template>
          <template #ja>
            項目
          </template>
        </Localization>
        <BIcon
          icon="bi:chevron-expand"
          display="md-none"
          margin="s-2"
        />
      </b-button>
      <b-strong
        display="none md-block"
        headings="6"
        margin="y-2 s-3"
      >
        <Localization>
          <template #en>
            On this page
          </template>
          <template #ja>
            項目
          </template>
        </Localization>
      </b-strong>
      <b-hr
        display="none md-block"
        margin="y-2 s-3"
      />
      <Collapse
        id="tocContents"
        class="bd-toc-collapse"
      >
        <nav id="TableOfContents">
          <b-ul
            v-if="tocs.length > 0"
            spy="#bd-content"
          >
            <li
              v-for="toc in tocs"
              :key="toc"
            >
              <b-a :href="`#${toc.id}`">
                {{ toc.content }}
              </b-a>
              <ul v-if="toc.items.length > 0">
                <li
                  v-for="h3 in toc.items"
                  :key="h3.id"
                >
                  <b-a :href="`#${h3.id}`">
                    {{ h3.content }}
                  </b-a>
                </li>
              </ul>
            </li>
          </b-ul>
        </nav>
      </Collapse>
    </b-div>
  </client-only>
</template>
