import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import '../css/ViewProduct.css'

export default function ViewProduct() {
    const {id} = useParams()
    const [product, setProduct] = useState([]) 

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                let response=await axios.get(`https://dummyjson.com/products/${id}`)
                console.log(response.data)
                setProduct(response.data)
            }
            catch(err){
                console.log(err);
            }
        }

        fetchData()
    })

  return (
    <div class = 'details'>
        <img src={product.thumbnail}/>
        <div class='info'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button>BUY NOW</button>
        </div>

    </div>
  )
}
