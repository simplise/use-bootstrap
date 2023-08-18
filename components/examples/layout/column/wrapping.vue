<template>
  <Container>
    <Row>
      <Col col="9">
        .col-9
      </Col>
      <Col col="4">
        .col-4
        <br>
        Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new
        line as one contiguous unit.
      </Col>
      <Col col="6">
        .col-6
        <br>
        Subsequent columns continue along the new line.
      </Col>
    </Row>
  </Container>
</template>

<!-- <style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
.row
  background: rgba(255,0,0,.1)
</style> -->
