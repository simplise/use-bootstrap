<script setup lang="ts">
definePageMeta({
  'title:en': 'Background',
  'description:en': `Convey meaning through 'background-color' and add decoration with gradients.`,
  'title:ja': 'バックグラウンド（背景）',
  'description:ja': `background-colorで意味を伝え、グラデーションで装飾を加えます。`
})
</script>
<template>
  <h2>Background color</h2>

  <Localization>
    <template #en>
      <p>
        Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities <b>do not set <code>color</code></b>, so in some cases you'll want to use <code>background-color=</code>
        <LocalLink to="/utilities/colors">
          color utilities
        </LocalLink>.
      </p>
    </template>
    <template #ja>
      <p>
        contextual text color クラスと同様に、要素の背景を任意の contextual クラスに設定します。背景ユーティリティは<b><code>color</code>を設定しないので</b>、場合によっては<code>background-color=</code>
        <LocalLink to="/utilities/colors">
          color utilities
        </LocalLink>を使用したいでしょう。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-utilities-background-color />
    </Example>
    <ExamplesCode
      path="/utilities/background/color.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Background gradient</h2>

  <Localization>
    <template #en>
      <p>
        By adding a <code>background-gradient</code> attribute, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.
      </p>
    </template>
    <template #ja>
      <p>
        <code>background-gradient</code>属性を追加すると、背景画像として線形グラデーションが追加されます。このグラデーションは半透明の白から始まり、下に向かってフェードアウトしていきます。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        Do you need a gradient in your custom CSS? Just add <code>background-image: var(--bs-gradient);</code>.
      </p>
    </template>
    <template #ja>
      カスタムCSSにグラデーションが必要ですか？<code>background-image: var(--bs-gradient);</code>を追加するだけです。
    </template>
  </Localization>

  <!--
{{< markdown >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} bg-gradient{{ with .contrast_color }} text-{{ . }}{{ else }} text-white{{ end }}">.bg-{{ .name }}.bg-gradient</div>
{{- end -}}
{{< /colors.inline >}}
{{< /markdown >}}
-->


  <Snippet>
    <Example>
      <examples-utilities-background-gradient />
    </Example>
    <ExamplesCode
      path="/utilities/background/gradient.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Opacity</h2>

  <small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Added in v5.1.0</small>

  <Localization>
    <template #en>
      <p>
        As of v5.1.0, <code>background-color</code> utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.
      </p>
    </template>
    <template #ja>
      <p>
        v5.1.0より、<code>background-color</code>ユーティリティはCSSっを使ってSassで生成されるようになりました。これにより、コンパイルなしでリアルタイムに色を変更したり、アルファの透明度をダイナミックに変更することができます。
      </p>
    </template>
  </Localization>

  <h3>How it works</h3>

  <localization>
    <template #en>
      <p>
        Consider our default <code>background-color="success"</code> utility.
      </p>
    </template>
    <template #ja>
      <p>
        デフォルトの<code>background-color="success"</code>ユーティリティを考えてみましょう
      </p>
    </template>
  </localization>

  <!-- ```css
.bg-success {
 --bs-bg-opacity: 1;
 background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
```

We use an RGB version of our `--bs-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `--bs-bg-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.bg-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.bg-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency. -->

  <h3>Example</h3>

  <Localization>
    <template #en>
      <p>
        To change that opacity, override <code>--bs-bg-opacity</code> via custom styles or inline styles.
      </p>
    </template>
    <template #ja>
      <p>
        この不透明度を変更するには、カスタムスタイルまたはインラインスタイルで<code>--bs-bg-opacity</code>をオーバーライドする。
      </p>
    </template>
  </Localization>

  <!--
{{< example >}}
<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>
{{< /example >}}
-->


  <Snippet>
    <Example>
      <examples-utilities-background-example-1 />
    </Example>
    <ExamplesCode
      path="/utilities/background/example-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p>
        Or, choose from any of the <code>background-opacity</code> attribute:
      </p>
    </template>
    <template #ja>
      <p>
        または、<code>background-opacity</code>属性から選んでください。
      </p>
    </template>
  </Localization>



  <Snippet>
    <Example>
      <examples-utilities-background-example-2 />
    </Example>
    <ExamplesCode
      path="/utilities/background/example-2.vue"
      lang="vue"
    />
  </Snippet>

  <!-- ## Sass

In addition to the following Sass functionality, consider reading about our included [CSS custom properties](/customize/css-variables) (aka CSS variables) for colors and more.

### Variables

Most `background-color` utilities are generated by our theme colors, reassigned from our generic color palette variables. -->

  <!--
{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="variable-gradient" file="scss/_variables.scss" >}}

Grayscale colors are also available, but only a subset are used to generate any utilities.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}
-->

  <!-- ### Map

Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more. -->

  <!--
{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}
-->
  <!-- 
Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.** -->

  <!--
{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}
-->

  <!-- RGB colors are generated from a separate Sass map: -->

  <!--
{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}
-->

  <!-- And background color opacities build on that with their own map that's consumed by the utilities API: -->

  <!--
{{< scss-docs name="utilities-bg-colors" file="scss/_maps.scss" >}}
-->

  <!-- ### Mixins

**No mixins are used to generate our background utilities**, but we do have some additional mixins for other situations where you'd like to create your own gradients. -->

  <!--
{{< scss-docs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" >}}

{{< scss-docs name="gradient-mixins" file="scss/mixins/_gradients.scss" >}}
-->

  <!-- ### Utilities API

Background utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/documents/utilities/api#using-the-api) -->

  <!--
{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
-->
</template>