'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const features = [
  { icon: '✨', title: 'Engage Instantly', desc: 'Capture attention with photorealistic 3D dishes that customers can interact with before ordering.' },
  { icon: '🍽️', title: 'Simplify Ordering', desc: 'Eliminate guesswork — diners see exactly what they\'re getting, reducing order errors and returns.' },
  { icon: '📈', title: 'Drive Sales', desc: 'Restaurants using 3D menus see up to 25% increase in average order value.' },
  { icon: '🌟', title: 'Impress Guests', desc: 'Deliver a premium tech-forward dining experience that gets guests talking and sharing.' },
  { icon: '⚡', title: 'Optimize Staff', desc: 'Fewer questions about dishes means faster table turns and happier front-of-house teams.' },
  { icon: '🏆', title: 'Competitive Edge', desc: 'Stand out in a crowded market with cutting-edge AR technology your competitors don\'t have.' },
]

const howItWorks = [
  { step: '01', title: 'We Photograph Your Menu', desc: 'Our team visits your restaurant and captures each dish using advanced photogrammetry — no disruption to service.' },
  { step: '02', title: 'We Build 3D Models', desc: 'Each dish is turned into a photorealistic, interactive 3D model optimized for web and mobile.' },
  { step: '03', title: 'You Go Live', desc: 'Models go live on your digital menu or via QR codes on tables. Diners explore dishes in 3D and AR instantly.' },
]

const faqs = [
  { q: 'How does Visual Dine work?', a: 'We photograph your dishes using photogrammetry to create photorealistic 3D models. These are hosted on our platform and accessible via QR codes on your table or integrated into your digital menu.' },
  { q: 'Do my customers need to download an app?', a: 'No. Visual Dine works entirely in the browser. Customers simply scan a QR code or tap a link — no app download required. Works on both iPhone and Android.' },
  { q: 'How long does setup take?', a: 'A typical restaurant with 30-50 dishes can be fully digitized and live within 2 weeks. We handle everything from photography to deployment.' },
  { q: 'What does it cost?', a: 'We offer flexible plans starting from a monthly subscription. Book a demo to get a custom quote based on your menu size and needs.' },
  { q: 'Can I update my menu easily?', a: 'Yes. Our dashboard lets you add, remove, or swap dishes anytime. New dish photography can be scheduled on-demand.' },
  { q: 'Does it work with my existing POS system?', a: 'Visual Dine integrates with major POS systems including Toast, Square, and Clover. We also offer a standalone option.' },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    import('@google/model-viewer')
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-gray-900 font-bold text-xl tracking-tight">Visual Dine</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
            <Link href="/demo" className="bg-gray-900 text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Try Demo
            </Link>
          </div>
          <Link href="/demo" className="md:hidden bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg text-sm">
            Demo
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block self-start bg-white border border-gray-200 text-gray-500 text-xs px-4 py-1.5 rounded-full shadow-sm">
              No app needed · Works in any browser
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              See Your Menu Come Alive in{' '}
              <span className="text-gray-500">3D & AR</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg">
              Transform your restaurant menu into an immersive experience. Let diners visualize dishes in stunning 3D before they order — no app needed.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#faq" className="bg-gray-900 text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-base">
                Book a Demo
              </a>
              <Link href="/demo" className="border border-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:border-gray-900 transition-colors text-base bg-white">
                Try Demo
              </Link>
            </div>
          </div>

          {/* Single 3D Dish — centered */}
          <div className="flex items-center justify-center h-[350px] md:h-[600px]">
            <div className="animate-float w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <model-viewer
                src="/models/Avocado_burger.glb"
                alt="Featured dish"
                auto-rotate
                camera-controls
                rotation-per-second="30deg"
                shadow-intensity="0.5"
                environment-image="neutral"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Why Restaurants Choose <span className="text-gray-500">Visual Dine</span></h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">Everything you need to create a modern, interactive dining experience that drives revenue.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">How It <span className="text-gray-500">Works</span></h2>
          <p className="text-gray-500 text-center max-w-lg mx-auto mb-16">Three simple steps to transform your menu into an interactive experience.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mx-auto mb-5">{item.step}</div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Menu?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Join forward-thinking restaurants using 3D and AR to delight guests and boost orders.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#faq" className="bg-white text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-base">
              Get Started
            </a>
            <Link href="/demo" className="border border-gray-600 text-white font-semibold px-8 py-3 rounded-lg hover:border-white transition-colors text-base">
              See Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Frequently Asked <span className="text-gray-500">Questions</span></h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-[#f9f9f9]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-900 font-medium">{f.q}</span>
                  <span className={`text-gray-400 text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`faq-content ${openFaq === i ? 'open' : ''}`}>
                  <p className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-12 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-gray-900 font-bold text-lg">Visual Dine</span>
            <p className="text-gray-400 text-sm mt-1">&copy; 2025 Visual Dine. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
            <Link href="/demo" className="hover:text-gray-900 transition-colors">Demo</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
