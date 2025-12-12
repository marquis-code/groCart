<template>
  <div class="bg-white rounded-xl p-6 shadow-sm">
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Top Performing Vendors</h3>
      <p class="text-sm text-gray-500">Orders Today</p>
    </div>
    <div class="space-y-4">
      <div v-for="(vendor, index) in vendors" :key="index" class="flex items-center gap-4">
        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <!-- <IconStore :size="16" class="text-blue-600" /> -->
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-900">{{ vendor.name }}</span>
            <span class="text-sm font-semibold text-gray-900">{{ vendor.orders }}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              class="bg-teal-500 h-2 rounded-full transition-all"
              :style="{ width: `${(vendor.orders / maxOrders) * 100}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import { IconStore } from '@tabler/icons-vue';

interface Vendor {
  name: string;
  orders: number;
}

interface Props {
  vendors: Vendor[];
}

const props = defineProps<Props>();

const maxOrders = computed(() => {
  return Math.max(...props.vendors.map(v => v.orders));
});
</script>