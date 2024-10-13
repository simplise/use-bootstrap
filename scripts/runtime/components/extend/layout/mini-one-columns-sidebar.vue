<script setup>
const props = defineProps({
 contentTop: {
  type: String,
  default: '4em'
 },
 contentBottom: {
  type: String,
  default: '4em'
 },
 startTop: {
  type: String,
  default: '4em'
 },
 startBottom: {
  type: String,
  default: '4em'
 },
 contentHeightOffset: {
  type: String,
  default: '2em'
 },
});
</script>

<template>
 <Container type="xxl" overflow="x-hidden">
  <Row>
   <Col col="12 md-3">
    <Flex relative-width="100">
     <FlexItem display="none xl-block" style="width:50px;" z="3"><!-- Start よりZindex を上げないとTooltipが隠れる -->
      <Fixed top="0">
       <b-div viewport-height style="scrollbar-width: none; " overflow="y-auto x-hidden">
        <slot name="mini" />
       </b-div>
      </Fixed>
     </FlexItem>
     <FlexItem class="md:un-w-186px lg:un-w-236px xl:un-w-236px" z="2"><!-- defaultとHeader よりZindex を上げないとOffcanvasが隠れる -->
      <Fixed top="0" background-color="body-secondary">
       <Flex flex-direction="column" viewport-height>
        <Fixed top="0" display="none md-block" z="1">
         <slot name="startHeader" />
        </Fixed>
        <FlexItem flex-fill style="scrollbar-width: thin" overflow="y-auto x-hidden" id="start">
         <slot name="start" />
        </FlexItem>
        <Fixed bottom="0" display="none md-block">
         <slot name="startFooter" />
        </Fixed>
       </Flex>
      </Fixed>
     </FlexItem>
    </Flex>
   </Col>
   <Col col="12 md-9">
    <Container type="fluid">
     <Fixed top="0" z="1" background-color="body"><!-- default よりZindex を上げないとHeaderが隠れる backgroundがないと透ける -->
      <slot name="header" />
     </Fixed>
     <b-div id="content">
      <slot />
     </b-div>
     <Fixed bottom="0" z="1" background-color="body"><!-- default よりZindex を上げないとFooterが隠れる backgroundがないと透ける -->
      <slot name="footer" />
     </Fixed>
    </Container>
   </Col>
  </Row>
 </Container>
 <BackToTop color="primary-subtle" z="1" />
</template>

<style lang="scss" scoped>
#content {
 margin-top: v-bind(contentTop);
 margin-bottom: v-bind(contentBottom);
}

#start {
 margin-top: v-bind(startTop);
 margin-bottom: v-bind(startBottom);
}


</style>