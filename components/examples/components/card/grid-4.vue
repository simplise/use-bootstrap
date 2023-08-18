<template>
  <Row
    columns="1 md-3"
    :gutter="4"
  >
    <Col>
      <Card :height="100">
        <CardImgTop
          src="https://source.unsplash.com/random/233x180"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText text-color="muted">
            Last updated 3 mins ago
          </CardText>
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card :height="100">
        <CardImgTop
          src="https://source.unsplash.com/random/233x180"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <CardText text-color="muted">
            Last updated 3 mins ago
          </CardText>
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card :height="100">
        <CardImgTop
          src="https://source.unsplash.com/random/233x180"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <CardText text-color="muted">
            Last updated 3 mins ago
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
</template>
