'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="bg-yellow text-dark px-2 py-1 rounded mr-2 font-bold">R</span> {/* ← Background kuning */}
            Raktangle Engine
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow transition">Home</Link> {/* ← Hover kuning */}
            <Link href="/about" className="hover:text-yellow transition">About</Link>
            <Link href="/features" className="hover:text-yellow transition">Features</Link>
            <Link href="/showcase" className="hover:text-yellow transition">Showcase</Link>
            <Link href="/contact" className="hover:text-yellow transition">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow"> {/* ← Hover kuning */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
            <Link href="/" className="block hover:text-yellow transition">Home</Link>
            <Link href="/about" className="block hover:text-yellow transition">About</Link>
            <Link href="/features" className="block hover:text-yellow transition">Features</Link>
            <Link href="/showcase" className="block hover:text-yellow transition">Showcase</Link>
            <Link href="/contact" className="block hover:text-yellow transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
