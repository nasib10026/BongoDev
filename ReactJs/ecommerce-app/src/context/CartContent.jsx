import { Children, createContext, useCallback, useState } from "react";
import { useCart } from "../hooks";

//cart e kibhabe add hobe na hobe shob ekhane add hobe
//beshi logic hole hook banaye felbo
export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const {cart,addToCart} = useCart();
    return (<CartContext.Provider
    value = {{  
       cart,
       addToCart,
    }}
    >
        {children}
    </CartContext.Provider>)
}