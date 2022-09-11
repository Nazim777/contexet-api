import React,{useContext} from 'react'
import { ProductContext } from '../Context/ProductCart'

const ProductCart = () => {
    const productState = useContext(ProductContext)
    const {product} = productState

    const total = product.reduce((a,b)=>a+b.price,0)
  return (
    <div>

        {product&&product.map((item,index)=><li key={index}>name: {item.name} - price: {item.price}</li>)}
        total: ${total}
      
    </div>
  )
}

export default ProductCart
