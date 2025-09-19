
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function Menu(){
  const { id } = useParams()
  const [rest, setRest] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('/api/restaurants/').then(r=>{
      const found = r.data.find(x=>String(x.id)===String(id))
      setRest(found)
    }).catch(()=>setRest({menu_items:[]}))
  },[id])

  if(!rest) return <div>Loading...</div>

  return (
    <div>
      <button onClick={()=>navigate(-1)} className='mb-4'>← Back</button>
      <h2 className='text-xl font-bold mb-4'>{rest.name}</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {rest.menu_items.map(item=>(
          <div key={item.id} className='bg-white p-4 rounded shadow'>
            <img src={item.image_url} className='h-32 w-full object-cover rounded mb-2' alt='' />
            <div className='font-semibold'>{item.name}</div>
            <div className='mt-2'>${item.price}</div>
            <button className='mt-2 bg-indigo-600 text-white px-3 py-1 rounded' onClick={()=>{
              const cart = JSON.parse(localStorage.getItem('cart')||'[]')
              const found = cart.find(c=>c.id===item.id)
              if(found) found.quantity += 1; else cart.push({...item, quantity:1})
              localStorage.setItem('cart', JSON.stringify(cart))
              alert('Added to cart')
            }}>Add</button>
          </div>
        ))}
      </div>
    </div>
  )
}
