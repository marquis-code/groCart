<template>
  <section class="mb-16">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl md:text-4xl font-bold text-primary">Categories</h2>
      <button class="text-green-600 hover:text-green-700 font-semibold text-sm md:text-base transition-colors">
        View all
      </button>
    </div>

    <div class="relative">
      <!-- Categories Container -->
      <div class="overflow-hidden">
        <div 
          ref="categoriesContainer"
          class="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category)"
            class="flex-shrink-0 w-36 md:w-40 cursor-pointer group"
          >
            <div class="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
              <div 
                class="aspect-[4/5] relative"
                :style="{ backgroundColor: category.bgColor }"
              >
                <!-- Category Image -->
                <div class="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    :src="category.image"
                    :alt="category.name"
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <!-- Category Name -->
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h3 class="text-white font-bold text-lg text-center">{{ category.name }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        v-if="showNavigation"
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center z-10 hidden md:flex"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        v-if="showNavigation"
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center z-10 hidden md:flex"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Category {
  id: string
  name: string
  bgColor: string
  image: string
}

const categoriesContainer = ref<HTMLElement | null>(null)
const showNavigation = ref(true)

const categories = ref<Category[]>([
  {
    id: '1',
    name: 'Vegetables',
    bgColor: '#6B7C1E',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%236B7C1E" width="200" height="300"/%3E%3Ctext x="100" y="150" font-size="40" fill="white" text-anchor="middle" font-family="Arial"%3E🥬%3C/text%3E%3C/svg%3E'
  },
  {
    id: '2',
    name: 'Bakery',
    bgColor: '#7B2869',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%237B2869" width="200" height="300"/%3E%3Ctext x="100" y="150" font-size="40" fill="white" text-anchor="middle" font-family="Arial"%3E🥐%3C/text%3E%3C/svg%3E'
  },
  {
    id: '3',
    name: 'Fruits',
    bgColor: '#0F7173',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%230F7173" width="200" height="300"/%3E%3Ctext x="100" y="150" font-size="40" fill="white" text-anchor="middle" font-family="Arial"%3E🍎%3C/text%3E%3C/svg%3E'
  },
  {
    id: '4',
    name: 'Meats',
    bgColor: '#5C2E0F',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%235C2E0F" width="200" height="300"/%3E%3Ctext x="100" y="150" font-size="40" fill="white" text-anchor="middle" font-family="Arial"%3E🥩%3C/text%3E%3C/svg%3E'
  },
  {
    id: '5',
    name: 'Beverages',
    bgColor: '#0F2E5C',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%230F2E5C" width="200" height="300"/%3E%3Ctext x="100" y="150" font-size="40" fill="white" text-anchor="middle" font-family="Arial"%3E🥤%3C/text%3E%3C/svg%3E'
  },
  {
    id: '6',
    name: 'Snacks',
    bgColor: '#D97706',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23D97706" width="200" height="300"/%3E%3Ctext x="100" y="150" font-size="40" fill="white" text-anchor="middle" font-family="Arial"%3E🍿%3C/text%3E%3C/svg%3E'
  }
])

const scrollLeft = () => {
  if (categoriesContainer.value) {
    categoriesContainer.value.scrollBy({ left: -200, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (categoriesContainer.value) {
    categoriesContainer.value.scrollBy({ left: 200, behavior: 'smooth' })
  }
}

const selectCategory = (category: Category) => {
  console.log('Selected category:', category.name)
  // Navigate to category page or filter products
}

onMounted(() => {
  // Hide scrollbar
  const style = document.createElement('style')
  style.textContent = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `
  document.head.appendChild(style)
})
</script>