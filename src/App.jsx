import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans tracking-wide overflow-x-hidden">
      
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main>
        <Hero />
        <Technologies />
      </main>

      {/* 3. Footer */}
      <Footer />

    </div>
  )
}