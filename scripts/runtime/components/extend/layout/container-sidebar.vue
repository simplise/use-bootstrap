<script setup>
const props = defineProps({
 contentTop: {
  type: String,
  default: '5em'
 },
 contentHeightOffset: {
  type: String,
  default: '2em'
 },
});
</script>

<template>
 <div>
  <slot name="header" />
  <Container type="xl" padding="y-md-2">
   <GridTemplate areas="s c" areas-lg="sc" rows="auto 1fr" rows-lg="1fr" columns="100%" columns-lg="1fr 792px" columns-xl="1fr 966px" columns-xxl="1fr 1104px">
    <GridArea id="area-s" area="s" margin="e-md-4 s-md-3 s-xl-0" overflow="y-auto x-hidden" sticky="lg-top" z="1">
     <slot name="start" />
    </GridArea>
    <GridArea area="c">
     <Container type="10" margin="x-auto">
      <slot />
     </Container>
    </GridArea>
   </GridTemplate>
  </Container>
  <slot name="footer" />
  <BackToTop color="primary-subtle" />
 </div>
</template>

<style scoped>
#area-s {
  max-height: calc(100vh - (v-bind(contentTop) + v-bind(contentHeightOffset)));
  top: v-bind(contentTop);
}
</style>
