<template>
  <div class="bg-white rounded-xl p-6 shadow-sm">
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Order Trends</h3>
      <p class="text-sm text-gray-500">Last 7 days</p>
    </div>
    <div class="relative h-64">
      <svg class="w-full h-full" viewBox="0 0 500 200">
        <!-- Y-axis labels -->
        <text v-for="(val, i) in yAxisLabels" :key="`y-${i}`" x="10" :y="30 + i * 30" class="text-xs fill-gray-500">
          {{ val }}
        </text>
        
        <!-- Grid lines -->
        <line v-for="i in 7" :key="`grid-${i}`" x1="60" :y1="30 + (i - 1) * 30" x2="480" :y2="30 + (i - 1) * 30" stroke="#f0f0f0" stroke-width="1" />
        
        <!-- Line chart -->
        <polyline
          :points="linePoints"
          fill="none"
          stroke="#10b981"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        
        <!-- Points -->
        <circle
          v-for="(point, i) in points"
          :key="`point-${i}`"
          :cx="point.x"
          :cy="point.y"
          r="4"
          fill="#10b981"
        />
        
        <!-- X-axis labels -->
        <text v-for="(d, i) in data" :key="`x-${i}`" :x="70 + i * 100" y="195" class="text-xs fill-gray-500">
          {{ d.day }}
        </text>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface OrderTrend {
  day: string;
  orders: number;
}

interface Props {
  data: OrderTrend[];
}

const props = defineProps<Props>();

const yAxisLabels = [3000, 2500, 2000, 1500, 1000, 500, 0];

const points = computed(() => {
  return props.data.map((d, i) => ({
    x: 80 + i * 100,
    y: 200 - (d.orders / 3000) * 170
  }));
});

const linePoints = computed(() => {
  return points.value.map(p => `${p.x},${p.y}`).join(' ');
});
</script>