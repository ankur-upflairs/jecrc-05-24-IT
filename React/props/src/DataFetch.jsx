 import React, { useState,useEffect } from 'react'

function DataFetch() {
    const [users,setUsers]=useState([])
    //hooks => useState() => state manage
    //starts with use
    //hooks should be used on top of the components
    //can't use them inside condition or loop
    //useEffect=>to manage side effects (data fetching)
    useEffect(()=>{//[] - useeffect runs only initial render
      async function getData() {
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await res.json()
        // console.log(data)       
        setUsers(data)
      }
      getData() 
    },[])//1.cb fn 2. dependency array
  return (
    <ul>
      {users.map((user,i)=>{
        return <li key={i}>{user.name}</li>
      })}
    </ul>
  )
}

export default DataFetch
