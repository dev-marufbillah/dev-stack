import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-16 md:pt-20">
        <Hero />
        <Technologies />
      </main>

      <Footer />

      {/* React-Toastify Container (কোণায় নোটিফিকেশন দেখাবে) */}
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </div>
  )
}