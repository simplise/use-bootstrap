<script setup lang="ts">
definePageMeta({
  'title:en': 'Stacks',
  'description:en': `Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.`,
  'title:ja': 'スタックス',
  'description:ja': 'フレックスボックスユーティリティの上に構築される省略記法ヘルパーで、コンポーネントレイアウトをこれまで以上に迅速かつ簡単にします。'
})
</script>

<template>
  <Localization>
    <template #en>
      <p>
        Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap. All credit for the concept and implementation goes to the open source <a href="https://almonk.github.io/pylon/">Pylon project</a>
      </p>
    </template>
    <template #ja>
      スタックは、Bootstrapで素早く簡単にレイアウトを作成するために、多くのフレックスボックスプロパティを適用するショートカットを提供します。コンセプトと実装のすべての功績は、オープンソースの<a href="https://almonk.github.io/pylon/">Pylon プロジェクト</a>にあります。
    </template>
  </Localization>

  <!-- <div style="background-color: antiquewhite;">
    <div class="mx-auto">
      <h5> warning</h5>
      <p>
        Heads up! Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues.
        <a href="https://caniuse.com/flexbox-gap">Read more</a>
      </p>
    </div>
  </div> -->

  <h2>Vertical</h2>

  <Localization>
    <template #en>
      <p>
        Use <code>vstack</code> attribute to create vertical layouts. Stacked items are full-width by default. Use <code>gap</code> attribute to add space between items.
      </p>
    </template>
    <template #ja>
      <p>
        垂直レイアウトを作成するには、<code>vstack</code>属性を使用してアクティブな状態を示します。スタックされたアイテムはデフォルトで全幅になります。アイテム間にスペースを追加するには、<code>gap</code>属性を使います。
      </p>
    </template>
  </Localization>


  <Snippet>
    <Example flex>
      <examples-helpers-stack-vertical />
    </Example>
    <ExamplesCode
      path="/helpers/stack/vertical.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Horizontal</h2>

  <Localization>
    <template #en>
      <p>
        Use <code>hstack</code> for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use <code>gap</code> attribute to add space between items.
      </p>
    </template>
    <template #ja>
      <p>
        水平レイアウトには、<code>hstack</code>属性を使用します。スタックされたアイテムは、デフォルトでは垂直方向の中央に配置され、必要な幅を占めるだけです。アイテム間にスペースを追加するには、<code>gap</code>属性を追加します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example flex>
      <examples-helpers-stack-horizontal-1 />
    </Example>
    <ExamplesCode
      path="/helpers/stack/horizontal-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>
        Using horizontal margin utilities like <code>margin="s-auto"</code> as spacers:
      </p>
    </template>
    <template #ja>
      <p>
        <code>margin="s-auto"</code>のような水平マージンユーティリティをスペーサーとして使う。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example flex>
      <examples-helpers-stack-horizontal-2 />
    </Example>
    <ExamplesCode
      path="/helpers/stack/horizontal-2.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>
        And with <LocalLink to="/helpers/vertical-rule">
          vertical rules:
        </LocalLink>
      </p>
    </template>
    <template #ja>
      そして、<LocalLink to="/helpers/vertical-rule">
        verticalルール
      </LocalLink>もあります。
    </template>
  </Localization>

  <Snippet>
    <Example flex>
      <examples-helpers-stack-horizontal-3 />
    </Example>
    <ExamplesCode
      path="/helpers/stack/horizontal-3.vue"
      lang="vue"
    />
  </Snippet>

  <h2>Examples</h2>


  <Localization>
    <template #en>
      <p>Use <code>vstack</code> to stack buttons and other elements:</p>
    </template>
    <template #ja>
      <p>ボタンやその他の要素をスタックするには<code>vstack</code>を使用します。</p>
    </template>
  </Localization>


  <Snippet>
    <Example>
      <examples-helpers-stack-examples-1 />
    </Example>
    <ExamplesCode
      path="/helpers/stack/examples-1.vue"
      lang="vue"
    />
  </Snippet>


  <Localization>
    <template #en>
      <p>
        Create an inline form with <code>hstack</code>:
      </p>
    </template>
    <template #ja>
      <p>
        <code>hstack</code>でインラインフォームを作成します。
      </p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-helpers-stack-examples-2 />
    </Example>
    <ExamplesCode
      path="/helpers/stack/examples-2.vue"
      lang="vue"
    />
  </Snippet>
</template>