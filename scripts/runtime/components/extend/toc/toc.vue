<script setup lang="ts">
import { useToc } from '../../../composables/extend/useToc';

const props = defineProps({
  selector: {
    type: String,
    default: '#content',
  },
  color: {
    type: String,
    default: 'primary',
  },
});
//
const { tocs, shown } = useToc(props.selector);
</script>

<template>
  <b-div v-if="tocs.length > 0" margin="t-3 b-3 y-lg-0 b-lg-3" padding="" text-color="body-secondary" :class="{ toc: shown }" :style="`--ub-toc-color:var(--bs-${props.color});`">
    <b-button color="outline-secondary" margin="b-2 b-md-0" padding="md-0" display="lg-none" text-decoration="none" relative-width="100" toggle="collapse" target=".tocContents">
      <slot />
      <BIcon icon="bi:chevron-expand" display="lg-none" margin="s-2" />
    </b-button>
    <b-strong display="none lg-block" headings="6" margin="y-2 s-3">
      <slot />
    </b-strong>
    <b-hr display="none lg-block" margin="y-2 s-3" />
    <Collapse class="tocContents" display="lg-block print-none" overflow="auto">
      <nav class="TableOfContents">
        <List v-if="tocs.length > 0" unstyled :spy="props.selector" margin="s-3">
          <ListItem v-for="toc in tocs" :key="toc" class="py-1">
            <b-a :href="`#${toc.id}`" padding="s-2" active-class="" class="d-block text-start text-decoration-none text-body-secondary link-opacity-50-hover text-break">
              {{ toc.content }}
            </b-a>
            <ul v-if="toc.items.length > 0" class="list-unstyled ms-2">
              <!--  BSコンポーネントにするとSPY非対応になる -->
              <li v-for="h3 in toc.items" :key="h3.id" class="py-1">
                <b-a :href="`#${h3.id}`" padding="s-2" active-class="" class="text-start text-decoration-none text-body-secondary link-opacity-50-hover text-break ">
                  {{ h3.content }}
                </b-a>
              </li>
            </ul>
          </ListItem>
        </List>
      </nav>
    </Collapse>
  </b-div>
</template>

<style scoped>
.toc .active{border-color:var(--ub-toc-color);border-style:none none none solid;color:var(--ub-toc-color)!important}
</style>
