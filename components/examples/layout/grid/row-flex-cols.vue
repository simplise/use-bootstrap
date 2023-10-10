<template>
  <Container class="doc-container">
    <Badge>items-start</Badge>
    <Row align-items="start">
      <Col>One of three cols</Col>
      <Col>One of three cols</Col>
      <Col>One of three cols</Col>
    </Row>
    <Badge>items-center</Badge>
    <Row align-items="center">
      <Col>One of three cols</Col>
      <Col>One of three cols</Col>
      <Col>One of three cols</Col>
    </Row>
    <Badge>items-end</Badge>
    <Row align-items="end">
      <Col>One of three cols</Col>
      <Col>One of three cols</Col>
      <Col>One of three cols</Col>
    </Row>
    <Badge>self-*</Badge>
    <Row>
      <Col align-self="start">
        .self-start
      </Col>
      <Col align-self="center">
        .self-center
      </Col>
      <Col align-self="end">
        .self-end
      </Col>
    </Row>
  </Container>
</template>

<!-- <style lang="sass" scoped>
.row
  height: 5rem
  background: rgba(255,0,0,.1)
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.doc-container > div + div
  margin-top: 1rem
</style> -->
