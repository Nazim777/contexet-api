import { createContext,useState } from "react";
export const ProductContext = createContext(null)

export const ProductProvider = (props)=>{
    const [product,setProduct] = useState([])
    const [AllProduct,setAllProdut] = useState([])
    const [fakeProductCart,setFakeProductCart] = useState([])
    return(
        <ProductContext.Provider value={{product,setProduct,AllProduct,setAllProdut,fakeProductCart,setFakeProductCart}}>
            {props.children}
        </ProductContext.Provider>
    )
}