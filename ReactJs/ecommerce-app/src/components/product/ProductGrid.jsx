import React from "react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../api/hooks";
import "./ProductGrid.css";

const ProductsEmptyState = () => <h1>No product to display</h1>;

export const ProductGrid = () => {
  const { products } = useProducts();//hook er maddhome products antesi
  const renderProducts = () => {
    if (!products.length) {
      return <ProductsEmptyState />;
    }
    return products.map((product) => (
      <ProductCard
        key={product.id}
        product = {product}
      />
    ));
  };
  return <div className="grid grid-cols-2 gap-2">{renderProducts()}</div>;
};
