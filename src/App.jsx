import React from 'react'
import { Footer, Navbar } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
