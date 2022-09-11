import React,{useContext} from 'react'
import './AllProducts.css'
import SingleProduct from './SingleProduct'
import { ProductContext } from '../Context/ProductCart'

const AllProducts = () => {
    const productState = useContext(ProductContext)
    const {AllProduct} = productState
  return (
    <div>
        <div className='div1'>

            {
                AllProduct&& AllProduct.map((item)=> <SingleProduct item = {item}/>)
            }
           
            

        </div>
        
      
    </div>
  )
}

export default AllProducts
