<template>
  <p>
    <b-button
      button="primary"
      toggle="collapse"
      target="#multiCollapseExample1"
    >
      Toggle first element
    </b-button>
    <b-button
      button="primary"
      toggle="collapse"
      target="#multiCollapseExample2"
    >
      Toggle second element
    </b-button>
    <b-button
      button="primary"
      toggle="collapse"
      target=".multi-collapse"
    >
      Toggle both elements
    </b-button>
  </p>
  <Row>
    <Col>
      <Collapse
        id="multiCollapseExample1"
        class="multi-collapse"
      >
        <Card>
          <CardBody>
            Some placeholder content for the first collapse component of this
            multi-collapse example. This panel is hidden by default but revealed
            when the user activates the relevant trigger.
          </CardBody>
        </Card>
      </Collapse>
    </Col>
    <Col>
      <Collapse
        id="multiCollapseExample2"
        class="multi-collapse"
      >
        <Card>
          <CardBody>
            Some placeholder content for the second collapse component of this
            multi-collapse example. This panel is hidden by default but revealed
            when the user activates the relevant trigger.
          </CardBody>
        </Card>
      </Collapse>
    </Col>
  </Row>
</template>
