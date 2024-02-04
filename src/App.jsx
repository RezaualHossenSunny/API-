import React, { useEffect, useState } from 'react'
import Show from './Comopent/Show'

const App = () => {

const [data,Setdat]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then(json=> Setdat(json))
  })


  return (
<>

{
  data.map((item)=> <Show apic={item}></Show>)
}
</>
  )
}

export default App