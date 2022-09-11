import React,{useContext} from 'react'
import { ProductContext } from '../Context/ProductCart'
const Product = (props) => {
    const ProductState = useContext(ProductContext)
    const {product,setProduct} = ProductState

  return (
    <div >
      <div style={{marginBottom:'20px'}}>
            name: {props.name} <br />
            price: ${props.price} <br />
            <button onClick={()=>setProduct([...product,{name:props.name,price:props.price}])}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
