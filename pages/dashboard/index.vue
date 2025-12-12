<template>
  <NuxtLayout name="dashboard">
    <div class="p-4 lg:p-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p class="text-gray-600 mt-1">Real-time platform monitoring</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        <StatCard
          v-for="(stat, index) in stats"
          :key="index"
          :title="stat.title"
          :value="stat.value"
          :change="stat.change"
          :icon="stat.icon"
          :is-positive="stat.isPositive"
          :color="stat.color"
        />
      </div>

      <!-- Additional Stats Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
        <AdditionalStatCard
          v-for="(stat, index) in additionalStats"
          :key="index"
          :value="stat.value"
          :label="stat.label"
          :icon="stat.icon"
          :warning="stat.warning"
        />
      </div>

      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Order Trends Chart -->
        <OrderTrendsChart :data="orderTrendsData" />
        
        <!-- Top Performing Vendors -->
        <TopVendorsChart :vendors="topVendors" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  IconShoppingCart, 
  IconUsers, 
  IconCash, 
  IconClock 
} from '@tabler/icons-vue';

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: any;
  isPositive: boolean;
  color: string;
}

interface AdditionalStat {
  value: string;
  label: string;
  icon: string;
  warning?: boolean;
}

interface OrderTrend {
  day: string;
  orders: number;
}

interface Vendor {
  name: string;
  orders: number;
}

const stats = ref<Stat[]>([
  {
    title: 'Total Orders Today',
    value: '24,500',
    change: '+12.5% vs yesterday',
    icon: IconShoppingCart,
    isPositive: true,
    color: 'bg-purple-50'
  },
  {
    title: 'Active Users Now',
    value: '1,245',
    change: '+8.3% vs last hour',
    icon: IconUsers,
    isPositive: true,
    color: 'bg-blue-50'
  },
  {
    title: 'Revenue Today',
    value: '$142,890',
    change: '+15.2% vs yesterday',
    icon: IconCash,
    isPositive: true,
    color: 'bg-purple-50'
  },
  {
    title: 'Avg Delivery Time',
    value: '42 mins',
    change: '+12.5% vs yesterday',
    icon: IconClock,
    isPositive: true,
    color: 'bg-purple-50'
  }
]);

const additionalStats = ref<AdditionalStat[]>([
  { value: '127', label: 'Active Shoppers • 12 on delivery', icon: '🚗' },
  { value: '89', label: 'Vendors Open Now', icon: '🏪' },
  { value: '23', label: 'Pending Approvals Needed', icon: '⚠️', warning: true }
]);

const orderTrendsData = ref<OrderTrend[]>([
  { day: 'Mon', orders: 2100 },
  { day: 'Tue', orders: 2300 },
  { day: 'Wed', orders: 2400 },
  { day: 'Thu', orders: 2200 },
  { day: 'Fri', orders: 2500 },
]);

const topVendors = ref<Vendor[]>([
  { name: 'Kroger', orders: 500 },
  { name: 'Kroger', orders: 400 },
  { name: 'Kroger', orders: 300 },
  { name: 'Kroger', orders: 200 },
  { name: 'Kroger', orders: 100 },
]);
</script>