'use client'

import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 hover:scale-105 transition-all duration-300 cursor-pointer">
        {/* Thumbnail */}
        <div className="bg-zinc-800 h-48 flex items-center justify-center text-6xl">
          {product.domain === 'food' && '🍔'}
          {product.domain === 'jewellery' && '💍'}
          {product.domain === 'furniture' && '🛋️'}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg">{product.name}</h3>
          <p className="text-zinc-400 text-sm mt-1 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-white font-bold">{product.price}</span>
            <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              View in 3D →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
