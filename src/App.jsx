import { useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './components/hero/Home'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App
