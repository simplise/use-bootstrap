<template>
 <v-chart :id="id" :option="computedOption" autoresize />
</template>

<script setup>
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
 TitleComponent,
 TooltipComponent,
 LegendComponent,
 DatasetComponent
} from 'echarts/components';
import VChart from 'vue-echarts/csp';
import 'vue-echarts/csp/style.css';
import { computed } from 'vue';
import { useDarkState } from '../../../composables/utils/useDarkState';
import { useId } from '#imports';

const id = useId();

const props = defineProps({
 option: {
  type: Object,
  default: undefined,
 },
 dataset: {
  type: Array,
  default: () => [],
 },
 tooltip: {
  type: [Boolean, Object],
  default: undefined,
 },
 legend: {
  type: [Boolean, Object],
  default: undefined,
 },
 title: {
  type: [String, Object],
  default: undefined,
 },
 label: {
  type: [Boolean, String, Object],
  default: true,
 },
 radius: {
  type: [String, Array],
  default: ['45%', '80%'],
 },
});

use([
 SVGRenderer,
 PieChart,
 TitleComponent,
 TooltipComponent,
 LegendComponent,
 DatasetComponent
]);

const isDark = useDarkState();

const computedOption = computed(() => {
 return {
  dataset: {
   source: props.dataset,
  },
  title: {
   show: !!props.title,
   text: props.title,
   left: 'center',
   ...(isDark.value ? {
    textStyle: {
     color: '#fff'
    }
   } : {})
  },
  "legend": {
   "show": false
  },
  tooltip: props.tooltip ? {
   trigger: 'item'
  } : undefined,
  legend: props.legend ? {
   orient: 'vertical',
   left: 'left',
   top: 'center',
   ...(isDark.value ? {
    textStyle: {
     color: '#fff'
    }
   } : {})
  } : undefined,
  "series": [
   {
    label: {
     show: props.label,
     ...(isDark.value ? {
      textStyle: {
       color: '#fff'
      }
     } : {})
    },
    "type": "pie",
    "radius": props.radius,
    "emphasis": {
     "itemStyle": {
      "shadowBlur": 10,
      "shadowOffsetX": 0,
      "shadowColor": "rgba(0, 0, 0, 0.5)"
     }
    }
   }
  ]
 }
}
)
</script>
