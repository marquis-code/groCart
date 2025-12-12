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
                  "Welcome Back to Smarter Shopping!"
                </h1>
                
                <p class="text-lg text-blue-100 leading-relaxed">
                  If you don't taste it you can't understand it
                </p>
              </div>
            </div>
            
            <!-- Decorative Wave -->
            <div class="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-32">
                <path d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z" fill="white" opacity="0.1"></path>
              </svg>
            </div>
            
            <!-- Delivery Person Illustration Area -->
            <div class="absolute bottom-0 left-0 right-0 h-96 flex items-end justify-center opacity-30">
              <div class="w-64 h-64 bg-white rounded-full"></div>
            </div>
          </div>

          <!-- Right Side - Form Section -->
          <div class="p-8 lg:p-12 flex items-center">
            <div class="w-full max-w-md mx-auto">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">"Good to See You Again!"</h2>
              <p class="text-gray-600 mb-8">
                Continue your effortless grocery shopping with fresh deals and faster delivery.
              </p>
              
              <form @submit.prevent="handleLogin" class="space-y-6">
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
                        v-model="loginData.phone"
                        type="tel"
                        placeholder="810906674"
                        class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Continue
                </button>

                <!-- Sign Up Link -->
                <div class="text-center">
                  <p class="text-gray-600">
                    Don't have an account? 
                    <NuxtLink to="/signup" class="text-green-600 hover:text-green-700 font-medium">
                      Sign up
                    </NuxtLink>
                  </p>
                </div>

                <!-- Terms -->
                <p class="text-sm text-center text-gray-500 leading-relaxed">
                  By continuing you automatically accept to our 
                  <a href="#" class="text-green-600 hover:underline">Terms of Service</a> and 
                  <a href="#" class="text-green-600 hover:underline">Policy Privacy</a>.
                </p>

                <!-- Divider -->
                <div class="relative my-6">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-4 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <!-- Social Login Buttons -->
                <div class="space-y-3">
                  <button
                    type="button"
                    class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                      <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                      <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                      <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                    </svg>
                    <span class="font-medium text-gray-700">Continue with Google</span>
                  </button>

                  <button
                    type="button"
                    class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span class="font-medium text-gray-700">Continue with Facebook</span>
                  </button>

                  <button
                    type="button"
                    class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M21 12.5v-1.42C21 6.8 17.64 3 12 3s-9 3.8-9 8.08c0 3.68 2.49 6.77 5.89 7.7.24.05.56.17.64.38.07.18.05.47.02.66l-.27 1.37c-.03.18-.17.71.62.39.79-.33 4.26-2.51 5.81-4.3 1.07-1.17 1.78-2.58 1.78-4.12z" fill="#000"/>
                      <path d="M8.5 9.75h-.75c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75v-3c0-.41-.34-.75-.75-.75z" fill="#fff"/>
                      <circle cx="11.5" cy="12" r=".75" fill="#fff"/>
                      <path d="M14.5 9.75c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75v-3c0-.41-.34-.75-.75-.75z" fill="#fff"/>
                    </svg>
                    <span class="font-medium text-gray-700">Continue with Email</span>
                  </button>
                </div>
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

interface LoginData {
  phone: string
}

const router = useRouter()

const loginData = ref<LoginData>({
  phone: ''
})

const handleLogin = () => {
  console.log('Login data:', loginData.value)
  router.push('/verify')
}
</script>