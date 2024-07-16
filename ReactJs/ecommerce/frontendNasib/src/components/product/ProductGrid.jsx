import axios from 'axios';
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../api/hooks";
import "./ProductGrid.css";

const ProductsEmptyState = () => <h1>No product to display</h1>;

export const ProductGrid = () => {
  //const { products } = useProducts();//hook er maddhome products antesi
  // const fetchProducts = async () => {
  //   const res = await axios.get('http://localhost:5000/api/products');
  //   return res.data;
  // };
  //fetch kortesi ekta state e rakha lagbe
  const[{products,setProducts}] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    }).catch(err => console.error(err));
    //fetchProducts();
  },[]);
  //hook eta. jar first parameter function ar second parameter dependency list
  //render hobar pore useEffect call hobe.empty list na dile prottek rerender e eta fire hobe.ar list dile ekbari hobe .আর লিস্ট এর ভিতর এক বা একাধিক state দিয়ে দেই, তাহলে state পরিবর্তন হলে component রিরেন্ডার হয়।তাই useEffect গুলার callback functions execute হবে।কারন তাদের dependencylist এ ওই state ta দেয়া আছে।
  const renderProducts = () => {
    console.log("Rendering");
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
  return <div className="grid grid-cols-3 gap-2">{renderProducts()}</div>;
};
