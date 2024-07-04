import PropTypes from 'prop-types';
import React from 'react';
import { ProductCard } from './ProductCard';
import './ProductGrid.css'

const ProductsEmptyState = ()=> (<h1>No product to display</h1>);
 
const ProductGrid = ({products}) => {

 const renderProducts = () => {
  if(!products.length){
      return <ProductsEmptyState/>;
  }
  return products.map((product) => (
    <ProductCard key={product.id} productName={product.name} productPrice={product.price} />
  ));
  
 }
 return (
    <div className='productGrid'>
     {
      renderProducts()
     }
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.string.isRequired,
     name:PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     image:PropTypes.string,
     category:PropTypes.arrayOf(PropTypes.string),

  })),
}

export {ProductGrid}
