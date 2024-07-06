import { useContext } from "react";
import { CartContext } from "../../context";

export function RightPanel(){
    const { cart } = useContext(CartContext)
    return(
      <div>
        <h1>Cart</h1>
        <ul>
          {
            cart.map(cartItem => (
              <li key={cartItem.id}>
                {`${cartItem.name} - $${cartItem.price}x1`}
              </li>
            ))
          }
        </ul>
        <button>Checkout</button>
       </div>
    );
  }