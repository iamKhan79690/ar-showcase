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
    price: '$13.99',
    domain: 'food',
    glbUrl: '/models/Avocado_burger.glb',
    usdzUrl: '/models/Avocado_burger.glb',
  },
  {
    id: 'balinese-tempeh',
    name: 'Balinese Tempeh',
    description: 'Traditional Balinese tempeh with aromatic spices.',
    price: '$10.99',
    domain: 'food',
    glbUrl: '/models/Balinese_tempeh.glb',
    usdzUrl: '/models/Balinese_tempeh.glb',
  },
  {
    id: 'blackend-edamame-burger',
    name: 'Blackened Edamame Burger',
    description: 'Plant-based blackened edamame patty with fresh toppings.',
    price: '$12.99',
    domain: 'food',
    glbUrl: '/models/Blackend_Edamane_Burger.glb',
    usdzUrl: '/models/Blackend_Edamane_Burger.glb',
  },
  {
    id: 'citrus-cheesecake',
    name: 'Citrus Cheese Cake',
    description: 'Zesty citrus cheesecake with a buttery biscuit base.',
    price: '$8.99',
    domain: 'food',
    glbUrl: '/models/Citrus_cheese_cake.glb',
    usdzUrl: '/models/Citrus_cheese_cake.glb',
  },
  {
    id: 'tempeh-chettinadu',
    name: 'Tempeh Chettinadu',
    description: 'Spicy Chettinad-style tempeh with South Indian flavours.',
    price: '$11.99',
    domain: 'food',
    glbUrl: '/models/Tempeh_Chettinadu.glb',
    usdzUrl: '/models/Tempeh_Chettinadu.glb',
  },
]
