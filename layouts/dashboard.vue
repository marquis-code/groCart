<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed lg:static inset-y-0 left-0 z-50 w-60 bg-[#1a2847] text-white transform transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <div class="flex items-center justify-between p-6 border-b border-gray-700">
        <h1 class="text-2xl font-bold">Grocart</h1>
        <button @click="isSidebarOpen = false" class="lg:hidden">
          <IconX :size="24" />
        </button>
      </div>
      
      <nav class="mt-8 px-4 space-y-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          @click="activeMenu = item.name"
          :class="[
            'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
            activeMenu === item.name ? 'bg-[#2a3f6f]' : 'hover:bg-[#2a3f6f]'
          ]"
        >
          <component :is="item.icon" :size="20" />
          <span class="text-sm">{{ item.name }}</span>
        </NuxtLink>
      </nav>

      <div class="absolute bottom-0 left-0 right-0 p-4">
        <button 
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2a3f6f] rounded-lg transition-colors"
        >
          <IconLogOut :size="20" />
          <span class="text-sm">Log Out</span>
        </button>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div 
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="isSidebarOpen = false"
    />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4 flex-1">
            <button 
              @click="isSidebarOpen = true"
              class="lg:hidden"
            >
              <IconMenu :size="24" />
            </button>
            <div class="relative flex-1 max-w-md">
              <IconSearch class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search samples, sites"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="relative cursor-pointer">
              <IconBell :size="20" class="text-gray-600" />
              <span v-if="notificationCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {{ notificationCount }}
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {{ userInitials }}
              </div>
              <div class="hidden md:block">
                <div class="text-sm font-semibold text-gray-800">{{ userName }}</div>
                <div class="text-xs text-gray-500">{{ userRole }}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  IconMenu, 
  IconX, 
  IconSearch, 
  IconBell, 
  IconLayoutDashboard,
  IconUsers,
  IconShoppingBag,
//   IconStore,
  IconFileText,
//   IconBarChart,
  IconSettings,
//   IconLogOut
} from '@tabler/icons-vue';

interface MenuItem {
  name: string;
  path: string;
  icon: any;
}

const isSidebarOpen = ref(false);
const activeMenu = ref('Dashboard');
const searchQuery = ref('');
const notificationCount = ref(3);

const userName = ref('Raheem Malek');
const userRole = ref('System Admin');
const userInitials = computed(() => {
  return userName.value.split(' ').map(n => n[0]).join('');
});

const menuItems: MenuItem[] = [
  { name: 'Dashboard', path: '/dashboard', icon: IconLayoutDashboard },
  { name: 'Users', path: '/dashboard/users', icon: IconUsers },
  { name: 'Shoppers', path: '/dashboard/shoppers', icon: IconUsers },
//   { name: 'Vendors', path: '/dashboard/vendors', icon: IconStore },
  { name: 'Orders', path: '/dashboard/orders', icon: IconShoppingBag },
//   { name: 'Reports', path: '/dashboard/reports', icon: IconBarChart },
  { name: 'Settings', path: '/dashboard/settings', icon: IconSettings },
];

const handleLogout = () => {
  // Handle logout logic
  console.log('Logging out...');
};
</script>