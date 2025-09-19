
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'

export default function App(){
  return (
    <BrowserRouter>
      <div className='min-h-screen'>
        <nav className='bg-white p-4 shadow'>
          <div className='container mx-auto flex justify-between'>
            <Link to='/' className='font-bold'>FoodieExpress</Link>
            <div className='space-x-4'>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Cart</Link>
            </div>
          </div>
        </nav>
        <main className='container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/restaurants/:id' element={<Menu/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
