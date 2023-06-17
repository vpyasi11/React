import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewProduct() {
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                let response=await axios.get(`https://dummyjson.com/products/${id}`)
                console.log(response.data)
            }
            catch(err){
                console.log(err);
            }
        }

        fetchData()
    })

  return (
    <div>Product ID : {id}</div>
  )
}
