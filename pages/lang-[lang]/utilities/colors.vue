<script setup lang="ts">
definePageMeta({
  'title:en': 'Colors',
  'description:en': `Convey meaning through 'color' with a handful of color utility classes. Includes support for styling links with hover states, too.`,
  'title:ja': 'カラー',
  'description:ja': 'クラスを使ってセマンティックカラーを表現できます。リンクのホバースタイルもサポートしています。'
})
</script>
 
<template>
  <h3>Colors</h3>
  <Localization>
    <template #en>
      <p>
        Colorize text with color utilities. If you want to colorize links, you can use the <LocalLink to="/helpers/colored-links">
          link helper attributes
        </LocalLink> which have <code>:hover</code> and <code>:focus</code> states.
      </p>
    </template>
    <template #ja>
      <p>color utilities を使ってテキストに色をつけます。</p>
      <p>
        リンクの場合は、<code>:hover</code> と <code>:focus</code> の状態を持つ <LocalLink to="/helpers/colored-links/">
          link helper 属性
        </LocalLink>を使うことができます。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-color-colors />
    </Example>
    <ExamplesCode
      path="/utilities/color/colors.vue"
      lang="vue"
    />
  </Snippet>

  
  <!-- <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <p>
      <b>Deprecation:</b> With the addition of <code>text-opacity*</code> attribute and CSS variables for text utilities, <code>text-color="black-50"</code> and <code>text-color="white-50"</code> are deprecated as of v5.1.0. They'll be removed in v6.0.0.
    </p>
  </div> -->

  <!-- {{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}} -->

  <h3>Opacity</h3>
  <!-- 
<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Added in v5.1.0</small>

As of v5.1.0, text color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.text-primary` utility.

```css
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```

We use an RGB version of our `--bs-primary` (with the value of `13, 110, 253`) CSS variable and attached a second CSS variable, `--bs-text-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.text-primary` now, your computed `color` value is `rgba(13, 110, 253, 1)`. The local CSS variable inside each `.text-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency. -->

  <h3>Example</h3>

  <!-- To change that opacity, override `--bs-text-opacity` via custom styles or inline styles. -->

  <!-- {{< example >}}
<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>
{{< /example >}} -->
  <!-- <examples-utilities-color-Opacity_Example1 />

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/color/Opacity_Example1.vue)
:::
::: code-group-item bootstrap5
```html
<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>
```
:::
:::: -->

  <!-- Or, choose from any of the `.text-opacity` utilities: -->



  <Snippet>
    <Example>
      <examples-utilities-color-opacity-2 />
    </Example>
    <ExamplesCode
      path="/utilities/color/opacity-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/utilities/color/opacity-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/utilities/color/opacity-2.html)
:::
:::: -->

  <!-- ## Specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` or more semantic element with the desired class. -->
  <!-- 
## Sass

In addition to the following Sass functionality, consider reading about our included [CSS custom properties](/customize/css-variables) (aka CSS variables) for colors and more. -->
</template>