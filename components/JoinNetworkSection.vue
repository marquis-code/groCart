

<template>
  <section class="mb-16">
    <div class="mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary">Join Our Network</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Become Our Partner Card -->
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="p-8 md:p-10">
          <!-- Icon -->
          <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-10 h-10" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="24" width="48" height="32" rx="2" fill="#10B981" stroke="#059669" stroke-width="2"/>
              <rect x="12" y="20" width="40" height="4" rx="1" fill="#10B981"/>
              <rect x="16" y="28" width="12" height="8" rx="1" fill="#FFF"/>
              <rect x="30" y="28" width="18" height="2" rx="1" fill="#FFF"/>
              <rect x="30" y="32" width="14" height="2" rx="1" fill="#FFF"/>
              <rect x="16" y="40" width="32" height="2" rx="1" fill="#FFF"/>
              <rect x="16" y="44" width="24" height="2" rx="1" fill="#FFF"/>
              <path d="M20 8L24 14H16L20 8Z" fill="#10B981"/>
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Become Our Partner</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Partner with us to increase your sales and reach more customers.
          </p>

          <!-- Benefits List -->
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-700">Expand your customer base.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-700">Easy to use dashboard to manage orders.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-700">Increase revenue with delivery service.</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button
            @click="registerStore"
            class="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Register Your Store
          </button>
        </div>
      </div>

      <!-- Delivery Drivers Card -->
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="p-8 md:p-10">
          <!-- Icon -->
          <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-10 h-10" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="24" r="8" fill="#3B82F6" stroke="#2563EB" stroke-width="2"/>
              <path d="M20 40C20 34.4772 24.4772 30 30 30H34C39.5228 30 44 34.4772 44 40V48H20V40Z" fill="#3B82F6" stroke="#2563EB" stroke-width="2"/>
              <path d="M44 38L48 42L52 34" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="26" cy="52" r="4" fill="#FFF" stroke="#2563EB" stroke-width="2"/>
              <circle cx="38" cy="52" r="4" fill="#FFF" stroke="#2563EB" stroke-width="2"/>
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Delivery Drivers</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Join our fleets of delivery drivers and earn money on your own schedule. Be your own boss with flexible working hours.
          </p>

          <!-- Benefits List -->
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-700">Competitive Pay with incentives.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-700">Flexible hours - work when you want.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-700">User friendly app for efficient deliveries.</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button
            @click="becomeShopper"
            class="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Become a Shopper
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const registerStore = () => {
  console.log('Registering store...')
  // Navigate to store registration page
  alert('Redirecting to store registration...')
}

const becomeShopper = () => {
  console.log('Becoming a shopper...')
  // Navigate to shopper registration page
  alert('Redirecting to shopper registration...')
}
</script>