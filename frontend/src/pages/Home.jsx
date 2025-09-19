
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home(){
  const [rests, setRests] = useState([])
  useEffect(()=>{
    axios.get('/api/restaurants/').then(r=>setRests(r.data)).catch(()=>setRests([]))
  },[])
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Restaurants</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {rests.map(r=>(
          <Link key={r.id} to={'/restaurants/'+r.id} className='bg-white p-4 rounded shadow'>
            <img src={r.image_url} alt='' className='h-40 w-full object-cover rounded mb-2' />
            <div className='font-bold'>{r.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
