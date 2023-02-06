import React from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'

function Productdetail() {
  const { id } = useParams()
  return (
    <div>
      { id }
    </div>
  )
}

export default Productdetail