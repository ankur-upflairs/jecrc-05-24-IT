import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease } from './redux/counter'

function Test() {
    let count=useSelector(state=>state.counter.value)
    let dispatch=useDispatch()
  return (
    <div>
      {count}
      <button onClick={()=>dispatch(increase())}>increase</button><br />
      <button onClick={()=>dispatch(decrease())}>decrease</button>
    </div>
  )
}

export default Test
