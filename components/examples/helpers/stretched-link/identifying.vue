<template>
  <b-div style="width: 18rem">
    <Card>
      <b-img
        src="https://dummyimage.com/286x180/868e96/868e96"
        fluid
        alt="Card image cap"
      />
      <CardBody>
        <CardHeader>
          <b-h level="5">
            Card with stretched link
          </b-h>
        </CardHeader>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardText>
          <b-a
            stretched-link
            href="#"
            text="danger"
            position="relative"
          >
            Stretched link will not work here, because
            <code>position: relative</code>
            is added to the link
          </b-a>
        </CardText>
        <CardText class="bg-light">
          This
          <b-a stretched-link>
            stretched link
          </b-a>
          will only be spread over the
          <code>p</code>
          -tag, because a transform is applied to it.
        </CardText>
      </CardBody>
    </Card>
  </b-div>
</template>
