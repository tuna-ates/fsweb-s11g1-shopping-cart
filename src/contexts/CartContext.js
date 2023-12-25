import { createContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const [cart, setCart] = useState([]);
    const addItem = (item) => {
        // verilen itemi sepete ekleyin
       setCart([...cart,item]);
      };
    return(
         <CartContext.Provider value={{cart, setCart,addItem}}>
            {children}
         </CartContext.Provider>
    )
}