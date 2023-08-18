<script setup lang="ts">
definePageMeta({
  title: 'CSS Grid',
  description: `Bootstrap's default grid system represents the culmination of over a decade of CSS layout techniques, tried and tested by millions of people.But, it was also created without many of the modern CSS features and techniques we're seeing in browsers like the new CSS Grid.`
})
</script>

<template>
  <div style="background-color: antiquewhite;">
    <h5>warning</h5>
    <p>
      <b>Heads up—our CSS Grid system is experimental and opt-in as of v5.1.0!</b> We included it in our documentation's CSS to demonstrate it for you, but it's disabled by default. Keep reading to learn how to enable it in your projects.
    </p>
  </div>

  <h2>How it works</h2>
  <p>
    With Bootstrap 5, we've added the option to enable a separate grid system that's built on CSS Grid, but with a Bootstrap twist. You still get classes you can apply on a whim to build responsive layouts, but with a different approach under the hood.
  </p>
  <ul>
    <li> <b>CSS Grid is opt-in.</b> Disable the default grid system by setting <code>$enable-grid-classes: false</code> and enable the CSS Grid by setting <code>$enable-cssgrid: true</code>. Then, recompile your Sass.</li>

    <li> <b>Replace instances of <code>row</code> with <code>grid</code>.</b> The <code>grid</code> attributes sets <code>display: grid</code> and creates a <code>grid-template</code> that you build on with your HTML.</li>

    <li> <b>Replace <code>col="*"</code> classes with <code>GridCol</code> components.</b> This is because our CSS Grid columns use the <code>GridCol</code> component instead of <code>width</code>.</li>

    <li> <b>Columns and gutter sizes are set via CSS variables.</b> Set these on the parent <code>grid</code> and customize however you want, inline or in a stylesheet, with <code>--bs-columns</code> and <code>--bs-gap</code>.</li>
  </ul>
  <p>
    In the future, Bootstrap will likely shift to a hybrid solution as the <code>gap</code> property has achieved nearly full browser support for flexbox.
  </p>
  <!-- ## Key differences

Compared to the default grid system:

- Flex utilities don't affect the CSS Grid columns in the same way.

- Gaps replaces gutters. The `gap` property replaces the horizontal `padding` from our default grid system and functions more like `margin`.

- As such, unlike `.row`s, `.grid`s have no negative margins and margin utilities cannot be used to change the grid gutters. Grid gaps are applied horizontally and vertically by default. See the [customizing section](#customizing) for more details.

- Inline and custom styles should be viewed as replacements for modifier classes (e.g., `style="--bs-columns: 3;"` vs `class="row-cols-3"`).

- Nesting works similarly, but may require you to reset your column counts on each instance of a nested `.grid`. See the [nesting section](#nesting) for details. -->

  <h2>Examples</h2>

  <h3>Three columns</h3>
  <p>
    Three equal-width columns across all viewports and devices can be created by using the <code>size="4"</code> atttibutes. Add <a href="#responsive">
      responsive classes
    </a> to change the layout by viewport size.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-three-columns />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/three-columns.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/three-columns.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/three-columns.html)
:::
:::: -->

  <h3 class="mt-3">
    Responsive
  </h3>
  <p>
    Use responsive classes to adjust your layout across viewports. Here we start with two columns on the narrowest viewports, and then grow to three columns on medium viewports and above.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-responsive-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/responsive-1.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/responsive-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/responsive-1.html)
:::
:::: -->
  <p class="mt-3">
    Compare that to this two column layout at all viewports.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-responsive-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/responsive-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/responsive-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/responsive-2.html)
:::
:::: -->

  <h2 class="mt-3">
    Wrapping
  </h2>
  <p>
    Grid items automatically wrap to the next line when there's no more room horizontally. Note that the <code>gap</code> applies to horizontal and vertical gaps between grid items.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-wrapping />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/wrapping.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/wrapping.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/wrapping.vue)
:::
:::: -->

  <h2 class="mt-3">
    Starts
  </h2>
  <p>
    Start classes aim to replace our default grid's offset classes, but they're not entirely the same. CSS Grid creates a grid template through styles that tell browsers to "start at this column" and "end at this column." Those properties are <code>column-start</code> and <code>column-end</code>. Start classes are shorthand for the former. Pair them with the column classes to size and align your columns however you need. Start classes begin at <code>1</code> as <code>0</code> is an invalid value for these properties.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-starts />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/starts.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/starts.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/starts.html)
:::
:::: -->


  <h2 class="mt-3">
    Auto columns
  </h2>
  <p>
    When there are no classes on the grid items (the immediate children of a <code>Grid</code>), each grid item will automatically be sized to one column.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-auto-columns-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/auto-columns-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/auto-columns-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/auto-columns-1.html)
:::
:::: -->
  <p class="mt-3">
    This behavior can be mixed with grid column classes.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-auto-columns-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/auto-columns-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/auto-columns-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/auto-columns-2.html)
:::
:::: --->

  <h2 class="mt-3">
    Nesting
  </h2>
  <p>
    Similar to our default grid system, our CSS Grid allows for easy nesting of <code>Grid</code>s. However, unlike the default, this grid inherits changes in the rows, columns, and gaps. Consider the example below:
  </p>
  <ul>
    <li> We override the default number of columns with a local CSS variable: <code>--bs-columns: 3</code>.</li>
    <li> In the first auto-column, the column count is inherited and each column is one-third of the available width.</li>
    <li> In the second auto-column, we've reset the column count on the nested <code>Grid</code> to 12 (our default).</li>
    <li> The third auto-column has no nested content.</li>
  </ul>
  <p>
    In practice this allows for more complex and custom layouts when compared to our default grid system.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-nesting />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/nesting.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/nesting.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/nesting.html)
:::
:::: -->

  <h2 class="mt-3">
    Customizing
  </h2>
  <p>
    Customize the number of columns, the number of rows, and the width of the gaps with local CSS variables.
  </p>
  <docs-descriptions-cssgrid-customizing />
  <p>
    These CSS variables have no default value; instead, they apply fallback values that are used _until_ a local instance is provided. For example, we use <code>var(--bs-rows, 1)</code> for our CSS Grid rows, which ignores <code>--bs-rows</code> because that hasn't been set anywhere yet. Once it is, the <code>Grid</code> instance will use that value instead of the fallback value of <code>1</code>.
  </p>

  <h3>No grid classes</h3>
  <p>
    Immediate children elements of <code>Grid</code> are grid items, so they'll be sized without explicitly adding a <code>GridCol</code> class.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-no-grid />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/no-grid.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/no-grid.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/no-grid.html)
:::
:::: -->

  <h3 class="mt-3">
    Columns and gaps
  </h3>
  <p>
    Adjust the number of columns and the gap.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-columns-gaps-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/columns-gaps-1.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/columns-gaps-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/columns-gaps-1.html)
:::
:::: -->


  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-columns-gaps-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/columns-gaps-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/columns-gaps-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/columns-gaps-2.html)
:::
:::: -->

  <h3 class="mt-3">
    Adding rows
  </h3>
  <p>
    Adding more rows and changing the placement of columns:
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-adding-rows />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/adding-rows.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/adding-rows.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/adding-rows.html)
:::
:::: -->

  <h3 class="mt-3">
    Gaps
  </h3>
  <p>
    Change the vertical gaps only by modifying the <code>row-gap</code>. Note that we use <code>gap</code> on <code>.grid</code>s, but <code>row-gap</code> and <code>column-gap</code> can be modified as needed.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-gaps-1 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/gaps-1.vue"
      lang="vue"
    />
  </Snippet>

  <!---:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/gaps-1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/gaps-1.html)
:::
:::: -->
  <p class="mt-3">
    Because of that, you can have different vertical and horizontal <code>gap</code>s, which can take a single value (all sides) or a pair of values (vertical and horizontal). This can be applied with an inline style for <code>gap</code>, or with our <code>--bs-gap</code> CSS variable.
  </p>

  <Snippet>
    <Example cssgrid>
      <examples-layout-css-grid-gaps-2 />
    </Example>
    <ExamplesCode
      path="/layout/css-grid/gaps-2.vue"
      lang="vue"
    />
  </Snippet>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/gaps-2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/layout/css-grid/gaps-2.html)
:::
:::: -->

  <!-- ## Sass

One limitation of the CSS Grid is that our default classes are still generated by two Sass variables, `$grid-columns` and `$grid-gutter-width`. This effectively predetermines the number of classes generated in our compiled CSS. You have two options here:

- Modify those default Sass variables and recompile your CSS.
- Use inline or custom styles to augment the provided classes.

For example, you can increase the column count and change the gap size, and then size your "columns" with a mix of inline styles and predefined CSS Grid column classes (e.g., `.g-col-4`). -->

  <!-- <examples-layout-css-grid-Sass/>

:::: code-group
::: code-group-item useBootstrap
@[code](@examples/layout/css-grid/Sass.vue)
:::
::: code-group-item bootstrap5
```html
<div class="grid" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>
```
:::
:::: -->
</template>