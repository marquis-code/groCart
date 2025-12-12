<template>
  <NuxtLayout name="dashboard">
    <div class="p-4 lg:p-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">User Management</h1>
        <p class="text-gray-600 mt-1">Manage customer accounts, activity, and orders.</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <div
          v-for="(stat, index) in stats"
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
          <div :class="['flex items-center gap-1 text-sm', stat.isPositive ? 'text-green-600' : 'text-red-600']">
            <component :is="stat.isPositive ? IconTrendingUp : IconTrendingDown" :size="16" />
            <span>{{ stat.change }}</span>
          </div>
        </div>
      </div>

      <!-- Users Table -->
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
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="(user, index) in users"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 text-sm text-gray-900">{{ user.id }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ user.name }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ user.email }}</td>
                <td class="px-6 py-4">
                  <span
                    :class="[
                      'text-sm font-medium',
                      user.status === 'Active' ? 'text-green-600' : 
                      user.status === 'Pending' ? 'text-blue-600' : 'text-red-600'
                    ]"
                  >
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ user.date }}</td>
                <td class="px-6 py-4">
                  <button class="px-4 py-1.5 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                    Activate
                  </button>
                </td>
                <td class="px-6 py-4">
                  <ActionDropdown :user-id="user.id" />
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
import { 
  IconUsers, 
  IconCircleCheck, 
  IconClock, 
  IconLock,
  IconTrendingUp,
  IconTrendingDown
} from '@tabler/icons-vue';

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: any;
  isPositive: boolean;
  color: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  date: string;
}

const stats = ref<Stat[]>([
  {
    title: 'Total Users',
    value: '24,500',
    change: '+2.1% this week',
    icon: IconUsers,
    isPositive: true,
    color: 'bg-blue-50'
  },
  {
    title: 'Active Users',
    value: '1,245',
    change: '+1.5% this week',
    icon: IconCircleCheck,
    isPositive: true,
    color: 'bg-purple-50'
  },
  {
    title: 'Pending Users',
    value: '345',
    change: '-0.8% this week',
    icon: IconClock,
    isPositive: false,
    color: 'bg-purple-50'
  },
  {
    title: 'Blocked Users',
    value: '87',
    change: '+0.2% this week',
    icon: IconLock,
    isPositive: true,
    color: 'bg-purple-50'
  }
]);

const users = ref<User[]>([
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Active', date: '2023-03-15' },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Active', date: '2023-03-15' },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Pending', date: '2023-03-15' },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Blocked', date: '2023-03-15' },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Pending', date: '2023-03-15' },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Blocked', date: '2023-03-15' },
  { id: 'GC-100', name: 'John Romans', email: 'johnromans@gmail.com', status: 'Active', date: '2023-03-15' },
]);
</script>