<template>
  <Row>
    <Col col="4">
      <ListGroup spy="#list-example">
        <ListGroupItemAction href="#list-item-1">
          Item 1
        </ListGroupItemAction>
        <ListGroupItemAction href="#list-item-2">
          Item 2
        </ListGroupItemAction>
        <ListGroupItemAction href="#list-item-3">
          Item 3
        </ListGroupItemAction>
        <ListGroupItemAction href="#list-item-4">
          Item 4
        </ListGroupItemAction>
      </ListGroup>
    </Col>
    <Col col="8">
      <b-div
        id="list-example"
        offset="0"
        style="height: 200px; margin-top: 0.5rem; overflow: auto"
      >
        <h4 id="list-item-1">
          Item 1
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="list-item-2">
          Item 2
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="list-item-3">
          Item 3
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="list-item-4">
          Item 4
        </h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
      </b-div>
    </Col>
  </Row>
</template>
