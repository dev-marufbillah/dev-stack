import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content with Top Padding for Fixed Navbar */}
      <main className="pt-16 md:pt-20">
        <Hero />
        <Technologies />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}