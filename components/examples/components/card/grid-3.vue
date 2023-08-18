<template>
  <Row
    columns="1 md-3"
    :gutter="4"
  >
    <Col>
      <Card :height="100">
        <CardImgTop
          src="https://source.unsplash.com/random/1920x1080"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
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
          src="https://source.unsplash.com/random/1920x1080"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This is a short card.</CardText>
          <CardText text-color="muted">
            Last updated 3 mins ago
          </CardText>
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card :height="100">
        <CardImgTop
          src="https://source.unsplash.com/random/1920x1080"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
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
          src="https://source.unsplash.com/random/1920x1080"
          alt="..."
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText text-color="muted">
            Last updated 3 mins ago
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
</template>
