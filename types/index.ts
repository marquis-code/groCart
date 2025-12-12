export interface Category {
  id: string
  name: string
  icon: string
}

export interface Store {
  id: string
  name: string
  logo: string
  deliveryTime: string
  categories: string
  discount: string
  tags: string[]
  bannerImage?: string
  bannerTitle?: string
  bannerSubtitle?: string
  products: Product[]
}

export interface Product {
  id: string
  name: string
  price: number
  image: string
  weight: string
  rating: number
  reviews: number
  discount?: string
  inStock: boolean
  badge?: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}