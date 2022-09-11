import React,{useEffect,useContext} from 'react'
import { ProductContext } from '../Context/ProductCart'
import AllProducts from './AllProducts'

const FakeProduct = () => {
    const productState = useContext(ProductContext)
    const {setAllProdut} = productState
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>setAllProdut([...data.products]));
    },[])
    
  return (
    <div>
        <AllProducts/>
        
      
    </div>
  )
}

export default FakeProduct
