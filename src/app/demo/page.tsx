'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { products, Product } from '@/data/products'

export default function DemoPage() {
  const [selected, setSelected] = useState<Product | null>(null)

  useEffect(() => {
    import('@google/model-viewer')
  }, [])

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-gray-900 font-bold text-xl tracking-tight hover:opacity-70 transition-opacity">
          Visual Dine
        </Link>
        <Link href="/" className="text-gray-500 text-sm hover:text-gray-900 transition-colors flex items-center gap-2">
          &larr; Back to Home
        </Link>
      </nav>

      {/* Header */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Interactive <span className="text-gray-500">3D Menu</span> Demo</h1>
        <p className="text-gray-500 max-w-lg mx-auto">Drag to rotate, scroll to zoom. Tap &ldquo;View in AR&rdquo; on mobile to place dishes on your table.</p>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Interactive 3D viewer */}
              <div className="relative bg-gray-50">
                <model-viewer
                  src={product.glbUrl}
                  ios-src={product.usdzUrl}
                  alt={product.name}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  auto-rotate
                  shadow-intensity="1"
                  environment-image="neutral"
                  style={{ width: '100%', height: '280px', backgroundColor: 'transparent' }}
                >
                  <button
                    slot="ar-button"
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: '#111',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                  >
                    📱 View in AR
                  </button>
                </model-viewer>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-gray-900 font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">{product.price}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                    3D · AR Ready
                  </span>
                </div>
                <button
                  onClick={() => setSelected(product)}
                  className="mt-4 w-full py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Open Fullscreen
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Visual Dine Demo</p>
              <h2 className="text-gray-900 font-bold text-xl">{selected.name}</h2>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-gray-400 hover:text-gray-900 text-2xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 relative bg-gray-50">
            <model-viewer
              src={selected.glbUrl}
              ios-src={selected.usdzUrl}
              alt={selected.name}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              environment-image="neutral"
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
            >
              <button
                slot="ar-button"
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '24px',
                  background: '#111',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                📱 View in AR
              </button>
            </model-viewer>
          </div>

          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 flex-shrink-0 bg-white">
            <p className="text-gray-500 text-sm">{selected.description}</p>
            <span className="text-gray-900 font-bold text-xl ml-6 flex-shrink-0">{selected.price}</span>
          </div>
        </div>
      )}
    </main>
  )
}
