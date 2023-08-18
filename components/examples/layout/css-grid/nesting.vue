<template>
  <Grid :columns="3">
    <GridCol>
      First auto-column
      <Grid>
        <GridCol>Auto-column</GridCol>
        <GridCol>Auto-column</GridCol>
      </Grid>
    </GridCol>
    <GridCol>
      Second auto-column
      <Grid :columns="12">
        <GridCol :size="6">
          6 of 12
        </GridCol>
        <GridCol :size="4">
          4 of 12
        </GridCol>
        <GridCol :size="2">
          2 of 12
        </GridCol>
      </Grid>
    </GridCol>
    <GridCol>Third auto-column</GridCol>
  </Grid>
</template>
