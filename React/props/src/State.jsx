import React from 'react'
import { useState } from 'react'

function State() {
    const [count,setCount]=useState(0)
    //cant change count directly
    //use setCount fn to change count
    //whenever setCount is called it will re-render the whole component
    let x=0;//normal variable

  return (
    <div>
        <p>{x}</p>
      <button onClick={()=>{x++;console.log(x)}}>increase normal variable</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>increase state variable</button>
    </div>
  )
}

export default State
