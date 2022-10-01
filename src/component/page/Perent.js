import React, { useState } from 'react'
import Child from './Child'

function Perent() {
const [nam, setname] =useState('sandeep')


console.log();
  return (
    <div className='container'>
    
    <h2>hello {nam}</h2>
    
    <Child name="sandeep"
      

    changeName= {(nam) =>  {
      setname(nam)
    }}
    
    
    />

    
    </div>
  )
}

export default Perent