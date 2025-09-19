
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Cart(){
  const [cart, setCart] = useState([])
  useEffect(()=> setCart(JSON.parse(localStorage.getItem('cart')||'[]')), [])
  function remove(id){ const c = cart.filter(x=>x.id!==id); setCart(c); localStorage.setItem('cart', JSON.stringify(c)) }
  async function checkout(){
    const amount = cart.reduce((s,i)=>s + i.price * i.quantity, 0)
    try{
      const resp = await axios.post('/api/payments/create/', { amount })
      alert('Payment intent created, client_secret returned (in real app continue Stripe flow)')
      // create order
      const orderResp = await axios.post('/api/orders/create/', { restaurant_id: cart[0]?.restaurant, items: cart.map(i=>({menu_item_id:i.id, quantity:i.quantity})) })
      alert('Order placed')
      localStorage.removeItem('cart'); setCart([])
    }catch(e){ console.error(e); alert('Error') }
  }
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Cart</h1>
      {cart.length===0 ? <div>Your cart is empty. <Link to='/'>Browse</Link></div> :
        <div>
          <ul className='space-y-4'>
            {cart.map(it=>(
              <li key={it.id} className='bg-white p-4 rounded flex justify-between'>
                <div><div className='font-bold'>{it.name}</div><div>Qty: {it.quantity}</div></div>
                <div className='text-right'><div>${(it.price*it.quantity).toFixed(2)}</div><button className='text-red-500 mt-2' onClick={()=>remove(it.id)}>Remove</button></div>
              </li>
            ))}
          </ul>
          <div className='mt-4 flex justify-between items-center'>
            <div className='font-bold'>Total: ${cart.reduce((s,i)=>s + i.price*i.quantity,0).toFixed(2)}</div>
            <button onClick={checkout} className='bg-green-600 text-white px-4 py-2 rounded'>Checkout (test)</button>
          </div>
        </div>
      }
    </div>
  )
}
