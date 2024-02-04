import React from 'react'

const Show = (props) => {
    console.log('props',props);
  return (
    <div>
      <h1>{props.apic.category}</h1>
      <img src={props.apic.image}/> 
    </div>
  )
}

export default Show