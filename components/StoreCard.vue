<template>
  <div
    @click="$emit('click', store)"
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
</template>

<script setup lang="ts">
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

defineProps<{
  store: Store
}>()

defineEmits<{
  click: [store: Store]
}>()
</script>