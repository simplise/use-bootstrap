<script setup lang="ts">
import { defaultDocument } from '@vueuse/core'
import { camelCase, uniqueId } from 'lodash';
const route = useRoute()

const tocs = ref<any[]>([])

const render = async () => {
  tocs.value = []
  const content = defaultDocument?.querySelector('#bd-content')
  if (!content) {
    return
  }
  const headings = content.querySelectorAll(':scope > h2')

  headings.forEach(async (h2) => {
    if (!h2.id) {
      h2.id = camelCase(h2.textContent || `h2_${uniqueId()}`)
    }
    const heading3s = content.querySelectorAll(`#${h2.id} ~ h3,h2`)
    const h3s: any[] = []
    let start = false
    let stop = false
    heading3s.forEach((h3) => {
      if (h3.id == h2.id) {
        start = true
      }
      else if (start && h3.tagName == "H2") {
        stop = true
      }
      else if (!stop && start) {
        if (!h3.id) {
          h3.id = camelCase(h3.textContent || `h3_${uniqueId()}`)
        }
        h3s.push({
          id: h3.id,
          content: h3.textContent,
          level: 3
        })
      }
    })
    tocs.value.push({
      id: h2.id,
      content: h2.textContent,
      items: h3s,
      level: 2
    })
  })
  await nextTick()
}
onMounted(() => render())
watch(() => route.query, () => render(), { deep: true, immediate: true })
</script>


<template>
  <client-only>
    <div class="bd-toc mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary">
      <b-button
        class="btn btn-link p-md-0 mb-2 mb-md-0 text-decoration-none bd-toc-toggle d-md-none"
        type="button"
        toggle="collapse"
        data-bs-target="#tocContents"
        aria-expanded="false"
        aria-controls="tocContents"
      >
        On this page
        <svg
          class="bi d-md-none ms-2"
          aria-hidden="true"
        >
          <use xlink:href="#chevron-expand" />
        </svg>
      </b-button>
      <strong class="d-none d-md-block h6 my-2 ms-3">On this page</strong>
      <hr class="d-none d-md-block my-2 ms-3">
      <div
        id="tocContents"
        class="collapse bd-toc-collapse"
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
      </div>
    </div>
  </client-only>
</template>
