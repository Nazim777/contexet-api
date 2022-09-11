import React,{useContext} from 'react'
import './AllProducts.css'
import { ProductContext } from '../Context/ProductCart'

const FakeProductCart = () => {
    const ProductState = useContext(ProductContext)
    const {fakeProductCart} = ProductState

    const total = fakeProductCart.reduce((a,b)=>a+b.price,0)
    
    
  return (
    <div className='div4'>

        {fakeProductCart&& fakeProductCart.map((item)=>
        <div className='productCart'>
        <img src={item.img} alt="" />
        <div>
        <h2>{item.title}</h2> <br />
        <h2> price: ${item.price}</h2>

        </div>
        
    </div>
        )}

        <h1>total Price: ${total}</h1>
        
        
      
    </div>
  )
}

export default FakeProductCart
