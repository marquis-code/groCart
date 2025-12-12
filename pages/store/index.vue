<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between gap-4">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <h1 class="text-2xl md:text-3xl font-bold">Grocart</h1>
          </div>

          <!-- Location Selector -->
          <button
            @click="showLocationModal = true"
            class="hidden md:flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span>{{ selectedLocation }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Search Bar -->
          <div class="flex-1 max-w-xl">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="w-full px-4 py-2.5 pl-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <!-- Cart and Profile -->
          <div class="flex items-center gap-3">
            <button class="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span class="absolute -top-1 -right-1 bg-green-400 text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {{ cartCount }}
              </span>
            </button>
            <button class="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Location -->
        <button
          @click="showLocationModal = true"
          class="md:hidden flex items-center gap-2 text-sm mt-3 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors w-full"
        >
          <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          <span>{{ selectedLocation }}</span>
          <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-6 md:py-8">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow mb-6"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <!-- Title -->
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Stores around you</h2>

      <!-- Category Filters -->
      <div class="mb-8 overflow-x-auto pb-2">
        <div class="flex gap-3 min-w-max md:min-w-0">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2.5 rounded-full font-medium transition-all whitespace-nowrap',
              selectedCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Stores Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div
          v-for="store in filteredStores"
          :key="store.id"
          @click="selectStore(store)"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
        >
          <div class="p-5">
            <div class="flex items-start gap-4">
              <!-- Store Logo -->
              <div class="w-16 h-16 flex-shrink-0 bg-white rounded-lg border-2 border-gray-100 flex items-center justify-center group-hover:border-primary transition-colors">
                <img
                  v-if="store.logo"
                  :src="store.logo"
                  :alt="store.name"
                  class="w-full h-full object-contain p-2"
                />
                <div v-else class="text-2xl font-bold" :style="{ color: store.color }">
                  {{ store.name.charAt(0) }}
                </div>
              </div>

              <!-- Store Info -->
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold text-gray-800 mb-1">{{ store.name }}</h3>
                <div class="flex items-center gap-1 text-sm text-green-600 mb-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">Delivery available . {{ store.deliveryTime }}</span>
                </div>
                <p class="text-sm text-gray-500 mb-3">{{ store.categories.join(', ') }}</p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in store.tags"
                    :key="tag.text"
                    :class="[
                      'text-xs font-medium px-3 py-1 rounded-full',
                      tag.type === 'discount' ? 'bg-orange-100 text-orange-600' :
                      tag.type === 'fresh' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    ]"
                  >
                    {{ tag.text }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredStores.length === 0" class="text-center py-16">
        <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">No stores found</h3>
        <p class="text-gray-500">Try adjusting your filters or search query</p>
      </div>
    </div>

    <!-- Location Modal -->
    <Teleport to="body">
      <div
        v-if="showLocationModal"
        class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        @click="showLocationModal = false"
      >
        <div
          class="bg-white rounded-2xl p-6 max-w-md w-full"
          @click.stop
        >
          <h3 class="text-xl font-bold text-gray-800 mb-4">Select Location</h3>
          <div class="space-y-2">
            <button
              v-for="location in locations"
              :key="location"
              @click="selectLocation(location)"
              :class="[
                'w-full text-left px-4 py-3 rounded-lg transition-colors',
                selectedLocation === location
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ location }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

interface StoreTag {
  text: string
  type: 'discount' | 'fresh' | 'price'
}

interface Store {
  id: string
  name: string
  logo?: string
  color: string
  deliveryTime: string
  categories: string[]
  tags: StoreTag[]
  category: string
}

const router = useRouter()

// State
const searchQuery = ref('')
const selectedCategory = ref('All Stores')
const selectedLocation = ref('14403 Pavilion Point')
const showLocationModal = ref(false)
const cartCount = ref(0)

// Categories
const categories = [
  'All Stores',
  'Groceries',
  'Offers',
  'Alcohol',
  'Beauty',
  'Appliances',
  'Frozen'
]

// Locations
const locations = [
  '14403 Pavilion Point',
  '15620 Harbor Drive',
  '18901 Market Street',
  '12305 Ocean View',
  '16784 Central Avenue'
]

// Store Data
const stores = ref<Store[]>([
  {
    id: '1',
    name: 'Kroger',
    color: '#0047BB',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Fresh Produces', type: 'fresh' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Groceries'
  },
  {
    id: '2',
    name: 'H-E-B',
    color: '#DD0031',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Groceries'
  },
  {
    id: '3',
    name: 'Kroger',
    color: '#0047BB',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Fresh Produces', type: 'fresh' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Groceries'
  },
  {
    id: '4',
    name: 'Kroger',
    color: '#0047BB',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Fresh Produces', type: 'fresh' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Groceries'
  },
  {
    id: '5',
    name: 'H-E-B',
    color: '#DD0031',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Offers'
  },
  {
    id: '6',
    name: 'Kroger',
    color: '#0047BB',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Fresh Produces', type: 'fresh' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Groceries'
  },
  {
    id: '7',
    name: 'Kroger',
    color: '#0047BB',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Fresh Produces', type: 'fresh' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Beauty'
  },
  {
    id: '8',
    name: 'H-E-B',
    color: '#DD0031',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Frozen'
  },
  {
    id: '9',
    name: 'Kroger',
    color: '#0047BB',
    deliveryTime: '15 mins',
    categories: ['Groceries', 'Appliances', 'Bakery'],
    tags: [
      { text: '15% off', type: 'discount' },
      { text: 'Fresh Produces', type: 'fresh' },
      { text: 'Low Prices', type: 'price' }
    ],
    category: 'Appliances'
  }
])

// Computed
const filteredStores = computed(() => {
  let filtered = stores.value

  // Filter by category
  if (selectedCategory.value !== 'All Stores') {
    filtered = filtered.filter(store => 
      store.category === selectedCategory.value ||
      store.categories.some(cat => cat.toLowerCase().includes(selectedCategory.value.toLowerCase()))
    )
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(store =>
      store.name.toLowerCase().includes(query) ||
      store.categories.some(cat => cat.toLowerCase().includes(query))
    )
  }

  return filtered
})

// Methods
const goBack = () => {
  router.back()
}

const selectLocation = (location: string) => {
  selectedLocation.value = location
  showLocationModal.value = false
}

const selectStore = (store: Store) => {
  console.log('Selected store:', store)
  // Navigate to store details page
  // router.push(`/store/${store.id}`)
  alert(`Opening ${store.name} store...`)
}
</script>

// FILE: components/StoreCard.vue

<!-- 
// FILE: composables/useStores.ts
export interface StoreTag {
  text: string
  type: 'discount' | 'fresh' | 'price'
}

export interface Store {
  id: string
  name: string
  logo?: string
  color: string
  deliveryTime: string
  categories: string[]
  tags: StoreTag[]
  category: string
}

export const useStores = () => {
  const stores = useState<Store[]>('stores', () => [
    {
      id: '1',
      name: 'Kroger',
      color: '#0047BB',
      deliveryTime: '15 mins',
      categories: ['Groceries', 'Appliances', 'Bakery'],
      tags: [
        { text: '15% off', type: 'discount' },
        { text: 'Fresh Produces', type: 'fresh' },
        { text: 'Low Prices', type: 'price' }
      ],
      category: 'Groceries'
    },
    {
      id: '2',
      name: 'H-E-B',
      color: '#DD0031',
      deliveryTime: '15 mins',
      categories: ['Groceries', 'Appliances', 'Bakery'],
      tags: [
        { text: '15% off', type: 'discount' },
        { text: 'Low Prices', type: 'price' }
      ],
      category: 'Groceries'
    }
  ])

  const getStoreById = (id: string) => {
    return stores.value.find(store => store.id === id)
  }

  const filterStoresByCategory = (category: string) => {
    if (category === 'All Stores') return stores.value
    return stores.value.filter(store => store.category === category)
  }

  return {
    stores,
    getStoreById,
    filterStoresByCategory
  }
} -->