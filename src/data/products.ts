export type Domain = 'food' | 'jewellery' | 'furniture'

export interface Product {
  id: string
  name: string
  description: string
  price: string
  domain: Domain
  glbUrl: string
  usdzUrl: string
}

export const products: Product[] = [
  {
    id: 'avocado-burger',
    name: 'Avocado Burger',
    description: 'Fresh avocado burger with crispy lettuce and special sauce.',
    price: 'PKR 3,899',
    domain: 'food',
    glbUrl: '/models/Avocado_burger.glb',
    usdzUrl: '/models/Avocado_burger.usdz',
  },
  {
    id: 'balinese-tempeh',
    name: 'Balinese Tempeh',
    description: 'Traditional Balinese tempeh with aromatic spices.',
    price: 'PKR 3,049',
    domain: 'food',
    glbUrl: '/models/Balinese_tempeh.glb',
    usdzUrl: '/models/Balinese_tempeh.usdz',
  },
  {
    id: 'blackend-edamame-burger',
    name: 'Blackened Edamame Burger',
    description: 'Plant-based blackened edamame patty with fresh toppings.',
    price: 'PKR 3,599',
    domain: 'food',
    glbUrl: '/models/Blackend_Edamane_Burger.glb',
    usdzUrl: '/models/Blackend_Edamane_Burger.usdz',
  },
  {
    id: 'citrus-cheesecake',
    name: 'Citrus Cheese Cake',
    description: 'Zesty citrus cheesecake with a buttery biscuit base.',
    price: 'PKR 2,499',
    domain: 'food',
    glbUrl: '/models/Citrus_cheese_cake.glb',
    usdzUrl: '/models/Citrus_cheese_cake.usdz',
  },
  {
    id: 'tempeh-chettinadu',
    name: 'Tempeh Chettinadu',
    description: 'Spicy Chettinad-style tempeh with South Indian flavours.',
    price: 'PKR 3,299',
    domain: 'food',
    glbUrl: '/models/Tempeh_Chettinadu.glb',
    usdzUrl: '/models/Tempeh_Chettinadu.usdz',
  },
]
