<template>
  <Row gutter="4">
    <Col>
      <Card>
        <CardImgTop
          src="https://dummyimage.com/100x100/20c997/20c997"
          height="180"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <b-a
            href="#"
            tabindex="-1"
            button="primary"
            col="6"
          >
            Go somewhere
          </b-a>
        </CardBody>
      </Card>
    </Col>

    <Col>
      <Card>
        <CardImgTop
          src="https://dummyimage.com/100x100/868e96/868e96"
          height="180"
        />
        <CardBody>
          <CardTitle placeholder="glow">
            <b-span
              placeholder
              col="6"
            />
          </CardTitle>
          <CardText placeholder="glow">
            <b-span
              placeholder
              col="7"
            />
            <b-span
              placeholder
              col="4"
            />
            <b-span
              placeholder
              col="4"
            />
            <b-span
              placeholder
              col="6"
            />
            <b-span
              placeholder
              col="8"
            />
          </CardText>
          <b-a
            href="#"
            tabindex="-1"
            button="primary"
            disabled
            placeholder
            col="6"
          />
        </CardBody>
      </Card>
    </Col>
  </Row>
</template>
