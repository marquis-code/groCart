<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Image Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-50"></div>
    
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Left Side - Hero Section -->
          <div class="relative bg-primary p-8 lg:p-12 flex flex-col justify-center items-center text-white overflow-hidden">
            <div class="relative z-10 text-center max-w-md">
              <div class="mb-8">
                <div class="flex items-center justify-center gap-2 mb-8">
                  <div class="w-10 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <span class="text-3xl font-bold">rocart</span>
                </div>
                
                <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  "Shop Easy. Live Fresh."
                </h1>
                
                <p class="text-lg text-blue-100 leading-relaxed">
                  Join Grocart today and enjoy effortless grocery shopping with doorstep delivery, exclusive deals, and trusted quality — all in one place.
                </p>
              </div>
            </div>
            
            <!-- Decorative Wave -->
            <div class="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-32">
                <path d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z" fill="white" opacity="0.1"></path>
              </svg>
            </div>
            
            <!-- Grocery Image Overlay -->
            <div class="absolute bottom-0 left-0 right-0 h-64 bg-cover bg-center opacity-20" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23ffffff%22 width=%221200%22 height=%22600%22/%3E%3C/svg%3E');">
            </div>
          </div>

          <!-- Right Side - Form Section -->
          <div class="p-8 lg:p-12">
            <div class="max-w-md mx-auto">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Let's Get Started</h2>
              
              <form @submit.prevent="handleSignup" class="space-y-6">
                <!-- Name Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      v-model="formData.firstName"
                      type="text"
                      placeholder="Example@email.com"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input
                      v-model="formData.lastName"
                      type="text"
                      placeholder="Example@email.com"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <!-- Country and Phone -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <div class="relative">
                      <button
                        type="button"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all flex items-center justify-between bg-white"
                      >
                        <span class="flex items-center gap-2">
                          <span class="text-2xl">🇳🇬</span>
                        </span>
                        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                    <div class="flex gap-2">
                      <input
                        type="text"
                        value="+234"
                        class="w-20 px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 font-medium"
                        readonly
                      />
                      <input
                        v-model="formData.phone"
                        type="tel"
                        placeholder="810906674"
                        class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="Example@email.com"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <!-- Password Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      v-model="formData.password"
                      type="password"
                      placeholder="Example@email.com"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      v-model="formData.confirmPassword"
                      type="password"
                      placeholder="Example@email.com"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <!-- Primary Location -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Primary Location</label>
                  <input
                    v-model="formData.location"
                    type="text"
                    placeholder="Example@email.com"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Continue
                </button>

                <!-- Login Link -->
                <div class="text-center">
                  <p class="text-gray-600">
                    Already have an account? 
                    <NuxtLink to="/login" class="text-green-600 hover:text-green-700 font-medium">
                      Log in
                    </NuxtLink>
                  </p>
                </div>

                <!-- Terms -->
                <p class="text-sm text-center text-gray-500 leading-relaxed">
                  By Creating an account you automatically accept to our 
                  <a href="#" class="text-green-600 hover:underline">Terms of Service</a> and 
                  <a href="#" class="text-green-600 hover:underline">Policy Privacy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  confirmPassword: string
  location: string
}

const router = useRouter()

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  location: ''
})

const handleSignup = () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    alert('Passwords do not match!')
    return
  }
  
  console.log('Signup data:', formData.value)
  router.push('/verify')
}
</script>

