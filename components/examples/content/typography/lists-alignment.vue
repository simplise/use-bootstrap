<template>
  <b-dl>
    <b-dt col="sm-3">
      Description lists
    </b-dt>
    <b-dd col="sm-9">
      A description list is perfect for defining terms.
    </b-dd>
    <b-dt col="sm-3">
      Term
    </b-dt>
    <b-dd col="sm-9">
      <b-p>Definition for the term.</b-p>
      <b-p>And some more placeholder definition text.</b-p>
    </b-dd>
    <b-dt col="sm-3">
      Another term
    </b-dt>
    <b-dd col="sm-9">
      This definition is short, so no extra paragraphs or anything.
    </b-dd>
    <b-dt
      col="sm-3"
      text-truncate
    >
      Truncated term is truncated
    </b-dt>
    <b-dd col="sm-9">
      This can be useful when space is tight. Adds an ellipsis at the end.
    </b-dd>
    <b-dt col="sm-3">
      Nesting
    </b-dt>
    <b-dd col="sm-9">
      <b-dl>
        <b-dt col="sm-4">
          Nested definition list
        </b-dt>
        <b-dd col="sm-8">
          I heard you like definition lists. Let me put a definition list inside
          your definition list.
        </b-dd>
      </b-dl>
    </b-dd>
  </b-dl>
</template>
