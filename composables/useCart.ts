import { ref } from 'vue'

const cartItems = ref<any[]>([])
const cartCount = ref(0)

export const useCart = () => {
  const addToCart = (product: any) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
    
    cartCount.value++
  }

  const removeFromCart = (productId: string) => {
    const index = cartItems.value.findIndex(item => item.id === productId)
    
    if (index > -1) {
      const item = cartItems.value[index]
      cartCount.value -= item.quantity
      cartItems.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId: string, quantity: number) => {
    const item = cartItems.value.find(item => item.id === productId)
    
    if (item) {
      const diff = quantity - item.quantity
      item.quantity = quantity
      cartCount.value += diff
    }
  }

  const clearCart = () => {
    cartItems.value = []
    cartCount.value = 0
  }

  const getTotal = () => {
    return cartItems.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  return {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal
  }
}
