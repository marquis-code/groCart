<template>
  <section class="mb-16">
    <div class="bg-gradient-to-br from-orange-50 via-peach-50 to-yellow-50 rounded-3xl overflow-hidden shadow-xl">
      <div class="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
        <!-- Left Content -->
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Download Our Mobile App
          </h2>
          
          <p class="text-gray-600 text-lg">
            Join thousands of happy customers who save time with GroCart
          </p>

          <!-- App Store Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              @click="downloadGooglePlay"
              class="flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Download on Google Play</span>
            </button>

            <button
              @click="downloadAppStore"
              class="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <span>Download on Apple Store</span>
            </button>
          </div>
        </div>

        <!-- Right Content - Phone Mockup -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Phone Frame -->
            <div class="relative w-64 md:w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
              
              <!-- Screen -->
              <div class="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                <!-- Status Bar -->
                <div class="bg-white px-6 py-3 flex items-center justify-between text-xs">
                  <span class="font-semibold">9:41</span>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                </div>

                <!-- App Header -->
                <div class="px-4 py-3 border-b">
                  <div class="flex items-center justify-between">
                    <button class="p-1">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <div class="text-center">
                      <div class="font-bold">Shoprite</div>
                      <div class="text-xs text-gray-500">90% satisfied guarantee</div>
                    </div>
                    <button class="p-1">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Product Grid -->
                <div class="p-4 bg-gray-50 h-full">
                  <div class="mb-3">
                    <div class="text-xs text-gray-500 mb-1">🔥 Food Category / Snacks</div>
                    <h3 class="font-bold text-sm">Fresh Fruits</h3>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-3">
                    <!-- Product Cards -->
                    <div v-for="i in 4" :key="i" class="bg-white rounded-xl p-3 shadow-sm">
                      <div class="aspect-square bg-gray-100 rounded-lg mb-2 flex items-center justify-center text-2xl">
                        {{ ['🍇', '🍎', '🍌', '🥦'][i-1] }}
                      </div>
                      <div class="text-xs text-gray-500 mb-1">Tropcal Red Seedles</div>
                      <div class="text-xs text-gray-500 mb-1">Item Measured Rare</div>
                      <div class="flex items-center justify-between mb-2">
                        <div>
                          <div class="text-xs font-bold">₦{{(2000 + i * 500).toLocaleString()}}</div>
                          <div class="text-xs text-gray-400 line-through">₦{{(3000 + i * 500).toLocaleString()}}</div>
                        </div>
                        <span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">-15%</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <button class="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs">-</button>
                        <span class="text-xs font-semibold">1</span>
                        <button class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bottom Navigation -->
                <div class="absolute bottom-0 left-0 right-0 bg-white border-t px-4 py-2 flex justify-around">
                  <button class="flex flex-col items-center text-xs text-gray-400">
                    <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </button>
                  <button class="flex flex-col items-center text-xs text-gray-400">
                    <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </button>
                  <button class="flex flex-col items-center text-xs text-primary">
                    <svg class="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span class="font-semibold">Stores</span>
                  </button>
                  <button class="flex flex-col items-center text-xs text-gray-400">
                    <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </button>
                  <button class="flex flex-col items-center text-xs text-gray-400">
                    <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const downloadGooglePlay = () => {
  console.log('Downloading from Google Play...')
  // Add actual Google Play link
  window.open('https://play.google.com/store', '_blank')
}

const downloadAppStore = () => {
  console.log('Downloading from App Store...')
  // Add actual App Store link
  window.open('https://www.apple.com/app-store/', '_blank')
}
</script>