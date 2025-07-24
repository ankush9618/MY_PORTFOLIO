import { useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './components/hero/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
      </div>
    </>
  )
}

export default App
