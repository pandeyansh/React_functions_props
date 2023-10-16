import React from 'react'
const Products = (props) => {
  return (
    <div>
        <h3>Product Name : {props.name}, Price : {props.price}, Quantity : {props.quantity}</h3>
    </div>
  )
}
export default Products