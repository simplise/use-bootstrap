<template>
  <p>
    <b-button
      button="primary"
      toggle="collapse"
      target="#collapseExample"
    >
      Button with target
    </b-button>
  </p>
  <Collapse id="collapseExample">
    <Card>
      <CardBody>
        Some placeholder content for the collapse component. This panel is
        hidden by default but revealed when the user activates the relevant
        trigger.
      </CardBody>
    </Card>
  </Collapse>
</template>
