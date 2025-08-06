'use client'
import React, { useEffect, useState } from 'react'

function ProductList() {
  let [product,setProduct] = useState([])
  useEffect(async() => {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    console.log(data)
    setProduct(data.products);
  },[])
  return (
    <div>
      {
        product.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  )
}

export default ProductList