<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Product {
  id: string
  name: string
  category: string
  price: number
  priceEstimate: string
  weight: string
  weightDetails: string
  inStock: boolean
  description: string
  ingredients: string
  images: string[]
  sizes: string[]
  rating?: number
  reviews?: number
}

const route = useRoute()
const router = useRouter()
const productId = route.params.id

// Product data
const product = ref<Product>({
  id: '1',
  name: 'Avocado',
  category: 'Fruits',
  price: 4.99,
  priceEstimate: 'Price estimate: $0.31 ($1.19/lb x 0.26 lb)*',
  weight: '0.5lb',
  weightDetails: '(About 1.04 lb each • $1.49 / lb Final cost by weight)',
  inStock: true,
  description: 'You get the most health benefits from fruits when you eat them fresh. You\'ll find that fruits are low in fat and cholesterol so they are great for everyone, especially those who want to maintain a healthy balance diet. Most fruits also contain a lot of .......',
  ingredients: 'You get the most health benefits from fruits when you eat them fresh. You\'ll find that fruits are low in fat and cholesterol so they are great for everyone, especially those who want to maintain a healthy balance diet. Most fruits also contain a lot of .......',
  images: [
    'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800',
    'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800',
    'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800',
  ],
  sizes: ['Small', 'Medium', 'Large'],
  rating: 4.5,
  reviews: 128
})

const selectedSize = ref('Small')
const selectedImageIndex = ref(0)
const quantity = ref(1)
const detailsExpanded = ref(true)
const ingredientsExpanded = ref(true)
const cartCount = ref(0)

const selectedImage = computed(() => product.value.images[selectedImageIndex.value])

const selectSize = (size: string) => {
  selectedSize.value = size
}

const selectImage = (index: number) => {
  selectedImageIndex.value = index
}

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  cartCount.value += quantity.value
  // Show success message or animation
  alert(`Added ${quantity.value} ${product.value.name} to cart!`)
}

const goBack = () => {
  router.back()
}

const toggleDetails = () => {
  detailsExpanded.value = !detailsExpanded.value
}

const toggleIngredients = () => {
  ingredientsExpanded.value = !ingredientsExpanded.value
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

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-6 max-w-7xl">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="mb-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
      >
        <span class="text-2xl">←</span>
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Column - Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="bg-white rounded-3xl p-8 shadow-sm">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="w-full h-96 object-contain"
            />
          </div>

          <!-- Thumbnail Images -->
          <div class="flex gap-3 justify-center">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="selectImage(index)"
              class="w-24 h-24 bg-white rounded-xl overflow-hidden border-2 transition-all hover:border-gray-300"
              :class="selectedImageIndex === index ? 'border-[#1e2875] ring-2 ring-[#1e2875] ring-offset-2' : 'border-gray-200'"
            >
              <img
                :src="image"
                :alt="`${product.name} ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Right Column - Product Info -->
        <div class="space-y-6">
          <!-- Category & Stock -->
          <div class="flex items-center gap-3">
            <span class="text-green-600 font-semibold text-lg">{{ product.category }}</span>
            <span
              v-if="product.inStock"
              class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
            >
              In Stock
            </span>
          </div>

          <!-- Product Name -->
          <h1 class="text-4xl font-bold text-gray-900">{{ product.name }}</h1>

          <!-- Weight Info -->
          <p class="text-gray-600">
            {{ product.weight }}
            <span class="text-gray-400">{{ product.weightDetails }}</span>
          </p>

          <!-- Price -->
          <div>
            <p class="text-4xl font-bold text-gray-900 mb-1">${{ product.price.toFixed(2) }}</p>
            <p class="text-sm text-gray-500">{{ product.priceEstimate }}</p>
          </div>

          <!-- Size Selection -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">Size</h3>
            <div class="flex gap-3">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectSize(size)"
                class="px-6 py-3 rounded-lg font-medium transition-all"
                :class="selectedSize === size 
                  ? 'bg-[#1e2875] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Details Section -->
          <div class="border-t border-gray-200 pt-6">
            <button
              @click="toggleDetails"
              class="w-full flex items-center justify-between text-left mb-4"
            >
              <h3 class="text-xl font-bold text-gray-900">Details</h3>
              <span
                class="text-gray-400 text-2xl transition-transform"
                :class="{ 'rotate-180': !detailsExpanded }"
              >
                ∨
              </span>
            </button>
            <transition name="expand">
              <p v-if="detailsExpanded" class="text-gray-700 leading-relaxed">
                {{ product.description }}
              </p>
            </transition>
          </div>

          <!-- Ingredients Section -->
          <div class="border-t border-gray-200 pt-6">
            <button
              @click="toggleIngredients"
              class="w-full flex items-center justify-between text-left mb-4"
            >
              <h3 class="text-xl font-bold text-gray-900">Ingredients</h3>
              <span
                class="text-gray-400 text-2xl transition-transform"
                :class="{ 'rotate-180': !ingredientsExpanded }"
              >
                ∨
              </span>
            </button>
            <transition name="expand">
              <p v-if="ingredientsExpanded" class="text-gray-700 leading-relaxed">
                {{ product.ingredients }}
              </p>
            </transition>
          </div>

          <!-- Schedule Item -->
          <div class="border-t border-gray-200 pt-6">
            <button class="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
              <span class="text-xl">📅</span>
              <span>Schedule Item</span>
            </button>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="sticky bottom-0 bg-gray-50 pt-6 pb-4">
            <div class="bg-white rounded-xl p-4 shadow-lg">
              <div class="flex items-center gap-4">
                <!-- Quantity Selector -->
                <div class="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2">
                  <button
                    @click="decreaseQuantity"
                    class="w-8 h-8 flex items-center justify-center font-bold text-xl text-gray-700 hover:text-gray-900"
                    :disabled="quantity <= 1"
                    :class="{ 'opacity-50 cursor-not-allowed': quantity <= 1 }"
                  >
                    −
                  </button>
                  <span class="text-xl font-bold text-gray-900 min-w-[2rem] text-center">
                    {{ quantity }}
                  </span>
                  <button
                    @click="increaseQuantity"
                    class="w-8 h-8 flex items-center justify-center font-bold text-xl text-gray-700 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>

                <!-- Add to Cart Button -->
                <button
                  @click="addToCart"
                  class="flex-1 bg-[#1e2875] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#151d5a] transition-colors shadow-md hover:shadow-lg"
                >
                  Add to Cart
                </button>
              </div>

              <!-- Total Price -->
              <div class="mt-4 text-center">
                <p class="text-sm text-gray-600">
                  Total: <span class="text-xl font-bold text-gray-900">${{ (product.price * quantity).toFixed(2) }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products Section (Optional) -->
      <section class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <!-- Related products would go here -->
          <div
            v-for="i in 5"
            :key="i"
            class="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="aspect-square bg-gray-100 rounded-lg mb-3"></div>
            <p class="text-sm text-gray-700 mb-1">Related Product {{ i }}</p>
            <p class="font-bold text-gray-900">$4.99</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>