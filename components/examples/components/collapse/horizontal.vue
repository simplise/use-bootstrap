<template>
  <p>
    <b-button
      button="primary"
      toggle="collapse"
      target="#collapseWidthExample"
    >
      Button with target
    </b-button>
  </p>
  <div style="min-height: 120px">
    <Collapse
      id="collapseWidthExample"
      horizontal
    >
      <Card>
        <CardBody style="width: 300px">
          This is some placeholder content for a horizontal collapse. It's
          hidden by default and shown when triggered.
        </CardBody>
      </Card>
    </Collapse>
  </div>
</template>
