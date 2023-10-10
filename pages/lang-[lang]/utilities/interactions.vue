<script setup lang="ts">
definePageMeta({
  'title:en': 'Interactions',
  'description:en': `Utility classes that change how users interact with contents of a website.`,
  'title:ja': 'インタラクション',
  'description:ja': 'ユーザーのインタラクションするかを変更するユーティリティクラスです。'
})
</script>

<template>
  <h2>Text selection</h2>
  <Localization>
    <template #en>
      <p>Change the way in which the content is selected when the user interacts with it.</p>
    </template>
    <template #ja>
      <p>ユーザのテキスト選択を制御するクラスです。</p>
    </template>
  </Localization>

  <Snippet>
    <Example>
      <examples-utilities-interaction-text-selection />
    </Example>
    <ExamplesCode
      path="/utilities/interaction/text-selection.vue"
      lang="vue"
    />
  </Snippet>


  <h2>Pointer events</h2>
  <Localization>
    <template #en>
      <p>Bootstrap provides <code>.pointer-events="none"</code> and <code>.pointer-events="auto"</code> classes to prevent or add element interactions.</p>
    </template>
    <template #ja>
      <p>Bootstrapには、インタラクションを防止したり、追加したりするためのカーソル用クラス <code>pointer-events="none"</code> と <code>pointer-events="auto"</code> を用意しています。</p>
    </template>
  </Localization>

  <!--このリンク コンポーネントは反映されていません-->

  <Localization>
    <template #en>
      <p>
        <a href="#">
          This link
        </a> can not be clicked.
      </p>

      <p>
        <LocalLink to="/utilities/interactions/">
          This link
        </LocalLink>can be clicked (this is default behavior).
      </p>

      <p>
        <a href="#">
          This Link
        </a>This link can not be clicked because the pointer-events property is inherited from its parent. However, <LocalLink to="/utilities/interactions/">
          This link
        </LocalLink> has a pe-auto class and can be clicked.
      </p>
    </template>
    <template #ja>
      <p>
        <a href="#">
          このリンク
        </a>はクリックできません。
      </p>

      <p>
        <LocalLink to="/utilities/interactions/">
          このリンク
        </LocalLink>はクリックできます（デフォルトの動作です）。
      </p>

      <p>
        <a href="#">
          このリンク
        </a>はポインターイベントプロパティが親から継承されているため、このリンクはクリックできません。しかし、<LocalLink to="/utilities/interactions/">
          このリンク
        </LocalLink>は<code>pe-auto</code>クラスを持っており、クリックすることができます。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        The<code>pointer-events="none"</code> class (and the <code>pointer-events</code> CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with <code>pointer-events="none"</code> are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as <code>tabindex="-1"</code> (to prevent them from receiving keyboard focus) and <code>aria-disabled="true"</code> (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable.
      </p>
    </template>
    <template #ja>
      <p>
        <code>pointer-events="none"</code>クラス（およびそれが設定する<code>pointer-events</code>CSSプロパティは、ポインタ（マウス、スタイラス、タッチ）によるインタラクションを防ぐだけです。<code>pointer-events="none"</code>が設定されたリンクやコントロールは、デフォルトでは、キーボードユーザーにとってはまだフォーカス可能であり、アクション可能です。キーボードユーザーに対しても完全に無効化されるようにするには、<code>tabindex="-1"</code>（キーボードフォーカスを受け取らないようにする）や<code>aria-disabled="true"</code>（事実上無効化されていることを支援技術に伝える）といった属性を追加し、場合によってはJavaScriptを使用して、アクション可能であることを完全に防ぐ必要があるかもしれません。
      </p>
    </template>
  </Localization>

  <Localization>
    <template #en>
      <p>
        If possible, the simpler solution is:
      </p>
      <ul>
        <li> For form controls, add the <code>disabled</code> HTML attribute.</li>
        <li> For links, remove the <code>href</code> attribute, making it a non-interactive anchor or placeholder link.</li>
      </ul>
    </template>
    <template #ja>
      <p>
        可能であれば、より簡単な解決策は次のとおりです。
      </p>
      <ul>
        <li>フォームコントロールの場合は、<code>disable</code>HTML属性を追加します。</li>
        <li>リンクの場合は、<code>href</code>属性を追加して、非インタラクティブなアンカーまたはプレイスホルダーリンクにします。</li>
      </ul>
    </template>
  </Localization>
  <!-- ## Sass

### Utilities API

Interaction utilities は utilities API scss/_utilities.scss で宣言されています。 Learn how to use the utilities API.

Interaction utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](/utilities/api#using-the-api) -->

  <!-- {{< scss-docs name="utils-interaction" file="scss/_utilities.scss" >}} -->
</template>