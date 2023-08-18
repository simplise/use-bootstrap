<template>
  <b-p>
    You can use the mark tag to
    <BInline mark>
      highlight
    </BInline>
    text.
  </b-p>
  <b-p>
    <BInline text-decoration="line-through">
      This line of text is meant to be treated as no longer accurate.
    </BInline>
  </b-p>
  <b-p>
    <BInline tag="del">
      This line of text is meant to be treated as deleted text.
    </BInline>
  </b-p>
  <b-p>
    <BInline text-decoration="underline">
      This line of text will render as underlined.
    </BInline>
  </b-p>
  <b-p>
    <BInline small>
      This line of text is meant to be treated as fine print.
    </BInline>
  </b-p>
  <b-p>
    <BInline tag="strgong">
      This line rendered as bold text.
    </BInline>
  </b-p>
  <b-p>
    <BInline tag="em">
      This line rendered as italicized text.
    </BInline>
  </b-p>
</template>
