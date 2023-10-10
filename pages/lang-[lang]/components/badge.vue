<script setup lang="ts">
definePageMeta({
  'title:en': 'Badges',
  'description:en': 'Documentation and examples for badges, our small count and labeling component.',
  'title:ja': 'バッジ',
  'description:ja': 'バッジについての概要と使い方の例です。'
})
</script>

<template>
  <h2>Examples</h2>
  <Localization>
    <template #en>
      <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>
    </template>
    <template #ja>
      <p>親要素のサイズに一致するように相対的なフォントサイズ <code>em</code> を使用しています。</p>
    </template>
  </Localization>

  <h3>Headings</h3>
  <Snippet>
    <Example>
      <examples-components-badge-heading />
    </Example>
    <ExamplesCode
      path="/components/badge/heading.vue"
      lang="vue"
    />
  </Snippet>

  <h3>Buttons</h3>
  <Localization>
    <template #en>
      <p>Badges can be used as part of links or buttons to provide a counter.</p>
    </template>
    <template #ja>
      <p>バッジは、リンクやボタンの一部としてカウンターとして使用することができます。</p>
    </template>
  </Localization>
  
  <Snippet>
    <Example>
      <examples-components-badge-buttons />
    </Example>
    <ExamplesCode
      path="/components/badge/buttons.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p />
    </template>
    <template #ja>
      <p />
    </template>
  </Localization>
  <!-- <p>
    バッジの使用方法によっては、スクリーンリーダーや同様の支援技術を使用しているユーザーにとっては混乱を招く可能性があることに注意してください。 バッジのスタイルはその目的を視覚的に示すものですが、このようなユーザーには単にバッジの内容が提示されるだけです。特定の状況に応じて、これらのバッジは、文章、リンク、またはボタンの最後にランダムに追加された単語や数字のように見えるかもしれません。
    Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.
  </p>
  <p>
    文脈が明確でない限り（「通知」の例のように、「4」が通知の数であると理解されている場合）、視覚的に隠された追加テキストで追加の文脈を含めることを検討してください。
    Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.
  </p> -->

  <h3>Positioned</h3>
  <Localization>
    <template #en>
      <p>
        Use utilities to modify a <code>Badge</code> and position it in the corner of a link or button.
      </p>
    </template>
    <template #ja>
      <p>
        ユーティリティを使って<code>バッジ</code>を修正し、リンクやボタンの隅に配置します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-badge-positioned-1 />
    </Example>
    <ExamplesCode
      path="/components/badge/positioned-1.vue"
      lang="vue"
    />
  </Snippet>

  <Localization>
    <template #en>
      <p />
    </template>
    <template #ja>
      <p />
    </template>
  </Localization>

  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/badge/positioned1.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/badge/positioned1.html)
:::
:::: -->
  <Localization>
    <template #en>
      <p class="mt-3">
        You can also modify the <code>Badge</code> component with a few more utilities without a count for a more generic indicator.
      </p>
    </template>
    <template #ja>
      <p>また、<code>Badge</code>コンポーネントを、より一般的なインジケータのために、カウントなしで、さらにいくつかのユーティリティで変更することもできます。</p>
    </template>
  </Localization>
  <Snippet>
    <Example>
      <examples-components-badge-positioned-2 />
    </Example>
    <ExamplesCode
      path="/components/badge/positioned-2.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/badge/positioned2.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/badge/positioned2.html)
:::
:::: -->

  <h2 class="mt-3">
    Background colors
  </h2>
  <Localization>
    <template #en>
      <p>Use our background utility classes to quickly change the appearance of a badge. </p>
      <p>Please note that when using Bootstrap's default <code>background-color="light"</code>, you'll likely need a text color utility like <code>text-color="dark"</code> for proper styling. </p>
      <p>This is because background utilities do not set anything but <code>background-color</code>.</p>
    </template>
    <template #ja>
      <p>バックグラウンドユーティリティクラスを使用して、バッジの外観を変更できます。 </p>
      <p>Bootstrapのデフォルトの <code>background-color="light"</code> を使用する場合、適切なスタイリングのために <code>text-color="dark"</code>のようなテキストカラーを変更するユーティリティが必要になる可能性があることに注意してください。 </p>
      <p>バックグラウンドユーティリティクラスは、背景色以外は設定をしません。</p>
    </template>
  </Localization>

  <!-- {{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}} -->
  <Snippet>
    <Example>
      <examples-components-badge-background />
    </Example>
    <ExamplesCode
      path="/components/badge/background.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/badge/background.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/badge/background.html)
:::
:::: -->

  <h2 class="mt-3">
    Pill badges
  </h2>
  <Localization>
    <template #en>
      <p>Use the <code>rounded="pill"</code> utility, class to make badges more rounded with a larger <code>border-radius</code>.</p>
    </template>
    <template #ja>
      <p><code>rounded="pill"</code> を使用すると丸みを帯びた形状にすることができます。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-components-badge-pillbadges />
    </Example>
    <ExamplesCode
      path="/components/badge/pillbadges.vue"
      lang="vue"
    />
  </Snippet>


  <!--:::: code-group
::: code-group-item useBootstrap
@[code](@examples/components/badge/pillbadges.vue)
:::
::: code-group-item bootstrap5
@[code](@examples/components/badge/pillbadges.html)
:::
:::: -->

  <!-- ## Sass

### Variables -->

  <!-- {{< scss-docs name="badge-variables" file="scss/_variables.scss" >}} -->
</template>