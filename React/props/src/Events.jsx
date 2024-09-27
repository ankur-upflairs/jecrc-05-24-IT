import React from 'react'

function Events() {
    
    function handleClick() {
        alert('button clicked')
    }
    function handleClick1(name) {
        alert(`hello ${name}`)
    }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={()=>{handleClick1('pankaj')}}>click here</button>
      
    </div>
  )
}

export default Events
