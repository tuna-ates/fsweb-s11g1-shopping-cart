import { Children, createContext, useContext, useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";
export const ProductContext=createContext();

export const ProductContextProvider=({children})=>{
    const [products, setProducts] = useState(data);
    const {cart,setCart}=useContext(CartContext)

     const addItem = (item) => {
        setCart([...cart,item]);
    };
return(
    <ProductContext.Provider value={{products,addItem}}>
        {children}
    </ProductContext.Provider>
)
}