<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-[#1e2a4a] text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
             <img src="@/assets/img/logo.png" class="h-10 w-auto" />
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8 text-base">
            <a href="#stores" class="hover:text-gray-300 transition">Stores</a>
            <a href="#groceries" class="hover:text-gray-300 transition">Groceries</a>
            <a href="#categories" class="hover:text-gray-300 transition">Categories</a>
            <a href="#about" class="hover:text-gray-300 transition">About us</a>
          </nav>

          <!-- Search Bar -->
          <div class="hidden lg:flex items-center bg-[#2a3654] rounded-lg px-4 py-3 w-80 border border-[#3a4664]">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search for stores..."
              class="bg-transparent border-none outline-none text-white placeholder-gray-400 ml-3 w-full"
            />
          </div>

          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <button class="px-6 py-2.5 text-white hover:bg-[#2a3654] rounded-lg transition font-medium">
              Login
            </button>
            <button class="px-6 py-2.5 bg-white text-[#1e2a4a] rounded-lg hover:bg-gray-100 transition font-medium">
              Get Started
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
              Fresh <span class="text-[#22c55e]">groceries</span><br />
              <span class="text-[#1e2a4a]">delivered to your<br />doorstep</span>
            </h1>
            
            <p class="text-gray-600 text-lg leading-relaxed max-w-xl">
              Shop from multiple supermarkets and local stores.<br />
              Get fresh produce, household essentials, and<br />
              more delivered in as little as 30 minutes.
            </p>

            <!-- Address Input -->
            <div class="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <div class="flex-1 flex items-center bg-white border-2 border-gray-200 rounded-lg px-4 py-3.5 focus-within:border-[#1e2a4a] transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input
                  v-model="deliveryAddress"
                  type="text"
                  placeholder="Add your delivery address"
                  class="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 ml-3 w-full"
                />
              </div>
              <button class="bg-[#1e2a4a] text-white px-8 py-3.5 rounded-lg hover:bg-[#2a3654] transition font-medium whitespace-nowrap">
                Start Shopping
              </button>
            </div>
          </div>

          <!-- Right Image -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="@/assets/img/user-shopping.png"
                alt="Woman shopping for groceries"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


        <main class="container mx-auto px-4 py-8 md:py-12">
      <!-- Categories Section -->
      <CategoriesSection />

      <!-- Mobile App Section -->
      <MobileAppSection />

      <!-- Join Network Section -->
      <JoinNetworkSection />
    </main>

    <!-- Decorative Wave -->
    <div class="relative h-20 bg-white">
      <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0C240 40 480 60 720 60C960 60 1200 40 1440 0V120H0V0Z" fill="#1e2a4a"/>
      </svg>
    </div>

    <!-- Why Choose Us Section -->
    <section class="bg-[#1e2a4a] text-white py-16 lg:py-20">
      <div class="container mx-auto px-4 lg:px-8">
        <h2 class="text-4xl lg:text-5xl font-bold text-center mb-16">Why Choose Us</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          <!-- Feature 1 -->
          <div class="bg-[#2a3654] rounded-2xl p-6 hover:bg-[#343f5f] transition group">
            <div class="flex items-center space-x-3 mb-2">
              <div class="text-3xl">🚀</div>
              <h3 class="text-lg font-semibold">Quick Onboarding</h3>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bg-[#2a3654] rounded-2xl p-6 hover:bg-[#343f5f] transition group">
            <div class="flex items-center space-x-3 mb-2">
              <div class="text-3xl">🥇</div>
              <h3 class="text-lg font-semibold">Quality products</h3>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="bg-[#2a3654] rounded-2xl p-6 hover:bg-[#343f5f] transition group">
            <div class="flex items-center space-x-3 mb-2">
              <div class="text-3xl">⭐</div>
              <h3 class="text-lg font-semibold">Trusted stores</h3>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="bg-[#2a3654] rounded-2xl p-6 hover:bg-[#343f5f] transition group">
            <div class="flex items-center space-x-3 mb-2">
              <div class="text-3xl">💪</div>
              <h3 class="text-lg font-semibold">High rated riders</h3>
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="bg-[#2a3654] rounded-2xl p-6 hover:bg-[#343f5f] transition group">
            <div class="flex items-center space-x-3 mb-2">
              <div class="text-3xl">📞</div>
              <h3 class="text-lg font-semibold whitespace-nowrap">24/7 Support for Customers, Vendors,</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('');
const deliveryAddress = ref('');
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
  font-family: 'Inter', sans-serif;
}
</style>