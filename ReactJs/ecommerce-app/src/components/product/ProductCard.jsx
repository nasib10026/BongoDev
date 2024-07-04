import logo from   '../../logo.svg';
import PropTypes from 'prop-types';
import './ProductGrid.css'
const ProductCard = ({productName,productPrice})=>{
    return(
        <div className='productCard'>
            <img src={logo} alt="Product Image" width='200px' />
            <p>{productName}</p>
            <p>${productPrice}</p>
            <button>Add to Cart</button>
        </div>
    );
}
ProductCard.propTypes = {
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired
}

export {ProductCard}