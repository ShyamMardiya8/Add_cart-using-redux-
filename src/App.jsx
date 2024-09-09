import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddtoCart from './Components/CartPage'
import Header from './Components/Header'
import { HashRouter, Routes, Route } from 'react-router-dom'
import CartPage from './Components/CartPage'
import CartItems from './Components/CartItems'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <HashRouter>
      <Header />
    <Routes >
      <Route path='/' element={<AddtoCart/>}/>
      <Route path='/CartItem' element={<CartItems/>}/>
    </Routes>
  </HashRouter>
   </>
  )
}

export default App
