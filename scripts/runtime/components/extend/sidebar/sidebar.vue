<script setup lang="ts">
//
import { uniqueId, delay } from '../../../composables/utils/helpers';
import { useRoute, onMounted } from '#imports';
import Offcanvas from '../../bootstrap/offcanvas/offcanvas';
import OffcanvasHeader from '../../bootstrap/offcanvas/offcanvasHeader';
import OffcanvasTitle from '../../bootstrap/offcanvas/offcanvasTitle';
import OffcanvasBody from '../../bootstrap/offcanvas/offcanvasBody';
import CloseButton from '../../bootstrap/button/closeButton';
import Accordion from '../../bootstrap/accordion/accordion';
import AccordionItem from '../../bootstrap/accordion/accordionItem';
import AccordionHeader from '../../bootstrap/accordion/accordionHeader';
import AccordionButton from '../../bootstrap/accordion/accordionButton';
import AccordionCollapse from '../../bootstrap/accordion/accordionCollapse';
import AccordionBody from '../../bootstrap/accordion/accordionBody';
import ListGroupList from '../../bootstrap/list-group/listGroupList';
import ListGroupItem from '../../bootstrap/list-group/listGroupItem';
import Anchor from '../../html-inline/anchor';
import bIcon from '../../icon/icon';
import { useDynamicRouteParam } from '../../../composables/extend/dynamicRoute/useDynamicRouteParam';

//
const props = defineProps({
 data: {
  type: Object,
 },
 src: {
  type: String,
 },
 title: {
  type: String,
  default: 'Browse docs',
 },
 activeBackgroundColor: {
  type: String,
  default: 'primary',
 },
 offcanvasType: {
  type: String as PropType<'lg' | 'sm' | 'md' | 'xl' | 'xxl'>,
  default: 'lg',
 },
 color: {
  type: String,
  default: 'transparent',
 },
 backgroundColor: {
  type: String,
  default: 'transparent',
 },
});
//
defineOptions({
 inheritAttrs: false,
});
//
const route = useRoute();
const lang = useDynamicRouteParam('lang');
//
onMounted(async () => {
 // await nextTick();
 await delay(1000);
 const el = document.getElementById(`sl${route.path}`);
 if (el) {
  // el.scrollIntoView(); // 本体もスクロールされてしまう
  // https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
 }
});
//

</script>

<template>
 <ViewState v-slot="routes" :key="src || uniqueId()" :src="src" :data="data">
  <Offcanvas v-bind="$attrs" :type="props.offcanvasType" placement="start">
   <OffcanvasHeader border="bottom">
    <OffcanvasTitle>{{ title }}</OffcanvasTitle>
    <CloseButton dismiss="offcanvas" />
   </OffcanvasHeader>
   <OffcanvasBody>
    <nav class="w-100" aria-label="Docs navigation">
     <Accordion :color="props.color" :background-color="backgroundColor" button-icon-width="1rem" active-color="body">
      <AccordionItem active v-for="item in routes.data" :key="item.name">
       <AccordionHeader level="2">
        <AccordionButton padding="x-0 y-3" rounded >
         <b-icon :icon="item.icon" :color="item.color" margin="e-3" /><b-strong>{{ item.name }}</b-strong>
        </AccordionButton>
       </AccordionHeader>
       <AccordionCollapse>
        <AccordionBody padding="0">
         <ListGroupList flush :color="backgroundColor" border-color="transparent" background-color="transparent" order="start" >
          <ListGroupItem flex justify-content="between" align-items="center" padding="s-2 e-0 y-0" v-for="secondItem in item.children" :key="secondItem.path">
           <Anchor dynamic-route :to="secondItem.path" active-class="active" :lang="lang" :active-background-color="activeBackgroundColor" active-border-color="transparent" aria-current="page" relative-width="100" button small text-alignment="start" padding="y-2 s-3" margin="e-3">
            {{ secondItem.name }}
            <!-- <Badge background-color="primary" pill>
             New
            </Badge> -->
           </Anchor>
          </ListGroupItem>
         </ListGroupList>
        </AccordionBody>
       </AccordionCollapse>
      </AccordionItem>
     </Accordion>
    </nav>
   </OffcanvasBody>
  </Offcanvas>
 </ViewState>
</template>

<style lang="scss" scoped></style>