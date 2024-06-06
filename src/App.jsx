import { useState } from 'react'
import Home from './pages/home'
import ResponsiveAppBar from './components/navbar'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
