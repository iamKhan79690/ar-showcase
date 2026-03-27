'use client'

import { useEffect, useState } from 'react'
import { products, Product } from '@/data/products'

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null)

  useEffect(() => {
    import('@google/model-viewer')
  }, [])

  return (
    <main className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
        <span className="text-white font-bold text-xl tracking-tight">ARShow</span>
        <span className="text-zinc-400 text-sm">3D · AR · Any Domain</span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 gap-6">
        <div className="inline-block bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs px-4 py-1.5 rounded-full">
          No app download needed · Works in your browser
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-3xl">
          See it in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">3D</span> before you buy
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl">
          We convert any real-world product into a WebAR experience. Click any dish to view in full 3D — then tap <strong className="text-white">View in AR</strong> on your phone.
        </p>
      </section>

      {/* 3D Product Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          🍔 <span>Food & Dining</span>
          <span className="text-zinc-500 text-sm font-normal ml-2">— click any dish to view in 3D</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-500 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelected(product)}
            >
              {/* Inline preview model */}
              <div className="relative bg-zinc-800" style={{ pointerEvents: 'none' }}>
                {/* @ts-ignore */}
                <model-viewer
                  src={product.glbUrl}
                  alt={product.name}
                  auto-rotate
                  shadow-intensity="1"
                  environment-image="neutral"
                  style={{ width: '100%', height: '280px', backgroundColor: 'transparent' }}
                />
                {/* Click overlay with expand icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 rounded-t-2xl">
                  <div className="bg-white text-black font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span>⛶</span> View in 3D
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{product.name}</h3>
                <p className="text-zinc-400 text-sm mt-1">{product.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-white font-bold text-lg">{product.price}</span>
                  <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700">
                    3D · AR Ready
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-950 border-t border-zinc-900 px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-white mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: '01', title: 'We scan your product', desc: 'Using photogrammetry or AI, we create a precise 3D model of your real object.' },
            { step: '02', title: 'We host it for you', desc: 'Your 3D model is accessible via a simple link or QR code — no app needed.' },
            { step: '03', title: 'Customers see it in AR', desc: 'They open in browser, tap "View in AR" — it appears on their real table.' },
          ].map((item) => (
            <div key={item.step} className="flex flex-col gap-3">
              <span className="text-purple-400 font-mono text-sm">{item.step}</span>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-zinc-600 text-sm py-8 border-t border-zinc-900">
        ARShow © 2025 · Built with Next.js + Google model-viewer
      </footer>

      {/* Fullscreen Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 flex-shrink-0">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Food & Dining</p>
              <h2 className="text-white font-bold text-xl">{selected.name}</h2>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-zinc-400 hover:text-white text-2xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Full 3D Viewer */}
          <div className="flex-1 relative">
            {/* @ts-ignore */}
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
                  background: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                📱 View in AR
              </button>
            </model-viewer>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 flex-shrink-0">
            <p className="text-zinc-400 text-sm">{selected.description}</p>
            <span className="text-white font-bold text-xl ml-6 flex-shrink-0">{selected.price}</span>
          </div>
        </div>
      )}
    </main>
  )
}
