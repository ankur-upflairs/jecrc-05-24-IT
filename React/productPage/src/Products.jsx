import React, {useState, useEffect } from 'react'

function Products() {
    const [products,setProducts]=useState([])
    useEffect(() => {
        async function getData() {
            let res=await fetch('https://dummyjson.com/products')
            let data=await res.json()
            // console.log(data)        
            setProducts(data.products)
        }
        getData()
    },[])
  return (
    <div>
      {products.map((product)=>{
        return <div key={product.id}>
            <img src={product.thumbnail} alt="" />
            {product.title}</div>
      })}
    </div>
  )
}

export default Products
