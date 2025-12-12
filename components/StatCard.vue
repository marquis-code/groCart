<template>
  <div :class="['rounded-xl p-6 shadow-sm', color]">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-sm font-medium text-gray-600">{{ title }}</h3>
    </div>
    <div class="flex items-center gap-3 mb-2">
      <div class="p-2 bg-white rounded-lg">
        <component :is="icon" class="text-gray-700" :size="24" />
      </div>
    </div>
    <div class="text-3xl font-bold text-gray-900 mb-2">{{ value }}</div>
    <div :class="['flex items-center gap-1 text-sm', isPositive ? 'text-green-600' : 'text-red-600']">
      <IconTrendingUp :size="16" />
      <span>{{ change }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconTrendingUp } from '@tabler/icons-vue';

interface Props {
  title: string;
  value: string;
  change: string;
  icon: any;
  isPositive: boolean;
  color: string;
}

defineProps<Props>();
</script>