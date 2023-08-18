<template>
  <Row
    position="relative"
    background-color="light"
    gutter="0"
  >
    <Col
      col="md-6"
      margin="b-md-6"
      padding="md-4"
    >
      <b-img
        src="https://dummyimage.com/300x200/868e96/868e96"
        alt="..."
        fluid
      />
    </Col>
    <Col
      col="md-6"
      padding="4 s-md-0"
    >
      <b-h
        level="5"
        margin="t-0"
      >
        Columns with stretched link
      </b-h>
      <b-p>
        Another instance of placeholder content for this other custom component.
        It is intended to mimic what some real-world content would look like,
        and we're using it here to give the component a bit of body and size.
      </b-p>
      <b-a
        stretched-link
        href="#"
      >
        Go somewhere
      </b-a>
    </Col>
  </Row>
</template>
