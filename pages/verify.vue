<template>
  <div class="min-h-screen bg-white flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-primary mb-3">
          Verify Phone Number
        </h1>
        <p class="text-gray-500">
          Kindly input the code sent to your number
        </p>
      </div>

      <form @submit.prevent="handleVerify" class="space-y-8">
        <!-- OTP Input Boxes -->
        <div class="flex justify-center gap-3 md:gap-4">
          <input
            v-for="(digit, index) in otpDigits"
            :key="index"
            :ref="el => otpInputs[index] = el as HTMLInputElement"
            v-model="otpDigits[index]"
            type="text"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]"
            class="w-16 h-16 md:w-20 md:h-20 text-center text-2xl font-semibold border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            @input="handleInput($event, index)"
            @keydown="handleKeyDown($event, index)"
            @paste="handlePaste"
          />
        </div>

        <!-- Continue Button -->
        <button
          type="submit"
          class="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Continue
        </button>

        <!-- Resend Code -->
        <div class="text-center">
          <p class="text-gray-600">
            Don't receive code sent? 
            <button
              type="button"
              @click="handleResend"
              class="text-green-600 hover:text-green-700 font-medium"
              :disabled="resendTimer > 0"
              :class="{ 'opacity-50 cursor-not-allowed': resendTimer > 0 }"
            >
              {{ resendTimer > 0 ? `Resend (${resendTimer})` : 'Resend (34)' }}
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const otpDigits = ref<string[]>(['', '', '', ''])
const otpInputs = ref<(HTMLInputElement | null)[]>([])
const resendTimer = ref(34)
let timerInterval: NodeJS.Timeout | null = null

onMounted(() => {
  otpInputs.value[0]?.focus()
  startResendTimer()
})

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})

const startResendTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
  
  timerInterval = setInterval(() => {
    if (resendTimer.value > 0) {
      resendTimer.value--
    } else {
      if (timerInterval) {
        clearInterval(timerInterval)
      }
    }
  }, 1000)
}

const handleInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement
  const value = input.value

  // Only allow numbers
  if (value && !/^\d$/.test(value)) {
    input.value = ''
    otpDigits.value[index] = ''
    return
  }

  otpDigits.value[index] = value

  // Move to next input if value is entered
  if (value && index < otpDigits.value.length - 1) {
    otpInputs.value[index + 1]?.focus()
  }
}

const handleKeyDown = (event: KeyboardEvent, index: number) => {
  // Handle backspace
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
  
  // Handle arrow keys
  if (event.key === 'ArrowLeft' && index > 0) {
    event.preventDefault()
    otpInputs.value[index - 1]?.focus()
  }
  
  if (event.key === 'ArrowRight' && index < otpDigits.value.length - 1) {
    event.preventDefault()
    otpInputs.value[index + 1]?.focus()
  }
}

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()
  const pastedData = event.clipboardData?.getData('text')
  
  if (pastedData) {
    const digits = pastedData.replace(/\D/g, '').slice(0, 4).split('')
    
    digits.forEach((digit, index) => {
      if (index < otpDigits.value.length) {
        otpDigits.value[index] = digit
      }
    })
    
    // Focus the next empty input or the last input
    const nextEmptyIndex = otpDigits.value.findIndex(d => !d)
    if (nextEmptyIndex !== -1) {
      otpInputs.value[nextEmptyIndex]?.focus()
    } else {
      otpInputs.value[otpDigits.value.length - 1]?.focus()
    }
  }
}

const handleVerify = () => {
  const otp = otpDigits.value.join('')
  
  if (otp.length !== 4) {
    alert('Please enter all 4 digits')
    return
  }
  
  console.log('Verifying OTP:', otp)
  alert('Phone number verified successfully!')
  router.push('/')
}

const handleResend = () => {
  if (resendTimer.value > 0) return
  
  console.log('Resending OTP...')
  resendTimer.value = 34
  startResendTimer()
  
  // Clear current OTP
  otpDigits.value = ['', '', '', '']
  otpInputs.value[0]?.focus()
  
  alert('Verification code has been resent!')
}
</script>