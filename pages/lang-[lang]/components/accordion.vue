<script setup lang="ts">
definePageMeta({
  'title:en': 'Accordion',
  'description:en': 'Build vertically collapsing accordions.',
  'title:ja': 'アコーディオン',
  'description:ja': '垂直に折りたたむアコーディオンを構築します。'
})
</script>

<template>
  <h2>How it works</h2>

  <Localization>
    <template #en>
      <p>To render an accordion that's expanded, add the <code>active</code> class on the <code>AccordionItem</code>.</p>
    </template>
    <template #ja>
      <p>アコーディオンを展開した状態でレンダリングするには、<code>AccordionItem</code> コンポーネントに <code>active</code> 属性を追加します。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}} -->

  <h2>Example</h2>

  <Localization>
    <template #en>
      <p>Click the accordions below to expand/collapse the accordion content.</p>
    </template>
    <template #ja>
      <p>下のアコーディオンをクリックすると、アコーディオンの内容を展開・折りたたむことができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-accordion-example />
    </Example>
    <ExamplesCode
      path="/components/accordion/example.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Flush
  </h3>

  <Localization>
    <template #en>
      <p>Add <code>flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>
    </template>
    <template #ja>
      <p><code>flush</code> 属性を追加して、デフォルトの <code>background-color</code>、いくつかの境界線、およびいくつかの丸みを帯びた角を削除し、アコーディオンを親コンテナと一緒に edge-to-edge にレンダリングします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-accordion-flush />
    </Example>
    <ExamplesCode
      path="/components/accordion/flush.vue"
      lang="vue"
    />
  </Snippet>

  <h3 class="mt-3">
    Always open
  </h3>
  <Localization>
    <template #en>
      <p>Omit the <code>parent</code> attribute on each <code>AccordionCollapse</code> component to make accordion items stay open when another item is opened.</p>
    </template>
    <template #ja>
      <p>各 <code>AccordionCollapse</code> コンポーネントの <code>parent</code> 属性を省略して、別のアイテムが開かれたときにアコーディオンアイテムが開いたままになるようにします。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-accordion-always-open />
    </Example>
    <ExamplesCode
      path="/components/accordion/always-open.vue"
      lang="vue"
    />
  </Snippet>

  <h2 class="mt-6">
    Demo
  </h2>
  <Snippet>
    <Example>
      <examples-components-accordion-demo />    
    </Example>
    <!-- <ExamplesCode path="/components/accordion/demo.vue" lang="vue" /> -->
  </Snippet>


  <!-- ## Accessibility

詳しくはcollapse accessibility sectionをお読みください。
Please read the [collapse accessibility section](/components/collapse#accessibility) for more information. -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="accordion-variables" file="scss/_variables.scss" >}} -->
</template>