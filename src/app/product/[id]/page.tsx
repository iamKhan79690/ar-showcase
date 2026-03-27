'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/data/products'
import ModelViewer from '@/components/ModelViewer'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) return notFound()

  return (
    <main className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          ARShow
        </Link>
        <Link href="/" className="text-zinc-400 text-sm hover:text-white transition-colors">
          ← Back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* 3D Viewer */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <ModelViewer
              glbUrl={product.glbUrl}
              usdzUrl={product.usdzUrl}
              alt={product.name}
              autoRotate
              style={{ height: '450px' }}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-zinc-500 text-sm uppercase tracking-widest">
                {product.domain}
              </span>
              <h1 className="text-4xl font-extrabold text-white mt-1">{product.name}</h1>
              <p className="text-zinc-400 mt-3 text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="text-3xl font-bold text-white">{product.price}</div>

            {/* AR Instructions */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2">
              <span className="text-white font-semibold text-sm">📱 View in AR</span>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Click the <strong className="text-white">&quot;View in AR&quot;</strong> button on the 3D model.
                On Android it launches in your camera. On iPhone it opens AR Quick Look.
                No app download needed.
              </p>
            </div>

            {/* Tips */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <span>🖐️</span> Drag to rotate the model
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <span>🔍</span> Pinch to zoom in and out
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <span>📱</span> Tap &quot;View in AR&quot; to place on your table
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
