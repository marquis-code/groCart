import type { Store } from '~/types'

export const useStores = () => {
  const stores: Store[] = [
    {
      id: '1',
      name: 'Kroger',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kroger_logo_%282019%29.svg/320px-Kroger_logo_%282019%29.svg.png',
      deliveryTime: '15 mins',
      categories: 'Groceries, Appliances, Bakery',
      discount: '15% off',
      tags: ['In-Store Prices', 'Low Prices'],
      bannerTitle: 'Black Friday Sales Aug 26-28',
      bannerSubtitle: 'At Kroger',
      products: generateProducts(5, 'kroger')
    },
    {
      id: '2',
      name: 'H-E-B',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/H-E-B_logo.svg/320px-H-E-B_logo.svg.png',
      deliveryTime: '15 mins',
      categories: 'Groceries, Appliances, Bakery',
      discount: '15% off',
      tags: ['Low Prices'],
      bannerTitle: 'Special Sales Dec 26-28',
      bannerSubtitle: 'At H-E-B',
      products: generateProducts(5, 'heb')
    }
  ]

  return { stores }
}

function generateProducts(count: number, storePrefix: string) {
  const products = []
  const productImages = [
    'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400',
    'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
    'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400',
    'https://images.unsplash.com/photo-1587049352846-4a222e784faf?w=400',
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
  ]

  for (let i = 0; i < count; i++) {
    products.push({
      id: `${storePrefix}-${i + 1}`,
      name: 'Fresh Bunch of Bananas - 5-7 Bananas',
      price: 4.99,
      image: productImages[i % productImages.length],
      weight: '0.5lb',
      rating: 4.5,
      reviews: 26,
      discount: i < 3 ? '15% off' : undefined,
      badge: i >= 3 ? 'Organic' : undefined,
      inStock: true
    })
  }

  return products
}
