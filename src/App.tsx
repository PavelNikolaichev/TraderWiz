import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from '@components/Layout/Header'
import { Body } from '@components/Layout/Body'
import { Footer } from '@components/Layout/Footer'
import './App.css'

function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
