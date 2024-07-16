import { useContext } from "react";
import { CartContext } from "../../context";

export function RightPanel(){
    const { cart } = useContext(CartContext)
    return(
      <div>
        <h1 className="font-bold text-lg mb-2">Cart</h1>
        <ul>
          {
            cart.map(cartItem => (
              <li key={cartItem.id}>
                {`${cartItem.name} - $${cartItem.price}x1`}
              </li>
            ))
          }
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 rounded-sm px-2 py-1 text-white font-semibold">Checkout</button>
       </div>
    );
  }