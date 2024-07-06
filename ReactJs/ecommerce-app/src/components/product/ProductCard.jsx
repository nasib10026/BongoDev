import logo from   '../../logo.svg';
import PropTypes from 'prop-types';
import './ProductGrid.css'
import { useContext } from 'react';
import { CartContext } from '../../context';
export const ProductCard = ({product})=>{
    const {addToCart} = useContext(CartContext)
 
    return(
        <div className='productCard'>
            <img src={logo} alt="Product Image" width='200px' />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
    );
}
// ProductCard.propTypes = {
//     productName: PropTypes.string.isRequired,
//     productPrice: PropTypes.number.isRequired
// }

// export {ProductCard}