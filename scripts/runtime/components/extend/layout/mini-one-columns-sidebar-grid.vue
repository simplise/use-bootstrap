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
// 全体がスクロールされ、固定が難しい
</script>

<template>
 <Container type="xxl" overflow="x-hidden">
  <GridTemplate areas="s c" areas-md="sc" areas-xxl="msc" rows="auto auto" rows-md="auto" columns="100%" columns-md="192px 1fr" columns-xxl="50px 192px 1fr">
   <GridArea area="m" id="area-m" viewport-height style="scrollbar-width: none; " overflow="y-auto x-hidden" display="none xxl-block"  sticky="lg-top">
    <slot name="mini" />
   </GridArea>
   <GridArea area="s" id="area-s" z="1" viewport-height  sticky="lg-top">
    <slot name="startHeader" />
    <b-div id="start"  overflow="y-auto x-hidden">
     <slot name="start" />
    </b-div>
    <slot name="startFooter" />
   </GridArea>
   <GridArea area="c">
    <b-div sticky="top">
     <slot name="header" />
    </b-div>
    <slot />
    <b-div sticky="bottom">
     <slot name="footer" />
    </b-div>
   </GridArea>
  </GridTemplate>
 </Container>
 <BackToTop color="primary-subtle" />
</template>


<style scoped>
#start {
  max-height: calc(100vh - (v-bind(contentTop) + v-bind(contentHeightOffset)));
  top: v-bind(contentTop);
}
</style>
