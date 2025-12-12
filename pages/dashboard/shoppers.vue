<template>
  <NuxtLayout name="dashboard">
    <div class="p-4 lg:p-8">
      <!-- Page Header with Status -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Shopper Management</h1>
          <p class="text-gray-600 mt-1">Real-time platform monitoring</p>
        </div>
        
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <h3 class="text-sm font-semibold text-gray-900 mb-3">Current Status</h3>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm text-gray-700">127 Shoppers Online</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span class="text-sm text-gray-700">45 Shopping Now</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <span class="text-sm text-gray-700">25 On Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Map Section -->
        <div class="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Live Shoppers Activity</h3>
          <div class="relative h-80 bg-gradient-to-br from-blue-100 via-green-100 to-amber-50 rounded-lg overflow-hidden">
            <!-- Map regions -->
            <div class="absolute left-0 top-0 w-1/3 h-full bg-blue-200 opacity-50"></div>
            <div class="absolute left-1/3 top-0 w-1/3 h-full bg-green-200 opacity-50"></div>
            <div class="absolute left-2/3 top-0 w-1/3 h-full bg-amber-100 opacity-50"></div>
            
            <!-- Map markers -->
            <div
              v-for="(marker, i) in mapMarkers"
              :key="i"
              :style="{ left: marker.x, top: marker.y }"
              class="absolute w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2"
            >
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <!-- Region labels -->
            <div class="absolute left-16 top-8 text-sm font-semibold text-gray-700">Caloan Sary</div>
            <div class="absolute left-16 bottom-16 text-sm font-semibold text-gray-700">Shipper Sones</div>
            <div class="absolute right-16 top-16 text-sm font-semibold text-gray-700">Flrapter Zons</div>
            <div class="absolute right-16 bottom-8 text-sm font-semibold text-gray-700">Modker Bercing Shrarpers</div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="space-y-4">
          <div
            v-for="(stat, index) in shopperStats"
            :key="index"
            :class="['rounded-xl p-6 shadow-sm', stat.color]"
          >
            <h3 class="text-sm font-medium text-gray-600 mb-4">{{ stat.title }}</h3>
            <div class="flex items-center gap-3 mb-2">
              <div class="p-2 bg-white rounded-lg">
                <component :is="stat.icon" class="text-gray-700" :size="24" />
              </div>
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
            <div class="flex items-center gap-1 text-sm text-green-600">
              <IconTrendingUp :size="16" />
              <span>{{ stat.change }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Shoppers Table -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">User ID</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joined Date</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vehicle Info</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Order</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Order</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="(shopper, index) in shoppers"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 text-sm text-gray-900">{{ shopper.id }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ shopper.name }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ shopper.email }}</td>
                <td class="px-6 py-4">
                  <span
                    :class="[
                      'text-sm font-medium',
                      shopper.status === 'Active' ? 'text-green-600' : 
                      shopper.status === 'Pending' ? 'text-blue-600' : 'text-red-600'
                    ]"
                  >
                    {{ shopper.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ shopper.date }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ shopper.vehicle }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ shopper.orders }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ shopper.total }}</td>
                <td class="px-6 py-4">
                  <ActionDropdown :user-id="shopper.id" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconUsers, IconUserCheck, IconClock, IconTrendingUp } from '@tabler/icons-vue';

interface ShopperStat {
  title: string;
  value: string;
  change: string;
  icon: any;
  color: string;
}

interface Shopper {
  id: string;
  name: string;
  email: string;
  status: string;
  date: string;
  vehicle: string;
  orders: number;
  total: number;
}

const shopperStats = ref<ShopperStat[]>([
  {
    title: 'Total Shoppers',
    value: '24,500',
    change: '+2.1% this week',
    icon: IconUsers,
    color: 'bg-purple-50'
  },
  {
    title: 'Active Shoppers',
    value: '24,500',
    change: '+2.1% this week',
    icon: IconUserCheck,
    color: 'bg-blue-50'
  },
  {
    title: 'Pending Verificatio',
    value: '23',
    change: '5 this week',
    icon: IconClock,
    color: 'bg-purple-50'
  },
  {
    title: 'Blocked Shoppers',
    value: '145',
    change: '+2.1% this week',
    icon: IconUsers,
    color: 'bg-purple-50'
  }
]);

const shoppers = ref<Shopper[]>([
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Active', date: '2023-03-15', vehicle: 'johnromans@gmail.com', orders: 200, total: 200 },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Active', date: '2023-03-15', vehicle: 'johnromans@gmail.com', orders: 200, total: 200 },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Pending', date: '2023-03-15', vehicle: 'johnromans@gmail.com', orders: 200, total: 200 },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Blocked', date: '2023-03-15', vehicle: 'johnromans@gmail.com', orders: 200, total: 200 },
]);

const mapMarkers = ref([
  { x: '15%', y: '25%' },
  { x: '25%', y: '60%' },
  { x: '35%', y: '45%' },
  { x: '45%', y: '30%' },
  { x: '50%', y: '55%' },
  { x: '55%', y: '40%' },
  { x: '60%', y: '70%' },
  { x: '65%', y: '25%' },
  { x: '70%', y: '50%' },
  { x: '75%', y: '35%' },
  { x: '80%', y: '65%' },
  { x: '85%', y: '80%' },
]);
</script>