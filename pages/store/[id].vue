// pages/store/[id].vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

interface Product {
  id: string
  name: string
  price: number
  image: string
  weight: string
  rating: number
  reviews: number
  discount?: string
  badge?: string
  inStock: boolean
}

interface ProductCategory {
  id: string
  name: string
  slug: string
  icon: string
  viewAllCount: number
  products: Product[]
}

const route = useRoute()
const storeId = route.params.id

// View mode: grid or list
const viewMode = ref<'grid' | 'list'>('grid')

// Sidebar state
const sidebarOpen = ref(false)
const expandedAisles = ref<string[]>(['produce'])

// Store data
const storeData = ref({
  id: '1',
  name: 'Kroger',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kroger_logo_%282019%29.svg/320px-Kroger_logo_%282019%29.svg.png',
  tagline: 'Same Price In Store',
  guarantee: '100% satisfaction guarantee',
  banner: {
    title: 'FRESH FOR PEOPLE WHO EAT.',
    subtitle: 'THAT INCLUDES YOU!',
    tagline: 'FRESH FOR EVERYONE.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200',
  }
})

// Quick categories
const quickCategories = ref([
  { id: '1', name: 'Fruits', slug: 'fruits', icon: '🍎', subtitle: 'fruits' },
  { id: '2', name: 'Drinks', slug: 'drinks', icon: '🥤', subtitle: 'drinks' },
  { id: '3', name: 'Vegies', slug: 'vegies', icon: '🥬', subtitle: 'veggies' },
  { id: '4', name: 'Bread', slug: 'bread', icon: '🍞', subtitle: 'Baking' },
  { id: '5', name: 'Meats', slug: 'meats', icon: '🥩', subtitle: 'Beef' },
  { id: '6', name: 'Beverages', slug: 'beverages', icon: '🥤', subtitle: 'groceries' },
])

// Aisles/Categories for sidebar
const aisles = ref([
  {
    id: 'produce',
    name: 'Produce',
    subcategories: ['Fruits', 'Vegetables', 'Organic Produce', 'Salad Kits']
  },
  {
    id: 'personal-care',
    name: 'Personal care',
    subcategories: ['Bath & Body', 'Hair Care', 'Skin Care', 'Oral Care']
  },
  {
    id: 'meat-seafood',
    name: 'Meat & Seafood',
    subcategories: ['Beef', 'Chicken', 'Pork', 'Fish', 'Seafood']
  },
  {
    id: 'snacks-candy',
    name: 'Snacks & Candy',
    subcategories: ['Chips', 'Cookies', 'Candy', 'Nuts']
  },
  {
    id: 'frozen',
    name: 'Frozen',
    subcategories: ['Ice Cream', 'Frozen Meals', 'Frozen Vegetables', 'Pizza']
  },
  {
    id: 'bakery',
    name: 'Bakery',
    subcategories: ['Bread', 'Pastries', 'Cakes', 'Cookies']
  },
  {
    id: 'beverages',
    name: 'Beverages',
    subcategories: ['Soft Drinks', 'Juice', 'Coffee', 'Tea', 'Water']
  },
  {
    id: 'dairy-eggs',
    name: 'Dairy & Eggs',
    subcategories: ['Milk', 'Eggs', 'Cheese', 'Yogurt']
  },
  {
    id: 'wine',
    name: 'Wine',
    subcategories: ['Red Wine', 'White Wine', 'Rosé', 'Sparkling']
  },
  {
    id: 'beer',
    name: 'Beer',
    subcategories: ['Domestic', 'Import', 'Craft Beer']
  },
  {
    id: 'kitchen-utensils',
    name: 'Kitchen utensils',
    subcategories: ['Cookware', 'Bakeware', 'Cutlery', 'Storage']
  }
])

// Product categories with products
const productCategories = ref<ProductCategory[]>([
  {
    id: 'best-sellers',
    name: 'Best Sellers',
    slug: 'best-sellers',
    icon: '⭐',
    viewAllCount: 180,
    products: [
      {
        id: 'bs-1',
        name: 'Fresh Bunch of Bananas - 5-7 Bananas',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400',
        weight: '0.5lb',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
      {
        id: 'bs-2',
        name: 'Fresh Bunch of Bananas - 5-7 Bananas',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
        weight: '0.5lb',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
      {
        id: 'bs-3',
        name: 'Fresh Bunch of Bananas - 5-7 Bananas',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400',
        weight: '0.5lb',
        rating: 4.5,
        reviews: 26,
        inStock: true,
      },
      {
        id: 'bs-4',
        name: 'Fresh Bunch of Bananas - 5-7 Bananas',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784faf?w=400',
        weight: '0.5lb',
        rating: 4.5,
        reviews: 26,
        badge: 'Organic',
        inStock: true,
      },
      {
        id: 'bs-5',
        name: 'Fresh Bunch of Bananas - 5-7 Bananas',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1609520778163-a16fb3b0453e?w=400',
        weight: '0.5lb',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
    ]
  },
  {
    id: 'fruits',
    name: 'Fruits',
    slug: 'fruits',
    icon: '🍎',
    viewAllCount: 188,
    products: [
      {
        id: 'fr-1',
        name: 'Fresh Bunch of Bananas - 5-7 Bananas',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400',
        weight: '0.5lb',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
      {
        id: 'fr-2',
        name: 'Green Grapes Seedless',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1599819177831-4eb73cb00f8b?w=400',
        weight: '2lb',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
      {
        id: 'fr-3',
        name: 'Fresh Strawberries',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
        weight: '1lb',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
      {
        id: 'fr-4',
        name: 'Organic Cucumber',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400',
        weight: '1lb',
        rating: 4.5,
        reviews: 26,
        badge: 'Organic',
        inStock: true,
      },
      {
        id: 'fr-5',
        name: 'Fresh Avocados',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400',
        weight: '4 pack',
        rating: 4.5,
        reviews: 26,
        discount: '15% off',
        inStock: true,
      },
    ]
  }
])

const cartCount = ref(0)

const toggleAisle = (aisleId: string) => {
  const index = expandedAisles.value.indexOf(aisleId)
  if (index > -1) {
    expandedAisles.value.splice(index, 1)
  } else {
    expandedAisles.value.push(aisleId)
  }
}

const isAisleExpanded = (aisleId: string) => {
  return expandedAisles.value.includes(aisleId)
}

const addToCart = (product: Product) => {
  cartCount.value++
  console.log('Added to cart:', product)
}

const scrollToCategory = (categoryId: string) => {
  const element = document.getElementById(categoryId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-[#1e2875] text-white sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between gap-4">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold">
            <span>Grocart</span>
          </NuxtLink>

          <!-- Location -->
          <div class="hidden md:flex items-center gap-2 text-sm">
            <span class="text-green-400">📍</span>
            <span>14403 Pavilion Point</span>
            <span>▼</span>
          </div>

          <!-- Search -->
          <div class="flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search"
              class="w-full px-4 py-2 rounded-lg text-gray-800 text-sm"
            />
          </div>

          <!-- Cart & Profile -->
          <div class="flex items-center gap-3">
            <button class="relative bg-white text-[#1e2875] p-2 rounded-lg">
              🛒
              <span
                v-if="cartCount > 0"
                class="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
              >
                {{ cartCount }}
              </span>
            </button>
            <button class="bg-white text-[#1e2875] p-2 rounded-lg">
              👤
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Container -->
    <div class="flex">
      <!-- Sidebar -->
      <aside 
        class="w-64 bg-white border-r border-gray-200 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto hidden lg:block flex-shrink-0"
      >
        <!-- Store Info -->
        <div class="p-6 border-b border-gray-200 text-center">
          <div class="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-4 border-gray-100 overflow-hidden">
            <img :src="storeData.logo" :alt="storeData.name" class="w-24 h-24 object-contain" />
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-1">{{ storeData.name }}</h2>
          <p class="text-sm text-gray-600 mb-2">{{ storeData.tagline }}</p>
          <p class="text-sm text-red-600 font-semibold">{{ storeData.guarantee }}</p>
        </div>

        <!-- Navigation -->
        <nav class="p-4">
          <button class="w-full flex items-center gap-3 px-4 py-3 bg-[#1e2875] text-white rounded-lg mb-2 font-medium">
            <span class="text-lg">🏠</span>
            <span>Home</span>
          </button>
          <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg mb-2 font-medium text-gray-700">
            <span class="text-lg">🎉</span>
            <span>Promo</span>
          </button>
          <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg mb-4 font-medium text-gray-700">
            <span class="text-lg">📋</span>
            <span>Lists</span>
          </button>

          <!-- Aisles -->
          <div class="border-t border-gray-200 pt-4">
            <h3 class="text-sm font-bold text-gray-800 mb-3 px-2">Aisles</h3>
            <div class="space-y-1">
              <div v-for="aisle in aisles" :key="aisle.id">
                <button
                  @click="toggleAisle(aisle.id)"
                  class="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm font-medium text-gray-700"
                >
                  <span>{{ aisle.name }}</span>
                  <span class="text-gray-400 transition-transform" :class="{ 'rotate-180': isAisleExpanded(aisle.id) }">▼</span>
                </button>
                <div
                  v-if="isAisleExpanded(aisle.id)"
                  class="ml-4 space-y-1 mt-1"
                >
                  <button
                    v-for="sub in aisle.subcategories"
                    :key="sub"
                    class="w-full text-left px-2 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                  >
                    {{ sub }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <button
        @click="sidebarOpen = !sidebarOpen"
        class="lg:hidden fixed bottom-4 left-4 z-50 bg-[#1e2875] text-white p-4 rounded-full shadow-lg"
      >
        ☰
      </button>

      <!-- Main Content -->
      <main class="flex-1 min-w-0">
        <!-- Store Banner -->
        <div class="bg-gradient-to-r from-blue-400 to-blue-300 px-6 py-8 md:py-12">
          <div class="max-w-6xl mx-auto flex items-center justify-between">
            <div class="text-white">
              <h1 class="text-3xl md:text-5xl font-bold mb-2">
                {{ storeData.banner.title.split('.')[0] }}.<br />
                <span class="text-pink-300">{{ storeData.banner.subtitle }}</span>
              </h1>
              <div class="mt-4">
                <img :src="storeData.logo" alt="Kroger" class="h-12 brightness-0 invert" />
                <p class="text-sm mt-1">{{ storeData.banner.tagline }}</p>
              </div>
            </div>
            <div class="hidden md:block">
              <img src="https://images.unsplash.com/photo-1531299983330-093a0980a8b4?w=300" alt="Character" class="w-48 h-48 object-contain" />
            </div>
          </div>
        </div>

        <!-- Quick Categories with Scroll -->
        <div class="bg-white border-b border-gray-200 sticky top-[72px] z-40">
          <div class="px-6 py-4">
            <div class="flex items-center gap-3 overflow-x-auto hide-scrollbar">
              <button
                v-for="cat in quickCategories"
                :key="cat.id"
                @click="scrollToCategory(cat.slug)"
                class="flex-shrink-0 flex flex-col items-center justify-center px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all min-w-[100px]"
              >
                <span class="text-3xl mb-1">{{ cat.icon }}</span>
                <span class="text-sm font-bold text-gray-800">{{ cat.name }}</span>
                <span class="text-xs text-gray-500">{{ cat.subtitle }}</span>
              </button>
              <button class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Product Categories -->
        <div class="px-6 py-6">
          <div
            v-for="category in productCategories"
            :key="category.id"
            :id="category.slug"
            class="mb-12"
          >
            <!-- Category Header -->
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-gray-800">{{ category.name }}</h2>
              <button class="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center gap-1">
                View all
                <span class="text-orange-600">{{ category.viewAllCount }} items</span>
              </button>
            </div>

            <!-- View Toggle (Mobile) -->
            <div class="flex gap-2 mb-4 md:hidden">
              <button
                @click="viewMode = 'grid'"
                class="px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                :class="viewMode === 'grid' ? 'bg-[#1e2875] text-white' : 'bg-gray-200 text-gray-700'"
              >
                Grid
              </button>
              <button
                @click="viewMode = 'list'"
                class="px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                :class="viewMode === 'list' ? 'bg-[#1e2875] text-white' : 'bg-gray-200 text-gray-700'"
              >
                List
              </button>
            </div>

            <!-- Products Grid/List -->
            <div
              class="grid gap-4"
              :class="viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-1'"
            >
              <div
                v-for="product in category.products"
                :key="product.id"
                class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                :class="viewMode === 'list' ? 'flex' : ''"
              >
                <div class="relative" :class="viewMode === 'list' ? 'w-48 flex-shrink-0' : ''">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full object-cover"
                    :class="viewMode === 'list' ? 'h-full' : 'aspect-square'"
                  />
                  <div v-if="product.discount" class="absolute top-2 left-2">
                    <span class="bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">
                      {{ product.discount }}
                    </span>
                  </div>
                  <div v-if="product.badge" class="absolute top-2 right-2">
                    <span class="bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                      {{ product.badge }}
                    </span>
                  </div>
                </div>
                <div class="p-4 flex flex-col flex-1">
                  <p class="text-lg font-bold text-gray-800 mb-1">${{ product.price.toFixed(2) }}</p>
                  <p class="text-sm text-gray-700 mb-2 line-clamp-2 flex-1">{{ product.name }}</p>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs text-gray-500">{{ product.weight }}</span>
                    <div class="flex items-center gap-1 text-xs">
                      <span class="text-yellow-500">★</span>
                      <span class="font-medium">{{ product.rating }}</span>
                      <span class="text-gray-400">({{ product.reviews }})</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span
                      class="text-xs font-semibold"
                      :class="product.inStock ? 'text-green-600' : 'text-red-600'"
                    >
                      {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
                    </span>
                    <button
                      @click="addToCart(product)"
                      :disabled="!product.inStock"
                      class="bg-[#1e2875] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#151d5a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <div
      v-if="sidebarOpen"
      class="lg:hidden fixed inset-0 z-40 bg-black/50"
      @click="sidebarOpen = false"
    >
      <aside
        class="w-64 bg-white h-full overflow-y-auto"
        @click.stop
      >
        <!-- Store Info -->
        <div class="p-6 border-b border-gray-200 text-center">
          <button
            @click="sidebarOpen = false"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <div class="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-4 border-gray-100">
            <img :src="storeData.logo" :alt="storeData.name" class="w-24 h-24 object-contain" />
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-1">{{ storeData.name }}</h2>
          <p class="text-sm text-gray-600 mb-2">{{ storeData.tagline }}</p>
          <p class="text-sm text-red-600 font-semibold">{{ storeData.guarantee }}</p>
        </div>

        <!-- Navigation -->
        <nav class="p-4">
          <button class="w-full flex items-center gap-3 px-4 py-3 bg-[#1e2875] text-white rounded-lg mb-2 font-medium">
            <span class="text-lg">🏠</span>
            <span>Home</span>
          </button>
          <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg mb-2 font-medium text-gray-700">
            <span class="text-lg">🎉</span>
            <span>Promo</span>
          </button>
          <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg mb-4 font-medium text-gray-700">
            <span class="text-lg">📋</span>
            <span>Lists</span>
          </button>

          <!-- Aisles -->
          <div class="border-t border-gray-200 pt-4">
            <h3 class="text-sm font-bold text-gray-800 mb-3 px-2">Aisles</h3>
            <div class="space-y-1">
              <div v-for="aisle in aisles" :key="aisle.id">
                <button
                  @click="toggleAisle(aisle.id)"
                  class="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm font-medium text-gray-700"
                >
                  <span>{{ aisle.name }}</span>
                  <span class="text-gray-400 transition-transform" :class="{ 'rotate-180': isAisleExpanded(aisle.id) }">▼</span>
                </button>
                <div
                  v-if="isAisleExpanded(aisle.id)"
                  class="ml-4 space-y-1 mt-1"
                >
                  <button
                    v-for="sub in aisle.subcategories"
                    :key="sub"
                    class="w-full text-left px-2 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                  >
                    {{ sub }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>