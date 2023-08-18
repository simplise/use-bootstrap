<template>
  <Container>
    <Row>
      <Col col="sm-5 md-6">
        .col-sm-5 .col-md-6
      </Col>
      <Col
        col="sm-5 md-6"
        offset="sm-2 md-0"
      >
        .col-md-4 .offset-md-4
      </Col>
    </Row>
    <Row>
      <Col col="sm-6 md-5 lg-6">
        .col-sm-6 .col-md-5 .col-lg-6
      </Col>
      <Col
        col="sm-6 md-5 lg-6"
        offset="md-2 lg-0"
      >
        .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
      </Col>
    </Row>
  </Container>
</template>
