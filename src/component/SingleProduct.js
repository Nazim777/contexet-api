import React,{useContext} from 'react'
import './AllProducts.css'
import { ProductContext } from '../Context/ProductCart'

const SingleProduct = ({item}) => {
  const ProductState = useContext(ProductContext)
  const {fakeProductCart,setFakeProductCart} = ProductState
  return (
    <div>
        <div className='singleProduct'>
          <img src={item.thumbnail} alt="" />
          <div className='div2'>
          <span>{item.title}</span>
           
         <p>price: ${item.price} </p> 
          <button onClick={()=>setFakeProductCart([...fakeProductCart,{img:item.thumbnail,price:item.price,title:item.title}])}>add to cart</button>

          </div>
        </div>
      
    </div>
  )
}

export default SingleProduct
